import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nome, telefone, mensagem } = req.body;

        if (!nome || !telefone || !mensagem) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'pulzgustavo1@gmail.com', // Substitua pelo seu e-mail
                    pass: '34410115', // Substitua pela sua senha ou app password
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
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} não permitido.`);
    }
}