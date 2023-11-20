import ModuleList from "../Modules/ModuleList";
import "./index.css";

function Home() {
  return (
    <div className="d-flex flex-row">
      <div class="wd-flex-grow">
        <ModuleList />
      </div>
      <div class="d-flex flex-column float-end status-bar p-2">
        <button type="button" class="btn btn-secondary">Import Existing Content</button>
        <button type="button" class="btn btn-secondary">Import From Commons</button>
        <button type="button" class="btn btn-secondary">Choose Home Page</button>
        <button type="button" class="btn btn-secondary">View Course Stream</button>
        <button type="button" class="btn btn-secondary">New Announcement</button>
        <button type="button" class="btn btn-secondary">New Analytics</button>
        <button type="button" class="btn btn-secondary">View Course Notifications</button>
        <h5 class="mt-4 mb-0">To Do</h5>
        <hr class="mt-1" />
      </div>
    </div>
  );
}
export default Home;