import { Link, NavLink, Outlet } from "react-router-dom";

export function Layout() {
    return <div className="site-shell">
      <div className="noise" aria-hidden="true" />
      <header className="nav">
      <Link className="wordmark" to="/">YK<span>.</span></Link>
      <nav aria-label="Primary navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/record">The Record</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
    <main><Outlet /></main>
    <footer><span>© {new Date().getFullYear()} Yagnesh Kumar Koduru</span><span>Built independently.</span></footer>
  </div>;
}
