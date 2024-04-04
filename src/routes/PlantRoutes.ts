import { Router } from "express";
import PlantController from "../controllers/PlantControllers";

const plantRouter = Router();
const plantController = new PlantController();

plantRouter.get("/", (req, res) => {
    console.log("PlantRouter - GetAll");
    plantController.getAll(req, res);
});

plantRouter.get("/:id", (req, res) => {
    console.log("PlantRouter - GetById");
    plantController.getById(req, res);
});

plantRouter.post("/", (req, res) => {
    console.log("PlantRouter - Create");
    plantController.create(req, res);
});

plantRouter.put("/:id", (req, res) => {
    console.log("PlantRouter - Update");
    plantController.update(req, res);
});

plantRouter.delete( "/:id" , ( req , res )=>{
    console.log("PlantRouter - Delete");
    plantController.delete(req,res); 
 } ); 

export default plantRouter;