'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function GamePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const gameWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // 页面加载完成后自动进入全屏
      if (gameWrapperRef.current?.requestFullscreen) {
        gameWrapperRef.current.requestFullscreen()
          .then(() => setIsFullscreen(true))
          .catch(err => console.log(err));
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await gameWrapperRef.current?.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    const handleEscKey = async (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreen) {
        try {
          await document.exitFullscreen();
          setIsFullscreen(false);
        } catch (err) {
          console.log(err);
        }
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isFullscreen]);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={styles.gameSection}>
          {isLoading ? (
            <div className={styles.loadingWrapper}>
              <div className={styles.loadingSpinner}></div>
              <p>Loading game...</p>
            </div>
          ) : (
            <div className={styles.gameContainer}>
              <div ref={gameWrapperRef} className={styles.gameWrapper}>
                <iframe 
                  src="https://scratch.mit.edu/projects/1090434936/embed"
                  className={styles.gameFrame}
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                  title="Sprunki Retake Game"
                ></iframe>
              </div>
              <button onClick={toggleFullscreen} className={styles.fullscreenButton}>
                {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
} 