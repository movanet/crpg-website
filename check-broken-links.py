#!/usr/bin/env python3
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time

def check_link(url):
    """Check if a link is accessible"""
    try:
        response = requests.head(url, allow_redirects=True, timeout=10)
        if response.status_code >= 400:
            return False, response.status_code
        return True, response.status_code
    except requests.RequestException as e:
        # Try GET if HEAD fails
        try:
            response = requests.get(url, allow_redirects=True, timeout=10)
            if response.status_code >= 400:
                return False, response.status_code
            return True, response.status_code
        except:
            return False, f"Error: {str(e)}"

def find_links_on_page(url):
    """Find all links on a page"""
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')
        links = []
        
        # Find all links
        for tag in soup.find_all(['a', 'link', 'img', 'script']):
            if tag.name == 'a':
                href = tag.get('href')
                if href:
                    links.append(('link', href, tag.text.strip() if tag.text else 'No text'))
            elif tag.name == 'link':
                href = tag.get('href')
                if href:
                    links.append(('link', href, f"Link rel={tag.get('rel', '')}"))
            elif tag.name == 'img':
                src = tag.get('src')
                if src:
                    links.append(('image', src, f"Image alt={tag.get('alt', '')}"))
            elif tag.name == 'script':
                src = tag.get('src')
                if src:
                    links.append(('script', src, 'Script'))
                    
        return links
    except Exception as e:
        print(f"Error fetching page {url}: {e}")
        return []

def main():
    base_url = "https://movanet.github.io/crpg-website/"
    profile_url = urljoin(base_url, "profile/")
    
    print(f"Checking links on: {profile_url}")
    links = find_links_on_page(profile_url)
    
    broken_links = []
    checked_urls = set()
    
    for link_type, link_url, description in links:
        # Skip anchors, javascript, and mailto
        if link_url.startswith('#') or link_url.startswith('javascript:') or link_url.startswith('mailto:'):
            continue
            
        # Make absolute URL
        absolute_url = urljoin(profile_url, link_url)
        
        # Skip if already checked
        if absolute_url in checked_urls:
            continue
        checked_urls.add(absolute_url)
        
        # Check the link
        is_working, status = check_link(absolute_url)
        
        if not is_working:
            broken_links.append({
                'type': link_type,
                'url': link_url,
                'absolute_url': absolute_url,
                'status': status,
                'description': description
            })
            print(f"❌ BROKEN: {link_type} - {link_url} ({status})")
        else:
            print(f"✅ OK: {link_type} - {link_url}")
            
        # Be nice to servers
        time.sleep(0.5)
    
    # Summary
    print("\n" + "="*50)
    print(f"Total unique links checked: {len(checked_urls)}")
    print(f"Broken links found: {len(broken_links)}")
    
    if broken_links:
        print("\nBroken links details:")
        for link in broken_links:
            print(f"\n- Type: {link['type']}")
            print(f"  URL: {link['url']}")
            print(f"  Status: {link['status']}")
            print(f"  Description: {link['description']}")

if __name__ == "__main__":
    main()