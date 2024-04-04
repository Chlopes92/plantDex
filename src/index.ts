import express from 'express';
import cors from 'cors';
import AppDataSource from './data-source';
import plantRouter from './routes/PlantRoutes';

AppDataSource.initialize().then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());

    // On teste la connexion à la BDD en faisant une requete GET cela qui affiche Hello World
    // app.get("/", (req, res) => {
    //     res.send("Hello World!");
    // });

    app.use("/api/plants", plantRouter);

    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
});