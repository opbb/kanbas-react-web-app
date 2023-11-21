import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Calendar from "./Calendar";
import Commons from "./Commons";
import Help from "./Help";
import History from "./History";
import Inbox from "./Inbox";
import Studio from "./Studio";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL =
    "https://opbb-kanbas-node-server-app-bd067a0d8658.herokuapp.com/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "",
    number: "",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([response.data, ...courses]);
  };
  const deleteCourse = async (courseId) => {
    const response = await axios.delete(`${URL}/${courseId}`);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    const response = await axios.put(`${URL}/${course._id}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
    setCourse({ name: "" });
  };

  return (
    <Provider store={store}>
      <div className="d-flex wd-min-full-page-height">
        <KanbasNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<Account />} />
          <Route
            path="Dashboard"
            element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            }
          />
          <Route
            path="Courses"
            element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            }
          />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Calendar" element={<Calendar />} />
          <Route path="Commons" element={<Commons />} />
          <Route path="Help" element={<Help />} />
          <Route path="History" element={<History />} />
          <Route path="Inbox" element={<Inbox />} />
          <Route path="Studio" element={<Studio />} />
        </Routes>
      </div>
    </Provider>
  );
}
export default Kanbas;
