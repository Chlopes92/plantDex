import AppDataSource from "../data-source";
import { Plant } from "../entities/Plant";

class PlantService {
    private plantRepository = AppDataSource.getRepository(Plant)

    async getAll() {
        console.log("PlantService - GetAll");
        return this.plantRepository.find();
    }

    async getById(id: number) {
        console.log("PlantService - GetById");
        return this.plantRepository.findOneBy({ id: id });
    }

    async create(plant: Plant){
        console.log("PlantService - Create");
        const newPlant = await this.plantRepository.create(plant);
        return this.plantRepository.save(newPlant);
    }

    async update(id: string, plant: Plant){
        console.log( "PlantService - Update" );
        return this.plantRepository.update(id, plant);
    }

    async delete(id: string) {
        console.log("PlantService - Delete");
        return this.plantRepository.delete(id);
    }

}

export default PlantService;