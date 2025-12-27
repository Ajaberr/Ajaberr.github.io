import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './ParallaxSection.css';

const ParallaxSection = ({ children, speed = 0.5, className = '' }) => {
  const ref = useRef(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const { scrollY } = useScroll();

  useEffect(() => {
    if (!ref.current) return;

    const onResize = () => {
      setElementTop(ref.current.offsetTop);
      setClientHeight(window.innerHeight);
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const initial = elementTop - clientHeight;
  const final = elementTop + ref.current?.offsetHeight || 0;

  const yRange = useTransform(scrollY, [initial, final], [0, (final - initial) * speed]);
  const y = useSpring(yRange, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y }} className={`parallax-section ${className}`}>
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
