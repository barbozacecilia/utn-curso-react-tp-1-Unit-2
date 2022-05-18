import axios from "../Config/axios";

/* with axios*/
export async function getAllProducts(filter) {
    return axios.get('/sites/MLA/search?q=' + filter)
}

export async function getById(id) {
  return axios.get('/items/' + id)
}


export async function newProducts() {
    return axios.get('/sites/MLA/search?q=cuestablanca/')
}


/* without axios*/
/*export async function getAllProducts(filter){
return fetch('https://api.mercadolibre.com/sites/MLA/search?q='+filter).then(res=>res.json())
}*/

