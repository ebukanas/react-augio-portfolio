import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (observe, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!observe) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      options
    );
    observer.observe(observe);
    observerRef.current = observer;
    return () => {
      observerRef.current.disconnect();
    };
  }, [observe, options]);

  return [isIntersecting];
};

export default useIntersectionObserver;
