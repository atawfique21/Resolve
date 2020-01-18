const { User, Goal } = require('./models');

const seed = async () => {
  await User.destroy({ where: {} })

  const user1 = await User.create({
    username: "hannister01",
    password_digest: "$2b$11$QYdYrBQI8FQKUShSfd1urOf/1hGqWdMLIvs2rdhbj9Bq5h8m.IZiS",
    first_name: "Hannah",
    last_name: "Reilly",
    fun_fact: "My name is a palidrone.",
    location: "NYC",
    profile_pic_url: "https://media-exp1.licdn.com/dms/image/C4D03AQGmzrAJOFCUBA/profile-displayphoto-shrink_200_200/0?e=1584576000&v=beta&t=Jdi_jghFaIqdNWivMFf6zFDLrpicS77YnD2d9E2Dqgk",
  })

  const user2 = await User.create({
    username: "atawfique21",
    password_digest: "$2b$11$QYdYrBQI8FQKUShSfd1urOf/1hGqWdMLIvs2rdhbj9Bq5h8m.IZiS",
    first_name: "Abir",
    last_name: "Tawfique",
    fun_fact: "My brother and I were born on the same day but four years apart.",
    location: "NYC",
    profile_pic_url: "https://i.imgur.com/ReIZq8O.jpg",
  })

  const user3 = await User.create({
    username: "revatir",
    password_digest: "$2b$11$QYdYrBQI8FQKUShSfd1urOf/1hGqWdMLIvs2rdhbj9Bq5h8m.IZiS",
    first_name: "Revati",
    last_name: "Rajabhathor",
    fun_fact: "Since joining GA I eat an average of 2 cups of goldfish a day.",
    location: "NYC",
    profile_pic_url: "https://i.imgur.com/YzpBtSy.jpg",
  })

  await Goal.destroy({ where: {} })

  const goal1 = await Goal.create({
    user_id: 3,
    name: "Cook More",
    motivation: "Save money",
    plan: "Meal prep on Sundays.",
    is_complete: false,
  })

  const goal2 = await Goal.create({
    user_id: 3,
    name: "Workout",
    motivation: "Get healthier.",
    plan: "Sign up for gym membership and go to gym.",
    is_complete: false,
  })

  const goal3 = await Goal.create({
    user_id: 2,
    name: "Read",
    motivation: "I want to read more.",
    plan: "Sign up for library card and borrow books.",
    is_complete: false,
  })

  process.exit();
}

seed();