import { useParams } from "react-router-dom";
function Grades() {
  const { courseId } = useParams();
  const assignments = [].filter((assignment) => assignment.course === courseId);
  const enrollments = [].enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  return (
    <div>
      <h1>Gradebook</h1>
      <hr />
      <div className="table-responsive">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = [].users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = [].grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
