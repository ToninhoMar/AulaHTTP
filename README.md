Tentativa de criação de servidor
Primeiro passo para criação de um servidor 
adicionar a constante http 
1) const http = require("http"); 

PARA CRIAR UM SERVIDOR :
http.createServer((req , res)={
obs.: req (requerimento do cliente );
      res (resposta do servidor );
===================================================

res(resposta).writeHead(200,{"Content-type":"text/html;charset=utf-8})

res = resposta
writeHead = Escrever no Header
200 = codigo do estado de servidor
"content-type";"text/html; charset = utf-8= tipo de texto que ira ser retornado para o servidor; 

==================================


switch(req.url){
    case'/':
        res.end('index');
        break
    case '/contacto':
        res.end('Contacto');
        break;

caso de if com switch
});


==================================




}).listen(3030, "localhost");

porta de entrada , nome do site