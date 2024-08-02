const questions = [
        {
            question: "Las facultades del personal policial para detener, requisar, secuestrar y allanar se encuentran contempladas en:",
            options: ["Los Códigos Procesales (CPPCABA y CPPN)", "La Ley de Seguridad Pública"],
            correctAnswer: "Los Códigos Procesales (CPPCABA y CPPN)"
        },
        {
            question: "Conforme el CPPCABA, cuando el policía deba dar fe de un procedimiento, puede reemplazar el acta escrita por una grabación de imagen en la medida que cumpla todos los requisitos legales que exige dicho acto",
            options: ["Verdadero", "Falso", "Sólo si el imputado y/o su defensa no se oponen"],
            correctAnswer: "Verdadero"
        },
        {
            question: "Conforme el CPPN, la policía podrá proceder al allanamiento de morada sin previa orden judicial cuando:",
            options: [" Por incendio, explosión, inundación u otro estrago se hallare amenazada la vida de los habitantes o la propiedad; Se denunciare que personas extrañas han sido vistas mientras se introducían en una casa o local, con indicios manifiestos de ir a cometer un delito.", "Se introduzca en una casa o local algún imputado de delito a quien se persigue para su aprehensión; Voces provenientes de una casa o local anunciaren que allí se está cometiendo un delito o pidan socorro; Se tenga sospechas fundadas de que en una casa o local se encuentra la víctima de una privación ilegal de la libertad y corra peligro inminente su vida o integridad física, caso en el cual el representante del MINISTERIO PUBLICO FISCAL deberá autorizar la diligencia y será necesaria su presencia en el lugar.", "Todas las opciones son correctas."],
            correctAnswer: "Todas las opciones son correctas."
        },
        {
            question: "Conforme lo regulado en el CPPCABA y en el CPPN, toda persona tiene:",
            options: ["la obligación de concurrir al llamamiento judicial y declarar la verdad de cuanto supiere y le fuere preguntado, salvo las excepciones establecidas por la ley.", " la obligación de concurrir al llamamiento judicial y declarar la verdad de cuanto supiere y le fuere preguntado, salvo que se trate de personal policial, el cual no está obligado a declarar", " la obligación de concurrir al llamamiento judicial y declarar la verdad de cuanto supiere y le fuere preguntado, sin ningún tipo de excepción."],
            correctAnswer: "la obligación de concurrir al llamamiento judicial y declarar la verdad de cuanto supiere y le fuere preguntado, salvo las excepciones establecidas por la ley."
        },{
            question: "El caso de allanamiento urgente sin orden se encuentra previsto taxativamente:",
            options: ["en el CPPN, pero no así en el CPPCABA.", "tanto en el CPPN como en el CPPCABA.", "en ninguno de los dos ordenamientos procesales"],
            correctAnswer: "en el CPPN, pero no así en el CPPCABA."
        },
        {
            question: "El CPPCABA establece una serie de formalidades, en lo que respecta a la reserva de identidad de los testigos:",
            options: ["la misma sólo podrá mantenerse hasta la celebración de la audiencia de juicio.", "la misma sólo podrá mantenerse hasta la audiencia de intimación del hecho.", "la misma permanece reservada y no se exige nunca que sea revelada."],
            correctAnswer: "la misma sólo podrá mantenerse hasta la celebración de la audiencia de juicio."
        },
        {
            question: "El CPPN contempla que las declaraciones testimoniales siempre deben documentarse en actas que cumplan con las formalidades previstas por el código, en cambio el CPPCABA admite:",
            options: ["cumplirlo formalmente como en el CPPN.", "cumplirlo de manera informal.", "Todas las opciones son correctas."],
            correctAnswer: "Todas las opciones son correctas."
        },
        {
            question: "En cuanto a la citación y compareciencia de los testigo, conforme el CPPCABA, el Fiscal:",
            options: ["no podrá ordenar la detención de testigos bajo ningún concepto.", "podrá ordenar la detención de un testigo cuando haya temor fundado de que se oculte, fugue o ausente, con inmediata noticia al/la Juez/a. Esta medida durará el tiempo indispensable para recibir la declaración, el que nunca podrá exceder de veinticuatro (24) horas.", "Ninguna de las opciones es correcta."],
            correctAnswer: "podrá ordenar la detención de un testigo cuando haya temor fundado de que se oculte, fugue o ausente, con inmediata noticia al/la Juez/a. Esta medida durará el tiempo indispensable para recibir la declaración, el que nunca podrá exceder de veinticuatro (24) horas."
        },
        {
            question: "En cuanto a la rúbrica de las actas escritas, el CPPCABA exige:",
            options: ["sólo la firma del imputado", "la firma del personal policial y del imputado", "la firma de todos sus participantes y si alguna de ellos se negara a firmar, se dejará constancia."],
            correctAnswer: "la firma de todos sus participantes y si alguna de ellos se negara a firmar, se dejará constancia."
        },
        {
            question: "En cuanto a las formalidades y advertencias previas de la declaración testimonial, el CPPCABA y el CPPN",
            options: [" establecen que el testigo debe ser instruido sobre las penas del falso testimonio y que prestará juramento de decir verdad.", "no establecen formalidades, dejándolo al libre albedrio del instructor.", "establecen que bajo ningún punto se lo debe presionar al testigo informándole las penas con que se reprime el falso testimonio."],
            correctAnswer: " establecen que el testigo debe ser instruido sobre las penas del falso testimonio y que prestará juramento de decir verdad."
        },
        {
            question: "En cuanto al horario de los allanamientos, el CPPCABA y el CPPN establecen que:",
            options: ["en dependencias cerradas de lugares habitados sólo podrá realizarse desde que salga hasta que se ponga el sol, salvo cuando concurren razones de gravedad y/o urgencia que motivan al Juez para autorizar el ingreso nocturno, lo que deberá establecerse en la resolución que ordena el registro.", "en edificios públicos y oficinas administrativas el allanamiento se practica en horario nocturno como regla general y sólo excepcionalmente desde que salga hasta que se ponga el sol.", " en dependencias cerradas de lugares habitados el allanamiento puede practicarse tanto de día como de noche, sin necesidad de fundamentación."],
            correctAnswer: "en dependencias cerradas de lugares habitados sólo podrá realizarse desde que salga hasta que se ponga el sol, salvo cuando concurren razones de gravedad y/o urgencia que motivan al Juez para autorizar el ingreso nocturno, lo que deberá establecerse en la resolución que ordena el registro."
        },
        {
            question: "En el CPPCABA la entrevista con el testigo",
            options: ["puede recibirla un investigador si media delegación expresa del fiscal", "siempre deben ser efectuadas por el personal policial en el lugar o en la comisaría", "rara vez las realiza el personal policial"],
            correctAnswer: "puede recibirla un investigador si media delegación expresa del fiscal"
        },
        {
            question: "En el CPPCABA las declaraciones testimoniales que se suelen documentar en actas durante la investigación preparatoria y/o grabada, son aquellas que:",
            options: ["revisten el carácter de definitivas o no reproducibles (por ejemplo, las de los menores)", "sea altamente probable que no pueda declarar enjuicio oral (enfermedad o eventual mudanza fuera del país)", "Todas las opciones son correctas."],
            correctAnswer: "Todas las opciones son correctas."
        },
        {
            question: "En el CPPCABA, una de las formas de registrar una declaración testimonial informal es mediante:",
            options: ["un archivo de audio o video", "un informe del investigador escrito y firmado por él y también por el testigo", "Todas las opciones son correctas."],
            correctAnswer: "Todas las opciones son correctas."
        },
        {
            question: "En las audiencias de juicio oral que tramitan bajo las reglas del CPPCABA",
            options: ["las declaraciones de los testigos pueden ser reemplazadas por la lectura de las formalmente recibidas durante la investigación preparatoria.", "por regla general las declaraciones de los testigos no pueden ser reemplazadas por la lectura de las formalmente recibidas durante la investigación preparatoria, pero admite alguna excepción.", "las declaraciones de los testigos nunca pueden ser reemplazadas por la lectura de las formalmente recibidas durante la investigación preparatoria."],
            correctAnswer: "por regla general las declaraciones de los testigos no pueden ser reemplazadas por la lectura de las formalmente recibidas durante la investigación preparatoria, pero admite alguna excepción."
        },
        {
            question: "En lo que hace a la excepción a declarar de los testigos:",
            options: ["la el CPPN establece la prohibición de declarar contra el imputado por parte del cónyuge, ascendientes, descendientes o hermanos bajo pena de nulidad, salvo que fueran víctimas directamente del delito o lo fuera algún pariente del mismo o mayor grado de parentesco con el autor; mientras que en el CPPCABA no hay prohibición sino la posibilidad de abstención.", "tanto el CPPCABA como el CPPN le brindan la posibilidad de abstenerse de declarar contra el imputado al cónyuge, ascendientes, descendientes o hermanos bajo pena de nulidad, salvo que fueran víctimas directamente del delito o lo fuera algún pariente del mismo o mayor grado de parentesco con el autor", "tanto el CPPCABA como el CPPN le prohíben declarar contra el imputado al cónyuge, ascendientes, descendientes o hermanos bajo pena de nulidad, salvo que fueran víctimas directamente del delito o lo fuera algún pariente del mismo o mayor grado de parentesco con el autor."],
            correctAnswer: "el CPPN establece la prohibición de declarar contra el imputado por parte del cónyuge, ascendientes, descendientes o hermanos bajo pena de nulidad, salvo que fueran víctimas directamente del delito o lo fuera algún pariente del mismo o mayor grado de parentesco con el autor; mientras que en el CPPCABA no hay prohibición sino la posibilidad de abstención."
        },
        {
            question: "Se establece la posibilidad de cumplir la declaración testimonial de un modo formal o de un modo informal llevado a cabo por el fiscal o por un investigador delegado expresamente al efecto:",
            options: [
                "Sólo en los casos donde sea aplicado el Código Procesal Penal de la Nación",
                "Sólo en los casos donde sea aplicado el Código Procesal Penal de la Ciudad Autónoma de Buenos Aires.",
                "Expresamente en ambas legislaciones (CPPCABA y CPPN)"
            ],
            correctAnswer: "Sólo en los casos donde sea aplicado el Código Procesal Penal de la Ciudad Autónoma de Buenos Aires."
        },
        {
            question: "Conforme los deberes generales que le asigna el CPPCABA, la Policía tiene la obligación de actuar cuando lleguen a su conocimiento hecho delictivos siempre bajo la dirección del Ministerio Publico Fiscal.",
            options: ["Verdadero", "Falso"],
            correctAnswer: "Verdadero"
        },
        {
            question: "La función preventiva de las fuerzas de seguridad esta regulada mayormente en los códigos procesales, en cambio la función de conjuración esta regulada básicamente en la Ley de Seguridad Publica.",
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
        abandonButton.classList.add('btn', 'btn-abandonar', 'mt-3');
        abandonButton.innerText = 'Abandonar';
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

function displayCompletionMessage() {
    const quizContainer = document.getElementById('quiz-container');
    let imageSrc = '';

    if (correctAnswersCount < 5) {
        imageSrc = '../src/images/image1.png';
    } else if (correctAnswersCount >= 6 && correctAnswersCount <= 10) {
        imageSrc = '../src/images/image2.png';
    } else if (correctAnswersCount >= 11 && correctAnswersCount <= 20) {
        imageSrc = '../src/images/image3.png';
    } else if (correctAnswersCount >= 21 && correctAnswersCount <= 30) {
        imageSrc = '../src/images/image4.png';
    }

    quizContainer.innerHTML = `
        <h2>¡Has completado el cuestionario!</h2>
        <p>Respuestas correctas: ${correctAnswersCount}</p>
        <img src="${imageSrc}" alt="Resultado" class="img-fluid">
    `;

    hideAbandonButton(); // Hide the Abandon button on completion
}
