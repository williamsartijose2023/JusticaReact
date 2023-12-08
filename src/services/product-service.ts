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
        "name": "Coimbra",
        "subDescription" : "Conservatória Do Registo Civil, Predial e Comercial", 
        "time": "0h45m",
        "timePerson": "32",
        "description": "Palácio da Justiça - Praça da República, 3420-307 Tábua",
        "categories": [
            {
                "id": 1,
                "name": "Livros"
            }
        ]
    },
    {
       "id": 2,
       "name": "Faro",
       "subDescription" : "Registo Predial e Comercial", 
       "time": "0h45m",
       "timePerson": "32",
       "description": "Palácio da Justiça - Rua Dra. Laura Ayres, 8104-002 Loulé",
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
        "name": "Lisboa",
        "subDescription" : "Registo Civil Predial e Comercial", 
        "time": "0h45m",
        "timePerson": "32",
        "description": "Rua Heliodoro Salgado n.º 18, 2630-242 Arruda dos Vinhos",
        "categories": [
            {
                "id": 2,
                "name": "Computadores"
            }
        ]
     },
    {
        "id": 15,
        "name": "Porto",
        "subDescription" : "Departamento de Identificação Civil", 
        "time": "0h45m",
        "timePerson": "32",
        "description": "Palacete dos Pestanas, Rua Gonçalo Cristóvão, 371, 4000-260 Porto",
        "categories": [
            {
                "id": 2,
                "name": "Computadores"
            }
        ]
    },
   
   
   
    

]