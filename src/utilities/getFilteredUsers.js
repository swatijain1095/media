export const getFilteredUsers = ({
  users = [],
  pageNo = 1,
  order = "asc",
  searchTerm = "",
}) => {
  const filteredUsers = [];
  // first filter based on search term
  users.forEach((user) => {
    if (user.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      filteredUsers.push(user);
    }
  });

  // then filter based on page No

  // then filter based on order

  // return the final filtered users
  return filteredUsers;
};
