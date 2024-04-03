module.exports = () => {
  const { faker } = require("@faker-js/faker");
  const users = [];
  for (let i = 0; i < 5; i++) {
    users.push({ id: faker.string.uuid(), name: faker.person.fullName() });
  }
  const albums = [];

  let j = 0;
  for (let i = 0; i < 15; i++) {
    if (i % 3 === 0 && i !== 0) {
      j++;
    }
    albums.push({
      id: faker.string.uuid(),
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      userId: users[j].id,
    });
  }
  return {
    users,
    albums,
  };
};

// generate users and albums array
// genrate random values for user: id and name using faker.js
// generate random values for albums: id, title, description
// loop through albums again and add userId from users
// mapping will be 3 albums will get 1 user
// total count should be users: 5 and albums: 15
