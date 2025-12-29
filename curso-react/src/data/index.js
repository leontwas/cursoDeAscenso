import { cppnQuestions } from './cppnQuestions';
import { pepQuestions } from './pepQuestions';

// Mapeo de topics a sus preguntas
// Por ahora solo tenemos CPPN, pero se pueden agregar más
export const questionsByTopic = {
  cppn: cppnQuestions,
  inimputabilidad: cppnQuestions, // Placeholder
  ley5688: cppnQuestions, // Placeholder
  criminalistica: cppnQuestions, // Placeholder
  derechoPenal: cppnQuestions, // Placeholder
  regimenDisciplinario: cppnQuestions, // Placeholder
  pep: pepQuestions,
  oficialGuardia: cppnQuestions, // Placeholder
  marcoLegal: cppnQuestions, // Placeholder
  competenciasJudiciales: cppnQuestions, // Placeholder
  protocolos: cppnQuestions, // Placeholder
  jefeServicio: cppnQuestions, // Placeholder
  jefeJudiciales: cppnQuestions, // Placeholder
  tecnologias: cppnQuestions, // Placeholder
  mando: cppnQuestions, // Placeholder
};
