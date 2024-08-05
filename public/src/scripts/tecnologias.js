const questions = [
{
  question: "Las ODI son de carácter obligatorio para todo el personal policial?",
  options: ["VERDADERO", "FALSO"],
  correctAnswer: "VERDADERO"
},
{
  question: "¿Desde qué dispositivo puedo acceder a INTRANET Policial?",
  options: ["Solo desde equipos conectados a la red policial", "Desde cualquier dispositivo con acceso a internet"],
  correctAnswer: "Solo desde equipos conectados a la red policial"
},
{
  question: "¿A cuál de estos sistemas se accede a través de CI?",
  options: ["SIFOR", "SILOL", "ODI", "Todas son correctas"],
  correctAnswer: "Todas son correctas"
},
{
  question: "¿Qué credenciales de ingreso necesito para ingresar a los Sistemas Intranet y CI?",
  options: ["Usuario y Clave de sistemas", "Solo Clave", "Usuario y Firma Digital"],
  correctAnswer: "Usuario y Clave de sistemas"
},
{
  question: "¿Quiénes tienen acceso al Sistema SIRHU?",
  options: ["Personal jerárquico", "Personal RRHH", "Ambos"],
  correctAnswer: "Ambos"
},
{
  question: "¿Se puede consultar la antigüedad de mi personal en el SIRHU?",
  options: ["VERDADERO", "FALSO"],
  correctAnswer: "VERDADERO"
},
{
  question: "¿El SIRHU sirve para solicitar y generar licencias?",
  options: ["VERDADERO", "FALSO"],
  correctAnswer: "FALSO"
},
{
  question: "¿Se puede ingresar al SIRHU desde fuera de la red policial?",
  options: ["VERDADERO", "FALSO"],
  correctAnswer: "FALSO"
},
{
  question: "SIRHU es un sistema central que se puede cargar y visualizar los datos de todos los sistemas. Con acceso al mismo, ya no hace falta el acceso a otro sistema.",
  options: ["VERDADERO", "FALSO"],
  correctAnswer: "FALSO"
},
{
  question: "¿Cuáles de estas licencias no se solicita por sistema SMLAM?",
  options: ["Licencia por alimentación y cuidado del hijo", "Licencia por enfermedad", "Licencia ordinaria"],
  correctAnswer: "Licencia por alimentación y cuidado del hijo"
},
{
  question: "¿Cuál es la finalidad del Sistema SILOL?",
  options: ["Gestionar los sueldos del personal", "Controlar las asignaciones familiares", "Tener un registro de las licencias que se toma el personal"],
  correctAnswer: "Tener un registro de las licencias que se toma el personal"
},
{
  question: "¿El SILOL me permite solicitar una licencia desde mi casa?",
  options: ["VERDADERO", "FALSO"],
  correctAnswer: "VERDADERO"
},
{
  question: "¿Cuál de estas licencias no se solicita por SILOL?",
  options: ["Licencia por enfermedad", "Licencia por maternidad", "Licencia por vacaciones"],
  correctAnswer: "Licencia por enfermedad"
},
{
  question: "¿Cuál es la finalidad principal del sistema SIFOR?",
  options: ["Control de asistencia", "Gestión de licencias", "Actualización de todos datos personales y asignaciones familiares"],
  correctAnswer: "Actualización de todos datos personales y asignaciones familiares"
},
{
  question: "Los datos personales son considerados como una DDJJ",
  options: ["VERDADERO", "FALSO"],
  correctAnswer: "VERDADERO"
},
{
  question: "¿Las asignaciones familiares, escolares, matrimonio y nacimiento se cargan en el Sistema SIFOR?",
  options: ["VERDADERO", "FALSO"],
  correctAnswer: "VERDADERO"
},
{
  question: "En Intranet, ¿se pueden visualizar los protocolos y normativas de la Institución?",
  options: ["VERDADERO", "FALSO"],
  correctAnswer: "VERDADERO"
},
{
  question: "¿El Sistema de antecedentes se puede consultar desde los teléfonos asignados?",
  options: ["VERDADERO", "FALSO"],
  correctAnswer: "VERDADERO"
},
{
  question: "¿Qué se puede consultar en el sistema de antecedentes?",
  options: ["Dominios", "Documentos de identidad", "Ambos son correctas"],
  correctAnswer: "Ambos son correctas"
},
{
  question: "¿En qué sistema puedo visualizar mi recibo de sueldo?",
  options: ["CI (Comunicaciones Internas)", "SIFOR", "SILOL"],
  correctAnswer: "CI (Comunicaciones Internas)"
},
{
  question: "¿El Sistema SIFOR me permite la carga de mi talla de uniforme?",
  options: ["VERDADERO", "FALSO"],
  correctAnswer: "VERDADERO"
},
{
  question: "¿Qué dirección personal debo cargar en el Sistema SIFOR?",
  options: ["Donde realmente vivo", "Una dirección cualquiera", "La dirección de la comisaría"],
  correctAnswer: "Donde realmente vivo"
},
{
  question: "Su usuario es único e intransferible, para todos los sistemas que se encuentre habilitado.",
  options: ["VERDADERO", "FALSO"],
  correctAnswer: "VERDADERO"
},
{
  question: "¿Quiénes tienen ingreso al sistema SIFOR?",
  options: ["Todo el personal", "Solo personal jerárquico", "Solo personal administrativo"],
  correctAnswer: "Todo el personal"
},
{
  question: "El sistema Ascenso SIPAP, ¿estoy habilitado a ingresar siempre?",
  options: ["Siempre", "Solo se puede ingresar cuando estoy habilitado para ascender", "Cuando cumplo con el tiempo mínimo en el"],
  correctAnswer: "Solo se puede ingresar cuando estoy habilitado para ascender"
},
{
  question: "¿Qué tipos de Actuaciones se pueden gestionar con el sistema GAP?",
  options: ["Delictivas, Contravenciones, faltas, constancias, y todo tipo de actuaciones policiales referida a la denuncia, prevención y/o las diligencias judiciales", "Solo delictivas", "Solo contravenciones"],
  correctAnswer: "Delictivas, Contravenciones, faltas, constancias, y todo tipo de actuaciones policiales referida a la denuncia, prevención y/o las diligencias judiciales"
},
{
  question: "¿Qué dependencias utilizan la aplicación GAP?",
  options: ["Solo dependencias que instruyen sumarios", "Aquellas dependencias que instruyen sumarios, las encargadas de realizar estadísticas o que se encuentran a nivel superior como jefatura, subjefatura y direcciones además de entidades externas como el consejo de niñas, niños y adolescentes que interactúa con el módulo de detenidos para registrar los movimientos del mismo.", "Solo jefatura y subjefatura"],
  correctAnswer: "Aquellas dependencias que instruyen sumarios, las encargadas de realizar estadísticas o que se encuentran a nivel superior como jefatura, subjefatura y direcciones además de entidades externas como el consejo de niñas, niños y adolescentes que interactúa con el módulo de detenidos para registrar los movimientos del mismo."
},
{
  question: "¿Qué tipo de personas se pueden agregar en las actuaciones Sistema GAP?",
  options: ["Solo testigos", "Solo denunciados", "Todo tipo de personas que intervengan en la actuación policial"],
  correctAnswer: "Todo tipo de personas que intervengan en la actuación policial"
},
{
  question: "Respecto a las finalidades del Sistema GAP, ¿cuál de todas las opciones son correctas?",
  options: ["Se utiliza tanto para las instrucciones de actuaciones policiales, como también para la organización de las distintas estadísticas que pueden originar el ingreso de los datos al sistema, para que luego se pueda realizar un gráfico preciso y actual del mapa del delito y a través de este se pueda tomar las distintas decisiones respecto a las estrategias de seguridad y prevención en la ciudad.", "Solo para instrucciones de actuaciones policiales", "Solo para organización de estadísticas"],
  correctAnswer: "Se utiliza tanto para las instrucciones de actuaciones policiales, como también para la organización de las distintas estadísticas que pueden originar el ingreso de los datos al sistema, para que luego se pueda realizar un gráfico preciso y actual del mapa del delito y a través de este se pueda tomar las distintas decisiones respecto a las estrategias de seguridad y prevención en la ciudad."
},
{
  question: "Los vehículos que se cargan en calidad de SUSTRAIDO en el Sistema GAP continúan el siguiente curso:",
  options: ["Se archiva el caso", "Se notifica a la policía local", "Se carga el dominio para buscar sus datos en el RNPA. Se envía una alerta a anillo digital, se genera automáticamente la solicitud del Secuestro."],
  correctAnswer: "Se carga el dominio para buscar sus datos en el RNPA. Se envía una alerta a anillo digital, se genera automáticamente la solicitud del Secuestro."
},
{
  question: "Cuando un vehículo registrado en GAP como sustraído es HALLADO:",
  options: ["Se genera una actuación complementaria y el rodado se guarda con calificación de 'APORTADO - HALLADO' y la tipificación que debe registrar la carátula es HALLAZGO AUTOMOTOR", "Se notifica al dueño", "Se archiva el caso"],
  correctAnswer: "Se genera una actuación complementaria y el rodado se guarda con calificación de 'APORTADO - HALLADO' y la tipificación que debe registrar la carátula es HALLAZGO AUTOMOTOR"
},
{
  question: "Las chapas patentes que se carga en calidad de SUSTRAIDO en el Sistema GAP, se cargan de la siguiente forma:",
  options: ["Se ingresan como sustracción de vehículo", "Se notifica a la policía local", "Se ingresa en Tipo de objetos Elementos Varios-Tipo chapa Patente y se GUARDA"],
  correctAnswer: "Se ingresa en Tipo de objetos Elementos Varios-Tipo chapa Patente y se GUARDA"
},
{
  question: "¿Cómo se carga una TENTATIVA DE ROBO en el Sistema GAP?",
  options: ["Se desliza el botón de tentativa indicando que es una tentativa", "Se selecciona el tipo de delito y se agrega una nota", "Se cargan como expedientes de constancia"],
  correctAnswer: "Se desliza el botón de tentativa indicando que es una tentativa"
},
{
  question: "¿Cómo se recomienda cargar cronológicamente una actuación policial en el Sistema GAP?",
  options: ["Se carga primero los objetos, luego las personas", "Se carga primero la Carátula, luego las personas, objetos y recursos y por ultimo las diligencias.", "Se carga primero las diligencias, luego la carátula"],
  correctAnswer: "Se carga primero la Carátula, luego las personas, objetos y recursos y por ultimo las diligencias."
},
{
  question: "En la carga de actuaciones policiales, ¿cuántas actividades se pueden cargar?",
  options: ["Solo una actividad", "Las actividades que sean necesarias en la actuación.", "Máximo tres actividades"],
  correctAnswer: "Las actividades que sean necesarias en la actuación."
},
{
  question: "Si estoy agregando 'NN' en el Sistema GAP, ¿qué valor debe utilizarse en el número de DNI?",
  options: ["Se ingresa un número ficticio", "No se completa el campo el mismo se deja VACIO.", "Se ingresa '0000'"],
  correctAnswer: "No se completa el campo el mismo se deja VACIO."
},
{
  question: "¿Cuándo enviamos una actuación a CREA desde el GAP?",
  options: ["Nunca", "Siempre que se crea una actuación", "Si en la actuación generada se dispone una consigna, una vez completa la actuación se debe enviar al sistema CREA."],
  correctAnswer: "Si en la actuación generada se dispone una consigna, una vez completa la actuación se debe enviar al sistema CREA."
},
{
  question: "¿Con qué datos buscamos al personal policial para ser agregado a una actuación de GAP como interventor o secundante?",
  options: ["Mediante LP y DNI.", "Solo LP", "Solo DNI"],
  correctAnswer: "Mediante LP y DNI."
},
{
  question: "En el menú CONSULTAS - PERSONAS, módulo que nos permite buscar a personas ingresadas en el Sistema GAP:",
  options: ["Los filtros de búsqueda, como Nro de documento, Nro de Sumario, tipo de persona etc, pueden utilizarse en conjunto, es decir, varios a la vez dentro de la búsqueda.", "Nos permite ver un resumen de los datos de las personas y las actuaciones en las que fueron ingresadas.", "TODAS LAS ANTERIORES SON CORRECTAS"],
  correctAnswer: "TODAS LAS ANTERIORES SON CORRECTAS"
},
{
  question: "En el menú CONSULTAS - OBJETOS, módulo que nos permite buscar objetos en el Sistema GAP:",
  options: ["Los filtros de búsqueda, como Clave, dependencia, Rango de fecha, etc, pueden utilizarse en conjunto, o sea varios a la vez.", "Nos permite ver un resumen de los datos de los objetos y las actuaciones en las que fueron ingresadas", "TODAS SON CORRECTAS"],
  correctAnswer: "TODAS SON CORRECTAS"
},
{
  question: "En el menú CONSULTAS - ACTUACIONES, el módulo que nos permite buscar las actuaciones ingresadas en el Sistema GAP:",
  options: ["Solo se puede buscar por fecha", "Solo se puede buscar por número de actuación", "Los filtros se pueden combinar, con el fin de acotar el resultado de la búsqueda."],
  correctAnswer: "Los filtros se pueden combinar, con el fin de acotar el resultado de la búsqueda."
},
{
  question: "Cuando registramos extravío en el Sistema GAP, desde el menú MÓDULOS FORMULARIO DE EXTRAVÍOS, debemos ingresar:",
  options: ["Agregamos tantos objetos como haya perdido.", "Se agregan en anotaciones", "No se pueden registrar objetos"],
  correctAnswer: "Agregamos tantos objetos como haya perdido."
},
{
  question: "¿Qué Sistema se utiliza para ingresar actuaciones policiales?",
  options: ["GAP", "SIFOR", "SILOL"],
  correctAnswer: "GAP"
},
{
  question: "Al cargar imputados y denunciados se habilitan opciones adicionales en GAP.",
  options: ["Antecedentes", "Datos de contacto", "Solo datos procesales y huellas."],
  correctAnswer: "Solo datos procesales y huellas."
},
{
  question: "¿Con qué color se identifica a las personas en el GAP?",
  options: ["VERDE: Damnificado, ROJO: Imputado/Denunciado, AMARILLO/NARANJA: Testigo, AZUL: Personal Policial/Interventor", "VERDE: Imputado/Denunciado, ROJO: Testigo, AMARILLO/NARANJA: Personal Policial/Interventor, AZUL: Damnificado", "VERDE: Testigo, ROJO: Personal Policial/Interventor, AMARILLO/NARANJA: Imputado/Denunciado, AZUL: Damnificado"],
  correctAnswer: "VERDE: Damnificado, ROJO: Imputado/Denunciado, AMARILLO/NARANJA: Testigo, AZUL: Personal Policial/Interventor"
},
{
  question: "¿Cómo está compuesto el Código de actuación de GAP?",
  options: ["Dependencia, Año, Nro. de Sumario", "Origen, Dependencia, Año y Nro. de Sumario.", "Origen, Año, Nro. de Sumario"],
  correctAnswer: "Origen, Dependencia, Año y Nro. de Sumario."
},
{
  question: "Cuando queremos ingresar detenido en el LUD y no lo encontramos al buscarlo por Nro. de actuación o Nro. de DNI que figura en la planilla de remisión, ¿cómo debemos proceder?",
  options: ["Debemos ponernos en contacto con la dependencia que instruye el sumario para que agregue a la actuación al detenido y luego aparecerá en nuestra búsqueda, de no hacerlo se creara una nueva actuación con esa dependencia.", "Se archiva el caso", "Se notifica al superior inmediato"],
  correctAnswer: "Debemos ponernos en contacto con la dependencia que instruye el sumario para que agregue a la actuación al detenido y luego aparecerá en nuestra búsqueda, de no hacerlo se creara una nueva actuación con esa dependencia."
},
{
  question: "¿Cómo se ingresa a un detenido que proviene de un organismo externo, como por ejemplo Gendarmería?",
  options: ["Se ingresa el mismo desde el menú INGRESAR DETENIDOS LUD, ingresar sin actuación y en ORIGEN indicaremos Cooperación externa y en SUBORIGEN la dependencia que lo traslada.", "Se archiva el caso", "Se notifica al superior inmediato"],
  correctAnswer: "Se ingresa el mismo desde el menú INGRESAR DETENIDOS LUD, ingresar sin actuación y en ORIGEN indicaremos Cooperación externa y en SUBORIGEN la dependencia que lo traslada."
},
{
  question: "¿Puedo dar ingreso a un detenido sin haberlo cargado previamente al GAP?",
  options: ["SI.", "NO", "Solo con autorización especial"],
  correctAnswer: "SI."
},
{
  question: "¿Cuándo una consigna se considera cerrada?",
  options: ["Cuando todos sus servicios están cerrados.", "Cuando se notifica al superior", "Cuando lo dispone el fiscal"],
  correctAnswer: "Cuando todos sus servicios están cerrados."
},
{
  question: "¿Qué datos deben estar registrados en el objetivo para que la consigna se visualice en el parte?",
  options: ["El responsable", "La ubicación", "El servicio."],
  correctAnswer: "El servicio."
},
{
  question: "¿Se visualizan las consignas en el CREA que no poseen damnificados?",
  options: ["NO.", "SI", "Solo con autorización especial"],
  correctAnswer: "NO."
},
{
  question: "¿Cuántos tipos de consignas hay en CREA?",
  options: ["FIJA-DINÁMICA-MÓVIL.", "FIJA-MÓVIL", "DINÁMICA-MÓVIL"],
  correctAnswer: "FIJA-DINÁMICA-MÓVIL."
},
{
  question: "¿Cuál es la funcionalidad principal del Sistema SIGENO?",
  options: ["Controlar las asignaciones familiares", "Crear los grupos, y turnos del personal, para poder visualizar y gestionar las novedades de ausencia y otras del mismo.", "Gestionar los sueldos del personal"],
  correctAnswer: "Crear los grupos, y turnos del personal, para poder visualizar y gestionar las novedades de ausencia y otras del mismo."
},
{
  question: "¿Qué tipo de novedades de personal pueden ser cargadas en el Sistema SIGENO?",
  options: ["Solo ausencias", "Servicios Especiales, Sanciones, Ausencias, etc.", "Solo sanciones"],
  correctAnswer: "Servicios Especiales, Sanciones, Ausencias, etc."
},
{
  question: "¿Para qué me sirve la consulta de Personal en SIGENO?",
  options: ["Solo para ver el turno", "Solo para ver el grupo", "Para realizar búsquedas filtradas de las distintas novedades del personal, según varios parámetros como Grupo, turno, Dependencia, Situación, etc."],
  correctAnswer: "Para realizar búsquedas filtradas de las distintas novedades del personal, según varios parámetros como Grupo, turno, Dependencia, Situación, etc."
},
{
  question: "Para visualizar un grupo en el Parte Diario SIGENO, el mismo debe estar cargado en:",
  options: ["En el Menú Administración de Grupos y Turnos.", "En el Menú de Personal", "En el Menú de Novedades"],
  correctAnswer: "En el Menú Administración de Grupos y Turnos."
},
{
  question: "¿Cómo está compuesta la estructura de un grupo en SIGENO?",
  options: ["Grupo, Turno, Integrantes.", "Grupo, Integrantes", "Turno, Integrantes"],
  correctAnswer: "Grupo, Turno, Integrantes."
},
{
  question: "Las novedades de SIGENO solo se visualizan en ese sistema, no impactan en ningún otro sistema.",
  options: ["FALSO.", "VERDADERO"],
  correctAnswer: "FALSO"
},
{
  question: "El pase de revista de la totalidad del personal de una dependencia puede ser controlado por SIGENO.",
  options: ["VERDADERO.", "FALSO"],
  correctAnswer: "VERDADERO"
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
