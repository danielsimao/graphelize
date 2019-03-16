function user(parent, args, context, info) {
  return parent.getUser();
}

module.exports = { user };
