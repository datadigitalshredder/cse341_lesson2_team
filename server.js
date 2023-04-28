// ATTEMPT ONE - DID NOT WORK

// const express = require('express');
// const app = express();
// const router = express.Router();
// const cors = require('cors');

// router.get('/professional', (req,res) => {
//   res.send('Innocent Hove');
// });

// router.get('/professional/image', (req,res) => {
// //   const url = require('/cse341_lesson2_team/image.jpg')
// //   res.sendFile('images/image.jpg')
//   res.sendFile('C:/Users/admin/Documents/BYUPathway/webdevcertificate/cse341_lesson2_team/images/image.jpg');
// });

// router.get('/professional/namelink', (req,res) => {
//   res.send("Innocent");
// });

// router.get('/professional/primarydescription', (req,res) => {
//     res.send("Operations Supervisor (R&D) at Cropserve (Pvt) Ltd | Data Scientist in the making \
//     | Web & Computer Programming Certificate | Python, PHP, HTML, CSS, JavaScript");
//   });

// router.get('/professional/workdecription1', (req,res) => {
//   res.send("I have an avid desire in Data Science, the merge of Statistics and Computer Science in \
//   Biology. I have a certificate in Web and Computer Programming and I'm working on a degree in \
//   Applied Technology. I have entry-level programming experience in Python, PHP, HTML, CSS, and \
//   JavaScript. I am a self-starter and a strong candidate for a microbiology job because I am highly \
//   skilled in planning and conducting complex research projects, isolating and maintaining cultures \
//   of microorganisms, and identifying and classifying microorganisms. Moreover, I have a demonstrated \
//   ability to administer the work of biological technicians and set up technical reports, \
//   study papers, and recommendations derived from research findings, of which has been a solid \
//   track record of positioning companies for successful improvement in the areas of Molecular, \
//   Food, and Industrial Microbiology.");
// });

// router.get('/professional/workdecription2', (req,res) => {
//     res.send("I work as the Operations Supervisor at Cropserve (Pvt) Ltd. My main tasks include all \
//     imports logistics work in a cost effective manner. I'm also responsible for product research and development which includes product testing and registration.");
//   });

// router.get('/professional/linktitletexts', (req,res) => {
//     res.send("Links");
// });

// router.get('/professional/linkedinlink', (req,res) => {
//     res.send("LinkedIn: https://www.linkedin.com/in/innocent-hove/");
// });

// router.get('/professional/githublink', (req,res) => {
//     res.send("Github: https://github.com/datadigitalshredder");
// });

// router.get('/professional/contacts', (req,res) => {
//     res.send("Innocent Hove Email: tneconni101@gmail.com; Mobile: +263 78 326 5928");
// });

// app.use('/', router);

// const port = 8080;

// app.listen(process.env.port || port);

// console.log('Web Server is listening at port '+ (process.env.port || port));

// ATTEMPT TWO - WORKED
const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db/db');
app.use(cors());

db.conncetDB()
  .then((professionalInfo) => {
    app.locals.professionalInfo = professionalInfo;
    app.use(express.json());

    app.get("/professional", (req, res) => {
      res.json(professionalInfo);
    })

  })

const professionalInfo = {
  professionalName: "Innocent Hove",
  // image: "base64-encoded-image-data",
  image: "C:/Users/admin/Documents/BYUPathway/webdevcertificate/cse341_lesson2_team/images/image.jpg",
  nameLink: {
    firstName: "Innocent",
    url: "http://innocenthove.com"
  },
  primaryDescription: "I'm a notice in web development",
  workDescription1: "I have worked on a few projects",
  workDescription2: "I love Python",
  linkTitleText: "Connect with me",
  linkedInLink: {
    text: "LinkedIn",
    link: "http://linkedin.com/in/innocent-hove/"
  },
  githubLink: {
    text: "GitHub",
    link: "http://github.com/innocenthove"
  }
}

// Create and REST API endpoint to GET all data required by the frontend code
app.get("/professional", (req, res) => {
  res.json(professionalInfo);
})

const port = 8080;

app.listen(process.env.port || port);

console.log('Web Server is listening at port '+ (process.env.port || port));