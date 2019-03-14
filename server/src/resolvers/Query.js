function repos(parent, args, { db }, info) {
  return db.repo.findAll();
}
function users(parent, args, { db }, info) {
  return db.user.findAll();
}
function repo(parent, { id }, { db }, info) {
  db.repo.findById(id);
}
function user(parent, { id }, { db }, info) {
  db.user.findById(id);
}

module.exports = { repos, users, repo, user };
