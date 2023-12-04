import { Link } from "react-router-dom";
import { React } from "react";
import "./index.css";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  function makeCards(areFixed) {
    return courses.map((course) => (
      <Link
        key={course._id}
        to={`/Kanbas/Courses/${course._id}`}
        className="list-group-item"
      >
        <div
          className={`card dashboard-card-top ${
            areFixed ? "dashboard-card-fixed" : "dashboard-card-stretch"
          }`}
        >
          <div className="card-body">
            <h5 className="card-title text-truncate">{course.name}</h5>
            <h6 className="card-subtitle text-muted mb-2 text-truncate">
              {course.number}
            </h6>
            <h6 className="card-subtitle text-muted dashboard-card-text text-truncate dashboard-card-date">
              From {course.startDate} to {course.endDate}.
            </h6>
            <div className="d-flex flex-row justify-content-between p-1">
              <button
                className="btn btn-secondary m-1"
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}
              >
                Edit
              </button>
              <button
                className="btn btn-danger m-1"
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </Link>
    ));
  }

  function makeAddCourse(wrapperClass) {
    return (
      <div className={wrapperClass}>
        <input
          value={course.name}
          placeholder="Course Name"
          className="form-control m-1"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          value={course.number}
          placeholder="Course Number"
          className="form-control m-1"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          value={course.startDate}
          placeholder="Start Date"
          className="form-control m-1"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          value={course.endDate}
          placeholder="End Date"
          className="form-control m-1"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />
        <button className="btn btn-danger m-1" onClick={addNewCourse}>
          Add
        </button>
        <button className="btn btn-primary m-1" onClick={updateCourse}>
          Update
        </button>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column wd-flex-grow p-4">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      {makeAddCourse("d-none d-md-flex flex-row")}
      {makeAddCourse("d-flex d-md-none flex-column")}
      <div className="d-none d-md-flex flex-row flex-wrap">
        {makeCards(true)}
      </div>
      <div className="d-flex d-md-none flex-column">{makeCards(false)}</div>
    </div>
  );
}
export default Dashboard;
