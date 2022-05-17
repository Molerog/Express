const URL = "http://localhost:3000/products/"
// console.log(URL);

const $containerList = document.getElementById("containerList");
const $inputValue = document.getElementById("inputValue");
const $search = document.getElementById("search");



$search.addEventListener('click',e =>{
    e.preventDefault()
    const input = $inputValue.value
    postApi(input)
})

async function peticionApi(){
    try {
        const res = await axios.get("http://localhost:3000/products/");
        const arr = res.data.items
        pintarProducto(arr)
    } catch (error) {
        console.log(error)
    }   
}

// async function postApi(){
//     try {
//         const res = await axios.post(URL + input);
//         const arr = res.data.items
//         pintarProducto(arr)
//     } catch (error) {
//         console.log(error)
//     }   
// }


function pintarProducto(arr){
       arr.forEach(e => {
       $containerList.innerHTML += ` <li  class="list-group-item d-flex justify-content-between"><strong>${e.nombre}</strong> ${e.precio}euros</li>`
   })
    
}

peticionApi();

// axios
//   .get(URL)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });