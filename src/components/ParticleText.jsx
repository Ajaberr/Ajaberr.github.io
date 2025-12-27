import { useEffect, useRef, useState } from 'react';
import './ParticleText.css';

const ParticleText = ({ text, className = '' }) => {
  const canvasRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    class Particle {
      constructor(x, y, targetX, targetY) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.targetX = targetX;
        this.targetY = targetY;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = 0;
        this.speedY = 0;
        this.opacity = 0;
      }

      update() {
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Converge to target
        this.speedX = dx * 0.05;
        this.speedY = dy * 0.05;

        this.x += this.speedX;
        this.y += this.speedY;

        // Fade in when close to target
        if (distance < 50) {
          this.opacity = Math.min(1, this.opacity + 0.02);
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Get text pixels
    const getTextPixels = () => {
      // Clear and prepare
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw text
      const fontSize = Math.min(canvas.width / 8, 80);
      ctx.font = `900 ${fontSize}px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
      ctx.fillStyle = '#000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);

      // Get pixel data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = [];

      // Sample pixels (reduce density for performance)
      const gap = 4;
      for (let y = 0; y < canvas.height; y += gap) {
        for (let x = 0; x < canvas.width; x += gap) {
          const index = (y * canvas.width + x) * 4;
          const alpha = imageData.data[index + 3];

          if (alpha > 128) {
            pixels.push({ x, y });
          }
        }
      }

      return pixels;
    };

    // Initialize particles
    const textPixels = getTextPixels();
    particles = textPixels.map(pixel => new Particle(
      pixel.x,
      pixel.y,
      pixel.x,
      pixel.y
    ));

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setIsReady(true);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    setTimeout(() => animate(), 300);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [text]);

  return (
    <canvas
      ref={canvasRef}
      className={`particle-text ${className} ${isReady ? 'ready' : ''}`}
    />
  );
};

export default ParticleText;
