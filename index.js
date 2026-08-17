import * as http from 'node:http';
import pegarMoedasController from './controllers/moedasController.js';

let siglaMoedas = ['EUR','JPY','GBP']

const server = http.createServer(async(req, res)=>{
    try{
        const moedas = await pegarMoedasController(siglaMoedas);

        res.writeHead(200,{
            'content-type':'application/json; charset=utf-8'
        })

        res.end(JSON.stringify(moedas))
    }catch(error){
        res.writeHead(500,{'content-type':'application/json'});
        res.end(JSON.stringify({erro:'Falha ao buscar cotação'}))
    }
})

server.listen(8080,()=>{
    console.log('Servidor funcionando em http://localhost:8080')
});