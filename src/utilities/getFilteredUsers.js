export const getFilteredUsers = ({
  users = [],
  pageNo = 1,
  order = "asc",
  searchTerm = "",
}) => {
  const filteredUsers = [];
  users.forEach((user) => {
    if (user.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      filteredUsers.push(user);
    }
  });

  filteredUsers.sort((user1, user2) => {
    const user1Name = user1.name.toUpperCase();
    const user2Name = user2.name.toUpperCase();
    if (user1Name < user2Name) {
      return order === "asc" ? -1 : 1;
    }
    if (user1Name > user2Name) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  });

  const pageIndex = pageNo - 1;
  const startIndex = pageIndex * 10;
  const endIndex = startIndex + 10;
  const currentPageUser = [];

  filteredUsers.forEach((user, index) => {
    if (index >= startIndex && index < endIndex) {
      currentPageUser.push(user);
    }
  });

  return currentPageUser;
};
