import {Routes, Route, Navigate} from "react-router";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Nav from "../Nav";
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
  return (
    <Provider store={store}>
      <div className="d-flex flex-column">
        <div><Nav/></div>
        <div>
          <Routes>
                <Route path="/" element={<Navigate to="A3" />} />
                <Route path="A3" element={<Assignment3 />} />
                <Route path="A4" element={<Assignment4 />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Labs;