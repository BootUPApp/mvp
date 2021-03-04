const router = require("express").Router();
const Recruiter = require("../models/Recruiter");

// Get Recruiter / Insomnia Test x
router.get("/recruiter", (req,res, next) => {
  Recruiter.find().then(recruiterFromDB => {
      res.json(recruiterFromDB);
  }).catch(error => {
    next(error);
  })
})


// Post Recruiter / Insomnia Test x
router.post("/recruiter", (req, res, next) => {
  Recruiter.create({
     firstName: req.body.firstName,
     secondName: req.body.secondName,
     profileImage: req.body.profileImage, // Attention needs to be req.file due to multer/Cloudniary
     emailAddress: req.body.emailAddress,
     // challenges: //
     // inbox:
  }).then(recruiterToDB => {
      res.status(201).json(recruiterToDB)
  }).catch(error => {
    next(error);
  })
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
