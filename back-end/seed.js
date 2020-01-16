const { User, Goal } = require('./models');

const seed = async () => {
  await User.destroy({ where: {} })

  const admin = await User.create({
    username: "casey",
    password_digest: "$2b$11$J/T6HO7/IHF7TXgu4elqfO.YW6PJIOS9lQdmTQ789Sg7GUPkIer.O"
  })

  const user1 = await User.create({
    username: "hannister01",
    password_digest: 1234,
    first_name: "Hannah",
    last_name: "Reilly",
    fun_fact: "My name is a palidrone.",
    location: "NYC",
    profile_pic_url: "https://media-exp1.licdn.com/dms/image/C4D03AQGmzrAJOFCUBA/profile-displayphoto-shrink_200_200/0?e=1584576000&v=beta&t=Jdi_jghFaIqdNWivMFf6zFDLrpicS77YnD2d9E2Dqgk",
  })

  const user2 = await User.create({
    username: "atawfique21",
    password_digest: 1234,
    first_name: "Abir",
    last_name: "Tawfique",
    fun_fact: "My brother and I were born on the same day but four years apart.",
    location: "NYC",
    profile_pic_url: "https://i.imgur.com/ReIZq8O.jpg",
  })

  const user3 = await User.create({
    username: "revatir",
    password_digest: 1234,
    first_name: "Revati",
    last_name: "Rajabhathor",
    fun_fact: "Since joining GA I eat an average of 2 cups of goldfish a day.",
    location: "NYC",
    profile_pic_url: "https://i.imgur.com/YzpBtSy.jpg",
  })


  await Goal.destroy({ where: {} })

  const post1 = await Post.create({
    title: "George Michael Bluth",
    image_url: "https://res.cloudinary.com/briandanger/image/upload/v1572575048/IMG_8563_gmlvnv.jpg",
    description: "George is the kind of cat who played college football in Nebraska and would have gone pro, but he got a bum knee on that last drive against Kansas St., and now he's just a pet cat living at some guy's apartment in West Harlem. He shits in a box.",
    fun_fact: "George can tie a sailor's knot, but he can't untie it."

  })
  const post2 = await Post.create({
    title: "Maebe Funke",
    image_url: "https://res.cloudinary.com/briandanger/image/upload/v1572927794/58078382291__7DC053AA-2438-49A6-A11D-4AC6D3876709_lepde8.jpg",
    description: "Maebe is the kind of cat who has 'resting bitch face' by choice, cause she's bad as hell and she doesn't care who knows it. This chainsmoking heartbreaker will crush your dreams, a 5th of hooch, and take huge dump in a box in the closet.",
    fun_fact: "Maebe will say 'Wham' and 'Bam' but never 'Thank you maam'"
  })
  const post3 = await Post.create({
    title: "S'Mores",
    image_url: "https://res.cloudinary.com/dw9l1orzh/image/upload/v1572968444/signal-2019-01-08-233128_onaedv.jpg",
    description: "S'Mores is the most fraidiest of all cats",
    fun_fact: "S'Mores has no teeth. Ohh noo!!"
  })

  await admin.addPost([post1, post2, post3])

  process.exit();
}

seed();