async function pegarMoedas(moedas = ['USD']) {

    const promessas = moedas.map(async (moeda)=>{
        const resposta = await fetch(`https://economia.awesomeapi.com.br/json/last/${moeda}-BRL`);

        if(!resposta.ok){
            throw new Error(`Erro ao buscar moeda ${moeda}`);
        }

        return await resposta.json();
    })

    const conjunto = await Promise.allSettled(promessas);
    return conjunto;
    
}

export default pegarMoedas;