import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';

export const ChromaGrid = ({
  items = [],
  className = '',
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out'
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);

    if (fadeRef.current) {
      gsap.set(fadeRef.current, { opacity: 0 });
    }
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = e => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
  };

  const handleLeave = () => { };

  const handleCardClick = url => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCardMove = e => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{
        '--r': `${radius}px`,
        '--cols': columns
      }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {items.map((c, i) => {
        const name = c.title?.toLowerCase();
        const needsFix =
          name === "ayush jain" || name === "divyansh rungta";

        return (
          <article
            key={i}
            className={`chroma-card ${c.type === 'header' ? 'chroma-header' : ''}`}
            onMouseMove={c.type === 'header' ? undefined : handleCardMove}
            onClick={c.type === 'header' ? undefined : () => handleCardClick(c.url)}
            style={{
              '--card-border': c.borderColor || 'transparent',
              '--card-gradient': c.gradient,
              gridColumn: c.type === 'header' ? `1 / span ${columns}` : 'auto',
              cursor: c.url ? 'pointer' : 'default',
              background: c.type === 'header' ? 'transparent' : undefined,
              border: c.type === 'header' ? 'none' : undefined,
            }}
          >
            <div className="chroma-img-wrapper">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                style={
                  c.imgStyle || (needsFix
                    ? {
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      transform: "none",      // ✅ FULL BLEED
                      display: "block"
                    }
                    : undefined)
                }
              />
            </div>

            <footer className="chroma-info">
              <h3 className="name">{c.title}</h3>
              {c.handle && <span className="handle">{c.handle}</span>}
              <p className="role">{c.subtitle}</p>
              {c.location && <span className="location">{c.location}</span>}

              {/* Contact Row */}
              <div className="chroma-contact">
                {/* Phone pill */}
                {c.phone && (
                  <a
                    href={`tel:${c.phone}`}
                    className="chroma-phone"
                    onClick={e => e.stopPropagation()}
                    title={`Call ${c.title}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>{c.phone}</span>
                  </a>
                )}

                {/* Email icon button */}
                {c.email && (
                  <a
                    href={`mailto:${c.email}`}
                    className="chroma-icon-btn"
                    onClick={e => e.stopPropagation()}
                    title={`Email ${c.title}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </a>
                )}

              </div>
            </footer>
          </article>
        );
      })}

      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;
