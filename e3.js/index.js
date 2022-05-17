const express = require('express');
const { path } = require('express/lib/application');
const { send } = require('express/lib/response');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())

// path.join() join sirve para juntar url desde cualquier sistema operativo (ya que algunos sistemas operativos no usan "/" para pasar entre rutas)
const items = [
    {  id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
    {  id: 2, nombre: 'FIFA 22 PS5' , precio: 1000},
    {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
    {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
    {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
    {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
  ]

let puerto = 3000

app.listen(puerto, () => {
    console.log(`Servidor levantado en el puerto ${puerto}`)
})

app.use(express.json())

app.post('/products', (req, res)=>{
    res.send({
        description: 'Productos',
        items
      }
      )
})

app.post('/products', (req,res)=>{
    const newItem = {
        id: items.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio,
        status: 'inactive',
    };
    if (!req.body.nombre || !req.body.precio) {
        res.status(400).send("Please enter all fields");
      } else {
        items.push(newItem);
        const response = { newItem, items }
        res.status(201).send(response);
      }
})

// app.put('/:id',(req,res)=>{
//     const found = items.some(item=> item.id === +req.params.id)
//     if(found){
//         items.forEach(item =>{
//             if(+req.params.id === item.id){
//                 item.nombre = req.body.nombre ? req.body.nombre : item.nombre
//                 item.precio = req.body.precio ? req.body.precio : item.precio
//                 res.send({item, items})
//             }
//         })
//     }else {
//         res.status(404).send(`Item with id${req.params.id} not found`)
//     }
// })

// app.delete('/:id', (req,res)=>{
//     const found = items.some(item=> item.id === +req.params.id)

//     if(found){
//         const itemsFiltered = items.filter(item=> item.id !== +req.params.id) //Deja todos los item.id que sean distintos al que entra por parámetro
//         res.send({msg:`Member with id ${req.params.id} has been removed`, itemsFiltered})
//     }else {
//         res.status(404).send(`Member with id ${req.params.id} not found`)
//     }
// })

// app.get('/:precio', (req, res)=>{
//   const filterPrice = items.filter(item  => item.precio === +req.params.precio)
//   res.status(200).send(filterPrice);         
// })

// app.get('/products', (req, res)=>{
//     const filterPrice = items.filter(item  => item.precio >= 50 && item.precio <=250)
//   res.status(200).send(filterPrice);
//   })

// app.get('/:id', (req,res) =>{
//     const found = items.some(item=> item.id === +req.params.id)
//     if(found){
//     const filterProduct = items.filter(item => item.id === +req.params.id )
//     res.status(200).send(filterProduct);
//     } else{
//         res.status(400).send(`id ${req.params.id} don't found`)
//     }
// })

// app.get('/:nombre', (req,res) =>{
//     const found = items.some(item => item.nombre === req.params.nombre)
//     if (found){
//         const productName = items.filter(item => item.nombre == req.params.nombre)
//         console.log(productName)
//         res.status(200).send(productName)
//     } else{
//         console.log("soy el rechazado")
//         res.status(400).send(`name ${req.params.nombre} don't found`)
//     }
// })

app.get('/products', (req, res)=>{
    res.send({
        description: 'Productos',
        items
      }
      )
})








    











