import pegarMoedas from "../services/moedas.js";

async function pegarMoedasController(moedas){
    return pegarMoedas(moedas);
}

export default pegarMoedasController;