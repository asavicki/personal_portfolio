const bubbles = [
      document.getElementById('bubble1'),
      document.getElementById('bubble2')
    ];

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Animate bubble movement continuously and randomly
    function animateBubble(bubble) {
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;

      function move() {
        // Calculate random target position within viewport (with some margin)
        const x = random(0, containerWidth - bubble.offsetWidth);
        const y = random(0, containerHeight - bubble.offsetHeight);
        const duration = random(8, 15); // seconds

        // Apply smooth transition
        bubble.style.transition = `transform ${duration}s ease-in-out`;
        bubble.style.transform = `translate(${x}px, ${y}px)`;

        // After the transition ends, move again
        setTimeout(move, duration * 1000);
      }

      move();
    }

    bubbles.forEach(animateBubble);

    // Optional: reposition bubbles if window resizes
    window.addEventListener('resize', () => {
      bubbles.forEach(bubble => {
        // Instantly move bubble to new random spot to avoid glitches on resize
        const x = random(0, window.innerWidth - bubble.offsetWidth);
        const y = random(0, window.innerHeight - bubble.offsetHeight);
        bubble.style.transition = 'none';
        bubble.style.transform = `translate(${x}px, ${y}px)`;
      });
    });