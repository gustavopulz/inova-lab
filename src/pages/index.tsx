import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { useEffect } from 'react';

function MainPage() {
    useEffect(() => {
        new Splide('#image-carousel', {
            type: 'loop',
            perPage: 8,
            gap: '0.1rem', 
            clones: 0,
            pagination: true,
            arrows: false,
            breakpoints: {
                768: {
                    perPage: 2,
                    gap: '0.25rem', 
                    fixedWidth: '8rem', 
                    fixedHeight: '8rem', 
                    height: 'auto',
                    focus: 'center',
                },
            },
        }).mount();
    }, []);
    
    return (
        <main>
            <section className="p-8 md:pl-60 md:pr-60 text-start bg-[#2987c5] text-white flex flex-col-reverse md:flex-row justify-start items-center min-h-[80vh]">
                <div className="flex-1 max-w-xl">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6">Transformamos ideias em Realidade com Impressão 3D de Alta Precisão</h1>
                    <p className="text-base md:text-lg mb-8">Projetos personalizados, protótipos funcionais, peças sob demanda e muito mais. Tudo com a qualidade e inovação que só a 3D Inova Lab oferece.</p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <button onClick={() => {
                            const section = document.getElementById('orcamentos');
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                            }
                        }} style={{transition: "0.5s" }} className="bg-transparent text-white hover:text-[#2987c5] px-4 py-2 rounded hover:bg-gray-200 border-white border">
                            Solicite um Orçamento
                        </button>
                        <button style={{transition: "0.5s" }} className="bg-transparent text-white hover:text-[#2987c5] px-4 py-2 rounded hover:bg-gray-200 border-white border" onClick={() => {
                            const section = document.getElementById('services-section');
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>
                            Veja Nossos Serviços
                        </button>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-start mt-8">
                    <img src="assets/logo.png" alt="Logo" className="w-full max-w-[50vh]" />
                </div>
            </section>
            <section className="bg-[#fcfdfd]" id="sobre-nos">
                <section className="bg-[#fcfdfd] p-8 md:pl-60 md:pr-60 text-start flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1 mb-4 md:mb-0 md:mr-8">
                        <img src="assets/bem-vindo.png" alt="Bem-vindo" className="w-full max-w-[50vh]" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Bem-vindo à 3D Inova Lab!</h2>
                        <p className="text-base md:text-lg mb-4">Somos especialistas em soluções de impressão 3D para empresas, engenheiros, designers, estudantes e entusiastas da tecnologia.</p>
                        <p className="text-base md:text-lg mb-4">Aqui, combinamos criatividade e tecnologia para transformar seus projetos em peças reais — com rapidez, precisão e excelente acabamento.</p>
                        <p className="text-base md:text-lg">Seja qual for o seu desafio, conte com a gente para materializar suas ideias!</p>
                        <button className="mt-8 bg-transparent border border-[#2987c5] text-[#2987c5] font-bold py-2 px-4 rounded hover:bg-[#2987c5] hover:text-white" onClick={() => window.open('http://wa.me/5519991100307', '_blank')}>
                            Solicite um Orçamento
                        </button>
                    </div>
                </section>
                <div className="relative flex flex-col md:flex-row items-center my-8">
                    <hr className="flex-grow border-t border-gray-300 block md:block h-[1px] bg-gray-300" />
                </div>
                <section id="services-section" className="bg-[#fcfdfd] p-8 md:pl-60 md:pr-60 text-start flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold">Nossos Serviços</h2>
                        <p className="text-base md:text-lg">Na 3D Inova Lab, oferecemos soluções personalizadas para atender desde projetos simples até os mais complexos:</p>
                        <ul className="list-none pl-0 text-base md:text-lg mt-3">
                            <li className="flex items-start gap-2">
                                <img src="assets/check.png" alt="Check Icon" className="w-6 h-6 mt-1" />
                                <strong>Impressão 3D sob demanda:</strong>
                            </li>
                            <p>Peças técnicas, protótipos, chaveiros, itens personalizados e peças para fundição, todos com precisão milimétrica.</p>
                            <li className="flex items-start gap-2 mt-2">
                                <img src="assets/check.png" alt="Check Icon" className="w-6 h-6 mt-1" />
                                <strong>Modelagem 3D:</strong>
                            </li>
                            <p>Transformamos suas ideias em arquivos prontos para impressão, com design funcional, estético e adequado para joalheria e fundição.</p>
                            <li className="flex items-start gap-2 mt-2">
                                <img src="assets/check.png" alt="Check Icon" className="w-6 h-6 mt-1" />
                                <strong>Prototipagem rápida:</strong>
                            </li>
                            <p>Ideal para startups, engenheiros e designers que precisam validar suas ideias com agilidade.</p>
                            <li className="flex items-start gap-2 mt-2">
                                <img src="assets/check.png" alt="Check Icon" className="w-6 h-6 mt-1" />
                                <strong>Miniaturas e maquetes:</strong>
                            </li>
                            <p>Perfeitas para projetos de arquitetura, educação, colecionadores e exposições.</p>
                            <li className="flex items-start gap-2 mt-2">
                                <img src="assets/check.png" alt="Check Icon" className="w-6 h-6 mt-1" />
                                <strong>Joalheria e moldes:</strong>
                            </li>
                            <p>Criação de modelos 3D detalhados para fabricação de joias exclusivas e moldes para fundição.</p>
                            <li className="flex items-start gap-2 mt-2">
                                <img src="assets/check.png" alt="Check Icon" className="w-6 h-6 mt-1" />
                                <strong>Consultoria técnica:</strong>
                            </li>
                            <p>Orientamos você na escolha do melhor material, tipo de impressão e otimizações para o seu projeto.</p>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <img src="assets/servicos.webp" alt="Serviços" className="w-full h-auto" />
                    </div>
                </section>
                <div className="relative flex flex-col md:flex-row items-center my-8">
                    <hr className="flex-grow border-t border-gray-300 block md:block h-[1px] bg-gray-300" />
                    <button className="mx-4 my-4 md:my-0 bg-[#2987c5] text-white font-bold py-2 px-6 rounded hover:bg-[#2987c5]" onClick={() => window.open('http://wa.me/5519991100307', '_blank')}>
                        Contratar serviço
                    </button>
                    <hr className="flex-grow border-t border-gray-300 block md:block h-[1px] bg-gray-300" />
                </div>

                <section className="p-8 md:pl-60 md:pr-60 text-start flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Por que escolher a gente?</h2>
                        <div className="">
                            <div className="flex items-start gap-2">
                                <img src="assets/check.png" alt="Check Icon" className="w-6 h-6 mt-[2px]" />
                                Alta precisão e qualidade profissional
                            </div>
                            <div className="flex items-start gap-2">
                                <img src="assets/check.png" alt="Check Icon" className="w-6 h-6 mt-[2px]" />
                                Agilidade na entrega
                            </div>
                            <div className="flex items-start gap-2">
                                <img src="assets/check.png" alt="Check Icon" className="w-6 h-6 mt-[2px]" />
                                Atendimento personalizado
                            </div>
                            <div className="flex items-start gap-2">
                                <img src="assets/check.png" alt="Check Icon" className="w-6 h-6 mt-[2px]" />
                                Materiais variados e sustentáveis
                            </div>
                            <div className="flex items-start gap-2">
                                <img src="assets/check.png" alt="Check Icon" className="w-6 h-6 mt-[2px]" />
                                Experiência e paixão por inovação
                            </div>
                        </div>
                    </div>
                </section>

                <section className="p-8 md:pl-60 md:pr-60 text-start flex flex-col gap-6 items-start">
                    <div id="image-carousel" className="splide">
                        <div className="splide__track">
                            <ul className="splide__list">
                                {['ref_1.jpg', 'ref_2.jpg', 'ref_3.jpg', 'ref_4.jpg', 'ref_5.jpg', 'ref_6.jpg', 'ref_7.jpg', 'ref_8.jpg', 'ref_9.jpg', 'ref_10.jpg', 'ref_11.jpg', 'ref_12.jpg', 'ref_13.jpg'].map((image, index) => (
                                    <li key={index} className="splide__slide">
                                        {image === 'ref_99.jpg' ? (
                                            <div
                                                className="relative cursor-pointer"
                                                onClick={() => {
                                                    const modal = document.getElementById('video-modal');
                                                    if (modal) {
                                                        modal.style.display = 'flex';
                                                    }
                                                }}
                                            >
                                                <img
                                                    src={`assets/${image}`}
                                                    alt="Video Thumbnail"
                                                    className="w-32 h-32 md:w-48 md:h-48 object-cover"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <img
                                                        src="assets/player.png"
                                                        alt="Play Icon"
                                                        className="w-12 h-12 md:w-16 md:h-16"
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div
                                                className="relative cursor-pointer"
                                                onClick={() => {
                                                    const modal = document.getElementById(`modal-${index}`);
                                                    if (modal) {
                                                        modal.style.display = 'flex';
                                                    }
                                                }}
                                            >
                                                <img
                                                    src={`assets/${image}`}
                                                    alt={`Slide ${index + 1}`}
                                                    className="w-32 h-32 md:w-48 md:h-48 object-cover"
                                                />
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Image Modals */}
                    {['ref_1.jpg', 'ref_2.jpg', 'ref_3.jpg', 'ref_4.jpg', 'ref_5.jpg', 'ref_6.jpg', 'ref_7.jpg', 'ref_8.jpg', 'ref_9.jpg', 'ref_10.jpg', 'ref_11.jpg', 'ref_12.jpg', 'ref_13.jpg'].map((image, index) => (
                        <div
                            key={index}
                            id={`modal-${index}`}
                            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center hidden z-50"
                            onClick={(e) => {
                                if ((e.target as HTMLElement).id === `modal-${index}`) {
                                    (e.target as HTMLElement).style.display = 'none';
                                }
                            }}
                        >
                            <button
                                className="absolute top-4 right-4 bg-white text-black font-bold py-1 px-3 rounded hover:bg-gray-200"
                                onClick={() => {
                                    const modal = document.getElementById(`modal-${index}`);
                                    if (modal) {
                                        modal.style.display = 'none';
                                    }
                                }}
                            >
                                X
                            </button>
                            <img
                                src={`assets/${image}`}
                                alt={`Expanded Slide ${index + 1}`}
                                className="max-w-[90%] max-h-[90%] object-contain"
                            />
                        </div>
                    ))}

                    {/* Video Modal */}
                    <div
                        id="video-modal"
                        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center hidden z-50"
                        onClick={(e) => {
                            if ((e.target as HTMLElement).id === 'video-modal') {
                                (e.target as HTMLElement).style.display = 'none';
                            }
                        }}
                    >
                        <button
                            className="absolute top-4 right-4 bg-white text-black font-bold py-1 px-3 rounded hover:bg-gray-200"
                            onClick={() => {
                                const modal = document.getElementById('video-modal');
                                if (modal) {
                                    modal.style.display = 'none';
                                }
                            }}
                        >
                            X
                        </button>
                        <video
                            src="assets/ref4.mp4"
                            controls
                            className="max-w-[90%] max-h-[90%]"
                        />
                    </div>
                </section>

                <div className="relative flex flex-col md:flex-row items-center my-8">
                    <hr className="flex-grow border-t border-gray-300 block md:block h-[1px] bg-gray-300" />
                    <button className="mx-4 my-4 md:my-0 px-6 bg-transparent border border-[#2987c5] text-[#2987c5] font-bold py-2 rounded hover:bg-[#2987c5] hover:text-white" onClick={() => window.open('http://wa.me/5519991100307', '_blank')}>
                        Solicite um Orçamento
                    </button>
                    <hr className="flex-grow border-t border-gray-300 block md:block h-[1px] bg-gray-300" />
                </div>

                <section id="orcamentos" className="bg-[#fcfdfd] p-8 md:pl-60 md:pr-60 text-start flex flex-col gap-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Solicite um Orçamento Personalizado</h2>
                    <p className="text-base md:text-lg mb-4">Na Inova Lab, oferecemos orçamentos personalizados para impressão 3D, atendendo às suas necessidades específicas. Seja para protótipos, peças sob demanda ou modelos exclusivos, estamos prontos para transformar suas ideias em realidade.</p>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Como Funciona?</h3>
                    <ul className="list-decimal pl-6 text-base md:text-lg space-y-4">
                        <li><strong>Envie Seu Modelo:</strong> Envie seu arquivo 3D (STL, OBJ, etc.) ou descreva sua ideia de forma detalhada.</li>
                        <li><strong>Escolha o Material e a Impressora:</strong> Selecione o tipo de material e o modelo de impressora que melhor atendem às suas necessidades. Nossa equipe está pronta para orientá-lo sobre as melhores opções.</li>
                        <li><strong>Receba o Orçamento:</strong> Após analisarmos o seu projeto, enviaremos o orçamento detalhado diretamente pelo WhatsApp para maior praticidade e agilidade.</li>
                        <li><strong>Aprovação e Produção:</strong> Após a aprovação do orçamento, iniciaremos a produção da sua peça e mantemos você informado sobre o progresso via WhatsApp.</li>
                    </ul>
                    <p className="text-base md:text-lg mt-4">Nosso objetivo é proporcionar um orçamento claro, justo e transparente, sem surpresas. Todos os custos envolvidos são explicados para garantir total confiança no processo.</p>
                    <p className="text-base md:text-lg">Se tiver alguma dúvida ou preferir discutir detalhes específicos antes de solicitar o orçamento, entre em contato diretamente conosco via WhatsApp. Estamos à disposição para ajudar a encontrar a melhor solução para o seu projeto!</p>
                </section>

                <div className="relative flex flex-col md:flex-row items-center my-8">
                    <hr className="flex-grow border-t border-gray-300 block md:block h-[1px] bg-gray-300" />
                    <button className="mx-4 my-4 md:my-0 bg-[#2987c5] text-white font-bold py-2 px-6 rounded hover:bg-[#2987c5]" onClick={() => window.open('http://wa.me/5519991100307', '_blank')}>
                        Contratar serviço
                    </button>
                    <hr className="flex-grow border-t border-gray-300 block md:block h-[1px] bg-gray-300" />
                </div>

                <section className="bg-[#fcfdfd] p-8 md:pl-60 md:pr-60 text-start flex flex-col gap-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                        <div className="flex items-center">
                            <img src="assets/question.svg" alt="FAQ Icon" className="w-12 h-12" />
                        </div>
                        Perguntas Frequentes
                    </h2>
                    <div className="space-y-4">
                        {[{
                            question: "Qual o prazo médio para uma impressão?",
                            answer: "Depende do tamanho e complexidade do modelo, mas geralmente entre 1 a 3 dias úteis."
                        }, {
                            question: "Posso enviar meu próprio arquivo 3D?",
                            answer: "Sim! Aceitamos arquivos em STL, OBJ e outros formatos populares."
                        }, {
                            question: "Não tenho o modelo 3D, vocês fazem?",
                            answer: "Com certeza. Oferecemos serviço completo de modelagem a partir de ideias, desenhos ou referências."
                        }, {
                            question: "Qual material vocês usam nas impressões?",
                            answer: "Trabalhamos com PLA, ABS, PETG, TPU (flexível), entre outros. Indicamos o melhor para seu projeto."
                        }, {
                            question: "Atendem todo o Brasil?",
                            answer: "Sim! Enviamos para todo o país com segurança e rastreio."
                        }].map((faq, index) => (
                            <div key={index} className="border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 max-h-[60px] hover:max-h-[200px] cursor-pointer">
                                <div className="flex items-center p-4 bg-gray-100">
                                    <div className="w-8 h-8 flex items-center justify-center bg-[#2987c5] text-white rounded-full mr-4">{index + 1}</div>
                                    <h3 className="text-base md:text-lg font-bold flex-1">{faq.question}</h3>
                                    <img src="assets/down.png" alt="Expand Icon" className="w-6 h-6" />
                                </div>
                                <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </main>
    );
}

export default MainPage;