import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerJson from './swagger.json';
import cors from 'cors';
import { UserRoute } from './routes/UserRoute';
import { AuthRoute } from './routes/AuthRoute';
import { StockRoute } from './routes/StockRoute';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: ['http://localhost:3001', 'https://investment-viewer.vercel.app'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJson));

app.use('/user', UserRoute);

app.use('/auth', AuthRoute);

app.use('/stock', StockRoute);

app.listen(port, () => console.log(`API listening on port ${port}!`));
