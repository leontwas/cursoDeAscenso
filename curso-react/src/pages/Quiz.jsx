import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { questionsByTopic } from '../data';
import errorImage from '../assets/images/image1.png';

const Quiz = () => {
  const { topic } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showFailure, setShowFailure] = useState(false);
  const [failureAnswer, setFailureAnswer] = useState('');
  const [notification, setNotification] = useState('');
  const [totalStars, setTotalStars] = useState(0);
  const [showTrophyUnlock, setShowTrophyUnlock] = useState(false);
  const [unlockedTrophy, setUnlockedTrophy] = useState(null);

  useEffect(() => {
    // Obtener las preguntas del topic seleccionado
    const topicQuestions = questionsByTopic[topic] || [];
    if (topicQuestions.length > 0) {
      setQuestions([...topicQuestions]);
      setCurrentQuestionIndex(Math.floor(Math.random() * topicQuestions.length));
    }

    // Cargar estrellas totales del localStorage
    const savedStars = parseInt(localStorage.getItem('totalStars') || '0');
    setTotalStars(savedStars);

    // Si es una nueva partida (totalStars = 0), resetear los trofeos desbloqueados
    if (savedStars === 0) {
      localStorage.setItem('unlockedTrophies', '[]');
    }
  }, [topic]);

  const selectRandomQuestion = (questionsArray) => {
    if (questionsArray.length === 0) return;
    // eslint-disable-next-line react-hooks/purity
    setCurrentQuestionIndex(Math.floor(Math.random() * questionsArray.length));
  };

  const checkAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setCorrectAnswersCount(prev => prev + 1);

      // Incrementar estrellas
      const newTotalStars = totalStars + 1;
      setTotalStars(newTotalStars);
      localStorage.setItem('totalStars', newTotalStars.toString());

      // Actualizar máximo de estrellas si se supera el récord
      const currentMaxStars = parseInt(localStorage.getItem('maxStars') || '0');
      if (newTotalStars > currentMaxStars) {
        localStorage.setItem('maxStars', newTotalStars.toString());
      }

      // Verificar si se desbloquea un trofeo
      checkTrophyUnlock(newTotalStars);

      const updatedQuestions = questions.filter((_, index) => index !== currentQuestionIndex);
      setQuestions(updatedQuestions);

      if (updatedQuestions.length > 0) {
        selectRandomQuestion(updatedQuestions);
        showNotification("Correcto! ⭐");
      }
    } else {
      // Reiniciar el contador de estrellas totales a cero
      setTotalStars(0);
      localStorage.setItem('totalStars', '0');

      setFailureAnswer(currentQuestion.correctAnswer);
      setShowFailure(true);
    }
  };

  const checkTrophyUnlock = (stars) => {
    // Definir trofeos (igual que en Trofeos.jsx)
    const trophies = [
      { id: 1, name: 'Novato', requiredStars: 10, emoji: '🏆' },
      { id: 2, name: 'Aprendiz', requiredStars: 20, emoji: '🥈' },
      { id: 3, name: 'Experto', requiredStars: 30, emoji: '🥇' },
      { id: 4, name: 'Maestro', requiredStars: 40, emoji: '👑' },
      { id: 5, name: 'Leyenda', requiredStars: 50, emoji: '⭐' },
      { id: 6, name: 'Genio', requiredStars: 60, emoji: '🎖️' },
      { id: 7, name: 'Campeón', requiredStars: 70, emoji: '🏅' },
      { id: 8, name: 'Héroe', requiredStars: 80, emoji: '🦸' },
      { id: 9, name: 'Crack', requiredStars: 90, emoji: '💎' },
      { id: 10, name: 'Dios del Quiz', requiredStars: 100, emoji: '👼' },
    ];

    // Obtener trofeos desbloqueados
    const unlockedTrophies = JSON.parse(localStorage.getItem('unlockedTrophies') || '[]');

    // Verificar si se alcanzó un nuevo trofeo
    const newTrophy = trophies.find(
      trophy => trophy.requiredStars === stars && !unlockedTrophies.includes(trophy.id)
    );

    if (newTrophy) {
      // Agregar el nuevo trofeo a la lista
      const updatedTrophies = [...unlockedTrophies, newTrophy.id];
      localStorage.setItem('unlockedTrophies', JSON.stringify(updatedTrophies));

      // Mostrar notificación de trofeo desbloqueado
      setUnlockedTrophy(newTrophy);
      setShowTrophyUnlock(true);
      setTimeout(() => {
        setShowTrophyUnlock(false);
      }, 4000);
    }
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification('');
    }, 2000);
  };

  const handleRetry = () => {
    navigate('/');
  };

  if (showFailure) {
    return (
      <div className="quiz-page error-page">
        <Header />
        <div id="quiz-container" className="text-center">
          <h1 className="error-title">Incorrecto.</h1>
          <div className="correct-answer-container">
            <h2 className="correct-answer-text">La respuesta correcta es: <span className="answer-highlight">{failureAnswer}</span></h2>
          </div>
          <h2 className="error-message">Respuestas correctas: {correctAnswersCount}</h2>
          <div className="error-image-container">
            <img src={errorImage} alt="Imagen de error" className="img-fluid" />
          </div>
          <button id="retry-button" className="btn btn-danger mt-3" onClick={handleRetry}>
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="quiz-page">
        <Header />
        <div id="quiz-container" className="text-center">
          <h2>No hay preguntas disponibles para este tema.</h2>
          <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-page">
      <Header />
      <div id="quiz-container">
        <div className="stars-counter">
          <span className="stars-label">Estrellas totales: </span>
          <span className="stars-value">{totalStars} ⭐</span>
          <button
            className="btn btn-sm btn-info ms-3"
            onClick={() => navigate('/trofeos')}
          >
            Ver Trofeos 🏆
          </button>
        </div>
        <div id="question-container">
          <h2>{currentQuestion.question}</h2>
        </div>
        <div id="options-container">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className="btn btn-primary option-button"
              onClick={() => checkAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          id="abandon-button"
          className="btn btn-abandonar"
          onClick={() => navigate('/')}
        >
          Regresar
        </button>
      </div>
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}
      {showTrophyUnlock && unlockedTrophy && (
        <div className="trophy-unlock-notification">
          <div className="trophy-unlock-content">
            <div className="trophy-unlock-emoji">{unlockedTrophy.emoji}</div>
            <h2>¡Trofeo Desbloqueado!</h2>
            <h3>{unlockedTrophy.name}</h3>
            <p>{unlockedTrophy.requiredStars} estrellas alcanzadas</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
