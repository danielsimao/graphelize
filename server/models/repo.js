module.exports = (sequelize, DataTypes) => {
  const Repo = sequelize.define('repo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    balance: DataTypes.INTEGER,
  });

  Repo.associate = models => {
    Repo.belongsTo(models.user);
  };

  return Repo;
};
