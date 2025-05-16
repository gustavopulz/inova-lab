import { useState, useEffect } from 'react';

function Footer() {
    const [formStatus, setFormStatus] = useState('');
    const [showCookieBanner, setShowCookieBanner] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem('cookieAccepted');
        if (!accepted) {
            setShowCookieBanner(true);
        }
    }, []);

    const handleAcceptCookies = () => {
        localStorage.setItem('cookieAccepted', 'true');
        setShowCookieBanner(false);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setFormStatus('');

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = {
            service_id: 'service_mmgz4eq', // Substitua pelo ID do serviço do EmailJS
            template_id: 'template_jq77qef', // Substitua pelo ID do template do EmailJS
            user_id: '3E9jY3jyHdKIXIH26', // Substitua pelo ID do usuário do EmailJS
            template_params: {
                nome: formData.get('nome'),
                email: formData.get('email'),
                telefone: formData.get('telefone'),
                mensagem: formData.get('mensagem'),
                reply_to: formData.get('email'), 
            },
        };

        if (!data.template_params.email) {
            console.error('O campo de e-mail é obrigatório.');
            setFormStatus('error');
            return;
        }

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setFormStatus('success');
                form.reset();
            } else {
                const text = await response.text();
                try {
                    const errorData = JSON.parse(text);
                    console.error('Erro ao enviar e-mail:', errorData);
                } catch (parseError) {
                    console.error('Erro inesperado na resposta:', text);
                }
                setFormStatus('error');
            }
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
            setFormStatus('error');
        }
    };

    return (
        <footer className="bg-[#2987c5] text-white px-8 md:pl-60 md:pr-60 py-8 pt-14">
            {/* Cookie Banner */}
            {showCookieBanner && (
                <div className="fixed bottom-0 left-0 w-full bg-gray-900 bg-opacity-90 text-white flex flex-col md:flex-row items-center justify-between px-4 py-3 z-50">
                    <span className="mb-2 md:mb-0">Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de cookies.</span>
                    <button onClick={handleAcceptCookies} className="bg-[#2987c5] text-white px-4 py-2 rounded hover:bg-[#206ba0] ml-0 md:ml-4 mt-2 md:mt-0">Aceitar</button>
                </div>
            )}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <div className="flex flex-col md:flex-row gap-8 w-full">
                    <div className="flex flex-col gap-4 w-full md:w-1/2">
                        <img src="/assets/logo2.png" alt="Inova Lab Logo" className="h-14 w-48" />
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="ml-6 mt-4">
                                <h3 className="font-bold text-lg mb-2">Navegue na página</h3>
                                <ul>
                                    <li><a href="#sobre-nos" className="hover:underline">Sobre nós</a></li>
                                    <li><a href="#services-section" className="hover:underline">Nossos Serviços</a></li>
                                    <li><a href="#orcamentos" className="hover:underline">Orçamentos</a></li>
                                </ul>
                                <h3 className="font-bold text-lg mb-2 mt-8">Suporte</h3>
                                <ul>
                                    <li>
                                        <a href="mailto:contato@inovalab.com" className="hover:underline">
                                            E-mail: contato@3dinovalab.com.br
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+5519991100307" className="hover:underline">
                                            Telefone: +55 19 99110-0307
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-lg">Contato</h3>
                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/3dinovalab/profilecard/?igsh=MWloOTB1azc5ZTZ3aA==" target="_blank" aria-label="Instagram">
                                    <img src="/assets/instagram.png" alt="Instagram" className="h-8" />
                                </a>
                                <a href="https://www.tiktok.com/@3d.inova.lab?_t=ZM-8vrigGo2yph&_r=1" target="_blank" aria-label="TikTok">
                                    <img src="/assets/tiktok.png" alt="TikTok" className="h-8" />
                                </a>
                                <a href="http://wa.me/5519991100307" target="_blank" aria-label="Whatsapp">
                                    <img src="/assets/whatsapp.png" alt="Whatsapp" className="h-8" />
                                </a>
                            </div>
                        </div>
                          <form className="grid grid-cols-1 gap-4 text-black" onSubmit={handleSubmit}>
                            <input type="text" name="nome" placeholder="Nome completo" className="p-2 rounded" required />
                            <input type="email" name="email" placeholder="E-mail" className="p-2 rounded" required />
                            <input type="tel" name="telefone" placeholder="Telefone" className="p-2 rounded" required />
                            <textarea name="mensagem" placeholder="Mensagem" className="p-2 rounded" rows={4} required></textarea>
                            <button type="submit" className="bg-white text-[#2987c5] px-4 py-2 rounded hover:bg-gray-200">Enviar</button>
                            {formStatus === 'success' && <p className="text-green-500">Mensagem enviada com sucesso!</p>}
                            {formStatus === 'error' && <p className="text-red-500">Erro ao enviar a mensagem. Tente novamente.</p>}
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;