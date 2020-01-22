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

  const user4 = await User.create({
    username: "defaultmark",
    password_digest: "$2b$11$QYdYrBQI8FQKUShSfd1urOf/1hGqWdMLIvs2rdhbj9Bq5h8m.IZiS",
    first_name: "Mark",
    last_name: "Cuban",
    fun_fact: "I'm a shark on shark tank!",
    location: "Cali",
    profile_pic_url: "https://voxconferences.files.wordpress.com/2016/05/markcubansquare.jpg?quality=80&strip=info",
  })

  const user5 = await User.create({
    username: "defaultnicole",
    password_digest: "$2b$11$QYdYrBQI8FQKUShSfd1urOf/1hGqWdMLIvs2rdhbj9Bq5h8m.IZiS",
    first_name: "Nicole",
    last_name: "Cuban",
    fun_fact: "I eat three smoothies a day.",
    location: "NYC",
    profile_pic_url: "https://randomuser.me/api/portraits/women/33.jpg",
  })

  const user6 = await User.create({
    username: "defaultmax",
    password_digest: "$2b$11$QYdYrBQI8FQKUShSfd1urOf/1hGqWdMLIvs2rdhbj9Bq5h8m.IZiS",
    first_name: "Max",
    last_name: "Air",
    fun_fact: "I've lost five iPhones so far.",
    location: "NYC",
    profile_pic_url: "https://randomuser.me/api/portraits/women/14.jpg",
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
    name: "Get in Shape",
    motivation: "I've always wanted a more muscular body.",
    plan: "Sign up for an expensive gym so that I force myself to go.",
    is_complete: false,
  })

  const goal4 = await Goal.create({
    user_id: 5,
    name: "Keep track of my items",
    motivation: "I lose a lot of my belongings.",
    plan: "Before leaving work, I will double check to ensure I have everything..",
    is_complete: false,
  })

  const goal5 = await Goal.create({
    user_id: 6,
    name: "Eat Healthier",
    motivation: "I've gained a lot of wait since this time last year.",
    plan: "Throw out all the junk food in the house.",
    is_complete: false,
  })

  process.exit();
}

seed();