// Search Functionality
(function() {
  let searchIndex = null;
  let searchModal = null;
  let searchInput = null;
  let searchResults = null;
  let searchStatus = null;
  
  // Initialize search
  document.addEventListener('DOMContentLoaded', function() {
    const searchToggle = document.querySelector('.search-toggle');
    searchModal = document.querySelector('.search-modal');
    const searchClose = document.querySelector('.search-close');
    searchInput = document.querySelector('.search-input');
    searchResults = document.querySelector('.search-results-list');
    searchStatus = document.querySelector('.search-status');
    
    if (!searchToggle || !searchModal) return;
    
    // Load search index
    loadSearchIndex();
    
    // Event listeners
    searchToggle.addEventListener('click', openSearch);
    searchClose.addEventListener('click', closeSearch);
    searchModal.addEventListener('click', function(e) {
      if (e.target === searchModal) closeSearch();
    });
    
    // Search input
    let searchTimeout;
    searchInput.addEventListener('input', function(e) {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => performSearch(e.target.value), 300);
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
      if (e.key === '/' && !isInputFocused()) {
        e.preventDefault();
        openSearch();
      }
      if (e.key === 'Escape' && searchModal.classList.contains('active')) {
        closeSearch();
      }
    });
  });
  
  // Load search index
  function loadSearchIndex() {
    fetch('/index.json')
      .then(response => response.json())
      .then(data => {
        searchIndex = data;
      })
      .catch(error => {
        console.error('Error loading search index:', error);
      });
  }
  
  // Open search
  function openSearch() {
    searchModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    searchInput.focus();
    searchStatus.textContent = 'Start typing to search...';
  }
  
  // Close search
  function closeSearch() {
    searchModal.classList.remove('active');
    document.body.style.overflow = '';
    searchInput.value = '';
    searchResults.innerHTML = '';
    searchStatus.textContent = '';
  }
  
  // Perform search
  function performSearch(query) {
    if (!query || query.length < 2) {
      searchStatus.textContent = 'Start typing to search...';
      searchResults.innerHTML = '';
      return;
    }
    
    if (!searchIndex) {
      searchStatus.textContent = 'Search index is loading...';
      return;
    }
    
    const results = searchInIndex(query);
    displayResults(results, query);
  }
  
  // Search in index
  function searchInIndex(query) {
    const lowerQuery = query.toLowerCase();
    const words = lowerQuery.split(/\s+/);
    const results = [];
    
    searchIndex.forEach(item => {
      let score = 0;
      const titleLower = item.title.toLowerCase();
      const contentLower = item.content.toLowerCase();
      
      // Title matches score higher
      words.forEach(word => {
        if (titleLower.includes(word)) score += 10;
        if (contentLower.includes(word)) score += 1;
      });
      
      // Exact phrase match scores highest
      if (titleLower.includes(lowerQuery)) score += 20;
      if (contentLower.includes(lowerQuery)) score += 5;
      
      if (score > 0) {
        results.push({ ...item, score });
      }
    });
    
    // Sort by score
    return results.sort((a, b) => b.score - a.score).slice(0, 10);
  }
  
  // Display results
  function displayResults(results, query) {
    if (results.length === 0) {
      searchStatus.textContent = 'No results found';
      searchResults.innerHTML = '';
      return;
    }
    
    searchStatus.textContent = `Found ${results.length} result${results.length > 1 ? 's' : ''}`;
    
    searchResults.innerHTML = results.map(result => {
      const excerpt = getExcerpt(result.content, query);
      const highlightedTitle = highlightText(result.title, query);
      const highlightedExcerpt = highlightText(excerpt, query);
      
      return `
        <li class="search-result-item">
          <h3 class="search-result-title">
            <a href="${result.permalink}">${highlightedTitle}</a>
          </h3>
          <p class="search-result-excerpt">${highlightedExcerpt}</p>
          <p class="search-result-meta">${result.section || 'Page'}</p>
        </li>
      `;
    }).join('');
  }
  
  // Get excerpt around search term
  function getExcerpt(content, query) {
    const cleanContent = content.replace(/\s+/g, ' ').trim();
    const lowerContent = cleanContent.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const index = lowerContent.indexOf(lowerQuery);
    
    if (index === -1) {
      return cleanContent.substring(0, 150) + '...';
    }
    
    const start = Math.max(0, index - 50);
    const end = Math.min(cleanContent.length, index + query.length + 100);
    let excerpt = cleanContent.substring(start, end);
    
    if (start > 0) excerpt = '...' + excerpt;
    if (end < cleanContent.length) excerpt += '...';
    
    return excerpt;
  }
  
  // Highlight search terms
  function highlightText(text, query) {
    const words = query.split(/\s+/).filter(w => w.length > 0);
    let highlighted = text;
    
    words.forEach(word => {
      const regex = new RegExp(`(${escapeRegex(word)})`, 'gi');
      highlighted = highlighted.replace(regex, '<span class="search-highlight">$1</span>');
    });
    
    return highlighted;
  }
  
  // Escape regex special characters
  function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  // Check if input is focused
  function isInputFocused() {
    const activeElement = document.activeElement;
    return activeElement && (
      activeElement.tagName === 'INPUT' ||
      activeElement.tagName === 'TEXTAREA' ||
      activeElement.contentEditable === 'true'
    );
  }
})();