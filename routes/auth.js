// Set Up
const router = require("express").Router()
const User = require("../models/User.model");
const bcrypt = require('bcrypt');
const passport = require('passport');
const { uploader, cloudinary } = require("../config/cloudinary");


// Recruiter Sign Up / Insomnia Tested X


router.post("/recruiter/signup", uploader.single('imageUrl'), (req,res,next) => {

  
  const {username,password} = req.body;

  if(password.length < 8){
      return res.status(400).json({ message: 'Your password must be 8 chars minimum' });
    } 
    if(username === ""){
      return res.status(400).json({ message: 'Your username cannot be empty' });
    }
    
    User.findOne({username:username}).then(usernameDetected =>{
        if(usernameDetected !== null){
          return res.status(400).json({ message: 'Your username is already taken' });
        } else {
          const salt = bcrypt.genSaltSync();
          const hash = bcrypt.hashSync(password, salt);
      
    User.create({
      username: username,
      password: hash,
      imageUrl: req.body.imageUrl,
      role: 'Recruiter',
      companyname:req.body.companyname,
      firstName: req.body.firstname,
      lastName: req.body.lastname
      
    }).then((recruiterToDB) => {
    //  res.status(201).json(recruiterToDB)
      passport.authenticate('local', (err, recruiterToDB) => {
        if(err){
          return res.status(500).json({message: 'Error while attemting to login'})
        }
    if(!recruiterToDB){
      return res.status(400).json({message: 'Wrong credentials'})
    }
    req.login(recruiterToDB, err => {
      if(err){
        return res.status(500).json({message: 'Error while attemting to login'})
      } else {
        return res.status(200).json(recruiterToDB);
      }
    })
      })(req, res)
    }).catch(error => {
      next(error)
     })
    }
  })

  
})

// Recruiter Log In
router.post("/recruiter/login", (req,res,next) => {
  passport.authenticate('local', (err, user) => {
    if(err){
      return res.status(500).json({message: 'Error while attemting to login'})
    }
if(!user){
  return res.status(400).json({message: 'Wrong credentials'})
}
req.login(user, err => {
  if(err){
    return res.status(500).json({message: 'Error while attemting to login'})
  } else {
    return res.status(200).json(user);
  }
})
  })(req, res)
})

// User Logged in
router.get("/loggedin", (req,res, next) => {
  res.json(req.user)
  res.send('Hello');
})

// Graduate Sign Up / Insomnia Tested X
router.post("/graduate/signup", uploader.single('photo'), (req,res,next) => {

 
  const {username, password } = req.body;
  if(password.length < 8){
      return res.status(400).json({ message: 'Your password must be 8 chars minimum' });
    } 
    if(username === ""){
      return res.status(400).json({ message: 'Your username cannot be empty' });
    }
    
    User.findOne({username:username}).then(usernameDetected =>{
        if(usernameDetected !== null){
          return res.status(400).json({ message: 'Your username is already taken' });
        } else {
          const salt = bcrypt.genSaltSync();
          const hash = bcrypt.hashSync(password, salt);
      
          const {firstName,lastName, catchphrase,bootCampGraduation,emailAddress, bootCampName, bootCampCity, industry,InputList, yearsInIndustry, languagesSpoken,currentlyLearning, myGif, githubUsername, githubProfile,linkedInProfile, mediumProfile} = req.body

          User.create({
            firstName,
            lastName, 
            username: username,
            password: hash, 
            role: 'Graduate',
            imageUrl: req.body.imageUrl,
            catchphrase,
            bootCampGraduation,
            emailAddress, 
            bootCampName, 
            bootCampCity, 
            InputList,
            industry, 
            yearsInIndustry, 
            languagesSpoken,
            currentlyLearning, 
            myGif, 
            githubUsername, 
            githubProfile,
            linkedInProfile, 
            mediumProfile, 
          }).then((graduateToDb) => {
            //  res.status(201).json(graduateToDb)
              passport.authenticate('local', (err, graduateToDb) => {
                if(err){
                  return res.status(500).json({message: 'Error while attemting to login'})
                }
            if(!graduateToDb){
              return res.status(400).json({message: 'Wrong credentials'})
            }
            req.login(graduateToDb, err => {
              if(err){
                return res.status(500).json({message: 'Error while attemting to login'})
              } else {
                return res.status(200).json(graduateToDb);
              }
            })
              })(req, res)
            }).catch(error => {
              next(error)
             })
            }
          })
})

// Graduate Log In
router.post("/graduate/login", (req,res,next) => {
  passport.authenticate('local', (err, user) => {
    if(err){
      return res.status(500).json({message: 'Error while attemting to login'})
    }
if(!user){
  return res.status(400).json({message: 'Wrong credentials'})
}
req.login(user, err => {
  if(err){
    return res.status(500).json({message: 'Error while attemting to login'})
  } else {
    return res.status(200).json(user);
  }
})
  })(req, res)
})

// to delete a user
router.delete('/user/:id', (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => {
      req.session.destroy()
      res.status(200).json({ message: 'user deleted' })
    })
    .catch(err => {
      next(err)
    })
});

// Universal Logout
router.delete('/logout', (req,res) => {
  req.logout();
  req.session.destroy()
  res.status(200).json({
      message: "Logout successful"
  })
})


module.exports = router;