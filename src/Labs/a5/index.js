import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";
function Assignment5() {
  return (
    <div className="p-2">
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a
          href="https://opbb-kanbas-node-server-app-bd067a0d8658.herokuapp.com/a5/welcome"
          className="list-group-item"
        >
          Welcome
        </a>
      </div>
      <h2>Simple API Examples</h2>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}
export default Assignment5;
