import { useEffect, useRef, useState } from 'react';
import { useAuth } from '@/_core/hooks/useAuth';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  const portfolioRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Email inválido');
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: Integrar com backend para salvar contato
      // await contactMutation.mutateAsync(formData);
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = portfolioRef.current?.querySelectorAll('.work-card');
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-100 px-5 py-6 md:px-12 flex justify-between items-center backdrop-blur-lg bg-black/80 border-b border-white/8">
        <div className="font-syne font-800 text-lg">
          PEDRO<span className="text-orange-600">.</span>DIGITAL
        </div>
        <ul className="hidden md:flex gap-6 list-none">
          <li><a href="#about" className="text-sm text-gray-500 hover:text-white transition">HISTÓRIA</a></li>
          <li><a href="#portfolio" className="text-sm text-gray-500 hover:text-white transition">CASES</a></li>
          <li><a href="#services" className="text-sm text-gray-500 hover:text-white transition">SERVIÇOS</a></li>
          <li><a href="https://wa.me/5547984958832" target="_blank" className="text-sm text-orange-600 hover:text-orange-500 transition">WHATSAPP</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-5 md:px-12 pt-32 md:pt-0 pb-16 md:pb-0 relative">
        <div className="text-xs font-600 uppercase tracking-widest text-orange-600 mb-5 flex items-center gap-2">
          <span className="w-6 h-px bg-orange-600"></span>
          Product Manager & Estrategista
        </div>
        <h1 className="font-syne font-800 text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 max-w-2xl">
          Design que <span className="text-orange-600">vende</span>.
        </h1>
        <p className="text-lg text-gray-400 max-w-xl leading-relaxed mb-8">
          Estratégia de produto + design visual + customer success. Tudo que sua marca precisa para crescer.
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-neutral-900 px-5 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden aspect-square md:aspect-auto md:h-96">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663598443704/BuhFBpQfsGCcvMGG.png" 
              alt="Pedro - Product Manager"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-xs font-600 uppercase tracking-widest text-orange-600 mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-orange-600"></span>
              Minha Jornada
            </div>
            <h2 className="font-syne font-800 text-3xl md:text-4xl mb-6 leading-tight">
              Visão de <span className="text-orange-600">produto</span> em cada projeto.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Sou <span className="text-white font-500">Product Manager</span> e designer. Isso significa que não crio apenas artes bonitas — crio soluções estratégicas que resolvem problemas reais do seu negócio.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Cada projeto é pensado com foco em <span className="text-white font-500">Customer Success</span>. Mapeio a jornada do seu cliente, otimizo cada touchpoint e garanto que sua marca não apenas atrai, mas retém e converte.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Qualquer nicho, qualquer desafio. Meu objetivo é simples: <span className="text-white font-500">gerar crescimento real</span> através de design estratégico.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="px-5 md:px-12 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-600 uppercase tracking-widest text-orange-600 mb-4 flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-orange-600"></span>
              Portfólio
              <span className="w-6 h-px bg-orange-600"></span>
            </div>
            <h2 className="font-syne font-800 text-3xl md:text-4xl">Projetos em Destaque</h2>
          </div>
          
          <div ref={portfolioRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* 3D CASE */}
            <div className="work-card group relative rounded-2xl overflow-hidden cursor-pointer h-80 md:h-96">
              <div className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden perspective">
                <div className="w-5/6 h-4/5 bg-neutral-800 rounded-lg relative overflow-hidden transform group-hover:scale-110 transition-all duration-700" style={{transform: 'rotateX(10deg) rotateY(-10deg) rotateZ(2deg)', perspective: '1000px'}}>
                  <div className="h-5 bg-neutral-700 flex items-center gap-1 px-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                  </div>
                  <div className="h-full overflow-hidden">
                    <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663598443704/haGGXwNktIgriWLb.jpg" alt="Bros Burger" className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="font-syne font-700 text-2xl mb-2">Bros Burger Site</h3>
                <p className="text-gray-300 text-sm mb-4">Web Design 3D · UX/UI</p>
                <div className="flex items-center gap-2 text-orange-600 font-600">
                  <span>Ver Projeto</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </div>

            {/* OUTROS PROJETOS */}
            {[
              { img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663598443704/aMFAzZyjuKtfBJVI.png", title: "Bros Burger", cat: "Branding & Social" },
              { img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663598443704/QqbgjZHzyaehCCDZ.png", title: "OralCare", cat: "Identidade Visual" },
              { img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663598443704/VaQlLUyiFJdgtqVt.png", title: "UrbanStyle", cat: "Social Media" },
              { img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663598443704/oXvuskLWxiKNrCwz.png", title: "FlashFiber", cat: "Design Estratégico" },
              { img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663598443704/CVHTbBZCgmetbWOO.png", title: "MercadoBom", cat: "Branding" },
            ].map((item, i) => (
              <div key={i} className="work-card group relative rounded-2xl overflow-hidden cursor-pointer h-80 md:h-96">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className="font-syne font-700 text-2xl mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{item.cat}</p>
                  <div className="flex items-center gap-2 text-orange-600 font-600">
                    <span>Ver Projeto</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-neutral-900 px-5 md:px-12 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-600 uppercase tracking-widest text-orange-600 mb-4 flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-orange-600"></span>
              Serviços
              <span className="w-6 h-px bg-orange-600"></span>
            </div>
            <h2 className="font-syne font-800 text-3xl md:text-4xl mb-4">O que Posso Oferecer</h2>
            <p className="text-gray-400 text-lg">Soluções completas personalizadas para sua marca crescer</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: "🎨", title: "Branding & Identidade Visual", desc: "Logo, paleta de cores, tipografia e guidelines completos" },
              { icon: "📱", title: "Social Media Management", desc: "Gestão completa de redes sociais com conteúdo estratégico" },
              { icon: "🌐", title: "Landing Pages", desc: "Sites profissionais otimizados para conversão" },
              { icon: "📊", title: "Consultoria de Produto", desc: "Estratégia de produto e visão de negócio" },
              { icon: "👥", title: "Customer Success", desc: "Mapeamento de jornada e otimização de experiência" },
              { icon: "🎬", title: "Design Estratégico", desc: "Campanhas visuais integradas e impactantes" },
            ].map((service, i) => (
              <div key={i} className="bg-black border border-white/8 rounded-2xl p-8 hover:border-orange-600 transition-all hover:shadow-2xl">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-syne font-700 text-xl mb-3">{service.title}</h3>
                <p className="text-gray-400 text-base">{service.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-gray-400 text-lg mb-6">Todos os serviços com <span className="text-orange-600 font-600">orçamento personalizado</span></p>
            <a href="https://wa.me/5547984958832" target="_blank" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-600 px-8 py-4 rounded-lg transition-all">
              Solicitar Orçamento via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 md:px-12 py-20 md:py-32 bg-black">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-600 uppercase tracking-widest text-orange-600 mb-4 flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-orange-600"></span>
              Contato Direto
              <span className="w-6 h-px bg-orange-600"></span>
            </div>
            <h2 className="font-syne font-800 text-3xl md:text-4xl mb-4">Fale Comigo no WhatsApp</h2>
            <p className="text-gray-400 text-lg mb-8">Respondo rápido e gosto de conversar sobre seus desafios</p>
            <a href="https://wa.me/5547984958832" target="_blank" className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-600 px-8 py-4 rounded-lg transition-all mb-12">
              <span>💬</span>
              (47) 98495-8832
            </a>
          </div>
          
          <p className="text-center text-gray-500 text-sm mb-8">Ou deixe sua mensagem abaixo que entraremos em contato:</p>
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-600 mb-2 text-white">Nome</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Seu nome completo"
                className="w-full px-4 py-3 bg-neutral-900 border border-white/8 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label className="block text-sm font-600 mb-2 text-white">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="seu.email@exemplo.com"
                className="w-full px-4 py-3 bg-neutral-900 border border-white/8 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label className="block text-sm font-600 mb-2 text-white">Mensagem</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Conte-nos sobre seu projeto..."
                rows={5}
                className="w-full px-4 py-3 bg-neutral-900 border border-white/8 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition resize-none"
                disabled={isSubmitting}
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-600 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/8 px-5 md:px-12 py-16 md:py-20 text-center">
        <div className="font-syne font-800 text-2xl mb-4 max-w-6xl mx-auto">
          PEDRO<span className="text-orange-600">.</span>DIGITAL
        </div>
        <ul className="flex justify-center gap-8 md:gap-12 mb-8 list-none text-sm">
          <li><a href="#about" className="text-gray-500 hover:text-orange-600 transition">História</a></li>
          <li><a href="#portfolio" className="text-gray-500 hover:text-orange-600 transition">Cases</a></li>
          <li><a href="#pricing" className="text-gray-500 hover:text-orange-600 transition">Investimento</a></li>
        </ul>
        <p className="text-gray-600 text-xs">&copy; 2024 Pedro. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
