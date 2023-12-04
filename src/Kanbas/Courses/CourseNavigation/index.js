import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="d-flex flex-column course-nav-sidebar">
      {links.map((link, index) => (
        <span
          className={`p-1 ${
            pathname.includes(link) && "border-start border-dark border-2"
          }`}
        >
          <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`course-nav-link ${
              pathname.includes(link) && "course-nav-link-active"
            }`}
          >
            {link}
          </Link>
        </span>
      ))}
    </div>
  );
}

export default CourseNavigation;
