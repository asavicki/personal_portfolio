 const bubbles = [
      document.getElementById('bubble1'),
      document.getElementById('bubble2')
    ];

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    function animateBubble(bubble) {
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;

      // 1. Place bubble in random initial spot
      const startX = random(0, containerWidth - bubble.offsetWidth);
      const startY = random(0, containerHeight - bubble.offsetHeight);
      bubble.style.transform = `translate(${startX}px, ${startY}px)`;
      bubble.style.transition = 'none';

      // 2. Animate it starting on next frame
      requestAnimationFrame(() => {
        move(); // Start movement loop
      });

      function move() {
        const x = random(0, containerWidth - bubble.offsetWidth);
        const y = random(0, containerHeight - bubble.offsetHeight);
        const duration = random(8, 14);

        bubble.style.transition = `transform ${duration}s ease-in-out`;
        bubble.style.transform = `translate(${x}px, ${y}px)`;

        setTimeout(move, duration * 1000);
      }
    }

    bubbles.forEach(animateBubble);