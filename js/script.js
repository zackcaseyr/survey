document.addEventListener('DOMContentLoaded', function() {
    // Navigation between sections
    const navLinks = document.querySelectorAll('.nav-link[data-page]');
    const contentSections = document.querySelectorAll('.content-section');
    
    // Function to show a specific content section
    function showContentSection(pageId) {
        // Hide all content sections
        contentSections.forEach(section => {
            section.classList.add('d-none');
        });
        
        // Show the selected content section
        const selectedSection = document.getElementById(`${pageId}-content`);
        if (selectedSection) {
            selectedSection.classList.remove('d-none');
        }
        
        // Update active state in navigation
        navLinks.forEach(link => {
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const pageId = this.getAttribute('data-page');
            showContentSection(pageId);
        });
    });
    
    // Form validation
    const form = document.getElementById('politicalSurveyForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Basic validation could be added here
            alert('Thank you for completing the survey!');
            // In a real application, you would submit the form data to a server here
            
            // Redirect to the survey list page after submission
            showContentSection('survey-list');
        });
    }
    
    // Handle conditional fields - Economic Activity
    const otherActivity = document.getElementById('otherActivity');
    const otherActivityDiv = document.getElementById('otherActivityDiv');
    
    if (otherActivity && otherActivityDiv) {
        otherActivity.addEventListener('change', function() {
            otherActivityDiv.classList.toggle('d-none', !this.checked);
        });
    }
    
    // Handle conditional fields - Vote Next
    const voteNextNo = document.getElementById('voteNextNo');
    const voteNextNoReasonDiv = document.getElementById('voteNextNoReasonDiv');
    
    if (voteNextNo && voteNextNoReasonDiv) {
        voteNextNo.addEventListener('change', function() {
            voteNextNoReasonDiv.classList.toggle('d-none', !this.checked);
        });
    }
    
    // Handle conditional fields - Party Member
    const partyMemberYes = document.getElementById('partyMemberYes');
    const partyMemberYesDiv = document.getElementById('partyMemberYesDiv');
    
    if (partyMemberYes && partyMemberYesDiv) {
        partyMemberYes.addEventListener('change', function() {
            partyMemberYesDiv.classList.toggle('d-none', !this.checked);
        });
    }
    
    // Handle conditional fields - Party Support
    const otherParty = document.getElementById('otherParty');
    const otherPartyDiv = document.getElementById('otherPartyDiv');
    
    if (otherParty && otherPartyDiv) {
        otherParty.addEventListener('change', function() {
            otherPartyDiv.classList.toggle('d-none', !this.checked);
        });
    }
    
    // Handle conditional fields - Vote For
    const otherCandidate = document.getElementById('otherCandidate');
    const otherCandidateDiv = document.getElementById('otherCandidateDiv');
    
    if (otherCandidate && otherCandidateDiv) {
        otherCandidate.addEventListener('change', function() {
            otherCandidateDiv.classList.toggle('d-none', !this.checked);
        });
    }
    
    // Handle conditional fields - Political Issues
    const otherIssue = document.getElementById('otherIssue');
    const otherIssueDiv = document.getElementById('otherIssueDiv');
    
    if (otherIssue && otherIssueDiv) {
        otherIssue.addEventListener('change', function() {
            otherIssueDiv.classList.toggle('d-none', !this.checked);
        });
    }
    
    // Handle conditional fields - News Source
    const otherSource = document.getElementById('otherSource');
    const otherSourceDiv = document.getElementById('otherSourceDiv');
    
    if (otherSource && otherSourceDiv) {
        otherSource.addEventListener('change', function() {
            otherSourceDiv.classList.toggle('d-none', !this.checked);
        });
    }
    
    // Add event listeners to all radio buttons
    document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
        radio.addEventListener('change', function() {
            // If this radio button is checked, uncheck all other radio buttons with the same name
            if (this.checked) {
                const name = this.getAttribute('name');
                document.querySelectorAll(`input[type="radio"][name="${name}"]`).forEach(function(otherRadio) {
                    if (otherRadio !== radio) {
                        // If the other radio has a related div, hide it
                        const id = otherRadio.getAttribute('id');
                        const relatedDiv = document.getElementById(`${id}Div`);
                        if (relatedDiv) {
                            relatedDiv.classList.add('d-none');
                        }
                    }
                });
            }
        });
    });
    
    // Mobile sidebar toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            const sidebar = document.querySelector('.sidebar');
            if (sidebar && window.innerWidth < 768) {
                sidebar.classList.toggle('d-none');
            }
        });
    }
    
    // Handle window resize for responsive behavior
    window.addEventListener('resize', function() {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            if (window.innerWidth >= 768) {
                sidebar.classList.remove('d-none');
            }
        }
    });
    
    // Initialize the dashboard view as default
    showContentSection('dashboard');
});
