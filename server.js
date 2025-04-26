const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rota para envio de e-mail
app.post('/api/send-email', async (req, res) => {
    const { nome, telefone, mensagem } = req.body;

    if (!nome || !telefone || !mensagem) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'seu-email@gmail.com', // Substitua pelo seu e-mail
                pass: 'sua-senha', // Substitua pela sua senha ou app password
            },
        });

        const mailOptions = {
            from: 'seu-email@gmail.com',
            to: 'pulzgustavo1@gmail.com',
            subject: 'Nova mensagem do formulário de contato',
            text: `Nome: ${nome}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        return res.status(500).json({ error: 'Erro ao enviar o e-mail.' });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});