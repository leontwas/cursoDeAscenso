class Proposito4 {
    constructor() {
      this.questions = [
        // Array de preguntas para Proposito 4
      ];
    }
  }const questions = [
    {
      question: "El incumplimiento a lo dispuesto en el artículo 100 o en los incisos 9, 12, 13 y 15 del artículo 109 de la Ley N° 5688.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
    },
    {
      question: "La falta de diligencia, profesionalismo, puntualidad o exactitud en el cumplimiento de los deberes inherentes a la función que se le encomiende.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
    },
    {
      question: "Adoptar posturas de descanso inapropiadas durante el servicio, aún cuando ello no afecte la debida atención que la función asignada amerita.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
    }
  ];
  
  // Variables de estado
  let currentQuestionIndex = 0;
  let correctAnswersCount = 0;
  
  // Referencias a elementos del DOM
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const messageElement = document.getElementById('message');
  const imageElement = document.getElementById('image');
  
  // Función para mostrar la pregunta actual
  function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
  
    question.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsElement.appendChild(button);
    });
  }
  
  // Función para verificar la respuesta
  function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    
    if (selectedOption === correctAnswer) {
      correctAnswersCount++;
      if (correctAnswersCount % 10 === 0) {
        messageElement.textContent = `¡Felicidades! Has ganado la insignia: `;
        imageElement.src = `image${correctAnswersCount / 10 + 1}.png`; // Muestra la imagen según el número de respuestas correctas
      }
    } else {
      messageElement.textContent = 'Respuesta incorrecta';
      imageElement.src = 'image1.png'; // Muestra la imagen por respuesta incorrecta
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      messageElement.textContent = 'Has completado el cuestionario';
      optionsElement.innerHTML = '';
      imageElement.src = ''; // Limpia la imagen al finalizar
    }
  }
  
  // Inicializar el cuestionario
  showQuestion();