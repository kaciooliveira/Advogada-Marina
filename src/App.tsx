/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Scale, 
  ShieldCheck, 
  Gavel, 
  Users, 
  FileText, 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight,
  CheckCircle2,
  Award
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero Entrance Animation
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out'
      });

      gsap.from('.hero-image', {
        scale: 1.1,
        opacity: 0,
        duration: 2,
        ease: 'power2.out'
      });

      // Scroll Reveal Animations
      const sections = gsap.utils.toArray('.reveal');
      sections.forEach((section: any) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
            <Scale className="text-white w-6 h-6" />
          </div>
          <span className="font-display text-xl font-bold tracking-tighter">MARINA ARAÚJO</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-slate-600">
          <a href="#sobre" className="hover:text-gold transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-gold transition-colors">Serviços</a>
          <a href="#contato" className="hover:text-gold transition-colors">Contato</a>
        </nav>

        <a 
          href="https://api.whatsapp.com/send/?phone=5562982248520&text&type=phone_number&app_absent=0" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gold text-white px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform active:scale-95"
        >
          CONSULTA AGORA
        </a>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
            alt="Law Office" 
            className="hero-image w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white"></div>
        </div>

        <div className="relative z-10 max-w-5xl text-center hero-content">
          <span className="inline-block text-gold text-xs font-bold tracking-[0.3em] uppercase mb-6 bg-gold/10 px-4 py-1 rounded-full border border-gold/20">
            Pioneira em Goiás
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-medium leading-[0.9] mb-8 tracking-tighter text-gradient">
            Atuação estratégica em Direito de família para homens.
          </h1>
          <p className="text-lg md:text-xl text-slate-700 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
            Advocacia especializada na defesa de homens e pais em conflitos familiares.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a 
              href="https://api.whatsapp.com/send/?phone=5562982248520&text&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-gold text-white px-10 py-5 rounded-full text-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-900 transition-colors group"
            >
              FALAR COM A DRA. MARINA ARAUJO
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-4 px-6 py-4 glass rounded-full">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Client" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <span className="text-xs font-medium text-slate-600">+200 Casos Solucionados</span>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Marquee */}
      <div className="py-12 border-y border-slate-100 bg-slate-50 overflow-hidden">
        <div className="marquee-content flex gap-20 items-center whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
              <Award className="w-6 h-6 text-gold" />
              <span className="text-2xl font-display italic">+ 10 Anos de Experiência Jurídica</span>
              <div className="w-2 h-2 rounded-full bg-gold/50"></div>
              <span className="text-2xl font-display italic">Especialista em Conflitos Complexos</span>
              <div className="w-2 h-2 rounded-full bg-gold/50"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Diferenciais (Bento Grid) */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto reveal">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display mb-6 leading-tight">
              Uma abordagem técnica <br/><span className="italic text-gold">voltada à realidade masculina</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
            A prática forense demonstra que há diferenças relevantes na condução processual conforme o gênero. Minha advocacia garante o equilíbrio necessário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">
          {/* Card 1: Large */}
          <div className="md:col-span-2 md:row-span-2 glass rounded-3xl p-10 flex flex-col justify-between group hover:bg-gold/5 transition-colors cursor-default">
            <div>
              <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <ShieldCheck className="text-gold w-8 h-8" />
              </div>
              <h3 className="text-3xl font-display mb-4">Defesa Técnica Especializada</h3>
              <div className="text-slate-600 leading-relaxed text-sm space-y-4">
                <p>
                  Nossa atuação é pautada na defesa técnica baseada na realidade masculina, indo além da simples condução judicial do processo. Trabalhamos com planejamento jurídico estruturado e gestão estratégica da demanda, sempre com clareza, análise preventiva de riscos e antecipação de cenários.
                </p>
                <p>
                  O nosso diferencial está na firmeza do posicionamento e na estratégia aplicada em cada etapa do caso, assegurando que seus direitos sejam protegidos com responsabilidade, técnica e direção clara.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
              <span className="text-gold font-bold text-sm uppercase tracking-widest">Segurança Jurídica</span>
              <CheckCircle2 className="text-gold/20 w-6 h-6" />
            </div>
          </div>

          {/* Card 2: Wide */}
          <div className="md:col-span-2 glass rounded-3xl p-8 flex items-center gap-6 hover:bg-gold/5 transition-colors">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
              <Users className="text-gold w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-display mb-1">Pioneirismo em Goiás</h4>
              <p className="text-sm text-slate-400">Primeira e única advogada do estado a se posicionar publicamente na defesa exclusiva de homens e dos pais.</p>
            </div>
          </div>

          {/* Card 3: Small */}
          <div className="glass rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:bg-gold/5 transition-colors">
            <span className="text-4xl font-display text-gold mb-2">200+</span>
            <span className="text-xs uppercase tracking-widest text-slate-400">Conflitos Solucionados</span>
          </div>

          {/* Card 4: Small */}
          <div className="glass rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:bg-gold/5 transition-colors">
            <span className="text-4xl font-display text-gold mb-2">+ 10</span>
            <span className="text-xs uppercase tracking-widest text-slate-400">Anos de Carreira</span>
          </div>
        </div>
      </section>

      {/* Sobre / Serviços */}
      <section id="servicos" className="py-16 md:py-32 bg-slate-50/50 reveal">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200">
                <img 
                  src="https://lh3.googleusercontent.com/d/1_6XxLVdHwglAU4uEluhMyrp8xsOHVPKk" 
                  alt="Marina Araújo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-xl border border-slate-200 p-6 rounded-2xl hidden md:block max-w-[320px] shadow-2xl">
                <p className="text-[15px] font-medium text-slate-900 leading-snug">
                  "Embora exista uma ampla proteção normativa às mulheres, na prática muitos direitos dos homens acabam relativizados. Minha advocacia é voltada a garantir o respeito efetivo a esses direitos, com estratégia, responsabilidade e soluções personalizadas."
                </p>
                <p className="mt-4 text-[10px] font-bold text-gold uppercase tracking-[0.2em] flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-gold"></span>
                  Marina Araújo
                </p>
              </div>
            </div>

            <div>
              <span className="text-gold text-xs font-bold tracking-widest uppercase mb-4 block">A Profissional</span>
              <h2 className="text-4xl md:text-6xl font-display mb-8">Marina Araújo</h2>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
                <p>
                  Meu nome é <span className="text-slate-900 font-medium">Marina Araújo</span>, sou advogada há mais de 10 anos e atuo na defesa exclusiva de homens em processos de Direito de Família.
                </p>
                <p>
                  Entrei no mercado de trabalho em 2011 e acumulo <span className="text-gold font-medium">15 anos de experiência jurídica</span>.
                </p>
                <p>
                  Ao longo dessa trajetória, construí uma atuação sólida, com condução técnica e planejamento jurídico personalizado, voltada especialmente a conflitos familiares complexos ligados à realidade masculina.
                </p>
                <p className="bg-gold/5 border-l-2 border-gold p-6 italic">
                  Sou pioneira no Estado de Goiás ao me posicionar publicamente na defesa exclusiva de homens no Direito de Família.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <div className="glass px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-gold">
                  OAB/GO Especialista
                </div>
                <div className="glass px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-gold">
                  Pioneira em Defesa Masculina
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 reveal">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display mb-6 italic">O que dizem nossos clientes</h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            {
              text: "A Dra. Marina foi fundamental para que eu pudesse manter o convívio com meus filhos. Sua abordagem técnica fez toda a diferença no processo.",
              author: "R. Silva",
              role: "Empresário"
            },
            {
              text: "Excelente profissional. Estratégica, direta e muito segura. Recomendo para qualquer homem que esteja passando por um divórcio complexo.",
              author: "M. Oliveira",
              role: "Engenheiro"
            },
            {
              text: "Finalmente encontrei alguém que entende as dificuldades que nós homens enfrentamos no judiciário de família. Trabalho impecável.",
              author: "A. Santos",
              role: "Médico"
            }
          ].map((item, i) => (
            <div key={i} className="glass p-10 rounded-3xl flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500">
              <p className="text-slate-600 italic leading-relaxed mb-8">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center font-bold text-gold">
                  {item.author[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{item.author}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-32 px-6 reveal">
        <div className="max-w-6xl mx-auto glass rounded-[3rem] overflow-hidden relative">
          <div className="absolute inset-0 bg-gold/5"></div>
          <div className="relative z-10 p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-7xl font-display mb-8 leading-tight">
              Proteja seu futuro e <br/>o <span className="text-gold italic">seu direito de ser pai</span>
            </h2>
            <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
              Não deixe que a falta de uma estratégia especializada comprometa seus direitos. Agende uma consulta técnica e personalizada hoje mesmo.
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5562982248520&text&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gold text-white px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-2xl shadow-gold/20 flex items-center gap-3 mx-auto"
            >
              AGENDAR CONSULTA VIA WHATSAPP
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Scale className="text-gold w-5 h-5" />
            <span className="font-display text-lg font-bold tracking-tighter text-slate-900">MARINA ARAÚJO</span>
          </div>
          
          <p className="text-slate-300 text-xs tracking-widest uppercase">
            © 2026 Marina Araújo Advocacia. Todos os direitos reservados.
          </p>

          <div className="flex gap-6 text-slate-400 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-gold transition-colors">Privacidade</a>
            <a href="#" className="hover:text-gold transition-colors">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
