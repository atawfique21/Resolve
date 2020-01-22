const { Sequelize } = require('sequelize');

let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    define: {
      underscored: true
    }
  });
} else {
  sequelize = new Sequelize({
    database: 'resolve_db',
    dialect: 'postgres',
    define: {
      underscored: true,
    },
  });
}

class Goal extends Sequelize.Model { }

Goal.init({
  user_id: Sequelize.INTEGER,
  name: Sequelize.TEXT,
  motivation: Sequelize.TEXT,
  plan: Sequelize.TEXT,
  is_complete: Sequelize.BOOLEAN,
}, {
  sequelize,
  modelName: 'goal'
});

class User extends Sequelize.Model { }

User.init({
  username: Sequelize.STRING,
  password_digest: Sequelize.STRING,
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  fun_fact: Sequelize.TEXT,
  location: Sequelize.STRING,
  profile_pic_url: Sequelize.TEXT,
}, {
  sequelize,
  modelName: 'user'
})

User.hasMany(Goal, { onDelete: 'cascade' });
Goal.belongsTo(User);

module.exports = {
  Goal,
  User,
  sequelize
}