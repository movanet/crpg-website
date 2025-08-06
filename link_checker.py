#!/usr/bin/env python3
"""
Comprehensive Link Checker for CRPG Website
Crawls all pages and checks every link for 404 errors and other HTTP status issues
"""

import requests
import time
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
import sys
from collections import defaultdict
import json

class LinkChecker:
    def __init__(self, base_url):
        self.base_url = base_url.rstrip('/')
        self.domain = urlparse(base_url).netloc
        self.visited_pages = set()
        self.all_links = {}  # url -> {status, found_on, link_text, type}
        self.dead_links = []
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
    
    def is_internal_link(self, url):
        """Check if URL is internal to the website"""
        parsed = urlparse(url)
        return parsed.netloc == self.domain or parsed.netloc == ''
    
    def normalize_url(self, url, base_url):
        """Normalize and resolve relative URLs"""
        if url.startswith('#'):
            return None  # Skip anchor-only links
        return urljoin(base_url, url)
    
    def extract_links_from_page(self, url, html_content):
        """Extract all types of links from HTML content"""
        soup = BeautifulSoup(html_content, 'html.parser')
        links_found = []
        
        # Regular href links
        for tag in soup.find_all(['a', 'link']):
            href = tag.get('href')
            if href:
                normalized = self.normalize_url(href, url)
                if normalized:
                    links_found.append({
                        'url': normalized,
                        'text': tag.get_text(strip=True) or tag.get('title', ''),
                        'type': 'href',
                        'tag': tag.name
                    })
        
        # Image sources
        for img in soup.find_all('img'):
            src = img.get('src')
            if src:
                normalized = self.normalize_url(src, url)
                if normalized:
                    links_found.append({
                        'url': normalized,
                        'text': img.get('alt', '') or img.get('title', ''),
                        'type': 'image',
                        'tag': 'img'
                    })
        
        # Script sources
        for script in soup.find_all('script'):
            src = script.get('src')
            if src:
                normalized = self.normalize_url(src, url)
                if normalized:
                    links_found.append({
                        'url': normalized,
                        'text': 'JavaScript file',
                        'type': 'script',
                        'tag': 'script'
                    })
        
        # CSS files
        for link in soup.find_all('link', rel='stylesheet'):
            href = link.get('href')
            if href:
                normalized = self.normalize_url(href, url)
                if normalized:
                    links_found.append({
                        'url': normalized,
                        'text': 'CSS file',
                        'type': 'stylesheet',
                        'tag': 'link'
                    })
        
        return links_found
    
    def check_url_status(self, url):
        """Check HTTP status of a URL"""
        try:
            response = self.session.head(url, timeout=10, allow_redirects=True)
            if response.status_code == 405:  # Method Not Allowed for HEAD
                response = self.session.get(url, timeout=10, allow_redirects=True)
            return response.status_code, None
        except requests.RequestException as e:
            return None, str(e)
    
    def crawl_page(self, url):
        """Crawl a single page and extract links"""
        if url in self.visited_pages:
            return
        
        print(f"Crawling: {url}")
        self.visited_pages.add(url)
        
        try:
            response = self.session.get(url, timeout=15)
            if response.status_code != 200:
                print(f"Warning: {url} returned status {response.status_code}")
                return
            
            # Extract all links from this page
            links = self.extract_links_from_page(url, response.text)
            
            for link_info in links:
                link_url = link_info['url']
                
                # Add to our comprehensive list
                if link_url not in self.all_links:
                    self.all_links[link_url] = {
                        'found_on': [url],
                        'link_text': link_info['text'],
                        'type': link_info['type'],
                        'tag': link_info['tag'],
                        'status': None,
                        'error': None
                    }
                else:
                    self.all_links[link_url]['found_on'].append(url)
                
                # If it's an internal page link, add to crawl queue
                if (self.is_internal_link(link_url) and 
                    link_info['type'] == 'href' and 
                    link_url not in self.visited_pages and
                    not link_url.endswith(('.pdf', '.jpg', '.png', '.gif', '.svg', '.css', '.js'))):
                    self.crawl_page(link_url)
            
            time.sleep(0.5)  # Be polite
            
        except Exception as e:
            print(f"Error crawling {url}: {e}")
    
    def check_all_links(self):
        """Check status of all discovered links"""
        print(f"\nChecking status of {len(self.all_links)} unique links...")
        
        for i, (url, info) in enumerate(self.all_links.items(), 1):
            print(f"Checking {i}/{len(self.all_links)}: {url[:80]}...")
            
            status_code, error = self.check_url_status(url)
            info['status'] = status_code
            info['error'] = error
            
            # Consider as dead link if error status
            if status_code is None or status_code >= 400:
                self.dead_links.append((url, info))
            
            time.sleep(0.2)  # Be polite to external servers
    
    def generate_report(self):
        """Generate comprehensive report"""
        print("\n" + "="*80)
        print("COMPREHENSIVE LINK CHECK REPORT")
        print("="*80)
        print(f"Base URL: {self.base_url}")
        print(f"Pages crawled: {len(self.visited_pages)}")
        print(f"Total unique links found: {len(self.all_links)}")
        print(f"Dead/problematic links found: {len(self.dead_links)}")
        
        if self.dead_links:
            print("\n" + "-"*60)
            print("DEAD/PROBLEMATIC LINKS:")
            print("-"*60)
            
            for url, info in self.dead_links:
                print(f"\n🔴 BROKEN LINK:")
                print(f"   URL: {url}")
                print(f"   Status: {info['status'] or 'ERROR'}")
                if info['error']:
                    print(f"   Error: {info['error']}")
                print(f"   Type: {info['type']} ({info['tag']} tag)")
                print(f"   Link text: '{info['link_text']}'")
                print(f"   Found on pages:")
                for page in info['found_on']:
                    print(f"     - {page}")
        else:
            print("\n✅ No dead links found!")
        
        # Summary by link type
        print(f"\n" + "-"*60)
        print("SUMMARY BY LINK TYPE:")
        print("-"*60)
        type_counts = defaultdict(int)
        dead_type_counts = defaultdict(int)
        
        for url, info in self.all_links.items():
            type_counts[info['type']] += 1
            if info['status'] is None or info['status'] >= 400:
                dead_type_counts[info['type']] += 1
        
        for link_type in sorted(type_counts.keys()):
            dead = dead_type_counts[link_type]
            total = type_counts[link_type]
            status = f"❌ {dead} dead" if dead > 0 else "✅ All OK"
            print(f"   {link_type}: {total} total ({status})")
        
        # Pages visited
        print(f"\n" + "-"*60)
        print("PAGES CRAWLED:")
        print("-"*60)
        for page in sorted(self.visited_pages):
            print(f"   ✓ {page}")

def main():
    base_url = "https://movanet.github.io/crpg-website/"
    
    checker = LinkChecker(base_url)
    
    print("Starting comprehensive link check...")
    print(f"Base URL: {base_url}")
    
    # Start crawling from homepage
    checker.crawl_page(base_url)
    
    # Check all discovered links
    checker.check_all_links()
    
    # Generate report
    checker.generate_report()
    
    # Save detailed results
    results = {
        'base_url': base_url,
        'pages_crawled': list(checker.visited_pages),
        'total_links': len(checker.all_links),
        'dead_links_count': len(checker.dead_links),
        'dead_links': [(url, info) for url, info in checker.dead_links],
        'all_links': dict(checker.all_links)
    }
    
    with open('/home/movanet/crpgweb/link_check_results.json', 'w') as f:
        json.dump(results, f, indent=2, default=str)
    
    print(f"\nDetailed results saved to: /home/movanet/crpgweb/link_check_results.json")

if __name__ == "__main__":
    main()