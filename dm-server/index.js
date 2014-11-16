
var express = require('express'),
    config = require('./server/configure'),
    app = express();

app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
app = config(app);

var server = app.listen(app.get('port'), function() {
    console.log('DM Server up at : http://localhost' + app.get('port'));

}

);
