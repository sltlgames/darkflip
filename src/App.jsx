import { useState } from 'react';
import {
  Award,
  BookOpen,
  Check,
  ChevronDown,
  CircleX,
  Headphones,
  Menu,
  Play,
  Shield,
  Sparkles,
  Users,
  X,
  Zap,
} from 'lucide-react';

const authorPhoto =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=480&q=80';

const pains = [
  'Não sabe por onde começar no TikTok',
  'Posta e não entende por que a conta não entrega',
  'Confunde conta ruim com conteúdo ruim',
  'Já perdeu tempo criando perfil do jeito errado',
];

const moduleCards = [
  {
    id: 1,
    title: 'Criação da conta',
    desc: 'Configure do zero sem dar nenhum sinal ruim ao algoritmo desde o começo.',
    image:
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=400&q=70',
  },
  {
    id: 2,
    title: 'Aquecimento',
    desc: 'O que fazer antes do primeiro post para a conta receber mais entrega.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=70',
  },
  {
    id: 3,
    title: 'Configuração do ambiente',
    desc: 'Ajuste tudo ao redor da conta antes de publicar qualquer coisa.',
    image:
      'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=400&q=70',
  },
  {
    id: 4,
    title: 'Primeiro teste',
    desc: 'Publique com estratégia e aprenda a ler os primeiros dados.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=70',
  },
  {
    id: 5,
    title: 'Ajustes e repetição',
    desc: 'Como identificar o que funcionou e repetir com mais segurança.',
    image:
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=400&q=70',
  },
  {
    id: 6,
    title: 'Base para crescer',
    desc: 'Estrutura sólida para escalar sem perder o que foi conquistado.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=70',
  },
];

const perks = [
  { Icon: Award,      title: 'Método validado',   desc: 'Testado antes de ser ensinado.' },
  { Icon: Zap,        title: 'Acesso imediato',    desc: 'Disponível assim que o pagamento é confirmado.' },
  { Icon: Users,      title: 'Para iniciantes',    desc: 'Não precisa de experiência anterior.' },
  { Icon: BookOpen,   title: 'Passo a passo',      desc: 'Sequência clara do começo ao fim.' },
  { Icon: Shield,     title: 'Garantia de 7 dias', desc: 'Sem risco. Se não gostar, devolvemos 100%.' },
  { Icon: Headphones, title: 'Suporte incluso',    desc: 'Tire suas dúvidas sempre que precisar.' },
];

const authorStats = [
  { value: '10k+', label: 'Alunos' },
  { value: '2.4M', label: 'Views geradas' },
  { value: '97%',  label: 'Satisfação' },
];

const proofImages = [
  'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=320&q=70',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=320&q=70',
  'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=320&q=70',
  'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=320&q=70',
];

const faqs = [
  {
    question: 'Para quem é esse método?',
    answer:
      'Para quem quer aprender a criar, aquecer e validar contas com mais clareza antes de tentar escalar conteúdo.',
  },
  {
    question: 'Preciso aparecer?',
    answer:
      'Não. A proposta é estruturar a conta e o processo sem depender da sua imagem como centro da operação.',
  },
  {
    question: 'Dá para começar com pouco recurso?',
    answer:
      'Sim. A base do método é enxuta e focada em fazer o essencial direito antes de complicar.',
  },
  {
    question: 'Quanto tempo leva para ter resultado?',
    answer:
      'Depende da consistência, mas alunos costumam ver diferença já na primeira semana seguindo o método do jeito certo.',
  },
  {
    question: 'E se eu não gostar?',
    answer: 'Você tem 7 dias de garantia total. Pede reembolso sem burocracia.',
  },
];

/* ── Header ── */

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Método Zero a Viral">
          <span className="brand-mark">ZV</span>
          <span>Método Zero a Viral</span>
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#problema">Problema</a>
          <a href="#conteudo">Conteúdo</a>
          <a href="#autor">Autor</a>
          <a href="#oferta">Oferta</a>
        </nav>

        <button
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="nav-mobile" aria-label="Navegação mobile">
          <a href="#problema" onClick={() => setMenuOpen(false)}>Problema</a>
          <a href="#conteudo" onClick={() => setMenuOpen(false)}>Conteúdo</a>
          <a href="#autor"    onClick={() => setMenuOpen(false)}>Autor</a>
          <a href="#oferta"   onClick={() => setMenuOpen(false)}>Oferta</a>
        </nav>
      )}
    </header>
  );
}

/* ── Hero ── */

function HeroSection() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-badge">
          <Sparkles size={12} />
          Método completo para iniciantes
        </div>

        <h1>
          Crie a conta certa
          <span>antes do primeiro post</span>
        </h1>

        <p className="hero-copy">
          O método para criar, aquecer e validar a conta do jeito certo,{' '}
          <strong>sem desperdiçar perfil</strong> e{' '}
          <strong>sem postar no escuro</strong>.
        </p>

        <div className="hero-price">
          <span className="hero-price-old">De R$&nbsp;197,00</span>
          <div className="hero-price-row">
            <span className="hero-price-label">Por apenas</span>
            <strong>R$&nbsp;97,00</strong>
          </div>
        </div>

        <a className="button button-primary hero-cta" href="#oferta">
          <Play size={17} fill="currentColor" />
          Quero começar agora
        </a>

        <p className="hero-note">Acesso imediato · Garantia de 7 dias</p>
      </div>

      <a className="hero-scroll" href="#problema" aria-label="Rolar para baixo">
        <ChevronDown size={22} />
      </a>
    </section>
  );
}

/* ── Problem ── */

