import './App.css'

function App() {
  return (
    <div className="app">

      <header className="header">
        <div className="logo">Prosocian</div>
        <button className="signin-btn">Sign In</button>
      </header>

      <main className="hero">
        <div className="hero-content">
          <div className="shield-icon">🛡️</div>
          <h1>NJ HIB Compliance, Simplified</h1>
          <p className="tagline">Pro-student. Pro-parent. Pro-teacher. Prosocian.</p>
          <p className="subtitle">
            The complete platform for managing harassment, intimidation, and bullying
            investigations in New Jersey schools — from the first report to the final determination.
          </p>
          <button className="cta-btn">Request Early Access</button>
        </div>
      </main>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">📋</div>
          <h3>Electronic 338 Reports</h3>
          <p>Accept HIB reports online from families and staff, with automatic case creation and deadline tracking.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h3>Guided Investigations</h3>
          <p>Step-by-step compliance workflow aligned to New Jersey ABR deadlines and statutory requirements.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📁</div>
          <h3>Audit-Ready Records</h3>
          <p>Every action logged. Every determination documented. Every deadline tracked and defensible.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Prosocian &nbsp;·&nbsp; prosocian.com</p>
      </footer>

    </div>
  )
}

export default App
