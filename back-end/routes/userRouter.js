const { Router } = require('express');
const { User } = require('../models');
const { hashPassword, genToken, checkPassword, restrict } = require('../services/auth');

const userRouter = Router();

const buildAuthResponse = (user) => {
  const userData = {
    username: user.username,
    id: user.id,
  };

  const token = genToken(userData);

  return {
    user: userData,
    token
  };
};

userRouter.get('/', async (req, res) => {
  const user = await User.findAll();
  res.json(user);
})

userRouter.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (e) {
    console.error(e);
    res.json({ err: e.message })
  }
})

userRouter.post('/register', async (req, res, next) => {
  try {
    const password_digest = await hashPassword(req.body.password);
    const { username, fun_fact, location, first_name, last_name, profile_pic_url } = req.body;

    const user = await User.create({
      username,
      password_digest,
      fun_fact,
      location,
      first_name,
      last_name,
      profile_pic_url
    });

    const respData = buildAuthResponse(user);

    res.json(respData);
  } catch (e) {
    next(e);
  }
});

userRouter.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (await checkPassword(req.body.password, user.password_digest)) {
      const respData = buildAuthResponse(user);

      res.json(respData);
    } else {
      res.status(401).send('Invalid Credentials');
    }
  } catch (e) {
    console.log(e)
    res.status(401).send('Invalid Credentials');
  }
});

userRouter.get('/verify', restrict, (req, res) => {
  const user = res.locals.user;
  res.json(user);
})

module.exports = userRouter;
