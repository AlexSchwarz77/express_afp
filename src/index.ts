import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './routes';
import * as cors from 'cors';

const app = express();

const allowedOrigins = ['http://localhost:5500', 'http://127.0.0.1:5500']
const options: cors.CorsOptions = {
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    optionsSuccessStatus: 204
};

app.options("*splat", cors(options));
app.use(cors(options));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/v1', routes);

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`Listening on http://localhost:${port}`);  
    
})