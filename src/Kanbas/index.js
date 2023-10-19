import KanbasNavigation from "./KanbasNavigation";
import {Routes, Route, Navigate} from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Calendar from "./Calendar";
import Commons from "./Commons";
import Help from "./Help";
import History from "./History";
import Inbox from "./Inbox";
import Studio from "./Studio";

function Kanbas() {
    return (
      <div className="d-flex wd-min-full-page-height">
        <KanbasNavigation/>
        <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<Account />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses" element={<Dashboard />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
            <Route path="Calendar" element={<Calendar />} />
            <Route path="Commons" element={<Commons />} />
            <Route path="Help" element={<Help />} />
            <Route path="History" element={<History />} />
            <Route path="Inbox" element={<Inbox />} />
            <Route path="Studio" element={<Studio />} />
          </Routes>
        </div>
    );
  }
  export default Kanbas;