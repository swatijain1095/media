import { useEffect, useState } from "react";
import { User } from "../User";

function UserList() {
  const [users, setUsers] = useState([]);

  async function listUser() {
    const response = await fetch("http://localhost:3001/users");
    const users = await response.json();
    setUsers(users);
  }

  useEffect(() => {
    listUser();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
