let self = {}
const busquedaService = require('../Services/busquedaService')

self.productos = function(req, res) {
  const query = req.query['q']
  //console.log(111, req.query)
  console.log(query)
  const resultado = busquedaService.getInfoApi(query).then(function(data) {
  let autor = {
      "author": {
        "name": "Paula",
        "lastname" : "Nadal"
      }
    }
  let categorias = []

  let category = data.filters[0].values[0].path_from_root
  //console.log(111, category)
  for (var i = 0; i < category.length; i++) {
      categorias.push(category[i].name)
  }
  
  let cuatro = []

  for (var i = 0; i < data.results.length; i++) {
    let price = data.results[i].price
    let arrDecimal = price.toString().split('.');

    //console.log(arrDecimal)
    //let arrNum = parseInt(arrDecimal)
    //console.log(arrNum)
      
      let producto = {
          //categories: [],
          id: data.results[i].id,
          title: data.results[i].title,
          price: {
              currency: data.results[i].currency_id,
              amount: arrDecimal[0],
              decimals: arrDecimal[1]
          },
          picture: data.results[i].thumbnail,
          condition: data.results[i].condition,
          free_shipping: data.results[i].shipping.free_shipping
      
      }

            cuatro.push(producto)
            //console.log(cuatro)
            //console.log(333, categorias)
        }
  
  let compileProduct = [{
    autor: autor,
    categorias: categorias,
    cuatro: cuatro
  }]
        //aca se hace 

        /*const cat = busquedaService.getCathegory(query).then(function(data){
                
                for (var i = 0; i < data.categories.path_from_root.length; i++){
                    let categoria = {
                        id: data.categories.path_from_root[i].id,
                        nombre: data.categories.path_from_root[i].name
                    }
                }
                console.log(cat)
            })*/
            return res.json(compileProduct)
    }).catch(function(err) {
        console.log(err);
    });
    
  }


module.exports = self;