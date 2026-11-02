import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Dumbbell,
  MoveUpRight,
  Plus,
  PersonStanding,
  Zap,
} from "lucide-react";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { CTA, Eyebrow, Logo } from "@/components/ui";
import { photos, site } from "@/content/site";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="container hero-content">
            <div className="hero-copy">
              <Eyebrow>PRONTO PARA IR ALÉM?</Eyebrow>
              <h1 id="hero-title">
                SUPERE
                <br />
                SEUS <span>LIMITES.</span>
              </h1>
              <p>
                Força, movimento e foco para ir além de ontem. Encontre o seu
                ritmo e transforme o treino em parte de quem você é.
              </p>
              <div className="hero-actions">
                <CTA />
                <a className="text-link" href="#sobre">
                  Conheça o clube <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
              <p className="hero-concept">
                PULSO TRAINING CLUB / PROJETO CONCEITUAL
              </p>
            </div>
            <div className="hero-visual">
              <div className="hero-photo-frame">
                <Image
                  src={photos.hero.src}
                  alt={photos.hero.alt}
                  fill
                  priority
                  sizes="(max-width: 700px) 100vw, 55vw"
                  className="hero-photo"
                />
              </div>
              <span className="hero-photo-label" aria-hidden="true">
                FORÇA EM CADA MOVIMENTO.
              </span>
            </div>
          </div>
        </section>
        <section className="section modalities" id="modalidades">
          <div className="container">
            <div className="section-heading programs-heading">
              <div>
                <Eyebrow>PRIMEIRO PASSO</Eyebrow>
                <h2>
                  ESCOLHA SEU <span>MOVIMENTO.</span>
                </h2>
              </div>
              <p>Diferentes caminhos. A mesma vontade de evoluir.</p>
            </div>
            <div className="modality-list">
              {site.modalities.map((item, index) => (
                <article
                  className={`modality ${index === 1 ? "modality-featured" : ""}`}
                  key={item.number}
                >
                  <span className="modality-icon" aria-hidden="true">
                    {index === 0 ? (
                      <Dumbbell size={24} />
                    ) : index === 1 ? (
                      <Zap size={24} />
                    ) : (
                      <PersonStanding size={24} />
                    )}
                  </span>
                  <div>
                    <p className="label">{item.tag}</p>
                    <h3 id={`modality-${item.number}`}>{item.name}</h3>
                  </div>
                  <p>{item.description}</p>
                  <a
                    className="modality-link"
                    href={`#plan-${index + 1}`}
                    aria-labelledby={`modality-link-${item.number} modality-${item.number}`}
                  >
                    <span id={`modality-link-${item.number}`}>
                      Explore a proposta
                    </span>
                    <MoveUpRight size={16} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section container about" id="sobre">
          <div>
            <Eyebrow>01 / O CLUBE</Eyebrow>
            <h2>
              NÃO É SÓ TREINO.
              <br />É O QUE <span>TE MOVE.</span>
            </h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              O melhor projeto que você pode construir é você.
            </p>
            <p>
              A PULSO nasce de uma ideia simples: transformar o treino em um
              momento que faz parte de quem você é. Um conceito de clube onde
              ambiente, orientação e movimento caminham juntos.
            </p>
            <p>
              Sem atalhos. Com presença, intenção e vontade de voltar no dia
              seguinte.
            </p>
            <a className="text-link" href="#modalidades">
              Encontre seu movimento <ArrowUpRight size={19} />
            </a>
          </div>
        </section>
        <section className="section container" id="estrutura">
          <div className="section-heading">
            <div>
              <Eyebrow>02 / O ESPAÇO</Eyebrow>
              <h2>
                AMBIENTE QUE INSPIRA.
                <br />
                <span>ENERGIA QUE CONTAGIA.</span>
              </h2>
            </div>
            <p>
              Uma visão de espaço para estar presente.
              <br />E dar o seu melhor.
            </p>
          </div>
          <Gallery />
          <p className="caption">
            Imagens ilustrativas. A PULSO é um conceito de academia, sem unidade
            física.
          </p>
          <div className="space-notes">
            <span>Estrutura para treinar com foco</span>
            <span>Espaços para explorar o movimento</span>
            <span>Uma experiência integrada</span>
          </div>
        </section>
        <section className="section plans-section" id="planos">
          <div className="container">
            <div className="section-heading">
              <div>
                <Eyebrow>03 / SEU RITMO</Eyebrow>
                <h2>
                  ENCONTRE SEU
                  <br />
                  <span>PONTO DE PARTIDA.</span>
                </h2>
              </div>
              <p>
                Propostas ilustrativas de planos.
                <br />
                Sem oferta comercial ou contratação.
              </p>
            </div>
            <div className="plans">
              {site.plans.map((plan, index) => (
                <article
                  className={`plan ${index === 1 ? "featured" : ""}`}
                  key={plan.name}
                  id={`plan-${index + 1}`}
                >
                  <span className="label">
                    {index === 1 ? "EXPLORE MAIS" : `PULSO / 0${index + 1}`}
                  </span>
                  <h3>{plan.name}</h3>
                  <p>{plan.subtitle}</p>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>
                        <Check size={16} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <CTA className="plan-cta">Conheça a proposta</CTA>
                </article>
              ))}
            </div>
            <p className="caption">
              Planos conceituais para demonstração de interface. Não há preços,
              cobranças ou serviços disponíveis.
            </p>
          </div>
        </section>
        <section className="section container faq" id="duvidas">
          <div>
            <Eyebrow>04 / SEM DÚVIDAS</Eyebrow>
            <h2>
              ANTES DO
              <br />
              <span>PRIMEIRO PASSO.</span>
            </h2>
          </div>
          <div>
            {site.faq.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <Plus size={19} aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="contact-section" id="contato">
          <div className="container contact-inner">
            <Eyebrow>SEU PRÓXIMO CAPÍTULO COMEÇA COM UM PASSO.</Eyebrow>
            <h2>
              ATIVE O SEU <span>PULSO.</span>
            </h2>
            <div className="contact-bottom">
              <p>
                O primeiro movimento é seu.
                <br />O próximo nível também.
              </p>
              <div className="demo-note">
                <span className="label">EXPERIÊNCIA DEMONSTRATIVA</span>
                <p>
                  Você chegou ao ponto de contato do projeto. A PULSO é
                  fictícia: não realizamos agendamentos, matrículas ou
                  atendimento. Nenhum dado é coletado.
                </p>
                {site.contact.email ? (
                  <a
                    className="text-link"
                    href={`mailto:${site.contact.email}`}
                  >
                    Entre em contato <ArrowUpRight size={18} />
                  </a>
                ) : (
                  <span className="contact-status">
                    Agendamento indisponível neste conceito
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <Logo />
        <p>
          Projeto demonstrativo desenvolvido pela <strong>VortexVision.</strong>
        </p>
        <a href="#inicio">Voltar ao topo ↑</a>
        <span className="footer-note">
          MARCA FICTÍCIA / PORTFÓLIO CONCEITUAL
        </span>
      </footer>
    </>
  );
}
