import { type Request, type Response } from 'express';



const app: Express = express():


// GET method route 
app.get("./", (req: Request, res: Response) =>{
      res.send("Get request to the hoempage")
}) 