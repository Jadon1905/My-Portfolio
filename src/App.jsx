import './App.css'

function App() {
  return (
    <div className="container">
      <aside className="sidebar">
        <h1>Daniel Nyirenda</h1>
        <p className="role">Software & Network Engineer</p>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </aside>

      <main className="content">
        <section id="about">
          <h2>About Me</h2>
          <p>
            I’m a passionate software and network engineer focused on building
            reliable systems, modern web applications, and secure networks.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
