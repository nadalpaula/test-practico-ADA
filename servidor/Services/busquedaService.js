const restler = require('restler')
let self = {}

self.getInfoApi = function(query) {
const apiData = new Promise (function (resolve, reject){
	restler.get('https://api.mercadolibre.com/sites/MLA/search?q=:' + query + '&limit=4' ).on('complete', function (result){
		resolve(result)	
})
})
return apiData
}



/*self.getCathegory = function(query) {
const catData = new Promise (function (resolve, reject){
	restler.get('https://api.mercadolibre.com/categories/' + query).on('complete', function (result){
		resolve(result)	
})
})
return catData
}*/





module.exports = self;