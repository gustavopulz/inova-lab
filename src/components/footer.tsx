import emailjs from 'emailjs-com';
import { useState } from 'react';

function Footer() {
    const [formStatus, setFormStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setFormStatus('');

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = {
            nome: formData.get('nome'),
            telefone: formData.get('telefone'),
            email: formData.get('email'),
            mensagem: formData.get('mensagem'),
        };

        try {
            await emailjs.send(
                'service_uznbz03', // Substitua pelo seu service_id
                'template_181nyyg', // Substitua pelo seu template_id
                data,
                'nVe61kbMK0Ug7lk2Y' // Substitua pelo seu user_id
            );

            setFormStatus('success');
            form.reset();
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
            setFormStatus('error');
        }
    };

    return (
        <footer className="bg-[#2987c5] text-white px-8 md:pl-60 md:pr-60 py-8 pt-14">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <div className="flex flex-col md:flex-row gap-8 w-full">
                    <div className="flex flex-col gap-4 w-full md:w-1/2">
                        <img src="/assets/logo2.png" alt="Inova Lab Logo" className="h-14 w-48" />
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="ml-6 mt-4">
                                <h3 className="font-bold text-lg mb-4">Navegue na página</h3>
                                <ul className="space-y-2">
                                    <li><a href="#sobre-nos" className="hover:underline">Sobre nós</a></li>
                                    <li><a href="#services-section" className="hover:underline">Nossos Serviços</a></li>
                                    <li><a href="#orcamentos" className="hover:underline">Orçamentos</a></li>
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