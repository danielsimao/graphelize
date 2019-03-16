//TODO type input schemas
//TODO login and signup

// async function signup(parent, {password}, {db}, info) {
//   const password = await bcrypt.hash(password, 10);

//   const user = await db.user.createUser({ ...args, password });

//   const token = jwt.sign({ userId: user.id }, APP_SECRET);

//   return {
//     token,
//     user
//   };
// }

// async function login(parent, { username }, { db }, info) {
//   const user = await db.user({ username });
//   if (!user) {
//     throw new Error("No such user found");
//   }

//   const valid = await bcrypt.compare(args.password, user.password);
//   if (!valid) {
//     throw new Error("Invalid password");
//   }

//   const token = jwt.sign({ userId: user.id }, APP_SECRET);

//   return {
//     token,
//     user
//   };
// }

function createUser(
  parent,
  { username, fullname, email, password },
  { db },
  info
) {
  const user = db.user.create({
    username,
    fullname,
    email,
    password
  });

  return user;
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
      password
    },
    {
      where: {
        id
      }
    }
  );

  return user;
}
function deleteUser(parent, { id }, { db }, info) {
  const user = db.user.destroy({
    where: {
      id: id
    }
  });

  return user;
}

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

module.exports = {
  // signup,
  // login,
  createUser,
  updateUser,
  deleteUser,
  createRepo,
  updateRepo,
  deleteRepo
};
