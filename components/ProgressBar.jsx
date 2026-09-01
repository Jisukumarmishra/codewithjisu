'use client';

import { useEffect } from 'react';

export default function ProgressBar() {
  useEffect(() => {
    const bar = document.getElementById('progressBar');
    if (!bar) return;

    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${progress}%`;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="progress-bar-wrap">
      <div className="progress-bar" id="progressBar" />
    </div>
  );
}
