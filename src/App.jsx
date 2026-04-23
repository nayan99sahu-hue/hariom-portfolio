import { useState, useEffect, useRef } from "react";

/* ── LOCAL ASSETS ── */
const LOCAL_VIDEOS = [
  "C3pdCC9toqy", "DAIrnhCtJPd", "DAQaGDJN9nx", "DIi9TV3NrmM",
  "DQeG5Igj8IS", "DRmPikcAkbs", "DVOCGZkgnIq", "DOqVpxbj4I9",
  "DWGs0MYj4dK", "DWoBhATE2bj", "DT7imY4DdIE", "DObCjgBAh3z",
  "DPoBtKiAhJT", "C7lx5QGPdMf", "C0OgyLTpGj7", "DOtFMlKDziB",
  "DO0vfz3j-hV", "DWYnEHEjwX2", "DOtFMIKDziB", "DK121mNPV4ZJ",
  "DNSzQQkPV1w", "DNsQf7J3kay", "DWoBhATE2bj", "DobCjgBAh3z",
].map(code => ({
  src: `/assets/Video by tractorgyan [${code}].mp4`,
  code,
}));

/* ─────────────────────────────────────────
   GLOBAL NAV — Custom, no Apple branding
───────────────────────────────────────── */
function GlobalNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Home", id: "hero" },
    { label: "My Work", id: "my-work" },
    { label: "YouTube", id: "youtube-section" },
    { label: "Brand Videos", id: "brand-video" },
    { label: "AI Videos", id: "ai-video" },
    { label: "Instagram Reels", id: "instagram-trend" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      background: scrolled ? "rgba(10,10,10,0.98)" : "rgba(10,10,10,0.85)",
      backdropFilter: "blur(24px)",
      position: "sticky", top: 0, zIndex: 9999,
      borderBottom: "1px solid rgba(255,255,255,0.07)",
      transition: "background 0.3s",
      width: "100%",
      boxSizing: "border-box",
    }}>
      <div style={{
        width: "100%", padding: "0 40px", height: 58,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        boxSizing: "border-box",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 38, height: 38, borderRadius: "50%",
            background: "linear-gradient(135deg,#f7c948,#e6a800)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "#000", fontWeight: 900, fontSize: 17, fontFamily: "Georgia,serif" }}>H</span>
          </div>
          <span style={{
            color: "white", fontWeight: 700, fontSize: 17,
            fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif",
            letterSpacing: "-0.02em",
          }}>
            Hariom <span style={{ color: "#f7c948" }}>Patidar</span>
          </span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
          {links.map(l => (
            <button key={l.label} onClick={() => scrollTo(l.id)}
              style={{
                color: "rgba(255,255,255,0.62)", fontSize: 13,
                background: "none", border: "none", cursor: "pointer",
                whiteSpace: "nowrap", letterSpacing: "-0.01em",
                fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif",
                transition: "color 0.2s", padding: 0,
              }}
              onMouseEnter={e => e.target.style.color = "white"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.62)"}
            >{l.label}</button>
          ))}
          <a href="mailto:hpatidar0099@gmail.com"
            style={{
              background: "#f7c948", color: "#000", fontSize: 13,
              padding: "8px 22px", borderRadius: 22, textDecoration: "none",
              fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif",
              fontWeight: 600, letterSpacing: "-0.01em",
              transition: "opacity 0.2s", whiteSpace: "nowrap",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.82"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >Contact Us</a>
        </div>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────
   CHAPTER NAV
───────────────────────────────────────── */
function ChapterNav() {
  const [active, setActive] = useState("services");
  const items = [
    { id: "services", label: "Services" },
    { id: "my-work", label: "My Work" },
    { id: "youtube-section", label: "YouTube" },
    { id: "brand-video", label: "Brand Videos" },
    { id: "end-to-end", label: "End-to-End" },
    { id: "ai-video", label: "AI Videos" },
    { id: "instagram-trend", label: "Instagram Reels" },
  ];
  const handleClick = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div style={{
      background: "#1d1d1f",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      position: "sticky", top: 58, zIndex: 998,
      width: "100%", boxSizing: "border-box",
    }}>
      <div style={{ width: "100%", padding: "0 22px", overflowX: "auto", scrollbarWidth: "none", boxSizing: "border-box" }}>
        <div style={{ display: "flex" }}>
          {items.map(item => (
            <button key={item.id} onClick={() => handleClick(item.id)}
              style={{
                padding: "13px 22px", fontSize: 12, background: "transparent",
                border: "none", cursor: "pointer", whiteSpace: "nowrap",
                color: active === item.id ? "white" : "rgba(255,255,255,0.55)",
                borderBottom: active === item.id ? "2px solid #f7c948" : "2px solid transparent",
                fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif",
                letterSpacing: "-0.01em", transition: "color 0.2s",
              }}
            >{item.label}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   YT VIDEO ONLY BANNER — no text, no buttons
───────────────────────────────────────── */
function YTVideoBanner({ videoId, title }) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1`;
  return (
    <section style={{ position: "relative", background: "#000", overflow: "hidden", height: 520, width: "100%" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <iframe
          src={embedUrl}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%", height: "100%",
            minWidth: "177.78vh",
            minHeight: "56.25vw",
            pointerEvents: "none",
          }}
          title={title}
        />
      </div>
      {/* subtle vignette only */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.35) 100%)",
        pointerEvents: "none",
      }} />
    </section>
  );
}

/* ─────────────────────────────────────────
   LOCAL VIDEO SHORT CARD
───────────────────────────────────────── */
function LocalVideoShort({ src }) {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.3 }
    );
    if (videoRef.current) observer.observe(videoRef.current.parentElement);
    return () => observer.disconnect();
  }, []);

  if (error) return null;

  return (
    <div
      style={{ flexShrink: 0, width: 160, cursor: "pointer", position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        width: 160, height: 284, borderRadius: 16, overflow: "hidden",
        position: "relative", background: "#111",
        boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.6)" : "0 2px 12px rgba(0,0,0,0.4)",
        transition: "box-shadow 0.3s, transform 0.3s",
        transform: hovered ? "scale(1.04)" : "scale(1)",
      }}>
        <video
          ref={videoRef}
          src={src}
          muted loop playsInline autoPlay
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          onError={() => setError(true)}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div style={{
          position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
          opacity: hovered ? 1 : 0, transition: "opacity 0.25s",
        }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.92)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="black" style={{ marginLeft: 2 }}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "8px 10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#28cd41", boxShadow: "0 0 6px #28cd41" }} />
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 10, fontFamily: "-apple-system,sans-serif" }}>LIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   LOCAL SHORTS CAROUSEL STRIP
───────────────────────────────────────── */
function LocalShortsStrip({ title, badge, badgeBg, videos }) {
  const stripRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir) => {
    if (stripRef.current) stripRef.current.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  const checkScroll = () => {
    const el = stripRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  return (
    <div style={{ background: "#000", padding: "32px 0 24px", position: "relative", width: "100%" }}>
      <div style={{ padding: "0 40px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ background: badgeBg || "#333", color: "white", fontSize: 11, padding: "3px 12px", borderRadius: 4, fontWeight: 700, fontFamily: "-apple-system,sans-serif" }}>{badge}</span>
          <h3 style={{ color: "white", fontSize: 20, fontWeight: 600, margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif", letterSpacing: "-0.018em" }}>{title}</h3>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {[{ dir: -1, icon: "‹" }, { dir: 1, icon: "›" }].map(({ dir, icon }) => (
            <button key={dir} onClick={() => scroll(dir)}
              style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white", fontSize: 18, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "sans-serif", transition: "background 0.2s",
                opacity: (dir === -1 ? canScrollLeft : canScrollRight) ? 1 : 0.3,
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            >{icon}</button>
          ))}
        </div>
      </div>
      <div
        ref={stripRef}
        onScroll={checkScroll}
        style={{ display: "flex", gap: 12, overflowX: "auto", padding: "4px 40px 8px", scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
      >
        {videos.map((v, i) => (
          <div key={i} style={{ scrollSnapAlign: "start" }}>
            <LocalVideoShort src={v.src} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   AUTO SLIDER
───────────────────────────────────────── */
function AutoSlider({ items, cardWidth = 200, gap = 14, darkBg = "#0a0a0a" }) {
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);
  const speed = 0.55;

  useEffect(() => {
    let raf;
    const totalWidth = items.length * (cardWidth + gap);
    const step = () => {
      if (!paused) setOffset(prev => { const next = prev + speed; return next >= totalWidth ? 0 : next; });
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [paused, items.length, cardWidth, gap]);

  const doubled = [...items, ...items];
  return (
    <div style={{ background: darkBg, padding: "20px 0", overflow: "hidden", width: "100%" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div style={{ display: "flex", gap, transform: `translateX(-${offset}px)`, willChange: "transform" }}>
        {doubled.map((item, i) => (
          <a key={i} href={item.url || "#"} target="_blank" rel="noopener noreferrer"
            style={{ flexShrink: 0, width: cardWidth, textDecoration: "none", display: "block" }}>
            <div style={{ width: cardWidth, height: item.wide ? Math.round(cardWidth * 0.56) : cardWidth, borderRadius: 12, background: item.bg || "#1a1a1a", overflow: "hidden", position: "relative", marginBottom: 8 }}>
              {item.thumb ? (
                <img src={item.thumb} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} onError={e => { e.target.style.display = "none"; }} />
              ) : (
                <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: item.bg || "#222" }}>
                  {item.emoji && <span style={{ fontSize: 34 }}>{item.emoji}</span>}
                  {item.text && <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, fontWeight: 700, textAlign: "center", padding: "0 10px", lineHeight: 1.3 }}>{item.text}</span>}
                </div>
              )}
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(0,0,0,0.35)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0)"}
              />
            </div>
            <p style={{ color: "white", fontSize: 11, margin: "0 0 2px", fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.title}</p>
            {item.sub && <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 10, margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif" }}>{item.sub}</p>}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function HeroSection() {
  return (
    <section id="hero" style={{
      background: "linear-gradient(180deg,#050505 0%,#0a0a0a 100%)",
      textAlign: "center", padding: "88px 24px 72px",
      position: "relative", overflow: "hidden", width: "100%", boxSizing: "border-box",
    }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 300, background: "radial-gradient(ellipse, rgba(247,201,72,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
      <h1 style={{
        color: "white", fontSize: "clamp(40px,6vw,68px)", fontWeight: 700,
        letterSpacing: "-0.03em", lineHeight: 1.04, margin: "0 0 22px",
        fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif", position: "relative",
      }}>
        Video Content Creator<br />&amp; Editor
      </h1>
      <p style={{
        color: "rgba(255,255,255,0.68)", fontSize: 18, lineHeight: 1.65,
        maxWidth: 660, margin: "0 auto 32px",
        fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif", position: "relative",
      }}>
        Award‑winning brand videos. Viral Instagram reels. YouTube growth strategy. AI‑generated content. End-to-end production from concept to delivery.
      </p>
      <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
        <a href="mailto:hpatidar0099@gmail.com" style={{ background: "#f7c948", color: "#000", fontSize: 15, padding: "12px 30px", borderRadius: 24, textDecoration: "none", fontFamily: "-apple-system,sans-serif", fontWeight: 600 }}>Get in Touch</a>
        <button onClick={() => document.getElementById("my-work")?.scrollIntoView({ behavior: "smooth" })}
          style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "white", fontSize: 15, padding: "12px 30px", borderRadius: 24, cursor: "pointer", fontFamily: "-apple-system,sans-serif" }}>
          View My Work
        </button>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   MY WORK SECTION
───────────────────────────────────────── */
function MyWorkSection() {
  const allVideos = LOCAL_VIDEOS.slice(0, 24);
  const brandVideos = allVideos.slice(0, 10);
  const endToEnd = allVideos.slice(10, 14);
  const aiVideos = allVideos.slice(14, 18);
  const trendVideos = allVideos.slice(18, 24);

  const ytVideos = [
    { ytId: "xm9_4OHl2XQ", title: "Top 10 Tractors 2023" },
    { ytId: "DqMDi4A7Ve8", title: "2026 में आएंगे ये ट्रैक्टर" },
    { ytId: "8QkWeInuFPo", title: "5 ट्रैक्टर कभी ना खरीदें" },
    { ytId: "PGjTr-XLTm0", title: "Mahindra 575 DI YUVO 4WD" },
    { ytId: "_4OYQjTEfcc", title: "New Holland 3600 TX Super" },
    { ytId: "KeKppOWl5tI", title: "YouTube Video 5" },
  ];

  const categories = [
    {
      id: "brand-video",
      badge: "Brand Video",
      badgeBg: "linear-gradient(90deg,#1c1c3a,#2c2c5a)",
      title: "Brand‑Focused Video",
      desc: "Complete production pipeline: concept development, storytelling, direction, and editing.",
      gradient: "linear-gradient(160deg,#0d0d1a 0%,#1a1a3a 45%,#0a0a12 100%)",
      videos: brandVideos,
      tags: ["10 projects", "Instagram Reels"],
    },
    {
      id: "end-to-end",
      badge: "End-to-End",
      badgeBg: "linear-gradient(90deg,#3a1500,#5a2000)",
      title: "End-to-End Production",
      desc: "Scripting, direction, anchoring, editing, and thumbnail design.",
      gradient: "linear-gradient(160deg,#1a0800 0%,#3d1500 45%,#0d0500 100%)",
      videos: endToEnd,
      tags: ["4 projects", "Full Pipeline"],
    },
    {
      id: "ai-video",
      badge: "AI Video",
      badgeBg: "linear-gradient(90deg,#0a1a3a,#1a0a3a)",
      title: "AI‑Generated Video",
      desc: "Creative direction meets emerging AI technology for visually unique results.",
      gradient: "linear-gradient(160deg,#050d1a 0%,#0f1a3a 45%,#080510 100%)",
      videos: aiVideos,
      tags: ["4 projects", "AI Tools"],
    },
    {
      id: "instagram-trend",
      badge: "Instagram Trends",
      badgeBg: "linear-gradient(90deg,#833ab4,#fd1d1d,#fcb045)",
      title: "Instagram Trend Videos",
      desc: "Viral concepts with original storytelling — scripting, direction, editing end-to-end.",
      gradient: "linear-gradient(160deg,#1a0a2a 0%,#2d0a1a 45%,#0d0510 100%)",
      videos: trendVideos,
      tags: ["6 projects", "Reels"],
    },
  ];

  return (
    <section id="my-work" style={{ background: "#000", width: "100%" }}>

      {/* ── My Work Hero — CENTERED ── */}
      <div style={{
        background: "linear-gradient(160deg,#0a0a0a 0%,#141414 100%)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "80px 40px 60px",
        textAlign: "center",
        width: "100%", boxSizing: "border-box",
      }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 20, padding: "6px 16px" }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#28cd41", boxShadow: "0 0 8px #28cd41" }} />
          <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, fontFamily: "-apple-system,sans-serif", letterSpacing: "0.06em", textTransform: "uppercase" }}>Portfolio</span>
        </div>
        <h2 style={{
          color: "white", fontSize: "clamp(36px,5vw,64px)", fontWeight: 700,
          margin: "0 0 20px", letterSpacing: "-0.03em",
          fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif", lineHeight: 1.04,
        }}>My Work</h2>
        <p style={{
          color: "rgba(255,255,255,0.52)", fontSize: 18, lineHeight: 1.65,
          margin: "0 auto", fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif",
          maxWidth: 600,
        }}>
          A curated collection of video production spanning brand storytelling, YouTube content strategy, AI-generated video, and viral Instagram reels.
        </p>
      </div>

      {/* ── YouTube Section — CENTERED ── */}
      <div id="youtube-section" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", width: "100%" }}>
        <div style={{
          padding: "56px 40px 28px",
          background: "linear-gradient(160deg,#1a0000 0%,#3d0000 45%,#0d0000 100%)",
          textAlign: "center",
          width: "100%", boxSizing: "border-box",
        }}>
          <span style={{ background: "#ff0000", color: "white", fontSize: 11, padding: "3px 12px", borderRadius: 4, fontWeight: 700, fontFamily: "-apple-system,sans-serif" }}>YouTube Growth</span>
          <h3 style={{
            color: "white", fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 600,
            margin: "14px 0 10px", letterSpacing: "-0.02em",
            fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif", lineHeight: 1.08,
          }}>YouTube Content</h3>
          <p style={{ color: "rgba(255,255,255,0.68)", fontSize: 16, margin: "0 auto 24px", fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif", maxWidth: 500 }}>
            Audience engagement, retention, and platform growth.
          </p>
        </div>

        {/* YouTube thumbnail grid */}
        <div style={{ background: "#0a0000", padding: "20px 40px 32px", overflowX: "auto", scrollbarWidth: "none", width: "100%", boxSizing: "border-box" }}>
          <div style={{ display: "flex", gap: 14, minWidth: "max-content" }}>
            {ytVideos.map((v, i) => (
              <a key={i} href={`https://youtu.be/${v.ytId}`} target="_blank" rel="noopener noreferrer"
                style={{ flexShrink: 0, width: 220, textDecoration: "none" }}>
                <div style={{ position: "relative", width: 220, height: 124, borderRadius: 12, overflow: "hidden", background: "#1a0000", marginBottom: 8 }}>
                  <img src={`https://img.youtube.com/vi/${v.ytId}/hqdefault.jpg`} alt={v.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", transition: "background 0.2s", display: "flex", alignItems: "center", justifyContent: "center" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,0,0,0.4)"; e.currentTarget.querySelector(".yt-play").style.opacity = "1"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,0,0,0)"; e.currentTarget.querySelector(".yt-play").style.opacity = "0"; }}
                  >
                    <div className="yt-play" style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.2s" }}>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="white" style={{ marginLeft: 2 }}><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                  <div style={{ position: "absolute", top: 6, right: 6, background: "#ff0000", borderRadius: 4, padding: "2px 6px", fontSize: 9, fontWeight: 700, color: "white" }}>YT</div>
                </div>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, margin: 0, fontFamily: "-apple-system,sans-serif", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.title}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Category Sections ── */}
      {categories.map(cat => (
        <div key={cat.id} id={cat.id} style={{ borderTop: "1px solid rgba(255,255,255,0.07)", width: "100%" }}>

          {/* Category Banner — CENTERED */}
          <div style={{
            position: "relative",
            background: cat.gradient,
            padding: "56px 40px 44px",
            textAlign: "center",
            width: "100%", boxSizing: "border-box",
          }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <span style={{
                background: cat.badgeBg, color: "white", fontSize: 11,
                padding: "3px 14px", borderRadius: 4, fontWeight: 700,
                fontFamily: "-apple-system,sans-serif", display: "inline-block", marginBottom: 16,
              }}>{cat.badge}</span>
              <h3 style={{
                color: "white", fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 700,
                margin: "0 0 14px", letterSpacing: "-0.025em",
                fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif", lineHeight: 1.08,
              }}>{cat.title}</h3>
              <p style={{
                color: "rgba(255,255,255,0.72)", fontSize: 17, lineHeight: 1.6,
                margin: "0 auto 26px",
                fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif",
                maxWidth: 520,
              }}>{cat.desc}</p>
              <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                {cat.tags.map(tag => (
                  <span key={tag} style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "rgba(255,255,255,0.75)", fontSize: 13,
                    padding: "6px 18px", borderRadius: 20,
                    fontFamily: "-apple-system,sans-serif",
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Video shorts strip */}
          {cat.videos.length > 0 && (
            <LocalShortsStrip
              title={cat.title}
              badge={cat.badge}
              badgeBg={cat.badgeBg}
              videos={cat.videos}
            />
          )}
        </div>
      ))}
    </section>
  );
}

/* ─────────────────────────────────────────
   ROOT
───────────────────────────────────────── */
export default function App() {
  const tvYTId = "xm9_4OHl2XQ";
  const musicYTId = "DqMDi4A7Ve8";
  const arcadeYTId = "8QkWeInuFPo";
  const fitnessYTId = "PGjTr-XLTm0";

  const tvItems = [
    { url: "#", title: "The Studio", sub: "Comedy", bg: "linear-gradient(135deg,#1a1a2e,#2d2d5e)", text: "The Studio", wide: true },
    { url: "#", title: "Severance", sub: "Drama", bg: "linear-gradient(135deg,#0a1628,#1a3a5c)", text: "Severance", wide: true },
    { url: "#", title: "Silo", sub: "Sci-Fi", bg: "linear-gradient(135deg,#1a0a0a,#3a1010)", text: "Silo", wide: true },
    { url: "#", title: "Foundation", sub: "Sci-Fi", bg: "linear-gradient(135deg,#0a0a1a,#1a1a3a)", text: "Foundation", wide: true },
    { url: "#", title: "The Gorge", sub: "Thriller", bg: "linear-gradient(135deg,#0a1a0a,#1a3a1a)", text: "The Gorge", wide: true },
    { url: "#", title: "Shrinking", sub: "Comedy", bg: "linear-gradient(135deg,#1a0a18,#3a1a35)", text: "Shrinking", wide: true },
    { url: "#", title: "Slow Horses", sub: "Spy", bg: "linear-gradient(135deg,#111,#333)", text: "Slow Horses", wide: true },
  ];
  const musicItems = [
    { url: "#", title: "Daily Mix", sub: "Curated", bg: "hsl(0,65%,25%)" },
    { url: "#", title: "Today's Hits", sub: "Charts", bg: "hsl(210,60%,22%)" },
    { url: "#", title: "Big Lit", sub: "Playlist", bg: "hsl(280,55%,22%)" },
    { url: "#", title: "Zule Pool", sub: "Playlist", bg: "hsl(120,50%,18%)" },
    { url: "#", title: "Today's Country", sub: "Country", bg: "hsl(35,60%,22%)" },
    { url: "#", title: "Top 100: Global", sub: "Charts", bg: "hsl(200,60%,20%)" },
  ];
  const arcadeItems = [
    { url: "#", title: "Yoku's Island", sub: "Adventure", bg: "linear-gradient(135deg,#1a3a1a,#2a5a2a)", emoji: "🌴", wide: true },
    { url: "#", title: "Pinball Mayhem", sub: "Arcade", bg: "linear-gradient(135deg,#2a1a3a,#4a2a5a)", emoji: "🎮", wide: true },
    { url: "#", title: "Fantasian Neo", sub: "RPG", bg: "linear-gradient(135deg,#1a2a3a,#2a3a5a)", emoji: "⚔️", wide: true },
    { url: "#", title: "Alto's Odyssey", sub: "Runner", bg: "linear-gradient(135deg,#1a1a3a,#2a2a5a)", emoji: "🏂", wide: true },
    { url: "#", title: "Tangle Tower", sub: "Mystery", bg: "linear-gradient(135deg,#2a2a1a,#4a4a2a)", emoji: "🔍", wide: true },
  ];
  const fitnessItems = [
    { url: "#", title: "Meditation with Jacob", sub: "10 min", bg: "hsl(200,40%,20%)", emoji: "🧘", wide: true },
    { url: "#", title: "Core with Jim", sub: "20 min", bg: "hsl(15,50%,20%)", emoji: "💪", wide: true },
    { url: "#", title: "HIIT with Drew", sub: "30 min", bg: "hsl(140,40%,18%)", emoji: "🏃", wide: true },
    { url: "#", title: "Yoga with Johanna", sub: "25 min", bg: "hsl(270,40%,20%)", emoji: "🤸", wide: true },
    { url: "#", title: "Cycling with Shane", sub: "45 min", bg: "hsl(40,50%,18%)", emoji: "🚴", wide: true },
  ];

  return (
    <div style={{
      fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display','Helvetica Neue',sans-serif",
      minHeight: "100vh", background: "#000",
      width: "100%", overflowX: "hidden",
    }}>
      <GlobalNav />
      <ChapterNav />
      <HeroSection />

      {/* ── Services section label ── */}
      <div id="services" style={{ width: "100%" }}>

        {/* TV+ — video only, no text */}
        <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <YTVideoBanner videoId={tvYTId} title="Video Reel 1" />
          <AutoSlider items={tvItems} cardWidth={220} gap={14} darkBg="#070b0f" />
        </section>

        {/* Music — video only, no text */}
        <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <YTVideoBanner videoId={musicYTId} title="Video Reel 2" />
          <AutoSlider items={musicItems} cardWidth={160} gap={14} darkBg="#080000" />
        </section>

        {/* Arcade — video only, no text */}
        <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <YTVideoBanner videoId={arcadeYTId} title="Video Reel 3" />
          <AutoSlider items={arcadeItems} cardWidth={220} gap={14} darkBg="#050510" />
        </section>

        {/* Fitness — video only, no text */}
        <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <YTVideoBanner videoId={fitnessYTId} title="Video Reel 4" />
          <AutoSlider items={fitnessItems} cardWidth={220} gap={14} darkBg="#080400" />
        </section>
      </div>

      {/* ── My Work ── */}
      <MyWorkSection />
    </div>
  );
}