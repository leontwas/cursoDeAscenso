import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Trofeos = () => {
  const navigate = useNavigate();
  // Inicializar estados directamente desde localStorage
  const [maxStars] = useState(() => parseInt(localStorage.getItem('maxStars') || '0'));
  const [unlockedTrophies] = useState(() => JSON.parse(localStorage.getItem('unlockedTrophies') || '[]'));

  // Definir los trofeos disponibles
  const allTrophies = [
    { id: 1, name: 'Novato', requiredStars: 10, emoji: '🏆', description: '10 respuestas correctas' },
    { id: 2, name: 'Aprendiz', requiredStars: 20, emoji: '🥈', description: '20 respuestas correctas' },
    { id: 3, name: 'Experto', requiredStars: 30, emoji: '🥇', description: '30 respuestas correctas' },
    { id: 4, name: 'Maestro', requiredStars: 40, emoji: '👑', description: '40 respuestas correctas' },
    { id: 5, name: 'Leyenda', requiredStars: 50, emoji: '⭐', description: '50 respuestas correctas' },
    { id: 6, name: 'Genio', requiredStars: 60, emoji: '🎖️', description: '60 respuestas correctas' },
    { id: 7, name: 'Campeón', requiredStars: 70, emoji: '🏅', description: '70 respuestas correctas' },
    { id: 8, name: 'Héroe', requiredStars: 80, emoji: '🦸', description: '80 respuestas correctas' },
    { id: 9, name: 'Crack', requiredStars: 90, emoji: '💎', description: '90 respuestas correctas' },
    { id: 10, name: 'Dios del Quiz', requiredStars: 100, emoji: '👼', description: '100 respuestas correctas' },
  ];

  const isTrophyUnlocked = (trophyId) => {
    return unlockedTrophies.includes(trophyId);
  };

  return (
    <div className="trofeos-page">
      <Header />
      <main className="trofeos-container">
        <div className="trofeos-header">
          <h1>Tus Trofeos</h1>
          <div className="stars-display">
            <h2>⭐ Máximo de Estrellas Alcanzado: {maxStars}</h2>
          </div>
        </div>

        <div className="trofeos-grid">
          {allTrophies.map((trophy) => {
            const isUnlocked = isTrophyUnlocked(trophy.id);
            const progress = Math.min((maxStars / trophy.requiredStars) * 100, 100);

            return (
              <div
                key={trophy.id}
                className={`trophy-card ${isUnlocked ? 'unlocked' : 'locked'}`}
              >
                <div className="trophy-emoji">
                  {isUnlocked ? trophy.emoji : '🔒'}
                </div>
                <h3>{trophy.name}</h3>
                <p className="trophy-description">{trophy.description}</p>
                <div className="trophy-progress">
                  <div
                    className="trophy-progress-bar"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="trophy-requirement">
                  {maxStars}/{trophy.requiredStars} ⭐
                </p>
                {isUnlocked && (
                  <div className="trophy-unlocked-badge">
                    ✓ Desbloqueado
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button
          className="btn btn-primary btn-back"
          onClick={() => navigate('/')}
        >
          Volver al Inicio
        </button>
      </main>
    </div>
  );
};

export default Trofeos;
