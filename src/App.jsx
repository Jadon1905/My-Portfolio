import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Code, Database, Globe, Server, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = [
    { name: 'Web Development', icon: <Code size={24} />, desc: 'Building modern, responsive web applications with React.js, Next.js, and full-stack technologies.' },
    { name: 'Mobile Development', icon: <Code size={24} />, desc: 'Cross-platform mobile apps using React Native, Flutter, and native Android development.' },
    { name: 'Desktop Applications', icon: <Code size={24} />, desc: 'JAva & JavaFX desktop applications, Electron apps, and enterprise software solutions.' },
    { name: 'Network Design', icon: <Globe size={24} />, desc: 'Designing and implementing LAN/WAN networks, VLANs, and network topology.' },
    { name: 'Cisco Technologies', icon: <Server size={24} />, desc: 'Configuring routers, switches, and implementing Cisco networking solutions.' },
    { name: 'Network Security', icon: <Database size={24} />, desc: 'Implementing firewalls, VPNs, intrusion detection, and security protocols.' },
    { name: 'Backend Development', icon: <Server size={24} />, desc: 'Node.js, Java, PHP for scalable server-side applications and APIs.' },
    { name: 'Database Systems', icon: <Database size={24} />, desc: 'MySQL, PostgreSQL, Firebase, MongoDB, and Supabase for data management.' },
  ];

  const projects = [
    {
      title: 'Criminal Management System',
      description: 'Desktop application built with JavaFX to manage criminal data, fingerprint records, and generate comprehensive reports.',
      tech: ['JavaFX', 'MySQL', 'Java'],
      link: '#',
      category: 'Desktop'
    },
    {
      title: 'Mentora AI Learning Platform',
      description: 'AI-powered web platform for guided learning with personalized study paths and intelligent recommendations.',
      tech: ['React.js', 'Node.js', 'supabase'],
      link: '#',
      category: 'Web'
    },
    {
      title: 'Smart Review MANEB',
      description: 'Web application for students to access past papers and study materials with advanced search features.',
      tech: ['React.js', 'Supabase', 'Tailwind'],
      link: '#',
      category: 'Web'
    },
    {
      title: 'Mobile Learning App',
      description: 'Cross-platform mobile application for on-the-go learning with offline support and progress tracking.',
      tech: ['React Native', 'Firebase'],
      link: '#',
      category: 'Mobile'
    },
    {
      title: 'Enterprise Network Infrastructure',
      description: 'Designed and deployed a scalable network infrastructure for a corporate environment with VLANs, redundancy, and security protocols.',
      tech: ['Cisco', 'VLANs', 'Firewall', 'VPN'],
      link: '#',
      category: 'Network'
    },
    {
      title: 'Inventory Management Desktop App',
      description: 'JavaFX desktop application for tracking inventory, sales, and generating business analytics reports.',
      tech: ['JavaFX', 'MySQL', 'JasperReports'],
      link: '#',
      category: 'Desktop'
    },
    {
      title: 'E-Commerce Mobile App',
      description: 'Full-featured mobile shopping app with payment integration, order tracking, and push notifications.',
      tech: ['Flutter', 'Node.js', 'MongoDB'],
      link: '#',
      category: 'Mobile'
    },
    {
      title: 'Network Monitoring Dashboard',
      description: 'Real-time web dashboard to track bandwidth usage, device status, and network health metrics.',
      tech: ['React.js', 'Python', 'SNMP', 'MySQL'],
      link: '#',
      category: 'Web'
    },
  ];

  return (
    <div className="portfolio-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', 'Segoe UI', sans-serif;
          background: #F8F9FA;
          overflow-x: hidden;
        }

        .portfolio-container {
          min-height: 100vh;
          width: 100%;
        }

        .header {
          background: #FFFFFF;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-circle {
          width: 45px;
          height: 45px;
          min-width: 45px;
          border-radius: 50%;
          background: linear-gradient(135deg, #E6186D 0%, #FF6B9D 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFF;
          font-weight: 700;
          font-size: 16px;
        }

        .logo-text {
          fontSize: 18px;
          font-weight: 700;
          color: #1E293B;
        }

        .nav {
          display: flex;
          gap: 35px;
        }

        .nav-link {
          color: #64748B;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: color 0.3s;
          cursor: pointer;
        }

        .nav-link:hover {
          color: #E6186D;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .contact-btn {
          background: linear-gradient(135deg, #E6186D 0%, #FF6B9D 100%);
          color: #FFF;
          border: none;
          padding: 12px 30px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: transform 0.3s;
        }

        .contact-btn:hover {
          transform: translateY(-2px);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #64748B;
          cursor: pointer;
          padding: 5px;
        }

        .mobile-nav {
          display: none;
          flex-direction: column;
          padding: 20px 40px;
          background: #FFFFFF;
          border-top: 1px solid #E2E8F0;
        }

        .mobile-nav.open {
          display: flex;
        }

        .mobile-nav-link {
          color: #64748B;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          padding: 12px 0;
          border-bottom: 1px solid #F1F5F9;
        }

        .hero {
          padding: 80px 40px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .hero-content {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-left {
          max-width: 800px;
          text-align: left;
        }

        .welcome {
          color: #E6186D;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1.5px;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 48px;
          line-height: 1.2;
          color: #1E293B;
          margin-bottom: 24px;
          font-weight: 700;
        }

        .hero-name {
          color: #E6186D;
          font-weight: 700;
        }

        .hero-subtitle {
          color: #1E293B;
          font-weight: 400;
        }

        .hero-desc {
          font-size: 15px;
          line-height: 1.8;
          color: #64748B;
          margin-bottom: 40px;
        }

        .hero-bottom {
          display: flex;
          gap: 60px;
        }

        .label {
          font-size: 11px;
          color: #94A3B8;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }

        .social-icons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .social-icon {
          width: 50px;
          height: 50px;
          background: #FFFFFF;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748B;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          cursor: pointer;
          text-decoration: none;
        }

        .social-icon:hover {
          color: #E6186D;
          transform: translateY(-3px);
        }

        .skill-icon {
          width: 50px;
          height: 50px;
          background: #FFFFFF;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }

        .hero-right {
          display: flex;
          justify-content: center;
        }

        .image-container {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .profile-image {
          width: 100%;
          max-width: 400px;
          height: auto;
          aspect-ratio: 4/5;
          object-fit: cover;
          object-position: center 20%;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(230, 24, 109, 0.15);
          border: 8px solid #FFFFFF;
        }

        .section {
          padding: 80px 40px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-label {
          color: #E6186D;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          margin-bottom: 15px;
        }

        .section-title {
          font-size: 42px;
          color: #1E293B;
          font-weight: 700;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .skill-card {
          background: #FFFFFF;
          padding: 40px 30px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(230, 24, 109, 0.15);
        }

        .skill-name {
          font-size: 20px;
          color: #1E293B;
          margin-top: 20px;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .skill-desc {
          font-size: 14px;
          color: #64748B;
          line-height: 1.7;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .project-card {
          background: #FFFFFF;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(230, 24, 109, 0.15);
        }

        .project-content {
          padding: 25px;
        }

        .category-badge {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
        }

        .project-title {
          font-size: 20px;
          color: #1E293B;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .project-desc {
          font-size: 14px;
          color: #64748B;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }

        .tech-badge {
          background: #FEF2F7;
          color: #E6186D;
          padding: 5px 12px;
          border-radius: 5px;
          font-size: 12px;
          font-weight: 500;
        }

        .project-link {
          color: #E6186D;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .contact-card {
          background: #FFFFFF;
          padding: 35px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          text-align: center;
          transition: transform 0.3s;
        }

        .contact-card:hover {
          transform: translateY(-5px);
        }

        .contact-title {
          font-size: 18px;
          color: #1E293B;
          margin: 15px 0 10px;
          font-weight: 600;
        }

        .contact-text {
          font-size: 14px;
          color: #64748B;
        }

        .contact-link {
          color: #E6186D;
          text-decoration: none;
          transition: color 0.3s;
        }

        .contact-link:hover {
          color: #FF6B9D;
          text-decoration: underline;
        }

        .footer {
          background: #1E293B;
          color: #94A3B8;
          text-align: center;
          padding: 30px;
          font-size: 14px;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .hero-left {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .nav {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .contact-btn {
            display: none;
          }

          .header-content {
            padding: 15px 20px;
          }

          .hero {
            padding: 40px 20px;
          }

          .hero-title {
            font-size: 32px;
          }

          .hero-bottom {
            flex-direction: column;
            gap: 30px;
          }

          .section {
            padding: 60px 20px;
          }

          .section-title {
            font-size: 32px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .mobile-nav {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .logo-text {
            display: none;
          }

          .hero-title {
            font-size: 28px;
          }

          .section-title {
            font-size: 28px;
          }

          .profile-image {
            border: 4px solid #FFFFFF;
          }

          .skill-card, .project-card, .contact-card {
            padding: 25px 20px;
          }
        }
      `}</style>

      {/* Header/Navigation */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-circle">DN</div>
            <span className="logo-text">DANIEL</span>
          </div>
          
          <nav className="nav">
            <a href="#home" className="nav-link">HOME</a>
            <a href="#about" className="nav-link">ABOUT</a>
            <a href="#skills" className="nav-link">SKILLS</a>
            <a href="#portfolio" className="nav-link">PORTFOLIO</a>
            <a href="#contact" className="nav-link">CONTACT</a>
          </nav>
          
          <div className="header-right">
            <button className="contact-btn">HIRE ME</button>
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>HOME</a>
          <a href="#about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>ABOUT</a>
          <a href="#skills" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>SKILLS</a>
          <a href="#portfolio" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>PORTFOLIO</a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>CONTACT</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-left">
            <p className="welcome">WELCOME TO MY WORLD</p>
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Daniel Jadon Nyirenda</span>
              <br />
              <span className="hero-subtitle">a software & Network Engineer.</span>
            </h1>
            <p className="hero-desc">
              I use technology as a tool to build exceptional digital experiences across all platforms. 
              As a Software and Network Engineer, I specialize in web development (React.js, Next.js), 
              mobile applications (React Native, Flutter), desktop software (Java, JavaFX), 
              and enterprise network infrastructure. From building cross-platform apps to designing 
              secure networks with Cisco technologies.
            </p>
            
            <div className="hero-bottom">
              <div>
                <p className="label">FIND WITH ME</p>
                <div className="social-icons">
                  <a href="https://github.com/Jadon1905" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={18} /></a>
                  <a href="https://www.linkedin.com/in/daniel-nyirenda" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={18} /></a>
                  <a href="mailto:dnyirenda444@gmail.com" className="social-icon"><Mail size={18} /></a>
                </div>
              </div>
              <div>
                <p className="label">BEST SKILL ON</p>
                <div className="social-icons">
                  <div className="skill-icon">⚛️</div>
                  <div className="skill-icon">☕</div>
                  <div className="skill-icon">🐍</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <div className="section-header">
          <p className="section-label">FEATURES</p>
          <h2 className="section-title">What I Do</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div>{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section" id="portfolio">
        <div className="section-header">
          <p className="section-label">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
          <h2 className="section-title">My Portfolio</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <div 
                  className="category-badge"
                  style={{
                    background: 
                      project.category === 'Network' ? '#E0F2FE' :
                      project.category === 'Mobile' ? '#DBEAFE' :
                      project.category === 'Desktop' ? '#FEF3C7' :
                      '#FEF2F7',
                    color: 
                      project.category === 'Network' ? '#0891B2' :
                      project.category === 'Mobile' ? '#0284C7' :
                      project.category === 'Desktop' ? '#D97706' :
                      '#E6186D'
                  }}
                >
                  {project.category === 'Network' && <Globe size={14} style={{marginRight: '4px'}} />}
                  {project.category === 'Web' && <Code size={14} style={{marginRight: '4px'}} />}
                  {project.category === 'Mobile' && <Code size={14} style={{marginRight: '4px'}} />}
                  {project.category === 'Desktop' && <Code size={14} style={{marginRight: '4px'}} />}
                  {project.category}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="section-header">
          <p className="section-label">CONTACT</p>
          <h2 className="section-title">Get In Touch</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <Mail size={30} color="#E6186D" />
            <h3 className="contact-title">Email</h3>
            <p className="contact-text">
              <a href="mailto:dnyirenda444@gmail.com" className="contact-link">dnyirenda444@gmail.com</a>
            </p>
          </div>
          <div className="contact-card">
            <Phone size={30} color="#E6186D" />
            <h3 className="contact-title">Phone</h3>
            <p className="contact-text">+265 988 050 184</p>
            <p className="contact-text">+265 889 530 629</p>
          </div>
          <div className="contact-card">
            <Linkedin size={30} color="#E6186D" />
            <h3 className="contact-title">LinkedIn</h3>
            <p className="contact-text">
              <a href="https://www.linkedin.com/in/daniel-nyirenda" target="_blank" rel="noopener noreferrer" className="contact-link">Daniel Nyirenda</a>
            </p>
          </div>
          <div className="contact-card">
            <Github size={30} color="#E6186D" />
            <h3 className="contact-title">GitHub</h3>
            <p className="contact-text">
              <a href="https://github.com/Jadon1905" target="_blank" rel="noopener noreferrer" className="contact-link">Jadon1905</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Daniel Nyirenda. All Rights Reserved.</p>
      </footer>
    </div>
  );
}