const questions = [     
    {
        question: "Las inequidades de género se formaron a raíz de que la mujer estaba relegada a la vida privada y familiar, mientras que el hombre se desempeñaba en la vida pública, definiendo y delineando la forma de organización social:",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: "Verdadero"
    },
    {
        question: "Género no es un concepto que se desprenda de lo biológico, sino un estereotipo construido culturalmente:",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: "Verdadero"
    }, 
    {
        question: "La violencia de género se deriva de la desigualdad de poder entre hombres y mujeres:",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: "Verdadero"
    },
    {
        question: "La discriminación de género es aquella que se ejerce a partir de la construcción social que asigna determinados atributos socio-culturales a las personas a partir de su sexo biológico y convierte la diferencia sexual en desigualdad social:",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: "Verdadero"
    },
    {
        question: "La violencia física es solo uno de los tipos de violencia de género:",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: "Verdadero"
    },
    {
        question: "Los tipos de violencia se pueden manifestar en diferentes modalidades:",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: "Verdadero"
    },
    {
        question: "La ley de violencia contra la mujer (26.485) reconoce también como modalidades de violencia la obstétrica y la violencia contra la libertad reproductiva:",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: "Verdadero"
    },
    {
        question: "Se considera violencia intrafamiliar tanto a la violencia dentro de la familia como a la violencia de pareja:",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: "Verdadero"
    },
    {
        question: "Ley Nª 26.618, Ley de “matrimonio igualitario” introdujo un cambio en el código civil tendiente a que “El matrimonio tendrá los mismos requisitos y efectos, con independencia de que los contrayentes sean del mismo o de diferente sexo”:",
        options: [
            "Verdadero",
            "Falso"
        ],
        correctAnswer: "Verdadero"
    },
    {
        question: "La constitución de la CABA incorpora la perspectiva de género en el diseño y ejecución de sus políticas públicas:",
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
        displayCompletionMessage();
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

    // Ensure the Abandon button is displayed and positioned correctly
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
        document.body.appendChild(abandonButton); // Append to body to ensure it's outside the question container
    } else {
        abandonButton.style.display = 'block'; // Ensure button is visible
    }
}

function hideAbandonButton() {
    const abandonButton = document.getElementById('abandon-button');
    if (abandonButton) {
        abandonButton.style.display = 'none'; // Hide the button
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
        hideAbandonButton(); // Hide the Abandon button
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
async function displayFailureMessage(correctAnswer) {
    const quizContainer = document.getElementById('quiz-container');
    const imagePath = '../src/images/image1.png'; // Ruta base para las imágenes
    const imageSrc = `${imagePath}`; // Ruta específica para la imagen

    quizContainer.innerHTML = `
        <h1 class="error-message">Incorrecto.</h1>
        <h2 class="error-message">La respuesta correcta es: ${correctAnswer}</h2>
        <h2 class="error-message">Respuestas correctas: ${correctAnswersCount}</h2>
        <img id="failure-image" src="${imageSrc}" alt="Imagen de error" class="img-fluid">
        <button id="retry-button" class="btn btn-danger mt-3">Reintentar</button>
    `;

    const imageElement = document.getElementById('failure-image');
    try {
        await new Promise((resolve, reject) => {
            imageElement.onload = () => resolve();
            imageElement.onerror = () => reject(new Error('Error al cargar la imagen.'));
        });
    } catch (error) {
        console.error(error.message);
        imageElement.src = '../src/images/image1.png'; // Ruta de reserva en caso de error
    }

    document.getElementById('retry-button').onclick = () => {
        window.location.href = './index.html';
    };
}

function displayCompletionMessage() {
    const quizContainer = document.getElementById('quiz-container');
    let imageSrc = '';

    if (correctAnswersCount < 5) {
        imageSrc = 'public/src/images/image1.png';
    } else if (correctAnswersCount >= 5 && correctAnswersCount <= 9) {
        imageSrc = 'public/src/images/image8.png';
    } else if (correctAnswersCount >= 10 && correctAnswersCount <= 14) {
        imageSrc = 'public/src/images/image3.png';
    } else if (correctAnswersCount >= 15 && correctAnswersCount <= 20) {
        imageSrc = 'public/src/images/image4.png';
    }

    quizContainer.innerHTML = `
        <h2>¡Has completado el cuestionario!</h2>
        <p>Respuestas correctas: ${correctAnswersCount}</p>
        <img src="${imageSrc}" alt="Resultado" class="img-fluid">
    `;

    hideAbandonButton(); // Hide the Abandon button on completion
}