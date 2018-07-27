let self = {}
const busquedaService = require('../Services/busquedaService')

self.productos = function(req, res) {
  const query = req.query.q
  busquedaService.getInfoApi(query).then(function(data) {
  let autor = {
      "author": {
        "name": "Paula",
        "lastname" : "Nadal"
      }
    }
  
  let cuatro = []

  for (var i = 0; i < data.results.length; i++) {
    let price = data.results[i].price
    let arrDecimal = price.toString().split('.');
      
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

      let categorias = []

      if (data.filters.length > 0) {
      let path = data.filters[0].values[0].path_from_root
      for (var i = 0; i < path.length; i++) {
          categorias.push(path[i].name)
    }
     } else {
      let availablePath = data.available_filters[0].values
      for (var i = availablePath.length - 1; i >= 0; i--) {
        categorias.push(availablePath[i].name)
      }
     }
  
  let compileProduct = [{
    autor: autor,
    categorias: categorias,
    items: cuatro
  }]
  
        return res.json(compileProduct)

    }).catch(function(err) {
        console.log(err);
    });
    
  }


module.exports = self;