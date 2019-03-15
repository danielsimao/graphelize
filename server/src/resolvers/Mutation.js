function createRepo(parent, { name, url, balance, userId }, { db }, info) {
  const repo = db.repo.create({
    name,
    url,
    balance,
    userId
  });

  return repo;
}
function updateRepo(parent, { name, url, balance, id }, { db }, info) {
  const repo = db.repo.update(
    {
      name,
      url,
      balance
    },
    {
      where: {
        id
      }
    }
  );

  return repo;
}
function deleteRepo(parent, { id }, { db }, info) {
  const repo = db.repo.destroy({
    where: {
      id: id
    }
  });

  return repo;
}

module.exports = { createRepo, updateRepo, deleteRepo };
