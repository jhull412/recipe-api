const { Router } = require("express");
const recipesController = require("../controllers/recipesController");
const app = Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    console.log(req.params.id);
    cb(null, "./public/images");
  },
  filename: function (req: any, file: any, cb: any) {
    const ext = file.originalname.split(".").pop();
    const fileName = `${req.params.id}.${ext}`;
    cb(null, fileName);
  },
});

const upload = multer({ dest: "uploads/", storage: storage });

app.get("/recipes", recipesController.getRecipes);
app.get("/recipesList", recipesController.getRecipesList);
app.get("/recipes/:id", recipesController.findById);
app.post("/recipes", recipesController.create);
app.post(
  "/recipes/:id",
  upload.single("fileUpload"),
  recipesController.updateImage
);

module.exports = app;
