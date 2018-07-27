let self = {}
const detallesService = require('../Services/detallesService')
const idService = require('../Services/idService')

self.detalles = function(req, res) {
	let product = req.params.id
	idService.idProduct(product).then(function(datos){
		detallesService.productDescription(product).then(function(data){
			//console.log(1111, datos)
			datos.description = data
			//console.log(2222, datos.data)

		let autor = {
      "author": {
        "name": "Paula",
        "lastname" : "Nadal"
      }
    }

    let description = []
    let items = []

  let price = datos.price
  //console.log(5555, datos)
  let arrDecimal = price.toString().split('.');

  let producto = {
  		item: {
			id: datos.id,
			title: datos.title,
			price: {
			currency: datos.currency_id,
			amount: arrDecimal[0],
			decimals: arrDecimal[1],
			},
			picture: datos.pictures[0].url,
			condition: datos.condition,
			free_shipping: datos.shipping.free_shipping,
			sold_quantity: datos.sold_quantity,
			description: datos.description.plain_text
			}
			}

			let todo = {
			author: autor,
			item: producto
		}
		return res.json(todo)
})

		
		
	
  }).catch(function(err) {
        console.log(err);
    })
	//}//cierra funcion
}

module.exports = self;