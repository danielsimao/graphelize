// TODO type input schemas
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../../utils/jwt');

async function signup(parent, args, { db }, info) {
  const password = await bcrypt.hash(args.password, 10);
  console.log(password);
  const user = await db.user.create({
    ...args,
    password,
  });

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
}

async function login(parent, { username, password }, { db }, info) {
  const user = await db.user.findOne({ where: { username } });
  if (!user) {
    throw new Error('No such user found');
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  };
}

function updateUser(
  parent,
  { username, fullname, email, password, id },
  { db },
  info
) {
  const user = db.user.update(
    {
      username,
      fullname,
      email,
      password,
    },
    {
      where: {
        id,
      },
    }
  );

  return user;
}
function deleteUser(parent, { id }, { db }, info) {
  const user = db.user.destroy({
    where: {
      id,
    },
  });

  return user;
}

function createRepo(parent, { name, url, balance }, context, info) {
  const userId = getUserId(context);
  const { db } = context;
  const repo = db.repo.create({
    name,
    url,
    balance,
    userId,
  });

  return repo;
}

function updateRepo(parent, { name, url, balance, id }, context, info) {
  const userId = getUserId(context);
  const { db } = context;
  const repo = db.repo.update(
    {
      name,
      url,
      balance,
    },
    {
      where: {
        id,
      },
    }
  );

  return repo;
}

function deleteRepo(parent, { id }, context, info) {
  const userId = getUserId(context);
  const { db } = context;
  const repo = db.repo.destroy({
    where: {
      id,
    },
  });

  return repo;
}

module.exports = {
  signup,
  login,
  updateUser,
  deleteUser,
  createRepo,
  updateRepo,
  deleteRepo,
};
