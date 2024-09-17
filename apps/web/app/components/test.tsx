import api from "../utils/api";

import { useEffect, useState } from "react";

const UserList = () => {
  const [userList, setUserList] = useState<
    Awaited<ReturnType<typeof api.userList.query>>
  >([]);
  useEffect(() => {
    api.userList.query().then((_userList) => setUserList(_userList));
  }, []);
  return (
    <ul>
      {userList.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
