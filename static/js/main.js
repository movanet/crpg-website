// Main JavaScript Bundle - CRPG Website

// Global error handler
window.addEventListener('error', function(e) {
  console.error('Global error:', e.error);
  // Could send to analytics service
});

// Promise rejection handler
window.addEventListener('unhandledrejection', function(e) {
  console.error('Unhandled promise rejection:', e.reason);
  e.preventDefault();
});

// Theme Toggle
(function() {
  const THEME_KEY = 'crpg-theme';
  const DARK = 'dark';
  const LIGHT = 'light';

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (systemPrefersDark ? DARK : LIGHT);
    
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeToggle(theme);
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === DARK ? LIGHT : DARK;
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    updateThemeToggle(newTheme);
  }

  function updateThemeToggle(theme) {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    const icon = theme === DARK ? 
      '<svg viewBox="0 0 24 24"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 11-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/></svg>' :
      '<svg viewBox="0 0 24 24"><path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"/></svg>';
    
    toggle.innerHTML = icon;
  }

  // Initialize on DOM load
  document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', toggleTheme);
    }
  });
})();

// Mobile Menu
(function() {
  let menuOpen = false;
  
  function toggleMenu() {
    const menu = document.querySelector('.mobile-menu-panel');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    menuOpen = !menuOpen;
    
    if (menuOpen) {
      menu.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      toggle.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
    } else {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      toggle.innerHTML = '<svg viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>';
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const overlay = document.querySelector('.mobile-menu-overlay');
    
    if (toggle) toggle.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', toggleMenu);
  });
})();

// Search
(function() {
  let searchIndex = null;
  
  document.addEventListener('DOMContentLoaded', function() {
    const searchToggle = document.querySelector('.search-toggle');
    const searchModal = document.querySelector('.search-modal');
    const searchClose = document.querySelector('.search-close');
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results-list');
    
    if (!searchToggle || !searchModal) return;
    
    // Load search index with error handling
    fetch('/index.json')
      .then(response => {
        if (!response.ok) throw new Error('Failed to load search index');
        return response.json();
      })
      .then(data => { 
        searchIndex = data;
        console.log('Search index loaded:', data.length, 'items');
      })
      .catch(err => {
        console.error('Search index error:', err);
        if (searchInput) searchInput.placeholder = 'Search unavailable';
      });
    
    // Event listeners
    searchToggle.addEventListener('click', () => {
      searchModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      searchInput.focus();
    });
    
    searchClose.addEventListener('click', () => {
      searchModal.classList.remove('active');
      document.body.style.overflow = '';
      searchInput.value = '';
      searchResults.innerHTML = '';
    });
    
    // Search on input
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => performSearch(e.target.value), 300);
    });
    
    function performSearch(query) {
      if (!query || query.length < 2 || !searchIndex) {
        searchResults.innerHTML = '';
        return;
      }
      
      const results = searchIndex.filter(item => {
        const q = query.toLowerCase();
        return item.title.toLowerCase().includes(q) || 
               item.content.toLowerCase().includes(q);
      }).slice(0, 10);
      
      searchResults.innerHTML = results.map(result => `
        <li class="search-result-item">
          <h3><a href="${result.permalink}">${result.title}</a></h3>
          <p>${result.summary}</p>
        </li>
      `).join('');
    }
  });
})();

// Forms
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form[data-netlify]');
    
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        // Simulate success for demo
        setTimeout(() => {
          showMessage(form, 'success', 'Thank you! We\'ll get back to you soon.');
          form.reset();
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }, 1500);
      });
    });
    
    function showMessage(form, type, text) {
      const msg = document.createElement('div');
      msg.className = `form-message form-${type}`;
      msg.textContent = text;
      form.insertAdjacentElement('afterend', msg);
      
      setTimeout(() => {
        msg.style.opacity = '0';
        setTimeout(() => msg.remove(), 300);
      }, 5000);
    }
  });
})();

// Smooth Scroll
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// Lazy Loading Enhancement with Error Handling
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.dataset.src;
        
        // Create new image to test loading
        const testImg = new Image();
        testImg.onload = () => {
          img.src = src;
          img.classList.add('loaded');
          observer.unobserve(img);
        };
        testImg.onerror = () => {
          img.src = '/images/placeholder.svg';
          img.alt = 'Image unavailable';
          img.classList.add('error');
          observer.unobserve(img);
        };
        testImg.src = src;
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  });
}

// Network status monitoring
let isOnline = navigator.onLine;

window.addEventListener('online', () => {
  isOnline = true;
  document.body.classList.remove('offline');
  showNotification('Connection restored', 'success');
});

window.addEventListener('offline', () => {
  isOnline = false;
  document.body.classList.add('offline');
  showNotification('No internet connection', 'error');
});

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    background: ${type === 'error' ? '#D32F2F' : type === 'success' ? '#388E3C' : '#1976D2'};
    color: white;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    z-index: 10000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
  .offline { filter: grayscale(0.5); }
  .offline::after {
    content: 'Offline Mode';
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #D32F2F;
    color: white;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    z-index: 10001;
  }
`;
document.head.appendChild(style);