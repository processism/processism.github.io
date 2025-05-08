// Streamlined navigation for Processism website
document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  const body = document.body;
  
  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', () => {
      siteNav.classList.toggle('active');
      body.classList.toggle('mobile-nav-open');
    });
  }
  
  // Section toggling
  const initSections = () => {
    const sectionTitles = document.querySelectorAll('.nav-section-title');
    const currentPath = window.location.pathname;
    
    sectionTitles.forEach(title => {
      const subsection = title.nextElementSibling;
      if (!subsection) return;
      
      // Check if this section contains the current page
      const hasActivePage = subsection.querySelector(`a[href="${currentPath}"], a[href*="${currentPath}#"]`);
      
      // Check if any child sections have active pages
      const childSubsections = subsection.querySelectorAll('.nav-subsection');
      const hasActiveChild = Array.from(childSubsections).some(
        childSection => childSection.querySelector(`a[href="${currentPath}"], a[href*="${currentPath}#"]`)
      );
      
      // Set initial state (collapsed unless active)
      if (!hasActivePage && !hasActiveChild) {
        subsection.style.display = 'none';
        title.classList.add('collapsed');
      }
      
      // Add click handler
      title.addEventListener('click', () => {
        if (subsection.style.display === 'none') {
          subsection.style.display = 'block';
          title.classList.remove('collapsed');
        } else {
          subsection.style.display = 'none';
          title.classList.add('collapsed');
        }
      });
    });
  };
  
  // Make tables responsive
  const makeTablesResponsive = () => {
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
      // Only wrap tables that aren't already wrapped
      if (!table.parentElement.classList.contains('table-container')) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('table-container');
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    });
  };
  
  // Initialize
  initSections();
  makeTablesResponsive();
});