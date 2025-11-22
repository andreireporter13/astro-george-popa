
export function initScrollHandler(callback, threshold = 50) {
  const handleScroll = () => {
    if (window.scrollY > threshold) {
      callback(true);
    } else {
      callback(false);
    }
  };

  // Add event listener
  window.addEventListener('scroll', handleScroll);

  // Initial check
  handleScroll();

  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}

export function initScrollClass(element, className = 'scrolled', threshold = 50) {
  const handleScroll = () => {
    if (window.scrollY > threshold) {
      element?.classList.add(className);
    } else {
      element?.classList.remove(className);
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  return () => window.removeEventListener('scroll', handleScroll);
}