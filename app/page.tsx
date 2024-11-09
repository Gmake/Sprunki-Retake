'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null; // 或者返回一个加载占位符
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Welcome to Sprunke Retake </h1>
          <p className={styles.description}>
              Online experience of a horror-themed music creation adventure playground
          </p>
        </section>

        <section className={styles.gameSection}>
          {isLoading ? (
            <div className={styles.loadingWrapper}>
              <div className={styles.loadingSpinner}></div>
              <p>Loading game...</p>
            </div>
          ) : (
            <div 
              ref={wrapperRef} 
              className={styles.gameWrapper}
              onClick={(e) => {
                if (iframeRef.current) {
                  iframeRef.current.focus();
                }
              }}
            >
              <iframe 
                ref={iframeRef}
                src="https://playminigames.net/embed/sprunki-retake"
                className={styles.gameFrame}
                frameBorder="0"
                scrolling="no"
                allowFullScreen
                allow="autoplay"
                title="Sprunki Retake"
              ></iframe>
            </div>
          )}
        </section>
        
        <section className={styles.gameInfo}>
          <div className={styles.infoCard}>
            <h2>What is SprunkiRetake?</h2>
            <p>
              SprunkiRetake is an innovative horror-themed music creation adventure playground 
              that combines the thrill of horror elements with creative music making. Players 
              explore a mysterious world while creating unique musical compositions through 
              various interactive elements and challenges.
            </p>
            <ul>
              <li>Immersive horror atmosphere</li>
              <li>Creative music composition</li>
              <li>Interactive gameplay elements</li>
              <li>Unique sound design</li>
            </ul>
          </div>
        </section>

        <section className={styles.howToPlaySection}>
          <div className={styles.infoCard}>
            <h2>How to Play Sprunki Retake</h2>
            <div className={styles.howToPlay}>
              <div className={styles.step}>
                <h3>1. Explore</h3>
                <p>Navigate through the eerie environment using WASD or arrow keys</p>
              </div>
              <div className={styles.step}>
                <h3>2. Create Music</h3>
                <p>Interact with objects using your mouse to create musical elements</p>
              </div>
              <div className={styles.step}>
                <h3>3. Solve Puzzles</h3>
                <p>Combine music and horror elements to progress through challenges</p>
              </div>
              <div className={styles.step}>
                <h3>4. Share</h3>
                <p>Record and share your unique musical creations with other players</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.featureCard}>
            <h2>Play Now</h2>
            <p>Jump into the action instantly</p>
          </div>
          <div className={styles.featureCard}>
            <h2>Leaderboard</h2>
            <p>Compete with players worldwide</p>
          </div>
          <div className={styles.featureCard}>
            <h2>Updates</h2>
            <p>Latest game features and news</p>
          </div>
        </section>
      </div>
    </main>
  );
} 