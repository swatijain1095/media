import { useCallback, useContext, useEffect } from "react";
import { User } from "../User";
import { AddUser } from "../AddUser";
import { Pagination } from "../Pagination";
import { UserContext } from "../../contexts/usersContext";

function UserList() {
  const {
    users,
    setUsers,
    usersConfig: { pageNo, order, highlightId },
  } = useContext(UserContext);

  const fetchUsers = useCallback(async () => {
    const response = await fetch(
      `http://localhost:3001/users?_page=${pageNo}&_sort=name&_order=${order}`
    );
    const users = await response.json();
    setUsers(users);
  }, [setUsers, pageNo, order]);

  async function deleteData(id) {
    await fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE",
    });
    fetchUsers();
  }

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers, pageNo, order, highlightId]);

  return (
    <div>
      <AddUser fetchUsers={fetchUsers} />
      {users.map((user) => (
        <User key={user.id} user={user} onDelete={deleteData} />
      ))}
      <Pagination />
    </div>
  );
}

export default UserList;
