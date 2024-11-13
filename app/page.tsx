'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const gameWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (gameWrapperRef.current?.requestFullscreen) {
        gameWrapperRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
        if (document.exitFullscreen) {
          document.exitFullscreen();
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
        {/* Hero Section - 保持 H1 */}
        <section className={styles.hero}>
          <h1>Welcome to Sprunki Retake</h1>
          <p className={styles.subtitle}>
            Experience the Ultimate Horror-Themed Music Creation Adventure
          </p>
        </section>

        {/* Game Section */}
        <section id="game" className={styles.gameSection}>
          {isLoading ? (
            <div className={styles.loadingWrapper}>
              <div className={styles.loadingSpinner}></div>
              <p>Loading your musical adventure...</p>
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

        {/* Features Section - 改为 H2 和 H3 */}
        <section id="features" className={styles.features}>
          <h2>Sprunki Retake Key Features</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Music Creation</h3>
              <p>Create unique musical compositions through interactive gameplay</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Horror Theme</h3>
              <p>Experience chilling atmospheres with ghostly characters</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Adventure</h3>
              <p>Explore mysterious worlds while crafting your musical journey</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Community</h3>
              <p>Share your creations with the global Sprunki Retake community</p>
            </div>
          </div>
        </section>

        {/* About Section - 改为 H2 */}
        <section id="about" className={styles.about}>
          <h2>What is Sprunki Retake?</h2>
          <div className={styles.aboutContent}>
            <p>
              Sprunki Retake is a groundbreaking fan-made adaptation of the popular 
              music-mixing game Incredibox. This unique horror-themed music creation 
              adventure combines the thrill of horror elements with creative music making, 
              offering players an immersive experience in a haunting yet creative environment.
            </p>
            <div className={styles.aboutFeatures}>
              <ul>
                <li>Immersive horror atmosphere</li>
                <li>Creative music composition</li>
                <li>Interactive gameplay elements</li>
                <li>Unique sound design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Gameplay Section - 改为 H2 和 H3 */}
        <section id="gameplay" className={styles.gameplay}>
          <h2>How to Play Sprunki Retake</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <h3>1. Choose Characters</h3>
              <p>Select from various characters, each representing unique sounds and abilities</p>
            </div>
            <div className={styles.step}>
              <h3>2. Mix Sounds</h3>
              <p>Combine different character sounds to create layered musical compositions</p>
            </div>
            <div className={styles.step}>
              <h3>3. Explore</h3>
              <p>Navigate through levels, discover hidden paths, and face unique challenges</p>
            </div>
            <div className={styles.step}>
              <h3>4. Share</h3>
              <p>Save your creations and share them with the Sprunki Retake community</p>
            </div>
          </div>
        </section>

        {/* Phases Section - 改为 H2 和 H3 */}
        <section id="phases" className={styles.phases}>
          <h2>Sprunki Retake Game Phases</h2>
          <div className={styles.phaseGrid}>
            <div className={styles.phase}>
              <h3>Phase 3</h3>
              <p>Classic sound variations with unique Sprunki style</p>
            </div>
            <div className={styles.phase}>
              <h3>Phase 4</h3>
              <p>Thematic effects for complex compositions</p>
            </div>
            <div className={styles.phase}>
              <h3>Phase 5</h3>
              <p>Darker tones with infected Sprunki characters</p>
            </div>
            <div className={styles.phase}>
              <h3>Phase 6</h3>
              <p>Futuristic sound effects with upgraded features</p>
            </div>
          </div>
        </section>

        {/* Videos Section - 改为 H2 */}
        <section id="videos" className={styles.videos}>
          <h2>Sprunki Retake Videos</h2>
          <div className={styles.videoGrid}>
            {/* ... 视频内容保持不变 ... */}
          </div>
        </section>

        {/* Community Section - 改为 H2 */}
        <section id="community" className={styles.community}>
          <h2>Join the Community</h2>
          <div className={styles.communityContent}>
            <p>
              Connect with fellow creators, share your musical masterpieces, and discover 
              new techniques in the Sprunki Retake community. Your journey in musical 
              horror creation starts here.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
} 