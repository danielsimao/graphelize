function repos(parent, args, context, info) {
  return parent.getRepos();
}

module.exports = { repos };
