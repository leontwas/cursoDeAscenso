const questions = [
  {
    question: "¿A qué llamamos mando?",
    options: [
      "Acción que ejerce el jefe sobre los hombres a su cargo o bajo su responsabilidad, con el objeto de dirigirlos, persuadirlos e influir sobre ellos de forma tal que obtenga su voluntaria obediencia, confianza, respeto y leal y activa cooperación tanto en el desempeño de una función como en el cumplimiento de una misión.",
      "Conjunto de estrategias para controlar a un grupo",
      "Habilidad para negociar y tomar decisiones en situaciones de crisis"
    ],
    correctAnswer: "Acción que ejerce el jefe sobre los hombres a su cargo o bajo su responsabilidad, con el objeto de dirigirlos, persuadirlos e influir sobre ellos de forma tal que obtenga su voluntaria obediencia, confianza, respeto y leal y activa cooperación tanto en el desempeño de una función como en el cumplimiento de una misión."
  },
  {
    question: "Tipos de mando...",
    options: [
      "Directivo / Delegado / Cooperativo",
      "Autoritario / Persuasivo / Democrático o Consultivo",
      "Rigurosamente Controlador / Flexiblemente Adaptativo / Mediador"
    ],
    correctAnswer: "Autoritario / Persuasivo / Democrático o Consultivo"
  },
  {
    question: "La empatía es la capacidad para poder sentir las emociones del otro y comprender sus conductas a partir de gestos implícitos",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "VERDADERO"
  },
  {
    question: "La empatía es una habilidad a desarrollar en el uso del lenguaje. Implica ser capaz de expresarnos, defender nuestro pensamiento y nuestras posturas de una manera que minimice la posibilidad de conflicto con el otro a partir de transacciones negativas del lenguaje.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "FALSO"
  },
  {
    question: "¿A qué denominamos orden y contraorden?",
    options: [
      "Orden: es una indicación directa - Contraorden: es una instrucción sobre la conducta",
      "Orden: es una instrucción general - Contraorden: es una directiva opcional",
      "Orden: es un mando imperativo - Contraorden: es una orden que revoca la anterior"
    ],
    correctAnswer: "Orden: es un mando imperativo - Contraorden: es una orden que revoca la anterior"
  },
  {
    question: "¿Por qué delega el líder?",
    options: [
      "Para evitar asumir toda la responsabilidad",
      "Porque le otorga más tiempo para liderar y gestionar",
      "Para promover la autonomía del equipo"
    ],
    correctAnswer: "Porque le otorga más tiempo para liderar y gestionar"
  },
  {
    question: "¿Cuáles son las actividades básicas del mando?",
    options: [
      "Preparación / Implementación / Monitoreo / Revisión",
      "Dirección / Supervisión / Evaluación / Ajuste",
      "Planificación / Organización / Ejecución / Control"
    ],
    correctAnswer: "Planificación / Organización / Ejecución / Control"
  },
  {
    question: "Un líder es...",
    options: [
      "Un guía para el grupo, siendo capaz de ejercer una conducción eficaz y lograr que las personas den lo mejor de sí, a partir de crear una visión y alinear detrás de ella los esfuerzos de las personas.",
      "Capaz de apelar a la razón, pero por sobre todas las cosas trabaja sobre el plano emocional de las personas, pudiendo generar un máximo compromiso y dedicación.",
      "A y B son correctas."
    ],
    correctAnswer: "A y B son correctas."
  },
  {
    question: "El comando es el arte y la ciencia de la aplicación del comando a la solución de un problema policial. Será una actividad libre y creadora, y de la ciencia ya que posee un objeto de estudio y una finalidad que le son propias.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "FALSO"
  },
  {
    question: "Principios del mando:",
    options: [
      "a) Creer en la función en la cual se sirve. b) Entregarse sin limitaciones al régimen del servicio. c) Tener conciencia de su autoridad y dignidad.",
      "a) Establecer metas claras. b) Comunicar eficazmente. c) Fomentar el trabajo en equipo.",
      "a) Crear un ambiente positivo. b) Recompensar el rendimiento. c) Supervisar constantemente."
    ],
    correctAnswer: "a) Creer en la función en la cual se sirve. b) Entregarse sin limitaciones al régimen del servicio. c) Tener conciencia de su autoridad y dignidad."
  },
  {
    question: "Delegación de actividades:",
    options: [
      "La delegación permite a los líderes mantener control total sobre todas las actividades.",
      "Los líderes tienden a tener más caudal de trabajo del que ellos mismos pueden llevar a cabo delegar en otras personas.",
      "La delegación es un signo de debilidad en el liderazgo."
    ],
    correctAnswer: "Los líderes tienden a tener más caudal de trabajo del que ellos mismos pueden llevar a cabo delegar en otras personas."
  },
  {
    question: "¿Qué es el don de mando?",
    options: [
      "Es el conocimiento profundo de los procedimientos administrativos.",
      "Es la habilidad de tomar decisiones rápidas y eficaces.",
      "Es la capacidad de las personas de expresar autoridad, que no es sinónimo de autoritarismo."
    ],
    correctAnswer: "Es la capacidad de las personas de expresar autoridad, que no es sinónimo de autoritarismo."
  },
  {
    question: "Cuando se inicia un equipo de trabajo, los integrantes del equipo se evalúan así mismo y generan un perfil.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "VERDADERO"
  },
  {
    question: "¿A qué llamamos liderazgo efectivo?",
    options: [
      "Es aquel que se enfoca exclusivamente en la gestión de conflictos.",
      "Es aquel que utiliza técnicas de motivación avanzadas para maximizar el rendimiento.",
      "Es aquel donde el liderazgo que coincide con los criterios establecidos por la organización, implica un cierto grado de autoridad investida."
    ],
    correctAnswer: "Es aquel donde el liderazgo que coincide con los criterios establecidos por la organización, implica un cierto grado de autoridad investida."
  },
  {
    question: "¿Cómo se crea un líder?",
    options: [
      "Mediante experiencia en el campo de trabajo",
      "A través de una capacitación extensiva",
      "De aptitudes y capacidades"
    ],
    correctAnswer: "De aptitudes y capacidades"
  },
  {
    question: "Definición de Conducción:",
    options: [
      "Arte, ciencia o don mediante el cual una persona está capacitada y privilegiada para dirigir los pensamientos, planes y acciones de los demás, de modo de obtener y disponer de su obediencia, confianza, respeto y leal cooperación.",
      "Habilidad para motivar y gestionar equipos hacia objetivos comunes.",
      "Proceso de toma de decisiones en situaciones de crisis."
    ],
    correctAnswer: "Arte, ciencia o don mediante el cual una persona está capacitada y privilegiada para dirigir los pensamientos, planes y acciones de los demás, de modo de obtener y disponer de su obediencia, confianza, respeto y leal cooperación."
  },
  {
    question: "Actitudes que debe infundir un líder:",
    options: [
      "Liderazgo, Carisma, Persistencia, Flexibilidad",
      "Obediencia, Confianza, Respeto, Cooperación Leal",
      "Responsabilidad, Innovación, Comunicación, Dedicación"
    ],
    correctAnswer: "Obediencia, Confianza, Respeto, Cooperación Leal"
  },
  {
    question: "Definición de Mando:",
    options: [
      "Acción que ejerce el jefe sobre los hombres a su cargo o bajo su responsabilidad, con el objeto de dirigirlos, persuadirlos e influir sobre ellos de forma tal que obtenga su voluntaria obediencia, confianza, respeto y leal y activa cooperación tanto en el desempeño de una función como en el cumplimiento de una misión.",
      "Capacidad de coordinar y supervisar las tareas de un equipo.",
      "Proceso de establecer reglas y directrices para el cumplimiento de objetivos."
    ],
    correctAnswer: "Acción que ejerce el jefe sobre los hombres a su cargo o bajo su responsabilidad, con el objeto de dirigirlos, persuadirlos e influir sobre ellos de forma tal que obtenga su voluntaria obediencia, confianza, respeto y leal y activa cooperación tanto en el desempeño de una función como en el cumplimiento de una misión."
  },
  {
    question: "El objetivo del mando es alcanzar una elevada eficiencia en el logro de los objetivos de la organización, para lo cual el jefe deberá influir sobre sus subordinados.",
    options: [
      "Facilitar recursos para el trabajo en equipo.",
      "Alcanzar una elevada eficiencia en el logro de los objetivos de la organización, para lo cual el jefe deberá influir sobre sus subordinados.",
      "Desarrollar habilidades técnicas en los subordinados."
    ],
    correctAnswer: "Alcanzar una elevada eficiencia en el logro de los objetivos de la organización, para lo cual el jefe deberá influir sobre sus subordinados."
  },
  {
    question: "El don de Mando:",
    options: [
      "Se refiere a ‘la capacidad de las personas de expresar autoridad, que no es sinónimo de autoritarismo’",
      "Es una habilidad para tomar decisiones rápidas.",
      "Consiste en la capacidad para motivar a los subordinados sin necesidad de autoridad."
    ],
    correctAnswer: "Se refiere a ‘la capacidad de las personas de expresar autoridad, que no es sinónimo de autoritarismo’"
  },
  {
    question: "Estilo de Mando Democrático o Consultivo: Sus características principales son:",
    options: [
      "Demuestra simpatía pero no involucra al equipo en la toma de decisiones, y se enfoca en resultados inmediatos.",
      "Toma decisiones unilaterales sin consultar al equipo, usa la información solo para su beneficio, y mantiene un control estricto.",
      "Facilita la información a su personal, consulta la opinión de sus colaboradores, aunque él decide, todos se manifiestan y participan, aprecia los informes y consejos recibidos, y se interesa por su equipo y éste lo sabe."
    ],
    correctAnswer: "Facilita la información a su personal, consulta la opinión de sus colaboradores, aunque él decide, todos se manifiestan y participan, aprecia los informes y consejos recibidos, y se interesa por su equipo y éste lo sabe."
  },
  {
    question: "Estilo de Mando Persuasivo: Es propio de conductores autoritarios que quieren mostrar su ‘cara amable’:",
    options: [
      "Es participativo y busca la opinión de todos antes de decidir, fomenta un ambiente de trabajo colaborativo y delega tareas efectivamente.",
      "Sabe cómo influenciar a sus subalternos, usa su capacidad para lograr aprobación en sus decisiones, aparenta consultar a los demás, pero realmente trata de averiguar si se está a favor o en contra de su opinión, influye individualmente antes de reunir al grupo, y mantiene el control de los procesos.",
      "Prefiere trabajar de manera independiente y toma decisiones sin consultar a su equipo."
    ],
    correctAnswer: "Sabe cómo influenciar a sus subalternos, usa su capacidad para lograr aprobación en sus decisiones, aparenta consultar a los demás, pero realmente trata de averiguar si se está a favor o en contra de su opinión, influye individualmente antes de reunir al grupo, y mantiene el control de los procesos."
  },
  {
    question: "Estilo de Mando Autoritario: Entre las principales características de este estilo de mando podemos encontrar:",
    options: [
      "Guarda para sí mismo información importante, decide y controla de forma muy personal, no busca participación de las personas de su equipo, dice que hay que hacer, cuándo y cómo, y hay una clara diferencia entre él y el grupo.",
      "Promueve la participación y consulta a su equipo antes de tomar decisiones, busca el consenso y valora las opiniones de todos.",
      "Delegue tareas y fomenta la autonomía dentro del equipo."
    ],
    correctAnswer: "Guarda para sí mismo información importante, decide y controla de forma muy personal, no busca participación de las personas de su equipo, dice que hay que hacer, cuándo y cómo, y hay una clara diferencia entre él y el grupo."
  },
  {
    question: "Concepto de Autoridad:",
    options: [
      "Es lo que desde el punto de vista del Estado, puede ser considerado como el poder ejercido por una persona legitimada por una institución o razón conforme a unas funciones que le son generalmente reconocidas.Es una habilidad para gestionar conflictos y tomar decisiones efectivas.",
      "Es la capacidad de ejercer influencia sin necesidad de estar en una posición oficial.",
      "La autoridad está unida a la legitimidad, dignidad, calidad, excelencia de una institución o de una persona."
    ],
    correctAnswer: "La autoridad está unida a la legitimidad, dignidad, calidad, excelencia de una institución o de una persona. Es lo que desde el punto de vista del Estado, puede ser considerado como el poder ejercido por una persona legitimada por una institución o razón conforme a unas funciones que le son generalmente reconocidas."
  },
  {
    question: "Definición de orden y contraorden:",
    options: [
      "Una orden es un mandato imperativo. Contraorden es una orden que revoca la anterior.",
      "Una orden es una sugerencia, mientras que una contraorden es una recomendación.",
      "Una orden es una directiva general, mientras que una contraorden es un cambio menor en la directiva."
    ],
    correctAnswer: "Una orden es un mandato imperativo. Contraorden es una orden que revoca la anterior."
  },
  {
    question: "Definición de Liderazgo organizacional:",
    options: [
      "Es el proceso de influir la conducta humana (planificar, organizar, controlar, coordinar, y dirigir recursos) para lograr los fines prescriptos por el líder nombrado por la organización.",
      "Es la habilidad de tomar decisiones rápidas y efectivas bajo presión.",
      "Es el proceso de motivar al equipo para que alcance objetivos personales y profesionales."
    ],
    correctAnswer: "Es el proceso de influir la conducta humana (planificar, organizar, controlar, coordinar, y dirigir recursos) para lograr los fines prescriptos por el líder nombrado por la organización."
  },
  {
    question: "Definición de Liderazgo efectivo:",
    options: [
      "Liderazgo efectivo es aquel donde el liderazgo coincide con los criterios establecidos por la organización (implica un cierto grado de autoridad investida (comando)).",
      "Liderazgo efectivo es aquel en el que el líder se enfoca únicamente en la motivación del equipo.",
      "Liderazgo efectivo es aquel que prioriza la relación personal sobre los objetivos organizacionales."
    ],
    correctAnswer: "Liderazgo efectivo es aquel donde el liderazgo coincide con los criterios establecidos por la organización (implica un cierto grado de autoridad investida (comando))."
  },
  {
    question: "En el líder hay dos orientaciones fundamentales:",
    options: [
      "POSITIVO: Aquel cuyos ideales auténticos de bien común y honestidad están por encima de sus intereses particulares. NEGATIVO: Aquel cuyo propósito es distinto a la Institución o los medios que utiliza son incorrectos.",
      "POSITIVO: Aquel que busca siempre la aprobación del grupo. NEGATIVO: Aquel que ignora las necesidades del equipo.",
      "POSITIVO: Aquel que prioriza el desarrollo personal de sus subordinados. NEGATIVO: Aquel que busca únicamente resultados inmediatos."
    ],
    correctAnswer: "POSITIVO: Aquel cuyos ideales auténticos de bien común y honestidad están por encima de sus intereses particulares. NEGATIVO: Aquel cuyo propósito es distinto a la Institución o los medios que utiliza son incorrectos."
  },
  {
    question: "Características de un líder:",
    options: [
      "El líder es ante todo un guía para el grupo, siendo capaz de ejercer una conducción eficaz y lograr que las personas den lo mejor de sí, a partir de crear una visión y alinear detrás de ella los esfuerzos de las personas.",
      "El líder no necesita de la jerarquía formal para lograr que las personas lo sigan y lo respeten.",
      "Es capaz de apelar a la ‘razón’, pero por sobre todas las cosas trabaja sobre el plano emocional de las personas, pudiendo generar un máximo compromiso y dedicación.",
      "Todas las anteriores"
    ],
    correctAnswer: "Todas las anteriores"
  },
  {
    question: "El Comando y la Conducción:",
    options: [
      "Comando: Es la autoridad y responsabilidad legal con que se inviste a un funcionario policial para ejercer al mando sobre una organización. Llamase también al ejercicio legal de esa autoridad, la que abarca la responsabilidad en lo que a educación, instrucción, operación y administración se refiere. Conducción: Es el arte y la ciencia de la aplicación del comando a la solución de un problema policial. Será una actividad libre y creadora, y de la ciencia ya que posee un objeto de estudio y una finalidad que le son propias.",
      "Comando: Es la capacidad de liderar un grupo en una misión específica. Conducción: Es la habilidad para tomar decisiones bajo presión.",
      "Comando: Es la autoridad y responsabilidad en la toma de decisiones estratégicas. Conducción: Es la capacidad para coordinar actividades operativas en situaciones de crisis."
    ],
    correctAnswer: "Comando: Es la autoridad y responsabilidad legal con que se inviste a un funcionario policial para ejercer al mando sobre una organización. Llamase también al ejercicio legal de esa autoridad, la que abarca la responsabilidad en lo que a educación, instrucción, operación y administración se refiere. Conducción: Es el arte y la ciencia de la aplicación del comando a la solución de un problema policial. Será una actividad libre y creadora, y de la ciencia ya que posee un objeto de estudio y una finalidad que le son propias."
  }
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
