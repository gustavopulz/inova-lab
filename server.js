const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post('/api/send-email', async (req, res) => {
    const { service_id, template_id, user_id, template_params } = req.body;

    if (!service_id || !template_id || !user_id || !template_params || !template_params.email) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios, incluindo o e-mail.' });
    }

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                service_id,
                template_id,
                user_id,
                template_params,
            }),
        });

        if (response.ok) {
            return res.status(200).json({ message: 'E-mail enviado com sucesso!' });
        } else {
            const errorText = await response.text();
            console.error('Erro ao enviar e-mail:', errorText);
            return res.status(500).json({ error: 'Erro ao enviar o e-mail.' });
        }
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        return res.status(500).json({ error: 'Erro ao enviar o e-mail.' });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});