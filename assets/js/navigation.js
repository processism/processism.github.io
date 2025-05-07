document.addEventListener('DOMContentLoaded', function() {
    // Toggle navigation subsections
    const sectionTitles = document.querySelectorAll('.nav-section-title');
    
    sectionTitles.forEach(title => {
        // Initialize subsections (collapsed by default)
        const subsection = title.nextElementSibling;
        subsection.style.display = 'none';
        
        // Add click event
        title.addEventListener('click', function() {
            const subsection = this.nextElementSibling;
            if (subsection.style.display === 'none') {
                subsection.style.display = 'block';
            } else {
                subsection.style.display = 'none';
            }
        });
    });
    
    // Expand current section based on URL
    const currentPath = window.location.pathname;
    if (currentPath) {
        sectionTitles.forEach(title => {
            const subsection = title.nextElementSibling;
            const links = subsection.querySelectorAll('a');
            
            links.forEach(link => {
                if (currentPath.includes(link.getAttribute('href'))) {
                    subsection.style.display = 'block';
                    link.classList.add('active');
                }
            });
        });
    }
    
    // Add active class to current page in navigation
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
