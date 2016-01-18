var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    dealCtlr = require('./server/controllers/deal_ctlr');

mongoose.connect('mongodb://localhost:27017/deal-demo');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

//REST API
app.get('/api/deals', dealCtlr.list);
app.post('/api/deals', dealCtlr.create);

app.listen(3000, function() {
  console.log('I\'m Listening...');
})