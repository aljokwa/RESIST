document.addEventListener('DOMContentLoaded', () => {
    const resistButton = document.getElementById('resistButton');
    
    // Underground Resistance related URLs
    const urLinks = [
        'https://www.youtube.com/watch?v=qiCEGXGm-r0', // UR - Transition
        'https://www.youtube.com/watch?v=s5MogMGLWAA', // UR - The Final Frontier
        'https://www.youtube.com/watch?v=EDrRrVUZCQE', // Galaxy 2 Galaxy - Hi-Tech Jazz
        'https://www.youtube.com/watch?v=W3sGJRUJLJc', // Underground Resistance - Inspiration
        'https://www.youtube.com/watch?v=eFNBnVmHRio'  // The Punisher - Covert Action
    ];
    
    resistButton.addEventListener('click', () => {
        // Choose a random UR track from the array
        const randomLink = urLinks[Math.floor(Math.random() * urLinks.length)];
        
        // Add visual feedback on click
        resistButton.classList.add('clicked');
        
        // Redirect to the random Underground Resistance track
        setTimeout(() => {
            window.location.href = randomLink;
        }, 300);
    });
}); 