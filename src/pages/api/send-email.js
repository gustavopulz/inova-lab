import fetch from 'node-fetch';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { service_id, template_id, user_id, template_params } = req.body;

        if (!service_id || !template_id || !user_id || !template_params) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
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
                return res.status(500).json({ error: 'Erro ao enviar o e-mail.' });
            }
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
            return res.status(500).json({ error: 'Erro ao enviar o e-mail.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} não permitido.`);
    }
}