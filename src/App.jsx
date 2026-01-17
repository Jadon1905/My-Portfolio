import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Code, Database, Globe, Server, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = [
    { name: 'Web Development', icon: <Code size={24} />, desc: 'Building modern, responsive web applications with React.js, Next.js, and full-stack technologies.' },
    { name: 'Mobile Development', icon: <Code size={24} />, desc: 'Cross-platform mobile apps using React Native, Flutter, and native Android development.' },
    { name: 'Desktop Applications', icon: <Code size={24} />, desc: 'JavaFX desktop applications, Electron apps, and enterprise software solutions.' },
    { name: 'Network Design', icon: <Globe size={24} />, desc: 'Designing and implementing LAN/WAN networks, VLANs, and network topology.' },
    { name: 'Cisco Technologies', icon: <Server size={24} />, desc: 'Configuring routers, switches, and implementing Cisco networking solutions.' },
    { name: 'Network Security', icon: <Database size={24} />, desc: 'Implementing firewalls, VPNs, intrusion detection, and security protocols.' },
    { name: 'Backend Development', icon: <Server size={24} />, desc: 'Node.js, Java, Python, PHP for scalable server-side applications and APIs.' },
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
      tech: ['React Native', 'Firebase', 'Redux'],
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
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
