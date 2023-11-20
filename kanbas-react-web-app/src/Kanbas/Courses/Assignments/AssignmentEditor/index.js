import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);

    const [assignmentTitle, setAssignmentTitle] = useState(assignment.title);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
          <h4>{assignment.title}</h4>
          <hr />
          <input value={assignmentTitle}
                 onChange={event => setAssignmentTitle(event.target.value)}
                 className="form-control mb-2" />
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-light">
            Cancel
          </Link>
          <button onClick={handleSave} className="btn btn-danger me-2">
            Save
          </button>
        </div>
      );
    }
    
    export default AssignmentEditor;