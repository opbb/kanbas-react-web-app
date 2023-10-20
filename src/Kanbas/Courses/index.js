import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation, Link }
  from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const course = db.courses.find(
    (course) => course._id === courseId);
  
  return (
    <div className="d-flex flex-column wd-flex-grow p-4">
      <h2>{course.number} {course.name}</h2>
      <hr />
      <div className="d-flex flex-row">
        <CourseNavigation />
        <div class="wd-flex-grow">
            <Routes>
                <Route path="/*" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules/>} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                <Route path="Grades" element={<Grades />} />
            </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;