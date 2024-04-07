module.exports = () => {
  const { faker } = require("@faker-js/faker");
  const users = [];
  for (let i = 0; i < 25; i++) {
    users.push({ id: faker.string.uuid(), name: faker.person.fullName() });
  }
  const albums = [];

  let j = 0;
  for (let i = 0; i < 125; i++) {
    if (i % 5 === 0 && i !== 0) {
      j++;
    }
    albums.push({
      id: faker.string.uuid(),
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      userId: users[j].id,
      images: [],
    });
  }
  return {
    users,
    albums,
  };
};
