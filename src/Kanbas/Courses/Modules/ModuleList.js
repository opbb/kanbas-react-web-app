import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const [isAddModuleOpen, setIsAddModuleOpen] = useState(false); // Determines whethere the module add/editor should be open.
  const [isAddOrUpdate, setIsAddOrUpdate] = useState(true); // Determines whether we are adding a new module, or editing an existing one.
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const resetModule = () => {
    dispatch(setModule({ name: "", description: "" }));
  }

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
        { isAddModuleOpen 
        ? <></>
        : <button type="button" class="btn btn-danger wd-flex-grow module-button"
            onClick={() => { setIsAddModuleOpen(true); setIsAddOrUpdate(true); }}>+ Module</button>}
        <button type="button" class="btn btn-secondary wd-flex-grow module-button module-options-button">...</button>
      </div>
      <div class={`${isAddModuleOpen ? "d-flex" : "d-none"} flex-column p-1`}>
        <input value={module.name} placeholder="Module Name" class="m-1"
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}/>
          <textarea value={module.description} placeholder="Modules description goes here." class="m-1"
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}/>
          <div class="d-flex flex-row">
            {isAddOrUpdate
            ? <button type="button" class="btn btn-danger wd-flex-grow module-button"
            onClick={() => { dispatch(addModule({ ...module, course: courseId })); resetModule(); setIsAddModuleOpen(false) }}>+ Module</button>
            : <button type="button" class="btn btn-danger wd-flex-grow module-button"
            onClick={() => { dispatch(updateModule(module)); resetModule(); setIsAddModuleOpen(false) }}>Update</button>
            }
            <button type="button" class="btn btn-secondary wd-flex-grow module-button"
            onClick={() => { resetModule(); setIsAddModuleOpen(false)}}>Cancel</button>
          </div>
      </div>
      <hr />
      <ul className="list-group">
        {
        modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item m-2 module-container rounded-0">
            <span class="d-flex flex-row justify-content-between module-title">
              <h3>{module.name}</h3>
              <span>
                <button
                  class="btn btn-danger"
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>
                <button
                  class="btn btn-secondary"
                  onClick={(event) => { dispatch(setModule(module)); setIsAddOrUpdate(false); setIsAddModuleOpen(true); }}>
                  Edit
                </button>
              </span>
            </span>
            <p>{module.description}</p>
          </li>
        ))}
      </ul>
    </div>
);
}
export default ModuleList;