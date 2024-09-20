const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Cria o cliente
const client = new Client({
    authStrategy: new LocalAuth() // Salva o estado de autenticação localmente
});

// Gera o QR code para login
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// Mostra quando o bot está pronto para uso
client.on('ready', () => {
    console.log('Bot pronto para uso!');
});

// Captura novas mensagens e responde automaticamente
client.on('message', message => {

    console.log(`Mensagem recebida: ${message.body}`);

    if(message.body.toLowerCase() === '') {
        return;
    } else {
        message.reply('*Lembre-se!*\n\nEsse WhatsApp é utilizado apenas para atualizar nossos clientes sobre Promoções e Status de suas compras!\n\nCaso deseje conversar com um de nossos atendentes, favor entrar em contato pelo número +5519997668437');
    }

});

// Inicia o cliente
client.initialize();
