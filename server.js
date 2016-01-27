//console.log('May the Force be with You')

var express 	= require('express')
	bodyParser  = require('body-parser')
	MongoClient = require('mongodb').MongoClient
	app			= express()


app.use(bodyParser.urlencoded({extended: true}))


app.get('/', function(req, res) {
  res.sendFile('/Users/brandon/Desktop/Scratch/quote_app/index.html')
})


//Gets Quotes from Mongolab database | find method available in collection method
app.get('/', (req, res) => {
  var cursor = db.collection('quotes').find()
})


app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})


var db 


MongoClient.connect('mongodb://quoteking:quoteking@ds047955.mongolab.com:47955/movie-quotes', (err, database) => {
	if (err) return console.log(err)
	db = database
	app.listen(3000, () => {
		console.log('listening on 3000')

	})
})

