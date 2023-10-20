import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
function Dashboard() {
  const courses = db.courses;

  function makeCards(areFixed) {
    return courses.map((course) => (
      <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
        <div class={`card dashboard-card-top ${areFixed ? "dashboard-card-fixed" : "dashboard-card-stretch"}`}>
          <div class="card-body">
          <h5 class="card-title text-truncate">{course.name}</h5>
          <h6 class="card-subtitle text-muted mb-2 text-truncate">{course.number}</h6>
          <h6 class="card-subtitle text-muted dashboard-card-text text-truncate dashboard-card-date">From {course.startDate} to {course.endDate}.</h6>
          </div>
        </div>
      </Link>
    ));
  }

  return (
    <div class="d-flex flex-column wd-flex-grow p-4">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div className="d-none d-md-flex flex-row flex-wrap">
        {makeCards(true)}
      </div>
      <div className="d-flex d-md-none flex-column">
        {makeCards(false)}
      </div>
    </div>
  );
}
export default Dashboard;