import pegarMoedasController from './controllers/moedasController.js';
import express from 'express';

const porta = 8080;
const app = express();

app.get('/cotacoes/:moedas',async (req,res)=>{
    
    try{
        const arrayMoedas = req.params.moedas.split('-');
        const resposta = await pegarMoedasController(arrayMoedas);
        
        return res.status(200).json(resposta);
    }catch(error){
        console.error('Erro:', error.message);
        return res.status(500).json({ erro: 'Falha ao buscar cotações' });
    }

    res.status(200).json(resposta);
})

const servidor = app.listen(porta,()=>{
    console.log(`Servidor operando na URL: http://localhost:${porta}`)
})