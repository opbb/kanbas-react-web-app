import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div class="d-flex flex-column">
      <div class="d-flex flex-row p-2 wd-flex-grow">
        <input type="text" class="float-start" placeholder="Search for Assignment" aria-label="Search" aria-describedby="basic-addon1" />
        <span class="wd-flex-grow"></span>
        <span class="float-end">
          <button type="button" class="btn btn-secondary module-button">+ Group</button>
          <button type="button" class="btn btn-danger module-button">+ Assignment</button>
          <button type="button" class="btn btn-secondary module-button module-options-button">...</button>
        </span>
      </div>
      <hr />
      <div class="list-group rounded-0">
        <h2 class="list-group-item assignments-header">Assignments</h2>
        <div className="list-group-item list-group list-group-flush">
          {courseAssignments.map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item">
              <h5>{assignment.title}</h5>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Assignments;