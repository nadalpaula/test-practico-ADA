let self = {}
const rest = require('restler')

self.productDescription = function(product) { 
  const getDescription =  new Promise(function(resolve, reject) {
  rest.get('https://api.mercadolibre.com/items/' + product + '/description').on('complete', function(result) { 
  resolve(result) 
	}).on('fail', function(error) {
    reject(error)
    })
	
  })
return getDescription
}



module.exports = self;