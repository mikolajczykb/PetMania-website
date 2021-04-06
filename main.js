const count = document.querySelector("#animated_count");

const animateCountUp = (el, duration, finalValue) => {
    // How long you want the animation to take (in ms)
    const animationDuration = duration;
    // How long you want each frame to take
    const frameDuration = 1000 / 60;
    // How many frames you need
    const frames = Math.round(animationDuration / frameDuration);

    const easeOutQuad = t => t * (2 - t);

    let frame = 0;
    const countTo = finalValue;
    const counter = setInterval( () => {
        frame++;

        const progress = easeOutQuad(frame / frames);

        const currentCount = Math.round(countTo * progress);

        if (parseInt(el.innerHTML, 10) !== currentCount) {
            el.innerHTML = currentCount;
        }

        if (frame == frames) {
            clearInterval(counter);
        }
    }, frameDuration);
    
}

animateCountUp(count, 2000, 537);