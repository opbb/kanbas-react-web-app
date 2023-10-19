import ModuleList from "../Modules/ModuleList";


function Home() {
  return (
    <div className="d-flex flex-row">
      <h2>Home</h2>
      <ModuleList />
      <h2>Status</h2>
    </div>
  );
}
export default Home;