import { heroes } from "../data/heroes";


export const getHeroesByPublisher = (publisher)=>
{
 const validPUblishers =  ['DC Comics','Marvel Comics'];
 if (!validPUblishers.includes(publisher)){
    throw new Error(`${publisher} is not a valid publisher`);
 }
 return heroes.filter(heroe => heroe.publisher === publisher);
}
   


