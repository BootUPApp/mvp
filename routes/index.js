const router = require("express").Router();
const User = require("../models/User.model")
const { uploader, cloudinary } = require("../config/cloudinary");


router.post('/upload', uploader.single('imageUrl'), (req, res, next) => {
  // console.log('file is: ', req.file)
 
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
  // get secure_url from the file object and save it in the
  // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
 
  res.json({ secure_url: req.file.path });
});

// GET Recruiter / Insomnia Test x
router.get("/recruiters", (req,res, next) => {
  User.find({role: 'Recruiter'}).then(recruitersFromDB => {
      res.json(recruitersFromDB);
  }).catch(error => {
    next(error);
  })
})

// GET Specific Recruiter / Insomnia Test x
router.get("/recruiter/:id", (req,res, next) => {
  User.findById(req.params.id).then((selectedRecruiterfromDB) => {
      res.status(200).json(selectedRecruiterfromDB);
  }).catch(error => {
    next(error);
  })
})

// POST Recruiter
// Inside "./routes/auth.js"

// PUT Recruiter  - Update Profile / Insomnia Test x
router.put("/recruiter/:id", (req,res,next) => {
  console.log(req.body, "this is the body")
  User.findByIdAndUpdate(req.params.id, {
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    imageUrl: req.body.imageUrl,
    emailAddress: req.body.emailaddress,
    companyname: req.body.companyname, 
    username: req.body.username
  }, 
  {new: true})
  .then(recruitersFromDB => {
    res.status(200).json(recruitersFromDB)
  }).catch(error => {
      next(error);
  })
})

// Its getting done

// DELETE Recruiter 
router.delete("/recruiter/:id", (req,res,next) => {
  User.findByIdAndDelete(req.params.id).then(deletedRecruiter => {
      res.status(200).json({message: 'Profile successfully deleted'})
  }).catch(error => {
    next(error);
  })
})



/* !!! Graduates Routes  !!!*/

// Get Graduates / Insomnia Test x
router.get("/graduates", (req,res,next) => {
  User.find({role: 'Graduate'}).then(graduatesFromDB => {
        res.status(200).json(graduatesFromDB);
      }).catch(error => {
        next(error);  
      })
})

// // Get Selected Graduate / Insomnia Test x
router.get("/graduates/:id", (req,res,next) => {
  User.findById(req.params.id).then(specficGraduateFromDB => {
    res.status(200).json(specficGraduateFromDB);
  }).catch(error => {
    next(error);  
  })
})

// PUT Graduate / Insomnia Test X
router.put("/graduates/:id", uploader.single('photo'), (req, res, next) => {
  // const {firstName, lastName, username, catchphrase, bootCampGraduation,emailAddress, password, bootCampName, bootCampCity, industry, yearsInIndustry, languagesSpoken,currentlyLearning, myGif, githubUsername, githubProfile,linkedInProfile, mediumProfile} = req.body;  // **! BE Mindful Imagefile probably needs to be a req.file
  User.findByIdAndUpdate(req.params.id,{
    firstName: req.body.firstname, 
    lastName: req.body.lastname,
    username: req.body.username,
    // imgPath: req.file.path,
    // imgName:req.file.originalname,
    // publicId: req.file.filename,
    catchphrase: req.body.catchphrase,
    bootCampGraduation: req.body.bootCampGraduation,
    emailAddress: req.body.emailaddress, 
    // password, 
    // bootCampName, 
    // bootCampCity, 
    InputList: req.body.InputList,
    // industry, 
    // yearsInIndustry, 
    // languagesSpoken,
    currentlyLearning: req.body.currentlyLearning, 
    // myGif, 
    // githubUsername, 
    githubProfile: req.body.githubProfile,
    linkedInProfile: req.body.linkedInProfile, 
    // mediumProfile: req.body.mediumProfile 
  }, {new: true}).then(sendGradToDB => {
    res.status(201).json(sendGradToDB)
  }).catch(error => {
    next(error);
  })
})

// Delete Graduate 
router.delete("/graduates/:id", (req,res,next) => {
  User.findByIdAndDelete(req.params.id).then(deletedGraduate => {
      res.status(200).json({message: 'Profile successfully deleted'})
  }).catch(error => {
    next(error);
  })
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;

