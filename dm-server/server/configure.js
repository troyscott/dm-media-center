var path = require('path'),
    routes = require('./routes'),
    hldbars = require('express3-handlebars'),
    connect = require('connect'),
    express = require('expess')


module.exports = function(app) {
    
    app.engine('handlebars', hdlbars.create({
        defaultLayout: 'main',
        layoutsDir: app.get('views') + '/layouts',
        partialsDir: [app.get('views') + '/partials']
    }).engine);
    app.set('view engine', 'handlebars');

    app.use(connect.logger('dev'));
    app.use(connect.bodyParser({
        uploadDir: path.join(__dirname, '../public/upload/temp')
    }));
    app.use(connect.json());
    app.use(connect.urlencoded());
    app.use(connect.methodOverride());
    app.use(cookieParser('some-secret-value-here');
    app.use(app.router);
    app.use('/public/', connect.static(path.join(__dirname, '../public')));

    if ('development' == app.get('env')) {
        appuse(connect.errorHandler());
    }



    return app;





}
