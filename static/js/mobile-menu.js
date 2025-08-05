// Mobile Menu Functionality
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const menuOverlay = document.querySelector('.mobile-menu-overlay');
    const menuPanel = document.querySelector('.mobile-menu-panel');
    const menuLinks = document.querySelectorAll('.mobile-menu-nav a');
    
    if (!menuToggle || !menuOverlay || !menuPanel) return;
    
    // Toggle menu function
    function toggleMenu() {
      const isActive = menuToggle.classList.contains('active');
      
      if (isActive) {
        closeMenu();
      } else {
        openMenu();
      }
    }
    
    // Open menu
    function openMenu() {
      menuToggle.classList.add('active');
      menuOverlay.classList.add('active');
      menuPanel.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Set focus to first menu item for accessibility
      setTimeout(() => {
        const firstLink = menuPanel.querySelector('a');
        if (firstLink) firstLink.focus();
      }, 300);
    }
    
    // Close menu
    function closeMenu() {
      menuToggle.classList.remove('active');
      menuOverlay.classList.remove('active');
      menuPanel.classList.remove('active');
      document.body.style.overflow = '';
      
      // Return focus to toggle button
      menuToggle.focus();
    }
    
    // Event listeners
    menuToggle.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', closeMenu);
    
    // Close menu when clicking on links
    menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && menuPanel.classList.contains('active')) {
        closeMenu();
      }
    });
    
    // Trap focus within menu when open
    menuPanel.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        const focusableElements = menuPanel.querySelectorAll('a, button');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });
  });
})();