//import {  // type Request, type Response} from 'express';


import express,  { type Express, type Request , type Response} from 'express';

const server:  Express = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }))

server.post('/' , (req: Request, res: Response) => {
      console.log(req.body)
      res.json(req.body);
})


console.log("Server is live");