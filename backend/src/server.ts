import express, { type Express,  type Request, type Response } from 'express';
 


const app: Express = express();


// GET method route 
app.get('/', (req: Request, res: Response) =>{
      res.send(`Get request to the homepage`);

});


// POST method Route

app.post ('/', (req: Request, res: Response) => {

      res.send('POST request to the homepage');
});