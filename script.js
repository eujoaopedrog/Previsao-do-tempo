const key = "425b3f6ef37dcccdff0c2c79e6492b9a";

function colocarDadosNaTela(dados) {
    console.log(dados)
    document.querySelector('.windSpeed').innerHTML = 
    document.querySelector('.title-min').innerHTML = "Mínima:"
    document.querySelector('.title-atual').innerHTML = "Atual:"
    document.querySelector('.title-max').innerHTML = "Máxima:"
    document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name;
    document.querySelector('.p-temp').innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector('.p-min').innerHTML = Math.floor(dados.main.temp_min) + "°C";
    document.querySelector('.p-max').innerHTML = Math.floor(dados.main.temp_max) + "°C";
    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description;
    document.querySelector('.umidade').innerHTML = 'Umidade: ' + dados.main.humidity + "%";
    document.querySelector('#windSpeed').innerHTML = 'Vento: ' + dados.wind.speed + "km/h"
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector('.input-cidade').value;
    buscarCidade(cidade);
}