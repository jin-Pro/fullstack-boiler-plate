type User = { id: string; name: string };
const db = {
  user: {
    findMany() {
      return Promise.resolve(USER_LIST_STORE.GET());
    },
    findById({ id }: { id: User["id"] }) {
      const userList = USER_LIST_STORE.GET();
      const targetUser = userList.find((v) => v.id === id);
      return Promise.resolve(targetUser);
    },
    create({ name }: { name: User["name"] }) {
      const user = USER_LIST_STORE.CREATE(name);
      return Promise.resolve(user);
    },
  },
};

export default db;

let userList: Array<User> = Array.from({ length: 10 }, (x, i) => ({
  id: `${i}`,
  name: `name_${i}`,
}));
const USER_LIST_STORE = {
  GET() {
    return userList;
  },
  CREATE(name: User["name"]) {
    const id = `${userList.length}`;
    const user = { name, id };
    userList.push(user);
    return user;
  },
  DELETE(id: User["id"]) {
    userList = userList.filter((user) => user.id === id);
  },
};
