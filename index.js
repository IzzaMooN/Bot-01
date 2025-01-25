const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Inisialisasi client
const client = new Client();

client.on('qr', (qr) => {
    // Tampilkan QR code di terminal
    qrcode.generate(qr, { small: true });
    console.log('Scan QR code di WhatsApp untuk login.');
});

client.on('ready', () => {
    console.log('Bot WhatsApp siap digunakan!');
});

client.on('message', (message) => {
    const teks = message.body.toLowerCase();
    console.log(`Pesan diterima: ${teks}`);

    if (teks === 'halo') {
        message.reply('Halo juga! Apa kabar?');
    } else if (teks === 'apa kabar') {
        message.reply('Saya baik! Bagaimana dengan Anda?');
    } else {
        message.reply('Maaf, saya belum mengerti pesan Anda.');
    }
});

// Mulai bot
client.initialize();
