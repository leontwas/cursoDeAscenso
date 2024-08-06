const questions = [
    {
      question: "El concepto de GENERO se refiere a:",
      options: [
        "Las capacidades diferenciales de cada persona en función de su determinación biológica",
        "Un conjunto de características sociales y culturales asignadas a las personas en función de su sexo",
        "Diferencias biológicas y naturales que las personas tenemos al nacer"
      ],
      correctAnswer: "Un conjunto de características sociales y culturales asignadas a las personas en función de su sexo"
    },
    {
      question: "La perspectiva de género trata de:",
      options: [
        "Analizar la sociedad partiendo de la base de que hay una igualdad clara de oportunidades entre hombres y mujeres",
        "Analizar la sociedad haciendo visible la desigualdad y discriminación de género reinantes como presupuesto"
      ],
      correctAnswer: "Analizar la sociedad haciendo visible la desigualdad y discriminación de género reinantes como presupuesto"
    },
    {
      question: "Los estereotipos de género comprenden:",
      options: [
        "Las ideas preconcebidas sobre lo que debe ser el comportamiento social de hombres y mujeres",
        "El conjunto de características vinculadas a las diferencias biológicas entre hombres y mujeres",
        "La división de roles funcionales que se hace familiarmente entre hombres y mujeres"
      ],
      correctAnswer: "Las ideas preconcebidas sobre lo que debe ser el comportamiento social de hombres y mujeres"
    },
    {
      question: "La violencia de género está ligada a las relaciones desiguales de poder que ejerce el hombre sobre la mujer por el hecho de serlo:",
      options: [
        "Verdadero",
        "Falso"
      ],
      correctAnswer: "Verdadero"
    },
    {
      question: "La violencia doméstica es:",
      options: [
        "La violencia de cualquier tipo que se produce en el marco de una pareja casada legalmente.",
        "La violencia de cualquier tipo que se produce entre dos personas que tienen un vínculo afectivo actual o previo, más allá de que convivan o no."
      ],
      correctAnswer: "La violencia de cualquier tipo que se produce entre dos personas que tienen un vínculo afectivo actual o previo, más allá de que convivan o no."
    },
    {
      question: "La forma más común de violencia experimentada por las mujeres en todo el mundo es la violencia de pareja:",
      options: [
        "Verdadero",
        "Falso"
      ],
      correctAnswer: "Verdadero"
    },
    {
      question: "La Ley 26.485 de 'Protección integral para prevenir, sancionar y erradicar la violencia contra las mujeres en los ámbitos en que se desarrollen sus relaciones interpersonales':",
      options: [
        "Deja en la victima la decisión exclusiva de denunciar o no los delitos de violencia domestica.",
        "Establece para los funcionarios y funcionarias que tomen conocimiento de estos hechos la obligación de denunciar."
      ],
      correctAnswer: "Establece para los funcionarios y funcionarias que tomen conocimiento de estos hechos la obligación de denunciar."
    },
    {
      question: "La reciente reforma del código penal introdujo la figura del FEMICIDIO como delito autónomo que contempla los casos en los que el hecho se comete contra:",
      options: [
        "A una mujer cuando el hecho sea perpetrado por un hombre o mediare violencia de genero",
        "A una mujer cuando sea cometido por su marido legalmente constituido.",
        "Ninguna de las opciones es correcta.",
        "A una mujer en cualquier contexto o situación."
      ],
      correctAnswer: "Ninguna de las opciones es correcta."
    },
    {
      question: "La reciente reforma del código penal introdujo la figura del FEMICIDIO como un agravante del homicidio para los casos en los que el hecho se comete contra:",
      options: [
        "A una mujer cuando el hecho sea perpetrado por un hombre y mediare violencia de género.",
        "A una mujer cuando sea cometido por su marido legalmente constituido.",
        "A una mujer en cualquier contexto y situación."
      ],
      correctAnswer: "A una mujer cuando el hecho sea perpetrado por un hombre y mediare violencia de género."
    },
    {
      question: "El concepto de SEXO se refiere a:",
      options: [
        "Diferencias biológicas y naturales que las personas tenemos al nacer.",
        "Un conjunto de características sociales y culturales asignadas a las personas en función de su sexo.",
        "Las capacidades diferenciales de cada persona en función de su determinación biológica."
      ],
      correctAnswer: "Diferencias biológicas y naturales que las personas tenemos al nacer."
    },
    {
      question: "La sociedad nos asigna los mismos roles y tiene las mismas expectativas de quien nace con el sexo femenino o masculino:",
      options: [
        "Verdadero",
        "Falso"
      ],
      correctAnswer: "Falso"
    },
    {
      question: "Las inequidades de género se formaron a raíz de que la mujer estaba relegada a la vida privada y familiar, mientras que el hombre se desempeñaba en la vida pública, definiendo y delineando la forma de organización social:",
      options: [
        "Verdadero",
        "Falso"
      ],
      correctAnswer: "Verdadero"
    },
    {
      question: "La Convención Interamericana para Prevenir, Sancionar y Erradicar la Violencia contra la mujer también conocida como la 'Convención de Belém do Pará':",
      options: [
        "Es la única convención dirigida exclusivamente a la eliminación de la violencia contra la mujer.",
        "Solicita que los Estados partes actúen con la debida diligencia para prevenir, investigar y sancionar la violencia contra la mujer.",
        "Contiene disposiciones detalladas relativas a las obligaciones de los Estados de promulgar legislación.",
        "Todas las opciones son correctas."
      ],
      correctAnswer: "Todas las opciones son correctas."
    },
    {
      question: "Ley Nª 26.743, de identidad de género, permite que las personas trans (travestis, transexuales y transgénero) puedan ser inscriptas en sus documentos personales con el nombre y el género de elección, luego acreditar medicamente el cambio de género realizado:",
      options: [
        "Verdadero",
        "Falso"
      ],
      correctAnswer: "Falso"
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
      question: "Los roles de género en la sociedad:",
      options: [
        "Definen cómo se espera que actuemos, hablemos, nos vistamos, nos arreglemos y nos comportemos según nuestro género asignado.",
        "Se relacionan directamente con la orientación sexual de cada individuo"
      ],
      correctAnswer: "Definen cómo se espera que actuemos, hablemos, nos vistamos, nos arreglemos y nos comportemos según nuestro género asignado."
    },
    [
      {
        question: "El patriarcado es:",
        options: [
          "Es la manera de estructurar el poder entre los sexos, basada en las diferentes capacidades que cada género tiene naturalmente.",
          "Es la manera de estructurar el poder entre los sexos, imponiendo la jerarquía masculina por sobre los demás géneros."
        ],
        correctAnswer: "Es la manera de estructurar el poder entre los sexos, imponiendo la jerarquía masculina por sobre los demás géneros."
      },
      {
        question: "Masculinidad hegemónica: Es un modelo predominante de construcción de la masculinidad, que se transmite culturalmente y es adoptado por la mayoría de los varones:",
        options: [
          "Verdadero",
          "Falso"
        ],
        correctAnswer: "Verdadero"
      },
      {
        question: "Androcentrismo:",
        options: [
          "Termino que explica la división de tareas en base a la capacidad natural de cada sexo",
          "Termino que define lo masculino como la medida de todas las cosas y la representación global de la humanidad."
        ],
        correctAnswer: "Termino que define lo masculino como la medida de todas las cosas y la representación global de la humanidad."
      },
      {
        question: "La perspectiva de género:",
        options: [
          "Es una categoría de análisis que permite analizar los problemas partiendo de la base de la desigualdad estructural.",
          "Es una categoría de análisis que permite organizar los roles sociales según las capacidades naturales de hombres y mujeres."
        ],
        correctAnswer: "Es una categoría de análisis que permite analizar los problemas partiendo de la base de la desigualdad estructural."
      },
      {
        question: "La identidad de género:",
        options: [
          "Refiere a la vivencia individual de género tal y como corresponde al sexo biológico de cada persona.",
          "Refiere a la vivencia individual del genero tal y como cada persona la siente, la cual puede o no corresponder con el sexo asignado al momento de nacer."
        ],
        correctAnswer: "Refiere a la vivencia individual del genero tal y como cada persona la siente, la cual puede o no corresponder con el sexo asignado al momento de nacer."
      },
      {
        question: "La identidad de género define la orientación sexual:",
        options: [
          "Verdadero",
          "Falso"
        ],
        correctAnswer: "Falso"
      },
      {
        question: "La violencia es interseccional porque:",
        options: [
          "La pertenencia al género femenino se cruza con otras formas de discriminación por pertenencia, étnica, condición de migrante o refugiada, edad, opción política, creencia religiosa, identidad sexual, pobreza, etc.",
          "La violencia se da en diferentes secciones de la vida de una mujer."
        ],
        correctAnswer: "La pertenencia al género femenino se cruza con otras formas de discriminación por pertenencia, étnica, condición de migrante o refugiada, edad, opción política, creencia religiosa, identidad sexual, pobreza, etc."
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
        question: "Las relaciones de género son:",
        options: [
          "Los vínculos afectivos que se generan entre personas del mismo o diferente sexo",
          "El diferente reparto de poder, derechos, valores y acceso a los recursos que se produce como consecuencia de los roles y los estereotipos de género"
        ],
        correctAnswer: "El diferente reparto de poder, derechos, valores y acceso a los recursos que se produce como consecuencia de los roles y los estereotipos de género"
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
        question: "Hablamos de doble o triple discriminación cuando:",
        options: [
          "Se discrimina más de una vez por el mismo tema",
          "La discriminación de género se cruza con otras formas de discriminación (edad, pobreza, creencia, etc.)"
        ],
        correctAnswer: "La discriminación de género se cruza con otras formas de discriminación (edad, pobreza, creencia, etc.)"
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
        question: "La ridiculización, los celos excesivos, la posesividad, la manipulación y la humillación:",
        options: [
          "No son técnicamente violencia de genero.",
          "Son formas de violencia de género psicológica."
        ],
        correctAnswer: "Son formas de violencia de género psicológica."
      },
      {
        question: "Violencia sexual es:",
        options: [
          "Únicamente el acceso carnal con penetración",
          "Cualquier acción que implique la vulneración en todas sus formas con o sin acceso genital, del derecho de la mujer de decidir voluntariamente sobre su vida sexual o reproductiva."
        ],
        correctAnswer: "Cualquier acción que implique la vulneración en todas sus formas con o sin acceso genital, del derecho de la mujer de decidir voluntariamente sobre su vida sexual o reproductiva."
      },
      {
        question: "La violencia de género se considera económica o patrimonial cuando:",
        options: [
          "El hombre le sustrae sus bienes a la mujer.",
          "Se afecta sus bienes afectando la posesión, tenencia, propiedad, pérdida, sustracción, destrucción o retención."
        ],
        correctAnswer: "Se afecta sus bienes afectando la posesión, tenencia, propiedad, pérdida, sustracción, destrucción o retención."
      },
      {
        question: "Violencia simbólica es:",
        options: [
          "La que se da a través de patrones estereotipados que reproduzcan y naturalicen la subordinación de la mujer.",
          "La que se da por señales simbólicas de los espacios públicos sin un criterio neutro."
        ],
        correctAnswer: "La que se da a través de patrones estereotipados que reproduzcan y naturalicen la subordinación de la mujer."
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
        question: "La violencia institucional:",
        options: [
          "Consiste en que instituciones del estado repriman injustificadamente a las mujeres a través de las fuerzas policiales",
          "Tienen como fin retardar, obstaculizar o impedir el acceso de las mujeres a políticas públicas y derechos."
        ],
        correctAnswer: "Tienen como fin retardar, obstaculizar o impedir el acceso de las mujeres a políticas públicas y derechos."
      },
      {
        question: "Obstaculizar el acceso al empleo, la contratación, ascenso o permanencia en el mismo es:",
        options: [
          "Simplemente un posible incumplimiento de la normativa laboral",
          "Violencia laboral"
        ],
        correctAnswer: "Violencia laboral"
      },
      {
        question: "Violencia mediática es:",
        options: [
          "Imágenes explicitas de violencia en los medios de comunicación.",
          "Difusión de imágenes estereotipados que promuevan la explotación de mujeres o atente contra su dignidad en los medios de comunicación."
        ],
        correctAnswer: "Difusión de imágenes estereotipados que promuevan la explotación de mujeres o atente contra su dignidad en los medios de comunicación."
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
        question: "La violencia de pareja es:",
        options: [
          "La violencia producida dentro del matrimonio formalmente constituido.",
          "La violencia producida en el marco de una relación de pareja actual o previa (Ex pareja)."
        ],
        correctAnswer: "La violencia producida en el marco de una relación de pareja actual o previa (Ex pareja)."
      },
      {
        question: "La violencia de género:",
        options: [
          "Es un rasgo más individual que social",
          "Es un rasgo más social que individual."
        ],
        correctAnswer: "Es un rasgo más social que individual."
      },
      {
        question: "La violencia de género afecta solo a las mujeres de sectores vulnerables:",
        options: [
          "Verdadero",
          "Falso"
        ],
        correctAnswer: "Falso"
      },
      {
        question: "La violencia sexual es:",
        options: [
          "Cualquier acción que implique la vulneración en todas sus formas, con o sin acceso genital, del derecho de la mujer de decidir voluntariamente acerca de su vida sexual o reproductiva.",
          "Los actos que constituyen abuso sexual tipificado penalmente, con o sin acceso carnal."
        ],
        correctAnswer: "Cualquier acción que implique la vulneración en todas sus formas, con o sin acceso genital, del derecho de la mujer de decidir voluntariamente acerca de su vida sexual o reproductiva."
      },
      {
        question: "La violencia simbólica es:",
        options: [
          "La generada a través de símbolos publicitarios que no respeta el acceso de las mujeres a las posiciones de poder",
          "La que, a través de patrones estereotipados, mensajes, valores, iconos, o signos transmita y reproduzca dominación, desigualdad y discriminación, naturalizando la subordinación de la mujer en la sociedad (X)"
        ],
        correctAnswer: "La que, a través de patrones estereotipados, mensajes, valores, iconos, o signos transmita y reproduzca dominación, desigualdad y discriminación, naturalizando la subordinación de la mujer en la sociedad (X)"
      },
      {
        question: "La violencia institucional es:",
        options: [
          "La que tiene como fin retardar, obstaculizar o impedir el acceso a políticas públicas y derechos provistos por la Ley.",
          "La que ejercen las instituciones policiales al reprimir especialmente a los colectivos de mujeres."
        ],
        correctAnswer: "La que tiene como fin retardar, obstaculizar o impedir el acceso a políticas públicas y derechos provistos por la Ley."
      },
      {
        question: "El femicidio previsto en nuestro código penal:",
        options: [
          "Es agravante del homicidio simple",
          "Es un delito autónomo del homicidio"
        ],
        correctAnswer: "Es agravante del homicidio simple"
      },
      {
        question: "Ley de protección integral para prevenir, sancionar y erradicar la violencia contra las mujeres en los ámbitos en que desarrollan sus relaciones interpersonales. Ley Nª 26.485:",
        options: [
          "Establece, para los funcionarios y funcionarias que tomen conocimiento de hechos de violencia de género, la obligación de denunciar",
          "Requiere que sea la victima la que denuncie los hechos de violencia como paso obligatorio para la intervención del Estado"
        ],
        correctAnswer: "Establece, para los funcionarios y funcionarias que tomen conocimiento de hechos de violencia de género, la obligación de denunciar"
      },
      {
        question: "Ley Nª 26.618, Ley de “matrimonio igualitario” introdujo un cambio en el código civil tendiente a que “El matrimonio tendrá los mismos requisitos y efectos, con independencia de que los contrayentes sean del mismo o de diferente sexo”:",
        options: [
          "Verdadero",
          "Falso"
        ],
        "correctAnswer": "Verdadero"
      },
      {
        question: "Ley de identidad de género (26.743):",
        options: [
          "Obliga a respetar la identidad de género que figura en el DNI de la persona, habilitando el trámite de cambio de género.",
          "Obliga a respetar la identidad de género autopercibida, más allá de que la persona haya o no hecho el cambio en su DNI."
        ],
        correctAnswer: "Obliga a respetar la identidad de género autopercibida, más allá de que la persona haya o no hecho el cambio en su DNI."
      },
      {
        question: "Ley de identidad de género (26.743):",
        options: [
          "Obliga a remplazar la palabra “sexo” por género en los formularios.",
          "Obliga a respetar el sexo en los formularios."
        ],
        correctAnswer: "Obliga a remplazar la palabra “sexo” por género en los formularios."
      },
      {
        question: "La Ley 27.499. “Ley Micaela”:",
        options: [
          "Establece la capacitación obligatoria en los temas de género y violencia contra las mujeres únicamente para todas las personas que trabajan en las diferentes aéreas del poder ejecutivo.",
          "Establece la capacitación obligatoria en los temas de género y violencia contra las mujeres para todas las personas que trabajan en la función pública."
        ],
        correctAnswer: "Establece la capacitación obligatoria en los temas de género y violencia contra las mujeres para todas las personas que trabajan en la función pública."
      },
      {
        question: "La violencia de pareja:",
        options: [
          "Solo se manifiesta a través de la violencia física",
          "Comprende toda gama de actos de violencia sexual, psicológica, económica y física en el marco de una relación de pareja actual o previa."
        ],
        correctAnswer: "Comprende toda gama de actos de violencia sexual, psicológica, económica y física en el marco de una relación de pareja actual o previa."
      },
      {
        question: "La constitución de la CABA incorpora la perspectiva de género en el diseño y ejecución de sus políticas públicas:",
        options: [
          "Verdadero",
          "Falso"
        ],
        correctAnswer: "Verdadero"
      },
      {
        question: "La Ley de Seguridad Pública (5688/16):",
        options: [
          "Guarda estricta representación de géneros para la policía de la ciudad.",
          "No establece una obligación de paridad entre hombres y mujeres de la policía de la ciudad."
        ],
        correctAnswer: "Guarda estricta representación de géneros para la policía de la ciudad."
      }
    ]
     


 
  





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
