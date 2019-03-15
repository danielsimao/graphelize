function repos(parent, args, { db }, info) {
  return db.repo.findAll();
}
function users(parent, args, { db }, info) {
  return db.user.findAll();
}
function repo(parent, { id }, { db }, info) {
  return db.repo.findOne({ where: { id } });
}
function user(parent, { id }, { db }, info) {
  return db.user.findOne({ where: { id } });
}

module.exports = { repos, users, repo, user };
