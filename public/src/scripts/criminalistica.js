const questions = [
{
  question: "La ecuación de Widmarck es fundamental en toxicología forense para calcular la cantidad de alcohol ingerida. ¿Cuál de los siguientes factores no se considera en esta ecuación?",
  options: ["Peso del individuo", "Concentración alcohólica en sangre al tiempo t", "Tipo de bebida alcohólica consumida", "Relación alcohólica cuerpo total / Concentración en sangre a T=0"],
  correctAnswer: "Tipo de bebida alcohólica consumida"
},
{
  question: "El uso de drogas sintéticas como las 'sales de baño' puede llevar a varios efectos adversos. ¿Cuál de los siguientes síntomas no está asociado con su consumo?",
  options: ["Incremento del ritmo cardíaco", "Pérdida de memoria a largo plazo", "Alucinaciones", "Comportamiento agresivo"],
  correctAnswer: "Pérdida de memoria a largo plazo"
},
{
  question: "Krokodil es una droga conocida por sus devastadores efectos físicos. ¿Cuál es el principal componente activo de Krokodil?",
  options: ["Heroína", "Desomorfina", "Codeína", "Metanfetamina"],
  correctAnswer: "Desomorfina"
},
{
  question: "La papiloscopía es una ciencia crucial en la identificación forense. ¿Cuál de las siguientes afirmaciones es incorrecta sobre la papiloscopía?",
  options: ["Las crestas papilares son únicas para cada individuo.", "Las huellas digitales cambian significativamente con la edad.", "Incluye el estudio de huellas en los dedos, palmas y plantas de los pies.", "Utiliza técnicas como la dactiloscopía y la poroscopía."],
  correctAnswer: "Las huellas digitales cambian significativamente con la edad."
},
{
  question: "¿Cuál es el propósito del Sistema AFIS en la investigación forense?",
  options: ["Analizar muestras de ADN", "Comparar millones de huellas dactilares en segundos", "Detectar sustancias químicas en la sangre", "Reconstruir escenas del crimen"],
  correctAnswer: "Comparar millones de huellas dactilares en segundos"
},
{
  question: "En el contexto de la normativa policial, ¿cuál es el principio fundamental que debe guiar el uso de la fuerza por parte de los funcionarios encargados de hacer cumplir la ley?",
  options: ["La fuerza debe usarse solo en casos de emergencia extrema.", "La fuerza debe ser proporcional y necesaria.", "La fuerza puede usarse libremente si es en defensa personal.", "La fuerza debe evitarse a toda costa."],
  correctAnswer: "La fuerza debe ser proporcional y necesaria."
},
{
  question: "La Unidad Fiscal Especializada en Delitos y Contravenciones Informáticas (UFEDyCI) tiene un papel crucial en la investigación de delitos cibernéticos. ¿Qué tipos de delitos no están bajo su jurisdicción?",
  options: ["Fraude informático", "Robo de identidad", "Delitos ambientales", "Distribución de pornografía infantil"],
  correctAnswer: "Delitos ambientales"
},
{
  question: "La toxicología forense estudia los efectos de las drogas y tóxicos en el cuerpo humano. ¿Cuál de las siguientes afirmaciones es verdadera sobre las nuevas sustancias del siglo XXI, como el 'Spice' o 'K2'?",
  options: ["Son completamente naturales y no tienen efectos secundarios.", "Son mezclas herbales rociadas con marihuana sintética y pueden ser más adictivas que la marihuana natural.", "Están reguladas por la FDA y se consideran seguras para el consumo humano.", "No tienen impacto significativo en la salud pública."],
  correctAnswer: "Son mezclas herbales rociadas con marihuana sintética y pueden ser más adictivas que la marihuana natural."
},
{
  question: "El éxtasis natural o de hierbas es una combinación de estimulantes. ¿Qué ingredientes suelen encontrarse en estas mezclas?",
  options: ["Heroína y cocaína", "Efedrina (ma huang) o pseudoefedrina y cafeína (nuez de cola)", "THC y CBD", "Metanfetamina y LSD"],
  correctAnswer: "Efedrina (ma huang) o pseudoefedrina y cafeína (nuez de cola)"
},
{
  question: "El 'Séptimo cielo' o 'Sales de baño' son drogas sintéticas que imitan los efectos de otras sustancias. ¿Qué característica distintiva tienen respecto a su presentación y venta?",
  options: ["Se venden exclusivamente en tiendas de salud.", "Se presentan como productos legales de baño, aunque no tienen relación química con ellos.", "Son inyectables y solo se venden con receta médica.", "Se comercializan exclusivamente en mercados ilegales."],
  correctAnswer: "Se presentan como productos legales de baño, aunque no tienen relación química con ellos."
},
{
  question: "PCP y Ketamina son anestésicos disociativos. ¿Cuál de los siguientes efectos no está asociado con su consumo a dosis altas?",
  options: ["Distorsión de los sonidos", "Efectos alucinógenos muy fuertes", "Incremento de la noción del tiempo", "Anulación total del cuerpo"],
  correctAnswer: "Incremento de la noción del tiempo"
},
{
  question: "La droga 1,4-CPP es un derivado de la clorofenilpiperazina. ¿Para qué se utiliza originalmente esta sustancia?",
  options: ["Tratamiento de infecciones bacterianas", "Control de parásitos en cerdos y caballos", "Producción de analgésicos", "Fabricación de pesticidas"],
  correctAnswer: "Control de parásitos en cerdos y caballos"
},
{
  question: "¿Cuál es uno de los principales riesgos asociados con el consumo de 'Krokodil'?",
  options: ["Aumento de la masa muscular", "Daños severos en la piel y los tejidos", "Mejora de la función cognitiva", "Pérdida de peso sin efectos secundarios"],
  correctAnswer: "Daños severos en la piel y los tejidos"
},
{
  question: "Las nuevas sustancias psicoactivas (NPS) son un desafío para la regulación. ¿Qué característica común tienen estas sustancias?",
  options: ["Son completamente inofensivas y legales en todos los países.", "Son versiones químicas modificadas de drogas controladas que evaden las leyes existentes.", "Se utilizan exclusivamente en tratamientos médicos aprobados.", "Son más baratas de producir que las drogas tradicionales."],
  correctAnswer: "Son versiones químicas modificadas de drogas controladas que evaden las leyes existentes."
},
{
  question: "¿Cuál es una de las dificultades principales en la regulación de las nuevas sustancias psicoactivas?",
  options: ["Su baja demanda en el mercado negro", "La velocidad con la que se desarrollan nuevas variantes", "La falta de interés público en su regulación", "Su alta toxicidad que impide su comercialización"],
  correctAnswer: "La velocidad con la que se desarrollan nuevas variantes"
},
{
  question: "¿Cuál de las siguientes es una característica del 'Éxtasis natural o de hierbas'?",
  options: ["Está regulado por la FDA como un suplemento seguro.", "Es una combinación de estimulantes que puede simular los efectos del éxtasis.", "No tiene efectos secundarios conocidos.", "Solo se encuentra en tiendas especializadas en productos naturales."],
  correctAnswer: "Es una combinación de estimulantes que puede simular los efectos del éxtasis."
},
{
  question: "¿Qué efecto adverso grave puede resultar del uso de estimulantes herbales como el 'Éxtasis natural'?",
  options: ["Hipotermia", "Hipertensión y taquicardia", "Reducción de la actividad cerebral", "Pérdida de apetito sin efectos secundarios"],
  correctAnswer: "Hipertensión y taquicardia"
},
{
  question: "Las mezclas herbales como 'Spice' y 'K2' son conocidas por:",
  options: ["Ser completamente legales y seguras para el consumo.", "Tener un efecto relajante sin adicción.", "Ser más adictivas que la marihuana natural.", "No contener ingredientes sintéticos."],
  correctAnswer: "Ser más adictivas que la marihuana natural."
},
{
  question: "¿Cuál es el principal desafío de las fuerzas del orden al enfrentarse a las drogas sintéticas como las 'sales de baño'?",
  options: ["La falta de herramientas para detectar su presencia en el cuerpo", "Su rápida metabolización que las hace indetectables en pruebas estándar", "La dificultad para distinguirlas de productos legales en el mercado", "Su bajo impacto en la salud pública que no justifica la intervención"],
  correctAnswer: "La dificultad para distinguirlas de productos legales en el mercado"
},
{
  question: "La papiloscopía es una técnica crucial para la identificación forense. ¿Qué métodos se utilizan comúnmente para revelar huellas dactilares latentes?",
  options: ["Uso de rayos X y ultrasonido", "Polvos de huellas, ninhidrina y vapores de cianoacrilato", "Análisis de ADN y espectroscopía de masas", "Escáneres térmicos y análisis de imagen digital"],
  correctAnswer: "Polvos de huellas, ninhidrina y vapores de cianoacrilato"
},
{
  question: "¿Qué característica distingue a las drogas disociativas como el PCP y la Ketamina de otros tipos de drogas alucinógenas?",
  options: ["Su capacidad para mejorar la percepción sensorial", "Su uso exclusivo en procedimientos médicos", "Su efecto de distorsión de la realidad y separación del cuerpo", "Su origen completamente natural"],
  correctAnswer: "Su efecto de distorsión de la realidad y separación del cuerpo"
},
{
  question: "¿Cuál es una de las consecuencias legales de la rápida aparición de nuevas sustancias psicoactivas (NPS)?",
  options: ["Una disminución en la criminalidad relacionada con drogas", "La necesidad de actualizar constantemente las leyes de control de drogas", "La eliminación de la necesidad de pruebas toxicológicas en investigaciones forenses", "Un aumento en el uso de drogas tradicionales"],
  correctAnswer: "La necesidad de actualizar constantemente las leyes de control de drogas"
},
{
  question: "El uso de 'Krokodil' ha sido reportado principalmente en ciertas regiones. ¿Cuál es una de las razones por las que esta droga se ha vuelto popular?",
  options: ["Su bajo costo y fácil acceso a los ingredientes", "Sus beneficios para la salud ampliamente documentados", "Su promoción en medios de comunicación masivos", "Su uso en tratamientos médicos aprobados"],
  correctAnswer: "Su bajo costo y fácil acceso a los ingredientes"
},
{
  question: "¿Cuál es un efecto común del consumo de marihuana sintética como 'Spice' o 'K2'?",
  options: ["Incremento de la concentración y productividad", "Euforia y relajación sin efectos secundarios", "Ansiedad, paranoia y alucinaciones", "Mejora de la memoria a corto plazo"],
  correctAnswer: "Ansiedad, paranoia y alucinaciones"
},
{
  question: "¿Cuál es uno de los métodos utilizados para sintetizar drogas como la desomorfina, conocida como 'Krokodil'?",
  options: ["Extracción directa de plantas naturales", "Síntesis química a partir de codeína", "Fermentación de productos orgánicos", "Destilación de alcoholes industriales"],
  correctAnswer: "Síntesis química a partir de codeína"
},
{
  question: "¿Qué tipo de sustancias se suelen encontrar en las 'sales de baño' que imitan los efectos de drogas ilícitas?",
  options: ["Derivados de la cafeína", "Cannabinoides naturales", "Catinonas sintéticas", "Derivados de la vitamina C"],
  correctAnswer: "Catinonas sintéticas"
},
{
  question: "En el contexto de las nuevas sustancias psicoactivas, ¿qué significa el término 'legal high'?",
  options: ["Sustancias aprobadas por las autoridades sanitarias para uso recreativo", "Drogas que están en el mercado sin estar reguladas específicamente por la ley", "Productos farmacéuticos que requieren receta médica", "Suplementos dietéticos con efectos psicoactivos"],
  correctAnswer: "Drogas que están en el mercado sin estar reguladas específicamente por la ley"
},
{
  question: "¿Cuál es un efecto adverso potencial del uso prolongado de marihuana sintética?",
  options: ["Mejora de la función respiratoria", "Incremento de la capacidad de aprendizaje", "Daños renales y cardiovasculares", "Aumento del apetito sin efectos secundarios"],
  correctAnswer: "Daños renales y cardiovasculares"
},
{
  question: "¿Por qué las drogas como 'Spice' y 'K2' son particularmente difíciles de regular?",
  options: ["Debido a su baja toxicidad", "Porque son completamente naturales", "Debido a las constantes modificaciones químicas que evaden leyes actuales", "Porque no tienen efectos psicoactivos significativos"],
  correctAnswer: "Debido a las constantes modificaciones químicas que evaden leyes actuales"
},
{
  question: "¿Cuál es una característica común de las nuevas sustancias psicoactivas (NPS) en términos de su impacto en la salud pública?",
  options: ["Son inofensivas y no requieren atención médica", "Causan efectos impredecibles y pueden ser extremadamente peligrosas", "Mejoran el bienestar general y reducen el estrés", "Se utilizan principalmente en tratamientos médicos aprobados"],
  correctAnswer: "Causan efectos impredecibles y pueden ser extremadamente peligrosas"
},
{
  question: "¿Qué tecnología se utiliza comúnmente en toxicología forense para identificar sustancias desconocidas en el cuerpo?",
  options: ["Microscopía óptica", "Resonancia magnética", "Espectrometría de masas", "Radiografía"],
  correctAnswer: "Espectrometría de masas"
},
{
  question: "¿Cuál es un efecto común del uso de catinonas sintéticas, a menudo encontradas en 'sales de baño'?",
  options: ["Aumento de la concentración sin efectos secundarios", "Euforia intensa seguida de depresión severa", "Mejora de la memoria a largo plazo", "Incremento del apetito"],
  correctAnswer: "Euforia intensa seguida de depresión severa"
},
{
  question: "¿Qué factor contribuye a la rápida proliferación de nuevas sustancias psicoactivas en el mercado?",
  options: ["El alto costo de producción", "La facilidad para obtener ingredientes legales", "La falta de interés de los consumidores", "Las estrictas regulaciones internacionales"],
  correctAnswer: "La facilidad para obtener ingredientes legales"
},
{
  question: "¿Cuál es uno de los principales riesgos asociados con la fabricación casera de drogas como 'Krokodil'?",
  options: ["La producción de un producto de alta calidad", "La exposición a productos químicos tóxicos y peligrosos", "La falta de efectos psicoactivos", "La regulación estricta por parte de las autoridades"],
  correctAnswer: "La exposición a productos químicos tóxicos y peligrosos"
},
{
  question: "¿Cuál es una de las razones por las que las nuevas sustancias psicoactivas (NPS) pueden ser más peligrosas que las drogas tradicionales?",
  options: ["Están hechas a partir de ingredientes naturales", "Tienen efectos secundarios completamente predecibles", "A menudo no se han probado adecuadamente en humanos", "Son más costosas que las drogas tradicionales"],
  correctAnswer: "A menudo no se han probado adecuadamente en humanos"
},
{
  question: "¿Qué efecto tiene el uso de marihuana sintética en comparación con la marihuana natural?",
  options: ["Es menos potente y tiene menos efectos secundarios", "Produce efectos psicoactivos más intensos y peligrosos", "Mejora la función cognitiva sin riesgos", "Es completamente segura y legal en todos los países"],
  correctAnswer: "Produce efectos psicoactivos más intensos y peligrosos"
},
{
  question: "¿Qué característica distingue a las drogas de diseño de otras drogas ilícitas?",
  options: ["Son completamente legales en todos los países", "Se crean para imitar los efectos de drogas ilegales mientras evaden las regulaciones", "Tienen un origen completamente natural", "No tienen efectos psicoactivos"],
  correctAnswer: "Se crean para imitar los efectos de drogas ilegales mientras evaden las regulaciones"
},
{
  question: "¿Cuál es un desafío significativo para los servicios de salud pública con respecto a las nuevas sustancias psicoactivas?",
  options: ["La falta de interés de los consumidores en estas sustancias", "La amplia disponibilidad de información sobre sus efectos", "La dificultad para identificar y tratar sobredosis debido a la variabilidad de sus efectos", "La regulación estricta y efectiva de todas las nuevas sustancias"],
  correctAnswer: "La dificultad para identificar y tratar sobredosis debido a la variabilidad de sus efectos"
},
{
  question: "¿Qué es un 'legal high'?",
  options: [
    "Un término para drogas que han sido aprobadas para uso médico.",
    "Una sustancia que proporciona efectos psicoactivos sin estar regulada como ilegal.",
    "Una droga que es completamente inofensiva.",
    "Un suplemento dietético aprobado por la FDA."
  ],
  correctAnswer: "Una sustancia que proporciona efectos psicoactivos sin estar regulada como ilegal"
},
{
  question: "¿Cuál es el principal objetivo de las modificaciones químicas en las drogas de diseño?",
  options: [
    "Aumentar su potencia y duración.",
    "Facilitar su producción a gran escala.",
    "Evitar las regulaciones legales existentes.",
    "Reducir los efectos secundarios negativos."
  ],
  correctAnswer: "Evitar las regulaciones legales existentes"
},
{
  question: "Las nuevas sustancias psicoactivas siempre son menos peligrosas que las drogas tradicionales debido a su composición novedosa.",
  options: ["Verdadero", "Falso"],
  correctAnswer: "Falso"
},
{
  question: "¿Qué impacto tiene el uso de 'Krokodil' en la salud física de los usuarios?",
  options: [
    "Mejora la resistencia física y mental.",
    "Provoca graves daños en la piel y los tejidos.",
    "No tiene efectos secundarios.",
    "Solo afecta el sistema nervioso central."
  ],
  correctAnswer: "Provoca graves daños en la piel y los tejidos"
},
{
  question: "¿Por qué las nuevas sustancias psicoactivas son un desafío para las políticas de drogas globales?",
  options: [
    "Porque son fáciles de detectar en pruebas estándar.",
    "Debido a su rápida evolución y aparición en el mercado.",
    "Porque siempre tienen efectos positivos en la salud mental.",
    "Debido a su bajo costo de producción."
  ],
  correctAnswer: "Debido a su rápida evolución y aparición en el mercado"
},
{
  question: "Las 'sales de baño' son productos de baño seguros que no tienen efectos psicoactivos.",
  options: ["Verdadero", "Falso"],
  correctAnswer: "Falso"
},
{
  question: "¿Qué factor contribuye a la popularidad de las drogas sintéticas entre los jóvenes?",
  options: [
    "Su alto costo y exclusividad.",
    "La percepción de que son más seguras que las drogas tradicionales.",
    "El respaldo de instituciones médicas.",
    "Su uso exclusivo en ceremonias religiosas."
  ],
  correctAnswer: "La percepción de que son más seguras que las drogas tradicionales"
},
{
  question: "¿Cuál es uno de los métodos más efectivos para combatir la proliferación de nuevas sustancias psicoactivas?",
  options: [
    "Legalizar todas las drogas para reducir su atractivo.",
    "Aumentar la educación y conciencia pública sobre sus riesgos.",
    "Ignorar el problema para que se resuelva solo.",
    "Prohibir todas las sustancias químicas nuevas sin evaluación."
  ],
  correctAnswer: "Aumentar la educación y conciencia pública sobre sus riesgos"
},
{
  question: "Las drogas de diseño son siempre más seguras que las drogas tradicionales porque están diseñadas para evitar efectos secundarios.",
  options: ["Verdadero", "Falso"],
  correctAnswer: "Falso"
},
{
  question: "¿Qué papel desempeñan las redes sociales en la difusión de nuevas sustancias psicoactivas?",
  options: [
    "Ayudan a restringir y controlar su uso.",
    "Facilitan la distribución y promoción de estas sustancias.",
    "No tienen ningún impacto en su popularidad.",
    "Solo se utilizan para campañas de prevención de drogas."
  ],
  correctAnswer: "Facilitan la distribución y promoción de estas sustancias"
},
{
  question: "¿Cuál es un efecto común del uso de cannabinoides sintéticos?",
  options: [
    "Mejoras en la función cognitiva y memoria.",
    "Euforia seguida de ansiedad extrema y paranoia.",
    "Incremento del apetito sin efectos secundarios.",
    "Reducción del ritmo cardíaco."
  ],
  correctAnswer: "Euforia seguida de ansiedad extrema y paranoia"
},
{
  question: "Todas las nuevas sustancias psicoactivas son ilegales en todos los países.",
  options: ["Verdadero", "Falso"],
  correctAnswer: "Falso"
},
{
  question: "¿Qué estrategia pueden emplear los gobiernos para identificar rápidamente nuevas sustancias psicoactivas en el mercado?",
  options: [
    "Esperar a que las sustancias sean populares antes de actuar.",
    "Colaborar con laboratorios y científicos para desarrollar métodos de detección avanzados.",
    "Prohibir todas las sustancias químicas nuevas sin pruebas.",
    "Depender únicamente de reportes de usuarios."
  ],
  correctAnswer: "Colaborar con laboratorios y científicos para desarrollar métodos de detección avanzados"
},
{
  question: "¿Cuál es una característica comúnmente asociada con las drogas blandas?",
  options: [
    "Tienen un alto potencial de adicción física.",
    "Son legales en todos los países.",
    "Se perciben como menos peligrosas que las drogas duras.",
    "No tienen ningún efecto sobre el sistema nervioso central."
  ],
  correctAnswer: "Se perciben como menos peligrosas que las drogas duras"
},
{
  question: "¿Cuál de las siguientes es considerada una droga dura?",
  options: [
    "Alcohol",
    "Cannabis",
    "Heroína",
    "Tabaco"
  ],
  correctAnswer: "Heroína"
},
{
  question: "El consumo de alcohol no tiene efectos significativos en el sistema nervioso central.",
  options: ["Verdadero", "Falso"],
  correctAnswer: "Falso"
},
{
  question: "¿Cuál es un efecto común del uso de estupefacientes en el cuerpo humano?",
  options: [
    "Incremento de la energía y la alerta.",
    "Depresión del sistema nervioso central.",
    "Mejora de la memoria a largo plazo.",
    "Ningún efecto notable."
  ],
  correctAnswer: "Depresión del sistema nervioso central"
},
{
  question: "¿Qué factor contribuye a la categorización de una sustancia como droga dura?",
  options: [
    "Su precio en el mercado negro.",
    "Su origen natural o sintético.",
    "Su potencial de adicción y daño físico o psicológico.",
    "La cantidad de usuarios en todo el mundo."
  ],
  correctAnswer: "Su potencial de adicción y daño físico o psicológico"
},
{
  question: "El consumo moderado de alcohol no tiene ningún riesgo para la salud.",
  options: ["Verdadero", "Falso"],
  correctAnswer: "Falso"
},
{
  question: "¿Qué factor contribuye a la categorización de una sustancia como droga dura?",
  options: [
    "Su precio en el mercado negro.",
    "Su origen natural o sintético.",
    "Su potencial de adicción y daño físico o psicológico.",
    "La cantidad de usuarios en todo el mundo."
  ],
  correctAnswer: "Su potencial de adicción y daño físico o psicológico."
},
{
  question: "El consumo moderado de alcohol no tiene ningún riesgo para la salud.",
  options: ["Verdadero", "Falso"],
  correctAnswer: "Falso"
},
{
  question: "¿Cuál de los siguientes efectos es comúnmente asociado con el consumo excesivo de alcohol a largo plazo?",
  options: [
    "Mejora de la función hepática.",
    "Aumento de la memoria y la concentración.",
    "Daño hepático y problemas cardiovasculares.",
    "Incremento del metabolismo."
  ],
  correctAnswer: "Daño hepático y problemas cardiovasculares."
},
{
  question: "¿Cuál es una posible consecuencia del uso prolongado de drogas duras en el sistema nervioso central?",
  options: [
    "Regeneración celular acelerada.",
    "Desarrollo de tolerancia y dependencia.",
    "Mejora en la coordinación motora.",
    "Aumento de la creatividad."
  ],
  correctAnswer: "Desarrollo de tolerancia y dependencia."
},
{
  question: "El cannabis es considerado una droga blanda debido a su falta de efectos psicoactivos.",
  options: ["Verdadero", "Falso"],
  correctAnswer: "Falso"
},
{
  question: "¿Qué efecto tiene el alcohol sobre el juicio y la toma de decisiones?",
  options: [
    "Mejora la claridad mental y el juicio crítico.",
    "No tiene ningún efecto sobre el juicio.",
    "Deteriora el juicio y la capacidad de toma de decisiones.",
    "Aumenta la capacidad de concentración."
  ],
  correctAnswer: "Deteriora el juicio y la capacidad de toma de decisiones."
},
{
  question: "¿Qué categoría de drogas es más probable que cause una sobredosis fatal debido a la depresión respiratoria?",
  options: [
    "Drogas blandas como el cannabis.",
    "Estimulantes como la cafeína.",
    "Opiáceos como la heroína.",
    "Alucinógenos como el LSD."
  ],
  correctAnswer: "Opiáceos como la heroína."
},
{
  question: "El consumo de drogas blandas no tiene ningún impacto en las habilidades motoras.",
  options: ["Verdadero", "Falso"],
  correctAnswer: "Falso"
},
{
  question: "¿Cuál es uno de los enfoques principales de las políticas de reducción de daños en relación con el consumo de drogas?",
  options: [
    "Prohibir completamente todas las sustancias.",
    "Minimizar las consecuencias negativas del consumo de drogas sin necesariamente reducir el consumo en sí.",
    "Aumentar las penas para los consumidores de drogas.",
    "Ignorar el problema para que desaparezca."
  ],
  correctAnswer: "Minimizar las consecuencias negativas del consumo de drogas sin necesariamente reducir el consumo en sí."
},
{
  question: "¿Qué papel juegan los programas de educación sobre drogas en las escuelas?",
  options: [
    "Promueven el uso de drogas entre los estudiantes.",
    "Proporcionan información basada en evidencia para prevenir el uso de drogas.",
    "Solo se enfocan en castigar a los estudiantes que consumen drogas.",
    "No tienen ningún impacto en el comportamiento de los estudiantes."
  ],
  correctAnswer: "Proporcionan información basada en evidencia para prevenir el uso de drogas."
},
{
  question: "La legalización del cannabis en algunos países ha llevado a una disminución en su uso entre adolescentes.",
  options: ["Verdadero", "Falso"],
  correctAnswer: "Falso"
},
{
  question: "¿Cuál es un beneficio potencial de las salas de consumo supervisado para usuarios de drogas?",
  options: [
    "Aumentan el consumo de drogas en la comunidad.",
    "Reducen las sobredosis y mejoran el acceso a servicios de salud.",
    "Eliminan completamente el uso de drogas en la comunidad.",
    "Son costosas y no ofrecen beneficios reales."
  ],
  correctAnswer: "Reducen las sobredosis y mejoran el acceso a servicios de salud."
},
{
  question: "¿Qué estrategia se utiliza en campañas de prevención del alcohol para reducir el consumo excesivo?",
  options: [
    "Promoción de la abstinencia total para todos.",
    "Educación sobre el consumo responsable y los riesgos del consumo excesivo.",
    "Distribución gratuita de alcohol en eventos públicos.",
    "Ignorar el problema y esperar que se resuelva solo."
  ],
  correctAnswer: "Educación sobre el consumo responsable y los riesgos del consumo excesivo."
},
{
  question: "Las políticas estrictas de prohibición de drogas siempre resultan en una reducción del consumo de drogas.",
  options: ["Verdadero", "Falso"],
  correctAnswer: "Falso"
},
{
  question: "¿Cuál es uno de los propósitos principales de la investigación criminal?",
  options: ["Proteger la privacidad de los ciudadanos.", "Asegurar que el culpable reciba una condena justa.", "Garantizar que el inocente nunca sea injustamente condenado.", "Investigar delitos menores para prevenir crímenes mayores."],
  correctAnswer: "Garantizar que el inocente nunca sea injustamente condenado."
},
{
  question: "¿Qué ciencia se encarga de interpretar los 'testigos mudos' en la escena del delito?",
  options: ["Medicina Legal", "Criminología", "Criminalística", "Psicología Forense"],
  correctAnswer: "Criminalística"
},
{
  question: "¿Qué método científico implica pasar de observaciones particulares a afirmaciones generales?",
  options: ["Deducción", "Abducción", "Inducción", "Experimentación"],
  correctAnswer: "Inducción"
},
{
  question: "¿Qué principio establece que siempre se produce un intercambio de materiales en la escena del crimen?",
  options: ["Principio de Conservación", "Principio de Locard", "Principio de Intercambio", "Principio de Transferencia"],
  correctAnswer: "Principio de Intercambio"
},
{
  question: "¿Qué tipo de evidencia es dada por un testigo presencial de un hecho?",
  options: ["Evidencia Física", "Evidencia Testimonial", "Evidencia Circunstancial", "Evidencia Directa"],
  correctAnswer: "Evidencia Testimonial"
},
{
  question: "¿Qué ciencia auxiliar del Derecho Penal estudia el 'por qué' del delito?",
  options: ["Criminología", "Medicina Forense", "Criminalística", "Sociología Criminal"],
  correctAnswer: "Criminología"
},
{
  question: "¿Qué se estudia en la Criminología?",
  options: ["El 'cómo' del delito.", "El 'cuándo' del delito.", "El 'dónde' del delito.", "El 'por qué' del delito."],
  correctAnswer: "El 'por qué' del delito."
},
{
  question: "¿Qué implica el enfoque transdisciplinar en la investigación criminal?",
  options: ["Separar las disciplinas para analizar cada aspecto del delito.", "Unir disciplinas desde el inicio hasta la culminación de la investigación.", "Centrar la investigación en un solo aspecto del delito.", "Priorizar la tecnología en la investigación."],
  correctAnswer: "Unir disciplinas desde el inicio hasta la culminación de la investigación."
},
{
  question: "¿Cuál es la diferencia principal entre una inferencia y una evidencia?",
  options: ["La evidencia es una suposición y la inferencia es un hecho probado.", "La inferencia se basa en observaciones, la evidencia en pruebas científicas.", "La evidencia es subjetiva y la inferencia es objetiva.", "No hay diferencia significativa entre ambos conceptos."],
  correctAnswer: "La inferencia se basa en observaciones, la evidencia en pruebas científicas."
},
{
  question: "¿Qué se requiere para que un indicio se convierta en evidencia?",
  options: ["Que sea encontrado en el lugar del delito.", "Que el laboratorio confirme su relación con el delito.", "Que sea testificado por un testigo presencial.", "Que sea presentado ante un juez."],
  correctAnswer: "Que el laboratorio confirme su relación con el delito."
},
{
  question: "¿Cuál es el propósito principal del método científico en la investigación criminal?",
  options: ["Obtener inferencias.", "Validar suposiciones.", "Obtener evidencias con un cierto grado de certeza.", "Establecer teorías generales."],
  correctAnswer: "Obtener evidencias con un cierto grado de certeza."
},
{
  question: "¿Qué método se utiliza para pasar de afirmaciones generales a hechos particulares?",
  options: ["Deducción", "Inducción", "Abducción", "Comparación"],
  correctAnswer: "Deducción"
},
{
  question: "¿Qué es un indicio en el contexto de una investigación criminal?",
  options: ["Un testimonio directo.", "Un objeto o huella relacionado con un delito.", "Una prueba científica concluyente.", "Una suposición basada en observaciones."],
  correctAnswer: "Un objeto o huella relacionado con un delito."
},
{
  question: "¿Qué tipo de razonamiento implica llegar a una hipótesis a partir de la descripción de un hecho?",
  options: ["Deducción", "Inducción", "Abducción", "Experimentación"],
  correctAnswer: "Abducción"
},
{
  question: "¿Qué propósito tiene la investigación de los delitos?",
  options: ["Asegurar que el culpable sea castigado y el inocente no", "Determinar el nivel de gravedad de las lesiones"],
  correctAnswer: "Asegurar que el culpable sea castigado y el inocente no"
},
{
  question: "¿Qué disciplina se encarga de interpretar los 'testigos mudos' en la escena del delito?",
  options: ["Criminología", "Criminalística"],
  correctAnswer: "Criminalística"
  },
  {
    question: "¿Cuál es el propósito de las Ciencias Forenses?",
    options: ["Ayudar a la policía y a la justicia a determinar las circunstancias de un delito", "Establecer el castigo para los delincuentes"],
    correctAnswer: "Ayudar a la policía y a la justicia a determinar las circunstancias de un delito"
    },
    {
    question: "¿Qué método se utiliza para pasar de afirmaciones generales a hechos particulares?",
    options: ["Deducción", "Inducción"],
    correctAnswer: "Deducción"
      },
    {
    question: "¿Qué significa el Principio de Intercambio de Locard?",
    options: ["Que siempre se produce un intercambio de materiales en la escena del crimen", "Que el criminal deja una evidencia falsa en la escena"],
    correctAnswer: "Que siempre se produce un intercambio de materiales en la escena del crimen"
        },
     {
    question: "¿Qué es un indicio en el contexto de la investigación criminal?",
    options: ["Un objeto o huella relacionada con un hecho delictivo", "Una prueba definitiva de culpabilidad"],
    correctAnswer: "Un objeto o huella relacionada con un hecho delictivo"
    },
    {
      question: "¿Qué tipo de evidencia es considerada objetiva en una investigación criminal?",
      options: ["Evidencia física", "Evidencia testimonial"],
      correctAnswer: "Evidencia física"
      },
{
    question: "¿Cuál es la principal diferencia entre evidencia y prueba en la investigación criminal?",
    options: ["La prueba permite establecer cómo se desarrolló el hecho delictivo", "La evidencia es subjetiva mientras que la prueba no lo es"],
    correctAnswer: "La prueba permite establecer cómo se desarrolló el hecho delictivo"
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