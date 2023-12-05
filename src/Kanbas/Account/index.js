import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/SignIn");
  };

  useEffect(() => {
    fetchAccount();
  }, []);
  return (
    <div className="w-50 p-3">
      <h1>Account</h1>
      <hr />
      {account && (
        <div className="d-flex flex-column">
          <ul className="list-group">
            <li className="list-group-item">
              <span>Password: </span>
              <input
                className="form-control"
                value={account.password}
                onChange={(e) =>
                  setAccount({ ...account, password: e.target.value })
                }
              />
            </li>
            <li className="list-group-item">
              <span>Firstname: </span>
              <input
                className="form-control"
                value={account.firstName}
                onChange={(e) =>
                  setAccount({ ...account, firstName: e.target.value })
                }
              />
            </li>
            <li className="list-group-item">
              <span>Lastname: </span>
              <input
                className="form-control"
                value={account.lastName}
                onChange={(e) =>
                  setAccount({ ...account, lastName: e.target.value })
                }
              />
            </li>
            <li className="list-group-item">
              <span>Date of Birth: </span>
              <input
                className="form-control"
                value={account.dob}
                onChange={(e) =>
                  setAccount({ ...account, dob: e.target.value })
                }
              />
            </li>
            <li className="list-group-item">
              <span>Email: </span>
              <input
                className="form-control"
                value={account.email}
                onChange={(e) =>
                  setAccount({ ...account, email: e.target.value })
                }
              />
            </li>
            <li className="list-group-item">
              <span>Role: </span>
              <select
                className="form-control"
                onChange={(e) =>
                  setAccount({ ...account, role: e.target.value })
                }
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </li>
          </ul>
          <button className="btn btn-primary" onClick={save}>
            Save
          </button>
          <button className="btn btn-danger" onClick={signout}>
            Sign Out
          </button>
          <button
            className="btn btn-info"
            onClick={() => navigate("/Kanbas/UserTable")}
          >
            User Table
          </button>
        </div>
      )}
    </div>
  );
}
export default Account;
