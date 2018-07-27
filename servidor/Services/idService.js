let self = {}
const rest = require('restler')

self.idProduct = function(id) {
	const getId = new Promise(function(resolve, reject){
		console.log(id)
		rest.get('https://api.mercadolibre.com/items/' + id).on('complete', function(result){
			resolve(result)
		}).on('fail', function(error) {
    reject(error)
    })
	})
	return getId
}


module.exports = self;