const express = require('express');
const webpack = require('webpack');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require("path");
const opn = require('opn');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');



const app = express();
const FILE_URL = "server/data/data.json";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('server/DATA/images'));
let config;

if(process.env.NODE_ENV==='production'){
    config = require('../webpack.config')("prod");
} else{
    config = require('../webpack.config')("dev");
}
const compiler = webpack(config);

app.use(webpackHotMiddleware(compiler));

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
var middlewareDev = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
});

app.use(middlewareDev);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/items', function (req, res) {
    fs.readFile(FILE_URL, 'utf-8', (error, data) => {
        var r = error ? error : data;
        res.send(JSON.parse(r));
    });
})

app.post('/update', function (req, res) {
    fs.readFile(FILE_URL, 'utf-8', (error, data) => {
        let r = req.body;
        let resItem = {}
        if (error) {
            res.send(JSON.parse(error));
        } else {
            var result = JSON.parse(data);
            result.map(item => {
                if (item.id == r.id) {

                    item.name = r.name;
                    item.trainer = r.trainer;
                    item.type = r.type;

                    resItem.id = r.id;
                    resItem.name = r.name;
                    resItem.trainer = r.trainer;
                    resItem.type = r.type;
                    resItem.imageUrl = item.imageUrl;
                }
                return item;
            });

            fs.writeFile(FILE_URL, JSON.stringify(result), (err) => {
                if (err) {
                    console.log(err);
                    res.send({
                        status: "ERROR"
                    });
                } else {
                    res.send({
                        status: 'OK',
                        item: resItem
                    })
                }
            });

        }
    });
});

app.get("*", function(req, res){
    res.write(middlewareDev.fileSystem.readFileSync(path.join(__dirname, "/../dist/index.html")));
    res.end();
} )

// Serve the files on port 3000.
const PORT = 3000;
app.listen(PORT, function () {
    console.log('Example app listening on port 3000!\n');
    opn("http://localhost:"+PORT);
});
