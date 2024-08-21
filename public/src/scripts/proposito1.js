const questions = [
  { question: "El propósito 1 de la Resolución 907/2017 es:",
    options: [
      "Establecer un procedimiento uniforme seguir para la aplicación directa de sanciones por faltas disciplinarias leves.",
      "Brindar pautas uniformes para el ejercicio de la facultad de fiscalización de sanciones por faltas disciplinarias leves.",
      "Ninguna es correcta."
    ],
    correctAnswer: "Establecer un procedimiento uniforme seguir para la aplicación directa de sanciones por faltas disciplinarias leves."
  },
  { question: "El propósito 4 de la Resolución 907/2017 es:",
    options: [
      "Establecer un procedimiento uniforme seguir para la aplicación directa de sanciones por faltas disciplinarias leves.",
      "Aclarar el procedimiento que ha de otorgarse a las denuncias que se reciban en las dependencias de la Policía de la Ciudad cuando la falta es denunciada por un particular.",
      "Ninguna es correcta."
    ],
    correctAnswer: "Aclarar el procedimiento que ha de otorgarse a las denuncias que se reciban en las dependencias de la Policía de la Ciudad cuando la falta es denunciada por un particular."
  },

  { question: "El propósito 3 de la Resolución 907/2017 es: Encauzar materialmente el procedimiento de aplicación directa de sanciones disciplinarias a través de formularios preestablecidos.",
    options: [
      "Verdadero",
      "Falso"
    ],
    correctAnswer: "Verdadero"
  },
  

    ];
    
    let correctAnswersCount = 0;
    let currentQuestionIndex;
    
    document.addEventListener('DOMContentLoaded', () => {
        displayRandomQuestion();
    });
    
    function displayRandomQuestion() {
        if (questions.length === 0) {
            // Se elimina la invocación a displayCompletionMessage()
            return;
        }
    
        currentQuestionIndex = Math.floor(Math.random() * questions.length);
        const question = questions[currentQuestionIndex];
    
        document.getElementById('question-container').innerHTML = `<h2>${question.question}</h2>`;
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
    
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.classList.add('btn', 'btn-primary', 'option-button', 'm-2');
            button.innerText = option;
            button.onclick = () => checkAnswer(option);
            optionsContainer.appendChild(button);
        });
    
        showAbandonButton();
    }
    
    function showAbandonButton() {
        let abandonButton = document.getElementById('abandon-button');
        if (!abandonButton) {
            abandonButton = document.createElement('button');
            abandonButton.id = 'abandon-button';
            abandonButton.classList.add('btn', 'btn-abandonar');
            abandonButton.innerText = 'Regresar';
            abandonButton.onclick = () => window.location.href = './index.html';
            document.body.appendChild(abandonButton);
        } else {
            abandonButton.style.display = 'block';
        }
    }
    
    function hideAbandonButton() {
        const abandonButton = document.getElementById('abandon-button');
        if (abandonButton) {
            abandonButton.style.display = 'none';
        }
    }
    
    function checkAnswer(selectedAnswer) {
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    
        if (selectedAnswer === correctAnswer) {
            correctAnswersCount++;
            questions.splice(currentQuestionIndex, 1);
            displayRandomQuestion();
            displayNotification("Correcto!");
        } else {
            displayFailureMessage(correctAnswer);
            hideAbandonButton();
        }
    }
    
    function displayNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerText = message;
        document.body.appendChild(notification);
    
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 2000);
    }
    
    function displayFailureMessage(correctAnswer) {
        const quizContainer = document.getElementById('quiz-container');
        quizContainer.innerHTML = `
            <h1 class="error-message">Incorrecto.</h1>
            <h2 class="error-message">La respuesta correcta es: ${correctAnswer}</h2>
            <h2 class="error-message">Respuestas correctas: ${correctAnswersCount}</h2>
            <img src="../src/images/image1.png" alt="Imagen de error" class="img-fluid">
            <button id="retry-button" class="btn btn-danger mt-3">Reintentar</button>
        `;
    
        document.getElementById('retry-button').onclick = () => {
            window.location.href = './index.html';
        };
    }