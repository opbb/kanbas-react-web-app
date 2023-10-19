import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
function Dashboard() {
  const courses = db.courses;
  return (
    <div class="d-flex flex-column wd-flex-grow p-4">
      <h1>Dashboard</h1>
      <hr />
      <div className="d-flex flex-row flex-wrap">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
            <div class="card dashboard-card">
              <div class="card-body">
                {course.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;