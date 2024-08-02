const questions = [
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
  },
  {
      question: "La entrada y la permanencia durante el servicio a comercios, inmuebles o establecimientos públicos o privados, sin mediar causa justificada.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "La falta de pulcritud en su persona, así como el descuido en la conservación del uniforme que le fuera asignado o el uso de elementos que no corresponden a aquél.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "La pérdida de la medalla, placa de identificación, credencial o equipo asignado, siempre que no se trate del armamento policial, cuando sea producto de una negligencia o descuido en la conservación de esos elementos.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "El préstamo de piezas del uniforme o del equipo asignado, siempre que no se trate del armamento, a personas de la Institución.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "El uso indebido de la sirena o baliza de un vehículo policial o equipo de comunicaciones.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "El incumplimiento de los protocolos u órdenes de uso del equipamiento asignado y del equipo de comunicaciones.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "La inducción a error o engaño al Superior con informes que no sean exactos, siempre que por su naturaleza no implique una falta más grave.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "La demora injustificada en presentarse a su servicio o a su superior, inmediatamente después de haber tomado conocimiento de la convocatoria, aún fuera de las horas de su trabajo ordinario.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "El atraso de más de tres (3) días en las anotaciones o copias que deben hacerse en los libros o registros correspondientes.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "El retardo en la rendición de novedades del servicio.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "La demora sin causa justificada en dar cuenta de objetos hallados o secuestrados.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "Todo acto de exceso en el empleo de autoridad que no importe delito.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "La transmisión de informes o noticias sobre órdenes recibidas o sobre cualquier asunto del servicio sin haber sido autorizado para ello.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "Omitir controlar el trato en sus dependencias para con el público en general, en especial en orden a las respuestas que se brinden al particular; propendiendo a que se preste un trato digno, respetuoso y tendiente a evitar demoras innecesarias en los trámites que deban ser resueltos en cada dependencia.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "El trato descomedido o la falta de respeto a un particular, a un igual o a un subalterno.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "Omitir el saludo formal a un superior.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "La disconformidad manifiesta, así como las manifestaciones gestuales o verbales al superior ante una orden legítima de servicio.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "Efectuar reclamos en términos agraviantes o peyorativos.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "Utilizar influencias para definir destinos laborales, traslados o ascensos, siempre que ello no importe delito.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "La omisión de comunicar debidamente el cambio de domicilio con posterioridad a las cuarenta y ocho (48) horas de efectuado.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "Ausentarse de su domicilio sin causa justificada hallándose en uso de licencia médica.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "La concurrencia habitual a lugares de apuestas o recintos de juego.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "La falta de decoro o los actos de inconducta en la vida social o en la privada, cuando trasciendan a terceros.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "Las disputas entre el personal o con personas ajenas a la Institución.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
  {
      question: "Los supuestos previstos en los incisos 1, 2 y 3 del artículo 200 de la presente reglamentación.",
      options: ["Leve", "Moderada", "Grave"],
      correctAnswer: "Leve"
  },
    {
        question: "El incumplimiento a lo dispuesto en el inciso 11 del artículo 109 de la Ley N.° 5688. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "Incumplir órdenes del servicio, aún en forma parcial o cumplirlas en modo negligente, cuando ello cause perjuicio de cualquier tipo. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "La negligencia o imprudencia en un acto de servicio, siempre que ese hecho no constituya una falta grave. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "La negligencia o imprudencia en la conducción de un rodado policial o de un rodado no policial durante el servicio o en ocasión del servicio, aún cuando no se produzca daño alguno. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "El alejamiento del puesto de trabajo sin autorización del superior. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "Faltar a la puntualidad o asistencia en forma injustificada y reiterada, cuando ello afecte la disciplina y/o el servicio encomendado y siempre que no configure una falta más grave. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "Incumplir con la obligación de conservar materiales de trabajo, cuando ello origine una pérdida de su capacidad operativa o la comprometa seriamente. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "El uso indebido del uniforme, credencial, medalla o placa de identificación o equipo asignado, siempre que no constituya delito. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "Usar insignias o distintivos que no corresponden con su grado, jerarquía, función o especialidad, constituya o no delito. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "No aceptar el grado, distinciones o títulos concedidos por la autoridad competente y de acuerdo con las disposiciones vigentes. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "Incumplir, o cumplir de modo negligente con el debido control del servicio ordinario asignado a un subordinado, siempre que ocasione perjuicio. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "Incumplir con la obligación de mantener la disciplina del personal a sus órdenes. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "La omisión de sancionar actos indebidos de sus subalternos o de dar cuenta de ello a sus superiores, si no tiene facultades disciplinarias. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "La aplicación de sanciones no previstas para la falta cometida. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "Contraer deudas con subalternos o con la garantía de estos. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "El hecho de impedir un superior a un subalterno que presente un recurso o reclamo o interferir en su tramitación. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "Agredir física o verbalmente a un igual o subalterno. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "El empleo de personal para funciones que no están autorizadas. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "Las comunicaciones con los detenidos sin causa justificada o las gestiones por la libertad de los detenidos. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "Omitir el registro de los detenidos o permitirlo sin las formalidades reglamentarias. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "No ajustarse a las formalidades dispuestas para el retiro o devolución de dinero, pertenencias y/o efectos requisados a los detenidos. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "Dispensar un maltrato a los animales afectados al servicio, sea por negligencia o imprudencia en los cuidados básicos. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "Hacer publicidad o difundir información que pueda afectar la disciplina o el prestigio de la Institución, por cualquier medio, sea por escrito o verbalmente u omitir dar aviso a los superiores cuando se tenga conocimiento de ello. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "La embriaguez ocasional fuera del servicio, cuando de esa situación derive una inconducta pública o privada. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "El trato con personas conocidas por la Institución como de mala reputación, cuando no sea por razones de servicio debidamente autorizadas por sus superiores o en cumplimiento de un mandato judicial. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "Las deudas frecuentes que se contraigan, cuando de dicha conducta se demuestre el desapego notorio al deber de satisfacerlas, ya sea por acción u omisión, de cualquier modo. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "Omitir la inmediata comunicación de la formación de la causa penal en la que se encuentre involucrado, o bien que involucre al personal subordinado. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "El incumplimiento de los protocolos de actuación, siempre que ello no constituya una falta grave en los términos del inciso 37 del Artículo 11 de esta reglamentación. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
    {
        question: "El supuesto previsto en el inciso 4 del artículo 200 de la presente. Es una falta del tipo:",
        options: ["Leve", "Moderada", "Grave"],
        correctAnswer: "Moderada"
    },
      {
          question: "El incumplimiento de lo dispuesto en los artículos 83, 84, 85, 86, 87, 88 segundo párrafo, 91, 92, 93, 94, 96, 97, 98, 99, 109 inciso 7 y 110 de la Ley N° 5688. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Cometer insubordinación, provocarla o instigar a otros a cometerla. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Agredir física o verbalmente a un superior, en servicio o fuera de él. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Desafiar, extraer armas o efectuar otras demostraciones agresivas o intimidantes contra terceros, sin causa fundada. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Acosar y/o discriminar por razones de sexo, raza, ideología, religión, condición étnica, económica, social o personal de todo tipo a cualquier persona. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Cometer actos que impliquen la afectación de la dignidad humana y/o violen Derechos Humanos. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Ordenar a un subalterno que transgreda las leyes en general y el régimen disciplinario en particular. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Omitir sin justificación constituirse en forma inmediata en el sitio donde se requiera su presencia frente a la comunicación de una emergencia o no disponer que un subalterno lo haga. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Incumplir con el servicio encomendado o cumplirlo en forma negligente, cuando de ello se verifique una amenaza o afectación a la vida, patrimonio o salud de las personas. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Incumplir el servicio invocando falsa causa, ardid o engaño. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Omitir, aún en forma negligente, la persecución o represión de delitos, faltas o contravenciones. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Dejar huir o posibilitar la huída de un detenido. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "El abandono de servicio. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Las inasistencias reiteradas en forma alternada y sin justificar por un plazo mayor a veinte (20) días durante el transcurso de un (1) año calendario. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Incumplir, por acción u omisión, un deber legalmente impuesto, en tanto se verifique una grave afectación a la ética, la integridad y la honestidad del funcionario. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "La inducción a error o engaño al superior con informes que no sean exactos cuando la gravedad de la conducta lo amerite. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Hacer entrega y/o disponer, a título oneroso o gratuito, de la credencial, medalla, armamento, distintivos, placa de identificación, uniformes y/o cualquier bien o equipo policial a terceros, salvo el caso contemplado en el inciso 7 del artículo 7. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "El manipuleo indebido del arma o el disparo injustificado, negligente o imprudente del armamento. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Tener en servicio armas de fuego no autorizadas para el ejercicio de la función. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "La pérdida o sustracción del armamento policial, ya sea por descuido en su conservación, por negligencia o imprudencia. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Hallarse en estado de ebriedad, intoxicación por estupefacientes y/o fármacos no autorizados durante el servicio. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Hallarse en estado de ebriedad fuera de servicio, si como consecuencia de la falta se ocasionen daños o lesiones a particulares. En este caso, la sanción podrá acompañar la recomendación para la realización de cursos de rehabilitación que correspondan. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Hallarse en estado de intoxicación por estupefacientes fuera de servicio. En este caso, la sanción podrá acompañar la recomendación para la realización de cursos de rehabilitación que correspondan. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Mantener vinculaciones que le representen beneficios u obligaciones con entidades directamente controladas por la Institución. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Recomendar servicios de terceros, aún cuando no se obtenga una ganancia de ello. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "La recepción de premios bajo cualquier forma o pretexto y de cualquier clase o valor, sin permiso previo de la Jefatura de la Policía de la Ciudad. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "El pedido o aceptación de propinas, recompensas o regalos en su condición de integrante de la Institución. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "El incumplimiento al deber de guardar secreto de todo cuanto sabe, aún después del retiro, que se relacione con los asuntos del servicio que, por su naturaleza o en virtud de disposiciones especiales, impongan dicha conducta, salvo requerimiento judicial. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "La pérdida, deterioro o sustracción de bienes de importancia o documentación secreta o reservada de la Institución. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "La incomparecencia, la negativa, falsedad u ocultamiento de la verdad por quien deba prestar testimonio en sumario administrativo y/o causa judicial. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "La falsa imputación maliciosa contra superiores, iguales o subalternos. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Negarse a presentar la declaración jurada de antecedentes, la declaración jurada sobre la propiedad o tenencia de armas de fuego a título particular o cualquier otra declaración obligatoria establecida en la normativa vigente. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Ocasionar la muerte a un animal afectado al servicio, ya sea en forma imprudente, negligente o maliciosa. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "Las conductas que afecten la ética, la integridad y la honestidad del funcionario y que comprometan seriamente la racionalidad y la legalidad en la actuación del personal de la Policía de la Ciudad. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "La condena firme por delito doloso. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "El incumplimiento de las formas previstas para el uso de las facultades de prevención y de la fuerza directa, según los capítulos III, IV y V del Título II del Libro II de la Ley N° 5688. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
      },
      {
          question: "El incumplimiento de los protocolos de actuación cuando ello implique una infracción al uso proporcional de la fuerza directa. Es una falta del tipo:",
          options: ["Leve", "Moderada", "Grave"],
          correctAnswer: "Grave"
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
