import { useEffect, useState } from "react";
import { User } from "../User";
import { AddUser } from "../AddUser";
import { Pagination } from "../Pagination";

function UserList() {
  const [users, setUsers] = useState([]);

  async function fetchUsers(_pageNo = 1) {
    const response = await fetch(
      `http://localhost:3001/users?_page=${_pageNo}`
    );
    const users = await response.json();
    setUsers(users);
  }

  async function deleteData(id) {
    await fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE",
    });
    fetchUsers();
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <AddUser fetchUsers={fetchUsers} />
      {users.map((user) => (
        <User key={user.id} user={user} onDelete={deleteData} />
      ))}
      <Pagination fetchUsers={fetchUsers} />
    </div>
  );
}

export default UserList;
