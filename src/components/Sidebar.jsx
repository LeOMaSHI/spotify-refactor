import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/logo.png";
import "../components/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="col col-2 sidebar">
      <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </a>

          <div className="collapse navbar-collapse show" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#">
                    <i className="bi bi-house-door-fill">Home</i>
                  </a>
                </li>
                <li>
                  <a className="nav-item nav-link d-flex align-items-center" href="#">
                    <i className="bi bi-book-fill">Your Library </i>
                  </a>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input type="text" className="form-control" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-secondary btn-sm">GO</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nav-btn">
          <button className="btn signup-btn">Sign Up</button>
          <button className="btn login-btn">Login</button>
          <div className="mt-2">
            <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
