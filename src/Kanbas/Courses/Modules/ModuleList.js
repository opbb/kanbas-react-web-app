import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { Button } from "bootstrap";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div class="d-flex flex-column">
      <div class="d-flex flex-row p-2">
        <button type="button" class="btn btn-secondary wd-flex-grow module-button">Collapse All</button>
        <button type="button" class="btn btn-secondary wd-flex-grow module-button">View Progress</button>
        <button type="button" class="btn btn-secondary wd-flex-grow module-button dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Publish All</button>
        <ul class="dropdown-menu">
          <li class="dropdown-item">Action</li>
          <li class="dropdown-item">Another action</li>
          <li class="dropdown-item">Something else here</li>
        </ul>
        <button type="button" class="btn btn-danger wd-flex-grow module-button">+ Module</button>
        <button type="button" class="btn btn-secondary wd-flex-grow module-button module-options-button">...</button>
      </div>
      <hr />
      <ul className="list-group">
        {
        modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item m-2 module-container rounded-0">
            <h3 class="module-title">{module.name}</h3>
            <p>{module.description}</p>
          </li>
        ))}
      </ul>
    </div>
);
}
export default ModuleList;