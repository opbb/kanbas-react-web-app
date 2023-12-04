import { Link, useLocation } from "react-router-dom";
import "./index.css";
function KanbasNavigation() {
  const links = [
    { linkName: "Account", iconName: "fa-user-circle" },
    { linkName: "Dashboard", iconName: "fa-tachometer-alt" },
    { linkName: "Courses", iconName: "fa-book" },
    { linkName: "Calendar", iconName: "fa-calendar" },
    { linkName: "Inbox", iconName: "fa-inbox" },
    { linkName: "History", iconName: "fa-clock" },
    { linkName: "Studio", iconName: "fa-photo-video" },
    { linkName: "Commons", iconName: "fa-sign-out-alt" },
    { linkName: "Help", iconName: "fa-question-circle" },
  ];

  const { pathname } = useLocation();
  return (
    <div className="list-group list-group-flush kanbas-navigation-bar text-center d-flex flex-column">
      <div className="list-group-item kanbas-navigation-bar-block northeastern-n">
        N
      </div>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link.linkName}`}
          className={`list-group-item kanbas-navigation-bar-block kanbas-navigation-bar-anchor ${
            pathname.includes(link.linkName) && "selected"
          }`}
        >
          <i
            className={`fas ${link.iconName} fa-2x kanbas-navigation-bar-icon ${
              link.linkName === "Account"
                ? "kanbas-navigation-bar-account-icon"
                : ""
            }`}
          ></i>
          <br />
          {link.linkName}
        </Link>
      ))}
    </div>
  );
}

export default KanbasNavigation;
