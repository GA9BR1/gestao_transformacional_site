import './App.css'
import logoPath from './assets/logo.svg'
import backgroundImage from './assets/background.jpg'
import ceoImage2 from './assets/ceo2.jpg'
import { useEffect, useState } from 'react';
import Footer from './Footer';
import linkedinIcon from './assets/linkedin.svg';
import LoadingScreen from './LoadingScreen';


function App() {

  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const services = [
    {
      title: 'Consultoria Empresarial Personalizada',
      description:
        ['O diagnóstico empresarial personalizado é uma abordagem que envolve a análise específica das necessidades, desafios e oportunidades de uma empresa individualmente. Em vez de aplicar soluções genéricas ou padrões, o diagnóstico personalizado considera as características únicas de cada organização, incluindo sua estrutura, cultura, mercado, concorrência, recursos humanos e tecnológicos, entre outros aspectos.'],
    },
    {
      title: 'Desenvolvimento de Estratégias Empresariais',
      description:
        [
          'O Mapa Estratégico é uma representação visual da estratégia de uma organização. Ele mostra a relação causal entre os diferentes elementos estratégicos, começando com a Visão e a Missão da empresa, passando pelos Objetivos Estratégicos e chegando até as Iniciativas, ou seja, as ações específicas que a organização deve tomar para alcançar seus objetivos.',
          'A estrutura típica de um Mapa Estratégico BSC inclui quatro perspectivas:',
          'Perspectiva Financeira: Esta perspectiva se concentra nos objetivos relacionados ao desempenho financeiro da empresa, como receitas, lucros, retorno sobre o investimento, etc.',
          'Perspectiva do Cliente: Aqui são identificados os objetivos que visam atender às necessidades e expectativas dos clientes, como qualidade, preço, serviço, etc.',
          'Perspectiva dos Processos Internos: Esta perspectiva considera os processos internos que a empresa deve se destacar para atender às necessidades dos clientes e, consequentemente, alcançar seus objetivos financeiros.',
          'Perspectiva de Aprendizado e Crescimento (ou Perspectiva de Aprendizado Organizacional): Esta perspectiva aborda os objetivos relacionados ao desenvolvimento de competências, habilidades e capacidades da organização, incluindo funcionários, sistemas de informação, cultura corporativa, etc.',
          'O Mapa Estratégico BSC é uma ferramenta poderosa porque permite que as organizações visualizem e comuniquem claramente sua estratégia, garantindo que todos os níveis da empresa entendam como seu trabalho contribui para os objetivos de longo prazo. Isso ajuda a alinhar os esforços de toda a organização em direção a uma visão comum e a tomar decisões mais consistentes com a estratégia geral.',
        ]
    },
    {
      title: 'Desenvolvimento de planos de negócios e viabilidades econômicas de projetos',
      description:
       [
        'Um plano de negócios é um documento detalhado que descreve os objetivos de um empreendimento, estratégias para alcançá-los e as etapas necessárias para a implementação. Ele serve como um guia para o empreendedor, ajudando a visualizar e planejar todas as áreas do negócio, desde a concepção da ideia até a operação e o crescimento futuro.'
       ]
    },
    {
      title: 'Mentoria Individual e em Grupo',
      description:
        ['A mentoria, tanto individual quanto coletiva, é um processo de desenvolvimento pessoal e profissional em que uma pessoa mais experiente (o mentor) oferece orientação, conselhos e suporte a uma pessoa menos experiente (o mentorado), com o objetivo de ajudá-la a alcançar seus objetivos e potencializar seu crescimento.']
    },
    {
      title: 'Treinamentos e Workshops',
      description:
        [
          'Os treinamentos e workshops são ferramentas valiosas para ajudar as empresas de várias maneiras.',
          'Desenvolvimento de habilidades: Treinamentos e workshops oferecem oportunidades para os funcionários desenvolverem novas habilidades relevantes para suas funções e responsabilidades. Isso pode incluir habilidades técnicas, como uso de software específico, bem como habilidades interpessoais, como comunicação eficaz, liderança e resolução de conflitos.',
          'Em resumo, treinamentos e workshops são investimentos estratégicos que podem impulsionar o crescimento e o sucesso das empresas, capacitando os funcionários com as habilidades e conhecimentos necessários para enfrentar os desafios do ambiente empresarial atual.',
        ],
    },
    {
      title: 'Implantação de Indicadores de desempenhos',
      description:
        [
          'Indicadores de desempenho são medidas quantitativas ou qualitativas que ajudam a avaliar o progresso e o desempenho de uma organização, equipe ou processo em relação a metas e objetivos pré-definidos. Eles fornecem uma maneira de monitorar e medir o sucesso das atividades e iniciativas em diferentes áreas da empresa.',
          'Por outro lado, indicadores de resultados são medidas que avaliam os resultados alcançados por uma organização, equipe ou processo. Eles refletem os efeitos das atividades realizadas e ajudam a determinar se os objetivos finais foram atingidos.',
          'Em resumo, os indicadores de desempenho são usados para monitorar e avaliar o progresso ao longo do tempo, enquanto os indicadores de resultados medem o sucesso ou o impacto final das ações em relação aos objetivos estabelecidos. Ambos os tipos de indicadores são essenciais para a gestão eficaz e para garantir que a empresa esteja progredindo em direção aos seus objetivos estratégicos.'
        ]
    },
    {
      title: 'Diagnóstico financeiro pessoal e empresarial',
      description:
        [
          'O diagnóstico financeiro é uma avaliação abrangente da saúde financeira de uma empresa e ou um grupo familiar em um determinado período. Esse processo envolve a análise detalhada das finanças, incluindo receitas, despesas, fluxo de caixa, endividamento, rentabilidade, eficiência operacional e outras métricas financeiras relevantes.',
          'O objetivo do diagnóstico financeiro é identificar pontos fortes e fracos na gestão financeira da empresa ou grupo familiar, bem como oportunidades de melhoria. Isso permite que os gestores compreendam melhor a situação financeira atual e tomem decisões mais informadas para alcançar metas financeiras e estratégicas.',
          'O diagnóstico financeiro pode incluir a análise de diversos aspectos, tais como: Análise de fluxo de caixa, Análise de rentabilidade, Análise de endividamento, Análise de eficiência operacional, Análise de liquidez.',
          'Ao realizar um diagnóstico financeiro, os gestores podem identificar áreas que necessitam de melhorias e implementar estratégias para otimizar a gestão financeira, reduzir riscos e aumentar a lucratividade e a sustentabilidade financeira a longo prazo.'
        ],
    },
  ];

  const handleServiceClick = (index: number) => {
    setSelectedService(selectedService === index ? null : index);
  };

  useEffect(() => {
    const handleLoad = () => {
      if (window.innerWidth < 1281) {
        handlePresentationDivHeight();
      }
      setIsLoading(false);
    };
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad, false);
    }
    

    window.addEventListener('load', handleLoad);
    window.addEventListener('resize', handlePresentationContentSizing);
    window.addEventListener('scroll', handleNavBarScroll);
    return () => {
      window.removeEventListener('resize', handlePresentationContentSizing);
      window.removeEventListener('scroll', handleNavBarScroll);
      window.removeEventListener('load', handleLoad);
    }
  }); 

  function handlePresentationContentSizing() {
    if(window.innerWidth < 1281) {
      handlePresentationDivHeight();
    } else {
      const presentationDiv =  document.querySelector('.presentation-content-div') as HTMLElement;
      presentationDiv.style.paddingTop = '16vh';
    }
  }

  function handleNavBarScroll() {
    if (window.innerWidth > 1280) return;
      const navbar = document.querySelector('.navbar') as HTMLElement;
      const scrollPosition = window.scrollY;
    
      if (scrollPosition > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
  }

  function handlePresentationDivHeight() {
    const section = document.querySelector('.presentation') as HTMLElement;
    const presentationDiv =  document.querySelector('.presentation-content-div') as HTMLElement;
    const navbar = document.querySelector('.navbar') as HTMLElement;
    presentationDiv.style.paddingTop = `${navbar.offsetHeight + (section.offsetHeight * 0.10)}px`;
  }


  function scrollToSection(id: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    const element = document.getElementById(id) as HTMLElement;
    if (window.innerWidth > 1280) {
      window.scrollTo(0, element.offsetTop);
      return;
    }
    event.preventDefault();
    
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const navbarHeight = navbar.offsetHeight;
    window.scrollTo(0, element.offsetTop - navbarHeight);
  }



  return (
    <>
    {isLoading && <LoadingScreen />}
    <section id='start' className='presentation'>
      <img className='background-image' src={backgroundImage} alt="Imagem de fundo(Prédios)" />
      <nav className='navbar'>
        <a href='/' className='logo-link' onClick={(e) => scrollToSection('start', e)}><img src={logoPath} alt="Logo Gestão Transformacional, Pessoas e Negócios" /></a>
        <ul className='menu-links-list'>
          <li><a href='#about' onClick={(e) => scrollToSection('about', e)}>Sobre</a></li>
          <li><a href='#solutions' onClick={(e) => scrollToSection('solutions', e)}>Soluções</a></li>
          <li><a href='#contact' onClick={(e) => scrollToSection('contact', e)}>Contato</a></li>
        </ul>
      </nav>
      <div className='presentation-content-div'>
        <h2>Pessoas e Negócios</h2>
        <p>
          Oferecemos serviços de consultoria, mentoria em gestão empresarial e empreendorismo. Ajudamos empresas a transformar a sua gestão e a alcançar os seus objetivos. Se você quer se tornar um empresário ou um profissional de sucesso, torne-se um <span className='bigger-word'>gestor transformacional.</span>
        </p>
        <a className='solutions-button' href='#solutions'>Veja nossas soluções</a>
      </div>
    </section>
    <div className="gradient" id="about"></div>
    <section className='about'>
      <div className='about-content'>
        <h2>Sobre</h2>
        <p className='about-text'>
          Potencializamos sua capacidade de concretizar e administrar seus sonhos de maneira revolucionária.
        </p>

        <div className='section'>
          <h3>Quem Somos</h3>
          <p>
            Gestão Transformacional é mais que uma consultoria empresarial. Somos uma equipe dedicada e apaixonada por ajudar profissionais a transformarem seus sonhos em realidade. Combinamos experiência, conhecimento e uma abordagem inovadora para orientar pessoas e organizações em direção ao sucesso.
          </p>
        </div>

        <div className='section'>
          <h3>O que Fazemos</h3>
          <p>
            Oferecemos serviços abrangentes de consultoria empresarial e mentoria, focados em potencializar os sonhos e metas de nossos clientes. Desde o desenvolvimento de estratégias eficazes até a implementação de práticas de gestão de alto impacto, trabalhamos lado a lado com nossos clientes para alcançar resultados extraordinários.
          </p>
        </div>

        <div className='section'>
          <h3>Nossa Abordagem</h3>
          <p>
            Na Gestão Transformacional, acreditamos que cada sonho é único e merece ser tratado com cuidado e dedicação. Nossa abordagem é personalizada, adaptada às necessidades específicas de cada cliente. Utilizamos métodos comprovados e inovadores para desbloquear o potencial máximo de nossos clientes e capacitá-los a alcançar seus objetivos.
          </p>
        </div>

        <div className='section'>
          <h3>CEO</h3>
          <div className='ceo-info'>
            <img src={ceoImage2} alt='Foto do CEO' className='ceo-image' />
            <div className='ceo-text'>
              <h4>Marcelo Mattos</h4><a target='_blank' href="https://www.linkedin.com/in/marcelo-de-mattos-774b8b32/"><img src={linkedinIcon} alt='Ícone do Linkedin'/></a>
              <p>
              Fundador e consultor da empresa de Consultoria Gestão Transformacional, tem MBA em Gestão de Negócios, Controladoria e Finanças corporativas, Pós-Graduação em Gestão Financeira, graduado em Administração. Possui mais de 15 anos de experiência em gestão. Sua trajetória reflete uma sólida educação combinada com experiência prática, avalizando sua posição como líder, empresário e gestor competente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id='solutions' className='services'>
        <div className='services-content'>
          <h2>Soluções</h2>
          <ul className='services-list'>
            {services.map((service, index) => (
              <li key={index} className={`service-item ${selectedService === index ? 'active' : ''}`}>
                <button onClick={() => handleServiceClick(index)}>{service.title}</button>
                {selectedService === index && (
                  <div key={index} className='service-description'>
                    {service.description.map((paragraph, index) => (
                       <p key={index} className={service.description.length - 1 !== index ? 'services-description-paragraph-margin-bottom' : ''}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className='contact' id='contact'>
        <div className='contact-content'>
          <h2>Fale conosco</h2>
          <h4>Email</h4><span>admtransformacional@gmail.com</span>
          <h4>Whatsapp</h4><a className='whatsapp-link' target='_blank' href='https://api.whatsapp.com/send?phone=5562981980011&text=Ol%C3%A1,%20gostaria%20de%20falar%20sobre%20os%20servi%C3%A7os%20da%20gest%C3%A3o%20transformacional.'>Link do WhatsApp</a>
        </div>
      </section>
      <Footer/>
    </>
  )
}



export default App
