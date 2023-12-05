import React, { useState, useEffect } from "react";
import * as client from "./client";
import {
  BsPlusCircleFill,
  BsFillCheckCircleFill,
  BsPencil,
  BsTrash3Fill,
} from "react-icons/bs";
function UserTable() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "USER",
  });
  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };
  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="p-3">
      <h1>User List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          <tr className="d-flex align-items-center">
            <td>
              <input
                value={user.password}
                placeholder="Password"
                className="form-control"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </td>
            <td>
              <input
                value={user.username}
                placeholder="Username"
                className="form-control"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </td>
            <td>
              <input
                value={user.firstName}
                placeholder="Firstname"
                className="form-control"
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
            </td>
            <td>
              <input
                value={user.lastName}
                placeholder="Lastname"
                className="form-control"
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </td>
            <td>
              <select
                value={user.role}
                className="form-control"
                onChange={(e) => setUser({ ...user, role: e.target.value })}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td className="align-middle">
              <BsFillCheckCircleFill
                onClick={updateUser}
                className="me-2 text-success fs-1"
              />
            </td>
            <td className="align-middle">
              <BsPlusCircleFill onClick={createUser} className="me-2 fs-1" />
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => deleteUser(user)}
                >
                  <BsTrash3Fill />
                </button>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => selectUser(user)}
                >
                  <BsPencil />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UserTable;
