const router = require("express").Router();
const Recruiter = require("../models/Recruiter");

// GET Recruiter / Insomnia Test x
router.get("/recruiter", (req,res, next) => {
  Recruiter.find().then(recruitersFromDB => {
      res.json(recruitersFromDB);
  }).catch(error => {
    next(error);
  })
})

// GET Specifc Recruiter / Insomnia Test x
router.get("/recruiter/:id", (req,res, next) => {
  Recruiter.findById(req.params.id).then((selectedRecruiterfromDB) => {
      res.status(200).json(selectedRecruiterfromDB);
  }).catch(error => {
    next(error);
  })
})

// POST Recruiter / Insomnia Test x
router.post("/recruiter", (req, res, next) => {
  Recruiter.create({
     firstName: req.body.firstName,
     secondName: req.body.secondName,
     profileImage: req.body.profileImage, // Attention needs to be req.file due to multer/Cloudniary
     emailAddress: req.body.emailAddress,
     companyName: req.body.companyName,
     // challenges: //
     // inbox:
  }).then(recruiterToDB => {
      res.status(201).json(recruiterToDB)
  }).catch(error => {
    next(error);
  })
});

// PUT Recruiter  - Update Profile / Insomnia Test x
router.put("/recruiter/:id", (req,res,next) => {
  Recruiter.findByIdAndUpdate(req.params.id, {
    firstName: req.body.firstName,
    secondName: req.body.secondName,
    profileImage: req.body.profileImage, // Attention needs to be req.file due to multer/Cloudniary
    emailAddress: req.body.emailAddress,
    companyName: req.body.companyName, 
  }, 
  {new: true})
  .then(recruitersFromDB => {
    res.status(200).json(recruitersFromDB)
  }).catch(error => {
      next(error);
  })
})

// DELETE Recruiter 
router.delete("/recruiter/:id", (req,res,next) => {
  Recruiter.findByIdAndDelete(req.params.id).then(deletedRecruiter => {
      res.status(200).json({message: 'Profile Succesfully deleted'})
  }).catch(error => {
    next(error);
  })
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
