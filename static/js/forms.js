// Form Handler
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    // Handle all forms with data-netlify attribute
    const forms = document.querySelectorAll('form[data-netlify]');
    
    forms.forEach(form => {
      form.addEventListener('submit', handleFormSubmit);
    });
    
    // Newsletter form handler
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
  });
  
  function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Disable submit button
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // For GitHub Pages demo, simulate success
    setTimeout(() => {
      showFormMessage(form, 'success', 'Thank you for your message! We will get back to you soon.');
      form.reset();
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }, 1500);
    
    // In production with Netlify:
    // fetch('/', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   body: new URLSearchParams(formData).toString()
    // })
    // .then(() => {
    //   showFormMessage(form, 'success', 'Thank you! We\'ll get back to you soon.');
    //   form.reset();
    // })
    // .catch(() => {
    //   showFormMessage(form, 'error', 'Oops! There was an error. Please try again.');
    // })
    // .finally(() => {
    //   submitButton.disabled = false;
    //   submitButton.textContent = originalText;
    // });
  }
  
  function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Disable submit button
    submitButton.disabled = true;
    submitButton.textContent = 'Subscribing...';
    
    // For demo, simulate success
    setTimeout(() => {
      showFormMessage(form, 'success', 'Successfully subscribed to our newsletter!');
      form.reset();
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }, 1000);
  }
  
  function showFormMessage(form, type, message) {
    // Remove existing messages
    const existingMessage = form.parentElement.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-${type}`;
    messageDiv.textContent = message;
    
    // Insert after form
    form.insertAdjacentElement('afterend', messageDiv);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      messageDiv.style.opacity = '0';
      setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
  }
  
  // Email validation
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  // Phone validation
  function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
  }
})();