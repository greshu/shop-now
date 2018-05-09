import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingridents: Ingredient[];

    constructor(id?: number,name?: string, description?: string, 
        imagePath?: string, ingridents?: Ingredient[]){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingridents = ingridents;
        this.id = id;
    }
}