// Programando um servidor : 
// 1) Exigir modulo HTTP: 


const http =  require("http");
const express = require('express');
const app = express();
app.get('/', (req,res)=> res.send("Ola Mundo!"))

app.listen(3000,()=>{
    console.log('Servidor Rodando!')
});




// 2) Levantando Servidor : 

/*http.createServer((req , res) =>{
   
    //Esta recebendo uma solicitaçao para ser enviada para o servidor
    //A linha a baixo informa a resposta, aonde sera escrita , o codigo de retorno e tipo de codigo 

    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

//Conteudo que deseja enviar: 

switch(req.url){
    case'/':
        res.end('index');
        break
    case '/contacto':
        res.end('Contacto');
        break;
}
    
}).listen(3030, "localhost");//porta do servidor( local host = servidor local)*/