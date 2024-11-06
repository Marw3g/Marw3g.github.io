function animateRocket() {
    const button = document.querySelector('.firework-button');
    button.classList.add('animate');

    setTimeout(() => {
        button.classList.remove('animate');
    }, 2000); 
}
