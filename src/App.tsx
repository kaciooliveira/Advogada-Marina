/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Scale, 
  ShieldCheck, 
  Gavel, 
  Users, 
  FileText, 
  ChevronRight, 
  ChevronDown,
  Menu, 
  X,
  ArrowRight,
  CheckCircle2,
  Award,
  Instagram,
  MessageCircle,
  Linkedin
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quais são os direitos do pai no divórcio com partilha de bens em Goiânia?",
      answer: "No divórcio, o homem tem direito à preservação do seu patrimônio conforme o regime de bens adotado. Atuamos para garantir que a divisão seja justa, protegendo investimentos, imóveis e empresas, além de assegurar que os direitos do pai no divórcio com partilha de bens em Goiânia sejam respeitados desde o primeiro dia da separação."
    },
    {
      question: "Fui acusado falsamente de agressão durante o divórcio. O que fazer?",
      answer: "A defesa contra falsa acusação de agressão no divórcio deve ser técnica e imediata, reunindo provas de álibi e histórico de mensagens para reestabelecer a verdade perante o juiz e evitar medidas protetivas injustas."
    },
    {
      question: "O pai pode pedir revisão de pensão alimentícia por desemprego?",
      answer: "Sim. Se sua capacidade financeira mudou, você pode pedir revisão de pensão alimentícia por desemprego para que o juiz ajuste o valor à sua nova realidade, evitando dívidas e o risco de prisão."
    },
    {
      question: "Como reduzir valor de pensão alimentícia fixada acima da capacidade?",
      answer: "Atuamos demonstrando tecnicamente como reduzir valor de pensão alimentícia fixada acima da capacidade, apresentando gastos fixos e rendimentos reais para equilibrar o binômio necessidade/possibilidade."
    },
    {
      question: "Pensão de filho maior de 18 anos para de ser paga automaticamente?",
      answer: "Não. É necessário ingressar com uma ação de exoneração de pensão alimentícia para filho maior de 18 anos, comprovando que ele possui meios de subsistência ou não está estudando."
    },
    {
      question: "É possível guarda compartilhada com residência fixa no pai em Goiás?",
      answer: "Sim. É plenamente viável estabelecer a guarda compartilhada com residência fixa no pai em Goiás, desde que comprovado que o ambiente paterno oferece as melhores condições para a criança."
    },
    {
      question: "O que fazer quando a mãe alienadora impede as visitas?",
      answer: "Utilizamos medidas judiciais urgentes contra a mãe alienadora, que podem incluir multas diárias, busca e apreensão de menores e até a alteração da guarda em favor do pai."
    },
    {
      question: "Como provar alienação parental contra o pai em Goiânia?",
      answer: "Para saber como provar alienação parental contra o pai em Goiânia, reunimos registros de mensagens, áudios e solicitamos a intervenção da equipe psicossocial do TJGO."
    },
    {
      question: "O pai pode viajar com filho sem autorização da mãe?",
      answer: "Em viagens nacionais, o pai com guarda compartilhada pode viajar sem autorização da mãe. Para viagens internacionais, a autorização de ambos os pais é obrigatória, salvo decisão judicial."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

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
          <a href="#servicos" className="hover:text-gold transition-colors">A Advogada</a>
          <a href="#seus-direitos" className="hover:text-gold transition-colors">Seus Direitos</a>
          <a href="#contato" className="hover:text-gold transition-colors">Contato</a>
        </nav>

        <a 
          href="https://api.whatsapp.com/send/?phone=5562982248520&text&type=phone_number&app_absent=0" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gold text-white px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform active:scale-95"
        >
          CONSULTE AGORA!
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
            Atuação estratégica em Direito de Família para homens
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
              FALE COM A DRA. MARINA ARAÚJO
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
              <span className="text-2xl font-display italic">+ 15 Anos de Experiência Jurídica</span>
              <div className="w-2 h-2 rounded-full bg-gold/50"></div>
              <span className="text-2xl font-display italic">Especialista em Conflitos Complexos</span>
              <div className="w-2 h-2 rounded-full bg-gold/50"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Diferenciais (Bento Grid) */}
      <section id="sobre" className="py-16 md:py-32 px-6 md:px-12 max-w-7xl mx-auto reveal">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display mb-6 leading-tight">
              Uma abordagem técnica <br/><span className="italic text-gold">voltada à realidade masculina</span>
            </h2>
          </div>
          <p className="text-slate-700 max-w-sm text-sm leading-relaxed">
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
              <p className="text-sm text-slate-400">Primeira e única advogada do Estado a se posicionar publicamente na defesa exclusiva de homens e dos pais.</p>
            </div>
          </div>

          {/* Card 3: Small */}
          <div className="glass rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:bg-gold/5 transition-colors">
            <span className="text-4xl font-display text-gold mb-2">+ 200</span>
            <span className="text-xs uppercase tracking-widest text-slate-400">Conflitos Solucionados</span>
          </div>

          {/* Card 4: Small */}
          <div className="glass rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:bg-gold/5 transition-colors">
            <span className="text-4xl font-display text-gold mb-2">+ 10</span>
            <span className="text-xs uppercase tracking-widest text-slate-400">Anos de Advocacia</span>
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
                  Trabalho na área desde 2011 e acumulo <span className="text-gold font-medium">15 anos de experiência jurídica</span>.
                </p>
                <p>
                  Ao longo dessa trajetória, construí uma atuação sólida, com condução técnica e planejamento jurídico personalizado, voltado especialmente a conflitos familiares complexos ligados à realidade masculina.
                </p>
                <p className="bg-gold/5 border-l-2 border-gold p-6 italic">
                  Sou pioneira no Estado de Goiás ao me posicionar publicamente na defesa exclusiva de homens no Direito de Família.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <div className="glass px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-gold">
                  OAB/GO 45.368
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
              author: "R. Silva"
            },
            {
              text: "Excelente profissional. Estratégica, direta e muito segura. Recomendo para qualquer homem que esteja passando por um divórcio complexo.",
              author: "M. Oliveira"
            },
            {
              text: "Finalmente encontrei alguém que entende as dificuldades que nós homens enfrentamos no judiciário de família. Trabalho impecável.",
              author: "A. Santos"
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
              Não deixe que a falta de uma estratégia especializada comprometa seus direitos. Agende uma consulta técnica e personalizada hoje mesmo!
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

      {/* FAQ Section */}
      <section id="seus-direitos" className="py-24 px-6 reveal bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-slate-900">Dúvidas Frequentes: Seus Direitos como Homem e Pai</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${activeFaq === index ? 'bg-slate-50 shadow-md border-gold/30' : 'bg-white hover:border-gold/20'}`}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 md:px-8 py-6 text-left flex justify-between items-center gap-4 group"
                >
                  <span className={`font-bold text-base md:text-lg transition-colors ${activeFaq === index ? 'text-gold' : 'text-slate-900 group-hover:text-gold'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeFaq === index ? 'bg-gold text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-gold/10 group-hover:text-gold'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 md:px-8 pb-8 text-slate-600 leading-relaxed text-sm md:text-base">
                    <p className="border-t border-slate-100 pt-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 md:p-12 bg-slate-900 rounded-[2.5rem] text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gold/5"></div>
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-display mb-8 leading-relaxed">
                Está procurando uma advogada especialista na defesa de homens e pais em Goiânia? Clique no botão abaixo e fale agora com a Dra. Marina Araújo!
              </p>
              <a 
                href="https://api.whatsapp.com/send/?phone=5562982248520&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25d366] text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-xl shadow-green-500/20"
              >
                Agendar Consulta com a Dra. Marina Araújo
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="py-24 px-6 reveal bg-slate-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold text-xs font-bold tracking-widest uppercase mb-4 block">Localização</span>
              <h2 className="text-4xl md:text-5xl font-display mb-6">Araújo Advocacia</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Estamos localizados em uma região estratégica para oferecer o melhor atendimento e suporte jurídico aos nossos clientes.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                    <Scale className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Endereço</h4>
                    <p className="text-slate-600">Rua 103, N° 268, Setor Sul<br />CEP: 74080-200 | Goiânia - GO</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                    <Award className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Atendimento</h4>
                    <p className="text-slate-600">Segunda a Sexta: 08h às 18h</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Rua+103,+268,+Setor+Sul,+Goiânia+-+GO,+74080-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all"
                >
                  Ver no Google Maps <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="h-[450px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.467471675123!2d-49.2562145!3d-16.6917631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1466085a5a1%3A0x8f2d5f8f8f8f8f8f!2sRua%20103%2C%20268%20-%20St.%20Sul%2C%20Goi%C3%A2nia%20-%20GO%2C%2074080-200!5e0!3m2!1spt-BR!2sbr!4v1709565000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Marina Araújo Advocacia"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Scale className="text-gold w-6 h-6" />
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tighter text-slate-900 leading-tight">MARINA ARAÚJO</span>
              <span className="text-[11px] font-bold text-slate-400 tracking-[0.15em]">62 9 8224-8520</span>
            </div>
          </div>
          
          <p className="text-slate-300 text-xs tracking-widest uppercase">
            © 2026 Marina Araújo Advocacia. Todos os direitos reservados.
          </p>

          <div className="flex gap-6 items-center">
            <a 
              href="https://api.whatsapp.com/send/?phone=5562982248520&text&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-gold transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/adv.marinaaraujo?igsh=MTFhNm4ybTMzbXVsNQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/marina-ara%C3%BAjo-mamboungou-60a251184/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.tiktok.com/@marina.arajo.advog?_r=1&_t=ZS-94TEvVjOUD7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-gold transition-colors"
              aria-label="TikTok"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.08-.26-.17-.38-.25v7.39c.01 1.54-.2 3.13-.9 4.51-.66 1.34-1.74 2.5-3.09 3.19-1.35.7-2.91.93-4.39.82-1.48-.11-2.94-.61-4.13-1.51-1.2-1.01-2.1-2.41-2.51-3.89-.41-1.48-.36-3.09.12-4.53.48-1.44 1.44-2.7 2.69-3.53 1.25-.84 2.81-1.26 4.31-1.18.15 0 .3 0 .45.03v4.04c-.45-.08-.91-.1-1.36-.04-.45.06-.9.22-1.28.47-.38.25-.69.61-.88 1.03-.19.42-.25.89-.18 1.35.07.46.26.9.56 1.25.3.35.7.61 1.14.75.44.14.91.15 1.36.03.45-.12.85-.38 1.15-.74.3-.36.48-.81.52-1.27.04-.46 0-.93-.01-1.39V.02z"/>
              </svg>
            </a>
            <div className="h-4 w-[1px] bg-slate-100 mx-2 hidden md:block"></div>
            <div className="flex gap-6 text-slate-400 text-xs uppercase tracking-widest">
              <a href="#" className="hover:text-gold transition-colors">Privacidade</a>
              <a href="#" className="hover:text-gold transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
