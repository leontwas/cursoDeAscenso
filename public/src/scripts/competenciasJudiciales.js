const questions = [
    {
        question: "Las lesiones 94, el abandono de personas y las amenazas simples son delitos transferidos a la justicia de CABA", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero"
      },
      {
        question: "Las lesiones en riña, la omisión de auxilio y la Usurpación son delitos transferidos a la justicia de CABA", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero"
      },
      {
        question: "El duelo, las exhibiciones obscenas y la falsificación de documentos son Delitos de la Justicia Nacional Criminal y Correccional", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Falso"
      },
      {
        question: "El abuso de armas, el grooming y la estafa son Delitos Transferidos", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero"
      },
      {
        question: "La usurpación, la violación de domicilio y el daño son Delitos de la Justicia Nacional Criminal y Correccional", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Falso"
      },
      {
        question: "Promover o facilitar la prostitución, la malversación de caudales públicos, y el narcomenudeo son Delitos Transferidos", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero"
      },
      {
        question: "El Trabajo infantil, el cohecho y tráfico de influencias y los delitos contra la libertad de trabajo son Delitos Transferidos", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero"
      },
      {
        question: "El atentado y resistencia a la autoridad, la falsificación de sellos, y el abuso de autoridad son Delitos de la Justicia Nacional Criminal y Correccional", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Falso"
      },
      {
        question: "La falsa denuncia de delitos, la exacciones ilegales y la violación de sellos y documentos son Delitos Transferidos", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero"
      },
      {
        question: "El enriquecimiento ilícito, la evasión y quebrantamiento de pena y la Violación de domicilio son Delitos de la Justicia Nacional Criminal y Correccional", 
        options: ["Verdadero", "Falso"], 
        correctAnswer: "Falso"
      },
      {
        question: "El falso testimonio, el suministro infiel e irregular de medicamentos, y los delitos contra la seguridad de tránsito son Delitos de la Justicia Nacional Criminal y Correccional", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Falso"
      },
      {
        question: "Proporcionar información falsa o datos inexactos, el abandono de personas y el ejercicio ilegal de la son Delitos Transferidos", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero"
      },
       {
        question: "El maltrato animal, las carreras de perros, y los actos discriminatorios son Delitos de la Justicia Nacional Criminal y Correccional", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero"
      },
      {
        question: "Las lesiones Arts. 89 a 94 C. Penal, el desarmado de autos sin autorización y el narcomenudeo son delitos de la Justicia Federal", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Falso"
      },
       {
        question: "Las lesiones en riña son competencia de la Justicia Nacional Criminal y Correccional", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Falso"
      },
      {
        question: "Promover o facilitar la prostitución es competencia de la Justicia Nacional Criminal y Correccional",
        options: ["Verdadero", "Falso"],
        correctAnswer: "Falso"
      },
      {
        question: "El ejercicio ilegal de la medicina es competencia de la Justicia Nacional Criminal y Correccional", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Falso"
      },
      {
        question: "El Daño es competencia de la Justicia Nacional Criminal y Correccional", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Falso"
      },
      {
        question: "La violación de sellos y documentos es competencia de la Justicia Nacional Criminal y Correccional", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Falso"
      },
      {
        question: "La tenencia, portación y suministro de armas de guerra de uso condicional es competencia de la Justicia Nacional Criminal y Correccional", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Falso"
      },
      {
        question: "Las amenazas simples son competencia de la Justicia Nacional Criminal y Correccional", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Falso"
      },
      {
        question: "La falsificación de sellos, timbres y marcas es competencia de la Justicia Nacional Criminal y Correccional", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Falso"
      },
      {
        question: "El atentado y resistencia a la autoridad es competencia de la Justicia Nacional Criminal y Correccional", 
        options: ["Verdadero", "Falso"],
        correctAnswer: "Falso"
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