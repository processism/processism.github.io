// Processism website navigation enhancement
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const siteNav = document.querySelector('.site-nav');
    const body = document.querySelector('body');
    
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            siteNav.classList.toggle('active');
            body.classList.toggle('mobile-nav-open');
        });
    }
    
    // Toggle navigation subsections
    const sectionTitles = document.querySelectorAll('.nav-section-title');
    
    if (sectionTitles.length > 0) {
        // Initialize subsections
        sectionTitles.forEach(title => {
            const subsection = title.nextElementSibling;
            
            // Only hide the subsection if it's not the active one
            let shouldCollapse = true;
            
            // Check if the subsection contains the active page
            if (subsection) {
                const links = subsection.querySelectorAll('a');
                links.forEach(link => {
                    if (link.classList.contains('active')) {
                        shouldCollapse = false;
                    }
                });
            }
            
            // Collapse if needed and add appropriate class
            if (shouldCollapse) {
                if (subsection) {
                    subsection.style.display = 'none';
                }
                title.classList.add('collapsed');
            }
            
            // Add click event
            title.addEventListener('click', function() {
                const subsection = this.nextElementSibling;
                if (subsection) {
                    if (subsection.style.display === 'none') {
                        subsection.style.display = 'block';
                        this.classList.remove('collapsed');
                    } else {
                        subsection.style.display = 'none';
                        this.classList.add('collapsed');
                    }
                }
            });
        });
    }
    
    // Auto-expand current section based on URL
    const currentPath = window.location.pathname;
    
    if (currentPath) {
        // Find all nav links
        const navLinks = document.querySelectorAll('.nav-list a');
        
        navLinks.forEach(link => {
            // Check if this link matches the current path
            if (link.getAttribute('href') === currentPath || 
                (currentPath.includes(link.getAttribute('href')) && link.getAttribute('href') !== '/')) {
                
                // Add active class if not already added by Jekyll
                link.classList.add('active');
                
                // Find parent subsection if it exists
                const parentSubsection = link.closest('.nav-subsection');
                if (parentSubsection) {
                    parentSubsection.style.display = 'block';
                    
                    // Find and update the section title
                    const sectionTitle = parentSubsection.previousElementSibling;
                    if (sectionTitle && sectionTitle.classList.contains('nav-section-title')) {
                        sectionTitle.classList.remove('collapsed');
                    }
                }
            }
        });
    }
    
    // Handle table responsiveness
    try {
        const tables = document.querySelectorAll('table');
        if (tables.length > 0) {
            tables.forEach(table => {
                // Only wrap tables that aren't already wrapped
                if (table.parentElement && !table.parentElement.classList.contains('table-container')) {
                    const wrapper = document.createElement('div');
                    wrapper.classList.add('table-container');
                    table.parentNode.insertBefore(wrapper, table);
                    wrapper.appendChild(table);
                }
            });
        }
    } catch (e) {
        console.error('Error handling table responsiveness:', e);
    }
});
