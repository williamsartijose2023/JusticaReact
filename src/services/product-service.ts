import { ProductDTO } from "../models/product";

export function findAll() : ProductDTO[] {
    return products;
}

export function findById(id: number) : ProductDTO | undefined {
    return products.find(x => x.id === id);
}

const products : ProductDTO[] = [
    {
        "id": 1,
        "name": "Lisboa",
        "time": "0h45m",
        "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg",
        "description": "Alameda dos Oceanos 13411990-083 Lisboa",
        "categories": [
            {
                "id": 1,
                "name": "Livros"
            }
        ]
    },
    {
       "id": 2,
       "name": "Porto",
       "time": "1h27m",
       "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
       "description": "Av. de Fernão de Magalhães 1862, 4350-158",
       "categories": [
           {
               "id": 2,
               "name": "Eletrônicos"
           },
           {
               "id": 3,
               "name": "Computadores"
           }
       ]
    },
    {
        "id": 7,
        "name": "Coimbra",
        "time": "0h23m",
        "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/7-big.jpg",
        "description": "Palácio da Justiça Praça da República, 3420-307",
        "categories": [
            {
                "id": 2,
                "name": "Computadores"
            }
        ]
     },
    {
        "id": 15,
        "name": "Faro",
        "time": "0h30m",
        "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/15-big.jpg",
        "description": "Largo Dr. Francisco Sa Carneiro, 8000-151 Faro",
        "categories": [
            {
                "id": 2,
                "name": "Computadores"
            }
        ]
    },
   
   
   
    

]