# ponto eletronico - QRCODE

Codigo backend antigo, preciso refatorar os codigos, a sintax está muito fora do padrão
vou executar os seguites passos nessa ordem:
- agora que coloquei arquitetura moderna tenho que criar testges
- simplificar a lógica dos controllers
- revisar todo codigo antigo e tentar simplificar
- criar parte web para poder registrar novos funcionarios.
- fazer conexão da parte web com backend
- pegar o retorno do qr code no aplicativo ( que já está feito só não envia para o back)
- extrair o id do qr recebido pelo aplcativo e redirecionar para rota de marcação
- Outras funcionalidades como marcação offline

![Lista](https://github.com/kalavh/pontoeletronico/blob/master/Screenshots/lista.jpeg)
O Numero com circulo representa o numero da marcacao feita no dia (sendo 1 entrada, 2 saida do almoco, 3 retorno do almoco etc.)

![Qr Code](https://github.com/kalavh/pontoeletronico/blob/master/Screenshots/qrcode.jpeg)
