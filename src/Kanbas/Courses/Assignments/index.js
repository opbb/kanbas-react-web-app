import React from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = [];
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-row p-2 wd-flex-grow">
        <input
          type="text"
          className="float-start"
          placeholder="Search for Assignment"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
        <span className="wd-flex-grow"></span>
        <span className="float-end">
          <button type="button" className="btn btn-secondary module-button">
            + Group
          </button>
          <button type="button" className="btn btn-danger module-button">
            + Assignment
          </button>
          <button
            type="button"
            className="btn btn-secondary module-button module-options-button"
          >
            ...
          </button>
        </span>
      </div>
      <hr />
      <div className="list-group rounded-0">
        <h2 className="list-group-item assignments-header">Assignments</h2>
        <div className="list-group-item list-group list-group-flush">
          {courseAssignments.map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item"
            >
              <h5>{assignment.title}</h5>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Assignments;
