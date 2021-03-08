// Set Up
const router = require("express").Router()
const User = require("../models/User.model");
const bcrypt = require('bcrypt');
const passport = require('passport');
const { uploader, cloudinary } = require("../config/cloudinary");


// Recruiter Sign Up / Insomnia Tested X

router.post("/recruiter/signup", uploader.single('imgPath'), (req,res,next) => {
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
      imagePath: req.body.imagePath,
    }).then(recruiterToDB => {
      res.status(201).json(recruiterToDB)
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

// Recruiter Logged in
router.get("/recruiter/loggedin", (req,res, next) => {
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
      
          const {firstName, lastName, catchphrase,bootCampGraduation,emailAddress, bootCampName, bootCampCity, industry, yearsInIndustry, languagesSpoken,currentlyLearning, myGif, githubUsername, githubProfile,linkedInProfile, mediumProfile} = req.body

          User.create({
            firstName,
            lastName, 
            username: username, 
            imgPath: req.file.path,
             imgName:req.file.originalname,
             publicId: req.file.filename,
            catchphrase,
            bootCampGraduation,
            emailAddress, 
            password: hash, 
            bootCampName, 
            bootCampCity, 
            skills:[{ skill: req.body.skill, rating: req.body.rating}],
            industry, 
            yearsInIndustry, 
            languagesSpoken,
            currentlyLearning, 
            myGif, 
            githubUsername, 
            githubProfile,
            linkedInProfile, 
            mediumProfile, 
          }).then(sendGradToDB => {
            res.status(201).json(sendGradToDB)
          }).catch(error => {
            next(error);
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

// Recruiter Logged in
router.get("/graduate/loggedin", (req,res, next) => {
  res.json(req.user)
})



// Universal Logout
router.delete('/logout', (req,res) => {
  req.logout();
  res.status(200).json({
      message: "Logout successfull"
  })
})


module.exports = router;