function ProblemSection() {
  return (
    <section id="problema" className="section">
      <div className="section-shell narrow">
        <div className="section-heading centered">
          <p className="section-kicker">O problema</p>
          <h2>Você se identifica com algum desses problemas?</h2>
        </div>

        <div className="pain-list">
          {pains.map((pain) => (
            <article className="pain-item" key={pain}>
              <CircleX size={18} />
              <span>{pain}</span>
            </article>
          ))}
        </div>

        <div className="problem-callout">
          <p>
            Se você disse <strong>SIM</strong> para qualquer um desses, o{' '}
            <strong>Método Zero a Viral</strong> foi feito para você.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Modules ── */

function ContentSection() {
  return (
    <section id="conteudo" className="section section-alt">
      <div className="section-shell">
        <div className="section-heading centered">
          <p className="section-kicker">O conteúdo</p>
          <h2>O que você vai aprender</h2>
          <p className="section-subtitle">
            Um método estruturado, passo a passo, ideal para quem está começando do zero.
          </p>
        </div>

        <div className="module-grid">
          {moduleCards.map((mod) => (
            <div className="module-card" key={mod.id}>
              <div className="module-card-img">
                <img src={mod.image} alt={mod.title} />
                <span className="module-card-badge">Módulo {mod.id}</span>
              </div>
              <div className="module-card-body">
                <strong className="module-card-title">{mod.title}</strong>
                <p className="module-card-desc">{mod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Perks ── */

function PerksSection() {
  return (
    <section className="section">
      <div className="section-shell">
        <div className="section-heading centered">
          <p className="section-kicker">Por que escolher</p>
          <h2>Por que o Método Zero a Viral?</h2>
        </div>

        <div className="perks-grid">
          {perks.map(({ Icon, title, desc }) => (
            <div className="perk-item" key={title}>
              <div className="perk-icon">
                <Icon size={20} />
              </div>
              <strong className="perk-title">{title}</strong>
              <p className="perk-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Author ── */

function AuthorSection() {
  return (
    <section id="autor" className="section section-alt">
      <div className="section-shell">
        <div className="author-layout">
          <div className="author-photo-col">
            {/* TODO: substituir pela sua foto */}
            <img className="author-photo" src={authorPhoto} alt="Foto do autor — placeholder" />
            <div className="author-name-card">
              <strong>[Seu nome aqui]</strong>
              <span>Criador do Método Zero a Viral</span>
            </div>
          </div>

          <div className="author-content">
            <div className="section-heading">
              <p className="section-kicker">Quem sou eu?</p>
              <h2>O nome por trás do método.</h2>
            </div>

            <p className="author-bio">
              {/* TODO: substituir pela sua história real */}
              [Espaço para a sua história. Conte de onde veio, o que tentou que não
              funcionou, e como chegou ao método que desenvolveu. Seja direto e honesto —
              é isso que conecta e convence quem está lendo.]
            </p>

            <div className="author-stats">
              {authorStats.map((stat) => (
                <div className="author-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Proof ── */

function ProofSection() {
  return (
    <section className="section">
      <div className="section-shell">
        <div className="section-heading centered">
          <p className="section-kicker">Resultados</p>
          <h2>Veja os resultados dos alunos.</h2>
        </div>

        <div className="proof-grid">
          {proofImages.map((src, i) => (
            <div className="proof-item" key={i}>
              {/* TODO: substituir pelos seus prints reais de resultados */}
              <img src={src} alt={`Resultado ${i + 1} — placeholder`} />
              <div className="proof-overlay">Print de resultado — substituir</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Offer ── */

function OfferSection() {
  return (
    <section id="oferta" className="section section-alt">
      <div className="section-shell narrow">
        <div className="offer-card">
          <p className="section-kicker">Oferta</p>
          <h2>Método Zero a Viral</h2>
          <p className="offer-copy">Acesso completo ao método por pagamento único.</p>

          <div className="offer-checklist">
            {[
              'Acesso a todos os módulos',
              'Suporte por 7 dias',
              'Atualizações gratuitas',
              'Garantia de 7 dias',
              'Acesso imediato',
            ].map((item) => (
              <div className="offer-check-item" key={item}>
                <Check size={15} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="offer-price">
            <span>De R$&nbsp;197,00</span>
            <strong>R$&nbsp;97,00</strong>
          </div>

          <div className="offer-urgency">
            <Sparkles size={13} />
            Oferta por tempo limitado
          </div>

          {/* TODO: substituir pelo link real de checkout (ex: Hotmart, Kiwify) */}
          <a className="button button-primary button-block" href="#">
            Comprar agora
          </a>

          <div className="offer-safe">
            <Shield size={16} />
            <span>Compra segura · Garantia de 7 dias</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */

function FaqItem({ item, open, onToggle }) {
  return (
    <article className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-trigger" type="button" onClick={onToggle}>
        <span>{item.question}</span>
        <ChevronDown size={16} />
      </button>
      <div className="faq-body">
        <p className="faq-answer">{item.answer}</p>
      </div>
    </article>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section">
      <div className="section-shell narrow">
        <div className="section-heading centered">
          <p className="section-kicker">Perguntas frequentes</p>
          <h2>O essencial para decidir rápido.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <FaqItem
              item={item}
              key={item.question}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Footer ── */

function Footer() {
  return (
    <footer className="footer">
      <span>Método Zero a Viral</span>
    </footer>
  );
}

/* ── Sticky mobile CTA ── */

function StickyMobileCta() {
  return (
    <div className="sticky-cta">
      <a className="button button-primary button-block" href="#oferta">
        Comprar por R$&nbsp;97,00
      </a>
    </div>
  );
}

/* ── App ── */

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <main>
        <ProblemSection />
        <ContentSection />
        <PerksSection />
        <AuthorSection />
        <ProofSection />
        <OfferSection />
        <FaqSection />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}

export default App;
