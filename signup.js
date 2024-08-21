document.body.addEventListener('click', function(e) {
    const rippleContainer = document.querySelector('.ripple-container');
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    rippleContainer.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
        rippleContainer.removeChild(ripple);
    });
});
