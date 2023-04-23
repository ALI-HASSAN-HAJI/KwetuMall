import express from 'express';
import multer from 'multer';
import fs from 'fs';
import playerModels from '../models/playerModels.js';


const router = express.Router();


// Get all the products;
router.get('/', async (req, res) => {
  let player = await playerModels.find();
  res.send(player);
});

// Get one player;
router.get('/:id', async (req, res) => {
  let id = req.params.id;
  const result = await playerModels.findOne({_id: id});
  res.send(result);
})

// This is how to create player
const upload = multer({ dest: 'uploads/'});
const uploadPlayerImages = upload.fields([
  {name: 'image', maxCount: 1},
  {name: 'images', maxCount: 5}
])


router.post('/create', uploadPlayerImages, async (req, res) => {
  console.log(req.files.image[0])
  let img = req.files.image[0]
  let fileType = (img.mimetype).split('/')[1];
  let newFileName = img.filename + '.' + fileType;
  fs.rename(`./uploads/${img.filename}`, `./uploads/${newFileName}`, () => {
    console.log("File renamed Successfully");
  });

  // Uploading multiple images;
  let multipleImages = req.files.images
  let imagesArray = multipleImages.map((image) => {
    let mFileType = (image.mimetype).split('/')[1];
    let mNewFileName = image.filename + '.' + mFileType; 
    fs.rename(`./uploads/${image.filename}`, `./uploads/${mNewFileName}`, () => {
      console.log("File renamed Successfully!!");
    });
   return mNewFileName;
  })
  console.log(imagesArray);

  const newPlayer = playerModels({
    name: req.body.name,
    number: req.body.number,
    nationality: req.body.nationality,
    goals: req.body.goals,
    assist: req.body.assist,
    position: req.body.position,
    image: newFileName,
    images: imagesArray
  });
  let result = await newPlayer.save();
  res.send(result);
});


// Updating players apart from their pictures;
router.post('/update/:id', async (req, res) => {
  console.log(req.body);
  const player = await playerModels.findOne({_id: req.params.id});
  player.name = req.body.name;
  player.number = req.body.number;
  player.nationality = req.body.nationality;
  player.goals = req.body.goals;
  player.assist = req.body.assist;
  player.position = req.body.position;
  const result = await player.save()
  res.send(result);
});

//Deleting a player;
router.post('/delete/:id', async (req, res) => {
  let id = req.params.id;
  await playerModels.deleteOne({_id: id});
  res.send("a player has been deleted successfully!!!");
});








export default router;