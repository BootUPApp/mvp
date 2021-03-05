const router = require("express").Router()
const passport = require("passport");
const User = require("../models/user.model");

// Recruiter Sign Up

router.post('/recruiter/signup', (req,res, next) => {
  const { username, password } = req.body;
  if (password.length < 8) {
    return res.status(400).json({ message: 'Your password must be 8 chars minimum' });
  }
  if (username === '') {
    return res.status(400).json({ message: 'Your username cannot be empty' });
  }

  // check if username exists in database -> show message
  User.findOne({ username: username })
    .then(found => {
      if (found !== null) {
        return res.status(400).json({ message: 'Your username is already taken' });
      } else {
        // hash the password, create the user and send the user to the client
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);

        User.create({
          username: username,
          password: hash
        })
          .then(dbUser => {
            // login with passport:
            req.login(dbUser, err => {
              if (err) {
                return res.status(500).json({ message: 'Error while attempting to login' })
              }
              // we don't redirect to an html page anymore, we just send the user obj to the client
              return res.status(200).json(dbUser);
            });
          })
          .catch(err => {
            res.json(err);
          })
      }
    })
})

// Recruiter Login
router.post('/recruiter/login', (req,res,next) => {
  passport.authenticate('local', (error, user) => {
    if(error) {
      return res.status(500).json({ message: 'Error while attempting to login' })
    }
    if(!user) {
      return res.status(400).json({ message: 'wrong credenitals' })
    }
    req.login((user,error) => {
      if(error){
        return res.status(500).json({ message: 'Error while attempting to login' })
      } else {
        return res.status(200).json(user);
      }
    })
  })
})

// Recruiter LogOut
router.delete('/recruiter/logout', (req,res,next) => {
  req.logout();
  res.status(200).json({message: 'Logout Sucessful' })
})

// Recruiter Loggedin
router.get("/recruiter/loggedin", (req,res,next) => {
  res.json(req.user);
})


// Graduate SignUp

router.post('/graduate/signup', (req,res, next) => {
  const { username, password } = req.body;
  if (password.length < 8) {
    return res.status(400).json({ message: 'Your password must be 8 chars minimum' });
  }
  if (username === '') {
    return res.status(400).json({ message: 'Your username cannot be empty' });
  }
  // check if username exists in database -> show message
  User.findOne({ username: username })
    .then(found => {
      if (found !== null) {
        return res.status(400).json({ message: 'Your username is already taken' });
      } else {
        // hash the password, create the user and send the user to the client
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);

        User.create({
          username: username,
          password: hash
        })
          .then(dbUser => {
            // login with passport:
            req.login(dbUser, err => {
              if (err) {
                return res.status(500).json({ message: 'Error while attempting to login' })
              }
              // we don't redirect to an html page anymore, we just send the user obj to the client
              return res.status(200).json(dbUser);
            });
          })
          .catch(err => {
            res.json(err);
          })
      }
    })
})


