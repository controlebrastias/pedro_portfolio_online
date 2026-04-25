export default function Home() {
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
          <li><a href="#pricing" className="text-sm text-gray-500 hover:text-white transition">PLANOS</a></li>
          <li><a href="#" className="text-sm text-orange-600 hover:text-orange-500 transition">CONTATO</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-5 md:px-12 pt-32 md:pt-0 pb-16 md:pb-0 relative">
        <div className="text-xs font-600 uppercase tracking-widest text-orange-600 mb-5 flex items-center gap-2">
          <span className="w-6 h-px bg-orange-600"></span>
          Product Manager & Estrategista
        </div>
        <h1 className="font-syne font-800 text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 max-w-2xl">
          Design com <span className="text-orange-600">visão</span> de produto.
        </h1>
        <p className="text-lg text-gray-400 max-w-xl leading-relaxed mb-8">
          Unindo a estratégia de <strong>Product Management</strong> com a sensibilidade do <strong>Customer Success</strong> para criar marcas que não apenas encantam, mas retêm e convertem.
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-neutral-900 px-5 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden aspect-square md:aspect-auto md:h-96">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663598443704/gwuRCadDPzhDhjiI.png" 
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
              Mais que design, uma <span className="text-orange-600">experiência</span> completa.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Atualmente atuo como <span className="text-white font-500">Product Manager</span>, o que me permite olhar para cada projeto de design não apenas como uma peça estética, mas como um ativo estratégico que resolve problemas reais de negócio.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Minha visão ampla em <span className="text-white font-500">Customer Success</span> garante que cada detalhe da jornada do seu cliente seja mapeado e otimizado. Eu não entrego apenas artes; eu entrego soluções que aproximam sua marca do sucesso do seu cliente final.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Seja no setor de alimentação, saúde ou tecnologia, meu foco é sempre o mesmo: <span className="text-white font-500">gerar valor tangível</span> através de uma comunicação visual impecável e estratégica.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="px-5 md:px-12 py-20 md:py-32">
        <h2 className="font-syne font-800 text-3xl md:text-4xl mb-12 md:mb-16 max-w-6xl mx-auto">Cases de Sucesso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* 3D CASE */}
          <div className="bg-neutral-900 border border-white/8 rounded-2xl overflow-hidden hover:border-orange-600 hover:shadow-2xl transition-all cursor-pointer group">
            <div className="h-64 md:h-72 bg-black flex items-center justify-center overflow-hidden perspective">
              <div className="w-5/6 h-4/5 bg-neutral-800 rounded-lg relative overflow-hidden transform group-hover:scale-105 transition-transform duration-500" style={{transform: 'rotateX(10deg) rotateY(-10deg) rotateZ(2deg)', perspective: '1000px'}}>
                <div className="h-5 bg-neutral-700 flex items-center gap-1 px-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                </div>
                <div className="h-full overflow-hidden">
                  <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663598443704/haGGXwNktIgriWLb.jpg" alt="Bros Burger" className="w-full h-full object-cover animate-pulse" />
                </div>
              </div>
            </div>
            <div className="p-6 flex justify-between items-start">
              <div>
                <h3 className="font-syne font-700 text-xl mb-1">Bros Burger Site</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Web Design 3D · UX/UI</p>
              </div>
              <span className="text-2xl text-gray-500 group-hover:text-orange-600 transition">→</span>
            </div>
          </div>

          {/* OUTROS CASES */}
          {[
            { img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663598443704/aMFAzZyjuKtfBJVI.png", title: "Bros Burger", cat: "Branding · Gastronomia" },
            { img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663598443704/QqbgjZHzyaehCCDZ.png", title: "OralCare Clínica", cat: "Social Media · Saúde" },
            { img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663598443704/VaQlLUyiFJdgtqVt.png", title: "UrbanStyle", cat: "Moda · Streetwear" },
            { img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663598443704/oXvuskLWxiKNrCwz.png", title: "FlashFiber", cat: "Tecnologia · Internet" },
            { img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663598443704/CVHTbBZCgmetbWOO.png", title: "MercadoBom", cat: "Varejo · Design" },
          ].map((item, i) => (
            <div key={i} className="bg-neutral-900 border border-white/8 rounded-2xl overflow-hidden hover:border-orange-600 hover:shadow-2xl transition-all cursor-pointer group">
              <div className="h-64 md:h-72 bg-black overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex justify-between items-start">
                <div>
                  <h3 className="font-syne font-700 text-xl mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{item.cat}</p>
                </div>
                <span className="text-2xl text-gray-500 group-hover:text-orange-600 transition">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-neutral-900 px-5 md:px-12 py-20 md:py-32">
        <h2 className="font-syne font-800 text-3xl md:text-4xl mb-12 md:mb-16 max-w-6xl mx-auto">Investimento</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {[
            { title: "Social Starter", price: "1.5k", features: ["12 artes mensais", "Gestão de Stories", "Identidade Visual Básica", "Suporte via WhatsApp"], featured: false },
            { title: "Brand Master", price: "3.2k", features: ["24 artes mensais", "Landing Page Inclusa", "Estratégia de Produto", "Foco em Customer Success"], featured: true },
            { title: "Full Experience", price: "Consultar", features: ["Gestão Completa 360º", "Consultoria de PM", "Mapeamento de Jornada", "Tráfego Pago Incluso"], featured: false },
          ].map((plan, i) => (
            <div key={i} className={`p-8 md:p-10 rounded-2xl transition-all ${plan.featured ? 'border border-orange-600 bg-gradient-to-b from-neutral-800 to-black' : 'bg-black border border-white/8 hover:border-orange-600'}`}>
              <h3 className="font-syne font-700 text-2xl mb-3">{plan.title}</h3>
              <div className="font-syne font-800 text-4xl md:text-5xl text-orange-600 mb-6">
                R$ {plan.price}
                {plan.price !== "Consultar" && <span className="text-base text-gray-400">/mês</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="text-gray-400 text-base flex items-start gap-3">
                    <span className="text-orange-600 mt-1">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
