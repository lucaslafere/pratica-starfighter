import { Request, Response } from 'express';
import axios from 'axios';


export async function postBattle (req: Request, res: Response) {
    const firstUser: string = req.body.firstUser;
    console.log(firstUser)
    const secondUser: string = req.body.secondUser;
    console.log(secondUser)
    try {
        console.log("começando as requests")
        const requestApiFirstUser = await axios.get(`https://api.github.com/users/${firstUser}/repos`);
        const requestApiSecondUser = await axios.get(`https://api.github.com/users/${secondUser}/repos`);
        console.log("fiz as requests")
            console.log(requestApiFirstUser[1].stargazers_count)  
            console.log(requestApiSecondUser)
            // rip nao deu tempo perdi 40min fazendo o typescript me aceitar :(
        
        return res.status(200).send(requestApiFirstUser)
    } catch (error) {
        return res.sendStatus(500);
    }
    
    res.send("deu ruim")
}