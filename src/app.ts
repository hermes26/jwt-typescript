import  express, { Application } from "express";
import morgan from "morgan";

import authRoutes from './routes/auth';
import "./database";

const app: Application = express();

//setting
app.set('port', 4000);

//middleware
app.use(morgan('dev'));

//routes
app.use('/api/auth', authRoutes);

export default app;