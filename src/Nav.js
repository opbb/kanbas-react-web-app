import { Link, useLocation } from "react-router-dom";
function Nav() {
  const { pathname } = useLocation();
  return (
    <nav className="nav nav-tabs mt-2">
      <Link
        to="/Labs/A3"
        className={`nav-link ${pathname.includes("Labs/A3") ? "active" : ""}`}
      >
        A3
      </Link>
      <Link
        to="/Labs/A4"
        className={`nav-link ${pathname.includes("Labs/A4") ? "active" : ""}`}
      >
        A4
      </Link>
      <Link
        to="/Labs/A5"
        className={`nav-link ${pathname.includes("Labs/A5") ? "active" : ""}`}
      >
        A5
      </Link>
      <Link
        to="/hello"
        className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}
      >
        Hello
      </Link>
      <Link
        to="/Kanbas"
        className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}
      >
        Kanbas
      </Link>
    </nav>
  );
}
export default Nav;
