import React, { useEffect } from "react";
import Header from './components/Header';
import ContactInfo from './components/ContactInfo';
import AboutMe from './components/AboutMe';
import ToolsTechnologies from './components/ToolsTechnologies';
import Certifications from './components/Certifications';
import CTFAchievements from './components/CTFAchievements';
import Projects from './components/Projects';
import Blog from './components/Blog';
import SkillsChart from './components/SkillsChart';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import SocialProof from './components/SocialProof';
import ContactForm from './components/ContactForm';
import './components/darkmode.css';
import './components/Projects.css';
import './components/CTFAchievements.css';
import './components/Blog.css';
import './components/SkillsChart.css';

function App() {
  useEffect(() => {
    // Network chain animation background
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = window.innerWidth, h = window.innerHeight;
    canvas.width = w; canvas.height = h;

    // Create nodes
    const NODE_COUNT = 22;
    let nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      dx: (Math.random() - 0.5) * 0.7,
      dy: (Math.random() - 0.5) * 0.7,
      r: Math.random() * 8 + 6,
      color: Math.random() > 0.5 ? "#00eaff" : "#39ff14"
    }));

    function drawNetwork() {
      ctx.clearRect(0, 0, w, h);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 180) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = a.color;
            ctx.globalAlpha = 0.06 + (180 - dist) / 1200; // Lower opacity
            ctx.lineWidth = 1.2;
            ctx.shadowColor = a.color;
            ctx.shadowBlur = 4;
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Draw nodes
      nodes.forEach(n => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 0.7, 0, 2 * Math.PI); // Slightly smaller
        ctx.fillStyle = n.color;
        ctx.globalAlpha = 0.13; // Lower opacity
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

      // Move nodes
      nodes.forEach(n => {
        n.x += n.dx;
        n.y += n.dy;
        if (n.x < 0 || n.x > w) n.dx *= -1;
        if (n.y < 0 || n.y > h) n.dy *= -1;
      });

      requestAnimationFrame(drawNetwork);
    }
    drawNetwork();

    const handleResize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w; canvas.height = h;
      nodes.forEach(n => {
        n.x = Math.random() * w;
        n.y = Math.random() * h;
      });
    };
    window.addEventListener('resize', handleResize);

    // Animate skill bars
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
      setTimeout(() => {
        bar.style.width = bar.getAttribute('data-value') + '%';
      }, 600);
    });

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="portfolio-poster">
      <canvas id="matrix-canvas" style={{
        position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
        zIndex: 0, pointerEvents: "none"
      }}></canvas>
      <div className="neon-accent neon-blue"></div>
      <div className="neon-accent neon-green"></div>
      <Header />
      <AboutMe />
      <SkillsChart />
      <Certifications />
      <CTFAchievements />
      <Projects />
      <Blog />
      <Testimonials />
      <SocialProof />
      <ContactInfo /> 
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;