const express = require('express');
const config = require('../../config');
class ExpressServer {

    constructor() {
        this.app = express();
        this.port = config.port;
        this.basePath = `${config.api.prefix}/users`

        this._middlewares();
        this._routes();
    }

    _middlewares() {
        this.app.use(express.json());
    }

    _routes() {

        this.app.head("/status", (req, res) => {
            res.status(200).end();
        });

        this.app.use(this.basePath, require('../../routes/users'));
    }

    async start() {
        this.app.listen(this.port, (error) => {
            if (error) {
                console.log(error);
                process.exit(1);
            }
        })
    }
        
    
}

module.exports = { ExpressServer }