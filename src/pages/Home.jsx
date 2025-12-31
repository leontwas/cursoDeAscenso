import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import pepBadge from '../assets/pep_badge.png';
import oficialPrimeroBadge from '../assets/Of_Primero.png';
import oficialMayorBadge from '../assets/Of_Mayor.png';
import inspectorBadge from '../assets/inspector.png';
import '../styles/home.css';


const Home = () => {
  useEffect(() => {
    // Animación de scroll reveal
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.rank-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      <Header />
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Curso de Ascenso</h1>
            <p className="hero-subtitle">Prepárate para tu próximo nivel profesional</p>
          </div>
        </section>

        {/* SECCION PEP */}
        <section className="rank-section pep-section">
          <div className="rank-header">
            <img src={pepBadge} alt="PEP Badge" className="rank-badge" />
            <div className="rank-info">
              <h2 className="rank-title">PEP</h2>
              <p className="rank-description">Instituto Superior de Seguridad Pública</p>
            </div>
          </div>
          <div className="quiz-grid">
            <Link to="/quiz/pep" className="quiz-card pep-card">
              <div className="card-content">
                <h3>Preguntas del PEP</h3>
              </div>
              <div className="card-arrow">→</div>
            </Link>
          </div>
        </section>

        {/* SECCION OF. A OF. 1º */}
        <section className="rank-section oficial-primero-section">
          <div className="rank-header">
            <img src={oficialPrimeroBadge} alt="Oficial Primero Badge" className="rank-badge" />
            <div className="rank-info">
              <h2 className="rank-title">Oficial a Oficial Primero</h2>
              <p className="rank-description">Curso de ascenso a Oficial Primero</p>
            </div>
          </div>
          <div className="quiz-grid">
            <Link to="/quiz/cppn" className="quiz-card oficial-primero-card">
              <div className="card-content">
                <h3>CPPN, CPPCABA y Procedimientos Policiales</h3>
                <span className="required-badge">(*)</span>
              </div>
              <div className="card-arrow">→</div>
            </Link>

            <Link to="/quiz/inimputabilidad" className="quiz-card oficial-primero-card">
              <div className="card-content">
                <h3>Inimputabilidad</h3>
                <span className="required-badge">(*)</span>
              </div>
              <div className="card-arrow">→</div>
            </Link>

            <Link to="/quiz/ley5688" className="quiz-card oficial-primero-card">
              <div className="card-content">
                <h3>Ley 5688</h3>
              </div>
              <div className="card-arrow">→</div>
            </Link>

            <Link to="/quiz/criminalistica" className="quiz-card oficial-primero-card">
              <div className="card-content">
                <h3>Criminalística</h3>
                <span className="required-badge">(*)</span>
              </div>
              <div className="card-arrow">→</div>
            </Link>

            <Link to="/quiz/derechoPenal" className="quiz-card oficial-primero-card">
              <div className="card-content">
                <h3>Derecho Penal</h3>
              </div>
              <div className="card-arrow">→</div>
            </Link>

            <Link to="/quiz/regimenDisciplinario" className="quiz-card oficial-primero-card">
              <div className="card-content">
                <h3>Régimen Disciplinario</h3>
                <span className="required-badge">(*)</span>
              </div>
              <div className="card-arrow">→</div>
            </Link>
          </div>
        </section>

        {/* SECCION OF. 1º A OF. MAYOR */}
        <section className="rank-section oficial-mayor-section">
          <div className="rank-header">
            <img src={oficialMayorBadge} alt="Oficial Mayor Badge" className="rank-badge" />
            <div className="rank-info">
              <h2 className="rank-title">Oficial Primero a Oficial Mayor</h2>
              <p className="rank-description">Curso de ascenso a Oficial Mayor</p>
            </div>
          </div>
          <div className="quiz-grid">
            <Link to="/quiz/cppn" className="quiz-card oficial-mayor-card">
              <div className="card-content">
                <h3>Derecho Procesal Penal en la Función Policial</h3>
                <span className="required-badge">(*)</span>
              </div>
              <div className="card-arrow">→</div>
            </Link>

            <Link to="/quiz/ley5688" className="quiz-card oficial-mayor-card">
              <div className="card-content">
                <h3>Ley 5688</h3>
              </div>
              <div className="card-arrow">→</div>
            </Link>

            <Link to="/quiz/inimputabilidad" className="quiz-card oficial-mayor-card">
              <div className="card-content">
                <h3>Inimputabilidad</h3>
                <span className="required-badge">(*)</span>
              </div>
              <div className="card-arrow">→</div>
            </Link>

            <Link to="/quiz/oficialGuardia" className="quiz-card oficial-mayor-card">
              <div className="card-content">
                <h3>Oficial de Guardia</h3>
              </div>
              <div className="card-arrow">→</div>
            </Link>

            <Link to="/quiz/marcoLegal" className="quiz-card oficial-mayor-card">
              <div className="card-content">
                <h3>Marco Legal de la Actuación Policial</h3>
              </div>
              <div className="card-arrow">→</div>
            </Link>

            <Link to="/quiz/competenciasJudiciales" className="quiz-card oficial-mayor-card">
              <div className="card-content">
                <h3>Competencias Judiciales</h3>
              </div>
              <div className="card-arrow">→</div>
            </Link>

            <Link to="/quiz/regimenDisciplinario" className="quiz-card oficial-mayor-card">
              <div className="card-content">
                <h3>Régimen Disciplinario</h3>
                <span className="required-badge">(*)</span>
              </div>
              <div className="card-arrow">→</div>
            </Link>

            <Link to="/quiz/protocolos" className="quiz-card oficial-mayor-card">
              <div className="card-content">
                <h3>Protocolos de Actuación</h3>
                <span className="required-badge">(*)</span>
              </div>
              <div className="card-arrow">→</div>
            </Link>
          </div>
        </section>

        {/* SECCION OF. MAYOR A INSPECTOR */}
        <section className="rank-section inspector-section">
          <div className="rank-header">
            <img src={inspectorBadge} alt="Inspector Badge" className="rank-badge" />
            <div className="rank-info">
              <h2 className="rank-title">Oficial Mayor a Inspector</h2>
              <p className="rank-description">Curso de ascenso a Inspector</p>
            </div>
          </div>
          <div className="quiz-grid">
            <Link to="/quiz/jefeServicio" className="quiz-card inspector-card">
              <div className="card-content">
                <h3>Jefe de Servicios</h3>
                <span className="required-badge">(*)</span>
              </div>
              <div className="card-arrow">→</div>
            </Link>

            <Link to="/quiz/jefeJudiciales" className="quiz-card inspector-card">
              <div className="card-content">
                <h3>Jefe de Judiciales</h3>
              </div>
              <div className="card-arrow">→</div>
            </Link>

            <Link to="/quiz/tecnologias" className="quiz-card inspector-card">
              <div className="card-content">
                <h3>Sistemas Administrativos</h3>
                <span className="required-badge">(*)</span>
              </div>
              <div className="card-arrow">→</div>
            </Link>

            <Link to="/quiz/protocolos" className="quiz-card inspector-card">
              <div className="card-content">
                <h3>Guías de Actuación Policial</h3>
                <span className="required-badge">(*)</span>
              </div>
              <div className="card-arrow">→</div>
            </Link>

            <Link to="/quiz/mando" className="quiz-card inspector-card">
              <div className="card-content">
                <h3>Mando y Conducción</h3>
                <span className="required-badge">(*)</span>
              </div>
              <div className="card-arrow">→</div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
