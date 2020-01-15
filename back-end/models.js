const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'resolve_db',
  dialect: 'postgres',
  define: {
    underscored: true
  }
});

class Goal extends Sequelize.Model { }

Goal.init({
  user_id: Sequelize.INTEGER,
  goal: Sequelize.TEXT,
  is_complete: Sequelize.BOOLEAN,
  created_date: Sequelize.NOW,
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
  profile_url: Sequelize.TEXT,
}, {
  sequelize,
  modelName: 'user'
})

User.hasMany(Post, { onDelete: 'cascade' });
Post.belongsTo(User);

module.exports = {
  Post,
  User,
  sequelize
}