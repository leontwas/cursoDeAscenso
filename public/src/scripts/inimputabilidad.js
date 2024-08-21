const questions = [
    {
        question: "¿Qué artículo del Código Penal argentino establece las condiciones bajo las cuales una persona puede ser considerada inimputable?",
        options: ["Artículo 34", "Artículo 79", "Artículo 92", "Artículo 45"],
        correctAnswer: "Artículo 34"
      },
      {
        question: "¿Cuál es la ley en Argentina que regula el tratamiento de personas inimputables por razones de salud mental?",
        options: ["Ley de Salud Mental N° 26.657", "Ley de Protección al Menor N° 26.061", "Ley de Ejecución Penal N° 24.660", "Ley de Seguridad Interior N° 24.059"],
        correctAnswer: "Ley de Salud Mental N° 26.657"
      },
      {
        question: "El principio de legalidad establece que no hay delito ni pena sin una ley previa que los defina.",
        options: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero"
      },
      {
        question: "¿Qué artículo del Código Penal argentino trata sobre la tentativa de delito?",
        options: ["Artículo 42", "Artículo 34", "Artículo 79", "Artículo 92"],
        correctAnswer: "Artículo 42"
      },
      {
        question: "¿Cuál es la función principal del principio de culpabilidad en el derecho penal?",
        options: ["Garantizar la aplicación de penas severas.", "Asegurar que solo se castigue a quien haya actuado con dolo o culpa.", "Permitir la aplicación de penas retroactivas.", "Facilitar la detención preventiva de sospechosos."],
        correctAnswer: "Asegurar que solo se castigue a quien haya actuado con dolo o culpa."
      },
      {
        question: "¿Qué establece el Artículo 18 de la Constitución Nacional Argentina en relación con el derecho penal?",
        options: ["La posibilidad de aplicar penas retroactivas.", "La prohibición de aplicar penas crueles e inusitadas.", "La obligación de publicar todas las leyes penales en el Boletín Oficial.", "La posibilidad de aplicar la pena de muerte en casos excepcionales."],
        correctAnswer: "La prohibición de aplicar penas crueles e inusitadas."
      },
      {
        question: "¿Qué artículo del Código Penal argentino establece las circunstancias atenuantes y agravantes de la responsabilidad penal?",
        options: ["Artículo 41", "Artículo 34", "Artículo 79", "Artículo 92"],
        correctAnswer: "Artículo 41"
      },
      {
        question: "La inimputabilidad en el derecho penal argentino puede ser determinada por la falta de capacidad para comprender la criminalidad del acto.",
        options: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero"
      },
      {
        question: "¿Cuál es el propósito principal del principio de proporcionalidad en el derecho penal?",
        options: ["Asegurar que todas las penas sean iguales para todos los delitos.", "Garantizar que la pena sea adecuada en relación con la gravedad del delito.", "Permitir la aplicación de penas más severas para delitos menores.", "Establecer penas fijas para todos los delitos."],
        correctAnswer: "Garantizar que la pena sea adecuada en relación con la gravedad del delito."
      },
      {
        question: "¿Qué ley en Argentina regula el régimen penal para menores de edad?",
        options: ["Ley de Protección Integral de los Derechos de las Niñas, Niños y Adolescentes N° 26.061", "Ley de Ejecución Penal N° 24.660", "Ley de Seguridad Interior N° 24.059", "Ley de Salud Mental N° 26.657"],
        correctAnswer: "Ley de Protección Integral de los Derechos de las Niñas, Niños y Adolescentes N° 26.061"
      },
      {
        question: "¿Cuál de los siguientes principios garantiza que una persona solo puede ser juzgada y condenada por un tribunal competente?",
        options: ["Principio de legalidad", "Principio de culpabilidad", "Principio de jurisdicción", "Principio de presunción de inocencia"],
        correctAnswer: "Principio de jurisdicción"
      },
      {
        question: "¿Qué ley argentina regula la ejecución de las penas privativas de libertad?",
        options: ["Ley de Ejecución Penal N° 24.660", "Ley de Salud Mental N° 26.657", "Ley de Protección Integral de los Derechos de las Niñas, Niños y Adolescentes N° 26.061", "Ley de Seguridad Interior N° 24.059"],
        correctAnswer: "Ley de Ejecución Penal N° 24.660"
      },
      {
        question: "El principio de presunción de inocencia permite que una persona sea considerada culpable hasta que se demuestre lo contrario.",
        options: ["Verdadero", "Falso"],
        correctAnswer: "Falso"
      },
      {
        question: "¿Cuál es el propósito del principio de humanidad en el derecho penal?",
        options: ["Permitir la aplicación de penas severas para disuadir el crimen.", "Asegurar que las penas respeten la dignidad humana y no sean inhumanas o degradantes.", "Establecer penas uniformes para todos los delitos.", "Facilitar la detención preventiva prolongada."],
        correctAnswer: "Asegurar que las penas respeten la dignidad humana y no sean inhumanas o degradantes."
      },
      {
        question: "¿Qué artículo del Código Penal argentino define las penas aplicables a los menores de edad?",
        options: ["Artículo 41", "Artículo 34", "Artículo 79", "Ninguno, ya que se regula por una ley específica."],
        correctAnswer: "Ninguno, ya que se regula por una ley específica."
      },
      {
        question: "¿Qué principio del derecho penal establece que las leyes penales no pueden ser aplicadas de manera retroactiva en perjuicio del acusado?",
        options: ["Principio de irretroactividad", "Principio de legalidad", "Principio de oportunidad", "Principio de proporcionalidad"],
        correctAnswer: "Principio de irretroactividad"
      },
      {
        question: "¿Qué artículo del Código Penal argentino aborda la reincidencia como agravante de la pena?",
        options: ["Artículo 50", "Artículo 34", "Artículo 79", "Artículo 92"],
        correctAnswer: "Artículo 50"
      },
      {
        question: "El principio de culpabilidad implica que una persona solo puede ser condenada si se demuestra que actuó con dolo o negligencia.",
        options: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero"
      },
      {
        question: "¿Qué ley en Argentina establece el régimen de responsabilidad penal para adolescentes?",
        options: ["Ley de Protección Integral de los Derechos de las Niñas, Niños y Adolescentes N° 26.061", "Ley de Ejecución Penal N° 24.660", "Ley de Seguridad Interior N° 24.059", "Código Penal"],
        correctAnswer: "Ley de Protección Integral de los Derechos de las Niñas, Niños y Adolescentes N° 26.061"
      },
      {
        question: "¿Qué principio del derecho penal busca asegurar que una persona no sea juzgada dos veces por el mismo delito?",
        options: ["Principio de legalidad", "Principio de irretroactividad", "Principio de non bis in idem", "Principio de oportunidad"],
        correctAnswer: "Principio de non bis in idem"
      },
      {
        question: "¿Qué artículo del Código Penal argentino se refiere a la complicidad en un delito?",
        options: ["Artículo 45", "Artículo 79", "Artículo 34", "Artículo 92"],
        correctAnswer: "Artículo 45"
      },
      {
        question: "¿Cuál es el principio que asegura que las penas deben ser proporcionales al delito cometido?",
        options: ["Principio de legalidad", "Principio de proporcionalidad", "Principio de irretroactividad", "Principio de culpabilidad"],
        correctAnswer: "Principio de proporcionalidad"
      },
      {
        question: "¿Qué ley en Argentina regula el tratamiento de las personas privadas de libertad por razones de salud mental?",
        options: ["Ley de Salud Mental N° 26.657", "Ley de Ejecución Penal N° 24.660", "Ley de Protección Integral de los Derechos de las Niñas, Niños y Adolescentes N° 26.061", "Código Penal"],
        correctAnswer: "Ley de Salud Mental N° 26.657"
      },
      {
        question: "El principio de oportunidad permite que el fiscal decida no perseguir un delito menor si considera que no es de interés público.",
        options: ["Verdadero", "Falso"],
        correctAnswer: "Verdadero"
      },
      {
        question: "¿Qué artículo del Código Penal argentino establece la pena para el homicidio simple?",
        options: ["Artículo 79", "Artículo 34", "Artículo 45", "Artículo 92"],
        correctAnswer: "Artículo 79"
      },
      {
        question: "¿Qué principio del derecho penal se refleja en la frase 'in dubio pro reo'?",
        options: ["Principio de legalidad", "Principio de presunción de inocencia", "Principio de irretroactividad", "Principio de culpabilidad"],
        correctAnswer: "Principio de presunción de inocencia"
      },
      {
        question: "¿Cuál de los siguientes principios se describe en la definición anterior?",
        options: ["Principio de culpabilidad", "Principio de proporcionalidad", "Principio de legalidad", "Principio de oportunidad"],
        correctAnswer: "Principio de legalidad"
      },
      {
        question: "¿Cuál de los siguientes principios se describe en la definición anterior?",
        options: ["Principio de oportunidad", "Principio de presunción de inocencia", "Principio de irretroactividad", "Principio de proporcionalidad"],
        correctAnswer: "Principio de presunción de inocencia"
      },
      {
        question: "¿Cuál de los siguientes principios se describe en la definición anterior?",
        options: ["Principio de culpabilidad", "Principio de legalidad", "Principio de irretroactividad", "Principio de oportunidad"],
        correctAnswer: "Principio de irretroactividad"
      },
      {
        question: "¿Cuál de los siguientes principios se describe en la definición anterior?",
        options: ["Principio de oportunidad", "Principio de presunción de inocencia", "Principio de proporcionalidad", "Principio de legalidad"],
        correctAnswer: "Principio de proporcionalidad"
      },
      {
        question: "¿Cuál de los siguientes principios se describe en la definición anterior?",
        options: ["Principio de culpabilidad", "Principio de legalidad", "Principio de irretroactividad", "Principio de oportunidad"],
        correctAnswer: "Principio de culpabilidad"
      }
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
