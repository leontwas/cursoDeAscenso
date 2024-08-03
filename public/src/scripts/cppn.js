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
            {
              question: "El personal policial arriba a la intersección de la Av. Corrientes y Humboldt, donde puede observar que dos vehículos habrían colisionado, ello en base a los daños que presentan ambos rodados. Tras un relevamiento se determina preliminarmente que ambos conductores y la mujer acompañante de uno de ellos presentan a simple vista lesiones diversas. Instantes más tarde acude unidad del S.A.M.E. al lugar. Ante qué tipo de situación se encuentra el personal policial:",
              options: ["Lesiones Art. 94 del C.P.N.", "Una falta de tránsito.", "Un accidente simple."],
              correctAnswer: "Lesiones Art. 94 del C.P.N."
            },
            {
              question: "El personal policial arriba a la intersección de la Av. Corrientes y Humboldt, donde puede observar que dos vehículos habrían colisionado, ello en base a los daños que presentan ambos rodados. Tras un relevamiento superficial, determina preliminarmente que ambos conductores y la mujer acompañante de uno de ellos presentan a simple vista lesiones diversas. Instantes más tarde acude unidad del S.A.M.E. al lugar. Qué autoridad judicial intervendrá en la situación:",
              options: ["El Juzgado Nacional en lo Criminal y Correccional en turno.", "Únicamente el Jefe de Servicio de la Comisaría.", "La Fiscalía Penal, contravencional y de Faltas en turno para ese distrito."],
              correctAnswer: "La Fiscalía Penal, contravencional y de Faltas en turno para ese distrito."
            },
            {
              question: "El personal policial arriba a la intersección de la Av. Corrientes y Humboldt, donde puede observar que dos vehículos habrían colisionado, ello en base a los daños que presentan ambos rodados. Tras un relevamiento superficial, determina preliminarmente que la mujer acompañante de uno de ellos presenta a simple vista lesiones graves. En este caso el funcionario policial deberá solicitar asistencia médica para la persona lesionada, adoptar las medidas necesarias para la preservación del lugar del hecho, lectura de derechos y garantías para con ambos conductores y secuestro de los rodados involucrados en el siniestro.",
              options: ["Verdadero.", "Falso."],
              correctAnswer: "Verdadero."
            },
            {
              question: "El personal policial de guardia en Av. Regimiento Patricios Nº 1.162, es alertado por una vecina sobre una motocicleta que circula por la vereda. El personal policial hace cesar la situación, identifica al conductor y constata que el moto vehículo NO posee patente. En el caso planteado:",
              options: ["Hay una falta y corresponde remitir el motovehículo.", "Es una contravención y corresponde intervenir.", "Es un delito y corresponde el secuestro."],
              correctAnswer: "Hay una falta y corresponde remitir el motovehículo."
            },
            {
              question: "El personal policial debe hacer cesar la conducta contravencional, aplicando la coacción directa prevista en el Art. 19 de la Ley Nº 12 exclusivamente cuando, pese a la advertencia, se persiste en ella y solo con el fin de hacer cesar el daño o peligro que surge de la conducta.",
              options: ["Verdadero.", "Falso."],
              correctAnswer: "Verdadero."
            },
            {
              question: "El personal policial es desplazado a Av. Dorrego y Montenegro. Al arribar se encuentra con un sujeto tendido sobre el asfalto y con su motocicleta a algunos metros del lugar. El joven manifestó haber perdido la estabilidad con motivo de la explosión del neumático delantero. Nos encontramos ante...",
              options: ["Un accidente fortuito sin imputación a terceros que no constituye delito.", "Contravención por conducción riesgosa.", "Lesiones Art. 94 del C.P."],
              correctAnswer: "Un accidente fortuito sin imputación a terceros que no constituye delito."
            },
            {
              question: "El personal policial es desplazado a la intersección de dos calles, donde se encuentra con una persona de sexo masculino tendido sobre el asfalto y con su motocicleta a algunos metros del lugar. El joven manifestó haber perdido la estabilidad con motivo de la explosión del neumático delantero. Corresponde confeccionar:",
              options: ["Acta circunstanciada o constancia en parte de móvil de considerarlo necesario.", "Acta Contravencional.", "Acta de Detención y Secuestro."],
              correctAnswer: "Acta circunstanciada o constancia en parte de móvil de considerarlo necesario."
            },
            {
              question: "El personal policial es desplazado a la intersección de la Avenida General Paz y Juan B. Alberdi por un supuesto accidente de tránsito. Al arribar se encuentra con un joven lesionado tendido sobre el asfalto y su motocicleta a metros del lugar, que está siendo retirada de la calle por testigos ocasionales. El joven manifiesta que fue encerrado por una mala maniobra de parte del conductor de un vehículo cuya patente no recuerda, aunque aporta marca, modelo y color del mismo. En este caso, ante qué hecho nos encontramos:",
              options: ["Delito de Lesiones.", "Falta de tránsito.", "Un mero accidente que no amerita intervención alguna."],
              correctAnswer: "Delito de Lesiones."
            },
            {
              question: "El personal policial es desplazado a la intersección de la Avenida General Paz y Juan B. Alberdi por un supuesto accidente de tránsito. Al arribar se encuentra con un joven lesionado tendido sobre el asfalto y su motocicleta a metros del lugar, que está siendo retirada de la calle por testigos ocasionales. El joven manifiesta que fue encerrado por una mala maniobra de parte del conductor de un vehículo cuya patente no recuerda, aunque aporta marca, modelo y color del mismo. Qué medida urgente toma el personal en primer lugar:",
              options: ["Brindar asistencia médica inmediata a la víctima.", "Lectura de Derechos y Garantías.", "Solicitar testigos de actuación."],
              correctAnswer: "Brindar asistencia médica inmediata a la víctima."
            },
            {
              question: "El personal policial se encuentra frente a un hecho que no constituye falta, contravención o delito. Corresponde:",
              options: ["No dar intervención judicial ni administrativa por fuera de la estructura policial.", "Darle intervención a Dirección General de Administración de Infracciones.", "Realizar una consulta con autoridad Judicial."],
              correctAnswer: "No dar intervención judicial ni administrativa por fuera de la estructura policial."
            },
            {
              question: "El sábado por la mañana personal de la Policía de la Ciudad identifica a una persona en la vía pública, solicita impedimento a comando arrojando resultado positivo: posee una captura vigente a requerimiento del Juzgado de Instrucción Nro. 3 de la Provincia de Rio Negro. El personal policial deberá poner en conocimiento:",
              options: ["Juzgado Nacional en lo Criminal de Rogatorias.", "Al Ministerio Publico Fiscal de la Ciudad de Buenos Aires.", "Al Juzgado Nacional en lo Criminal y Correccional en turno."],
              correctAnswer: "Juzgado Nacional en lo Criminal de Rogatorias."
            },
            {
              question: "En el marco del proceso contravencional, en caso de existir riesgo de entorpecimiento de la investigación, se puede INCOMUNICAR al presunto contraventor.",
              options: ["Falso.", "Verdadero."],
              correctAnswer: "Falso."
            },
            {
              question: "En el procedimiento contravencional, las medidas precautorias son...",
              options: ["Aprehensión, Clausura preventiva, Secuestro de bienes e Inmovilización y depósito de vehículos.", "Aprehensión, Secuestro y Remisión de vehículo.", "Identificación, Clausura, Secuestro e Inmovilización de vehículos."],
              correctAnswer: "Aprehensión, Clausura preventiva, Secuestro de bienes e Inmovilización y depósito de vehículos."
            },
            {
              question: "En el supuesto de hallar un rodado con pedido de secuestro activo abandonado en la vía pública, independientemente de lo que eventualmente disponga la autoridad judicial en consulta telefónica, en principio el personal policial deberá resguardar el vehículo y los potenciales rastros que el mismo pudiera presentar y proceder al secuestro mediante acta correspondiente.",
              options: ["Verdadero.", "Falso."],
              correctAnswer: "Verdadero."
            },
            {
              question: "En la esquina de las Avenidas Boedo y San Juan, un binomio policial es abordado por una joven de aproximadamente 25 años de edad con su rostro cubierto con sangre. La misma manifiesta que minutos antes dos sujetos armados a bordo de una motocicleta la golpearon en la cabeza con un casco de motociclista y le sacaron un teléfono celular, dinero y documentación personal. En el lugar se halla abandonado el casco con el que agredieron a la víctima. Tras ser invitada a radicar la denuncia penal, la joven expresa que no desea perder tiempo en la comisaria y que lo único que desea es regresar a su domicilio. En consecuencia, el personal policial:",
              options: ["Procederá al secuestro del casco. Obtendrá todos los datos personales que le sea posible de la víctima, incluido el domicilio particular. La notificará de su presentación en el asiento de la comisaria jurisdiccional a prestar declaración respecto a lo ocurrido, pues de todos modos se iniciaran actuaciones.", "Le indicará que no tiene otra opción más que acompañarlo a la comisaría, donde el Jefe de servicios determinará los pasos a seguir.", "No adoptará medida alguna ya que es la víctima y es libre de retirarse cuando lo desee. El personal no realiza actuaciones."],
              correctAnswer: "Procederá al secuestro del casco. Obtendrá todos los datos personales que le sea posible de la víctima, incluido el domicilio particular. La notificará de su presentación en el asiento de la comisaria jurisdiccional a prestar declaración respecto a lo ocurrido, pues de todos modos se iniciaran actuaciones."
            },
            {
              question: "En la esquina de las Avenidas Boedo y San Juan, un binomio policial es abordado por una joven de aproximadamente 25 años de edad con su rostro cubierto con sangre. La misma manifiesta que minutos antes dos sujetos armados a bordo de una motocicleta la golpearon en la cabeza con un casco de motociclista y le sacaron un teléfono celular, dinero y documentación personal. En el lugar se halla abandonado el casco con el que agredieron a la víctima. En consecuencia, el personal policial:",
              options: ["Solicita asistencia del SAME para la víctima, cursa vía radial la descripción de los presuntos autores y del rodado en el que se desplazan, procede al secuestro del casco abandonado en el lugar ante dos testigos hábiles, e invita a la víctima a prestar declaración testimonial en sede policial.", "Invita a la víctima a subir al móvil policial identificable para recorrer las inmediaciones en busca de los autores, dado que al ser reciente el hecho probablemente aún se encuentren en la zona.", "Lleva adelante consulta con la Fiscalía Penal, contravencional y faltas en turno para solicitar directivas."],
              correctAnswer: "Solicita asistencia del SAME para la víctima, cursa vía radial la descripción de los presuntos autores y del rodado en el que se desplazan, procede al secuestro del casco abandonado en el lugar ante dos testigos hábiles, e invita a la víctima a prestar declaración testimonial en sede policial."
            },
            {
              question: "En materia de faltas de tránsito, el faltante de partes de carrocería de un rodado es causal de remisión.",
              options: ["Verdadero.", "Falso."],
              correctAnswer: "Verdadero."
            },
            {
                question: "La actuación policial referente a las faltas, se reglamenta en las siguientes normativas: Ley 451. Régimen de Faltas, Ley 1.217. Procedimiento de Faltas, Ley 2.148. Código de Tránsito CABA y Ley 5688. Sistema Integral de Seguridad Pública.",
                options: ["Verdadero.", "Falso."],
                correctAnswer: "Verdadero."
            },
            {
                question: "La Dirección General de Administración de Infracciones tiene competencia en el tratamiento de las contravenciones que ocurran en el marco de Código Contravencional de la Ciudad Autónoma de Buenos Aires.",
                options: ["Falso.", "Verdadero."],
                correctAnswer: "Falso."
            },
            {
                question: "Ocurre una colisión de un automóvil particular, tripulado solamente por su conductor, y una motocicleta en la que se trasladaban el conductor y una acompañante femenino quien resulta ser la única persona lesionada con politraumatismos. Interviene móvil policial y se labra un sumario judicial por lesiones Art. 94 del CP. ¿Quién resulta imputado?",
                options: ["Ambos conductores.", "El conductor del moto vehículo.", "El conductor del automóvil."],
                correctAnswer: "Ambos conductores."
            },
            {
                question: "Personal policial aprehende a dos sujetos que, en inmediaciones de una escuela primaria, fumaban abiertamente un cigarrillo de marihuana. Se secuestró un cigarrillo de armado casero a uno de los individuos y cuatro envoltorios de nylon al otro sujeto que lo acompañaba, ambos con la misma sustancia de aparente origen vegetal compactado cuya apariencia y aroma hace presumir que se trata de marihuana. En este caso corresponde dar intervención a...",
                options: ["La Fiscalía en lo Criminal y Correccional Federal que por turno corresponda.", "La Fiscalía Penal, Contravencional y de Faltas de CABA en turno que por competencia territorial corresponda.", "El Juzgado en lo Criminal y Correccional Federal que por tuno corresponda."],
                correctAnswer: "La Fiscalía Penal, Contravencional y de Faltas de CABA en turno que por competencia territorial corresponda."
            },
            {
                question: "Personal policial arriba a la intersección de Av. Olazabal y Alvarez Thomas, donde observa un hombre parado frente a un ómnibus aplicando golpes con sus puños al parabrisas de la unidad. A simple vista se observan los vidrios astillados y rajados. Testigos en el lugar refieren que esta persona estaba alterada pues el chofer no abría la puerta de acceso. ¿Debo realizar actas? ¿Cuáles?",
                options: ["Actas de Detención, secuestro y declaraciones de los testigos de actuación.", "Acta Circunstanciada.", "Acta Contravencional."],
                correctAnswer: "Actas de Detención, secuestro y declaraciones de los testigos de actuación."
            },
            {
                question: "Personal policial arriba a la intersección de Avenida Entre Ríos y Av. Belgrano, donde observa en la esquina dos vehículos colisionados. Los conductores se encuentran intercambiando sus datos personales. Se determina que NO hay persona alguna lesionada, no se solicita asistencia médica y no concurre al lugar el SAME. En el caso el personal considera registrar las actuaciones, por lo tanto, corresponde confeccionar:",
                options: ["Acta de Intervención ante Siniestro Vial sin Lesionados, o Acta Circunstanciada o Constancia en parte del móvil, de considerarse necesario.", "Acta de Detención y Secuestro.", "Acta Contravencional."],
                correctAnswer: "Acta de Intervención ante Siniestro Vial sin Lesionados, o Acta Circunstanciada o Constancia en parte del móvil, de considerarse necesario."
            },
            {
                question: "Reglas de Detención -Art. 164 CPPCABA- ¿Al momento de la detención se le hará saber a la persona el derecho de comunicarse con una persona de su confianza y el lugar donde será conducido?",
                options: ["Verdadero.", "Falso."],
                correctAnswer: "Verdadero."
            },
            {
                question: "Reglas de Detención -Art. 164 CPPCABA- Al momento de la aprehensión, se labrará un acta que será firmada por el/la aprehendido/a en la que entre otras circunstancias se le hará saber:",
                options: ["Los cargos que se le formulen y el lugar donde será conducido.", "Los datos del jefe de servicio y el comisario de la dependencia.", "La totalidad de elementos de prueba que existen en su contra."],
                correctAnswer: "Los cargos que se le formulen y el lugar donde será conducido."
            },
            {
                question: "Según el Código Procesal Penal de la CABA, la policía puede dar Inicio actuaciones por:",
                options: ["Prevención policial, denuncia o flagrancia.", "Querella, denuncia o llamado telefónico.", "Denuncia en línea, flagrancia o investigación fiscal."],
                correctAnswer: "Prevención policial, denuncia o flagrancia."
            },
            {
                question: "Son algunos de los contenidos y Formalidades necesarias del acta de Detención:",
                options: ["Lugar, fecha y hora. El nombre y apellido de las personas que intervengan. La firma, previa lectura, de todos los intervinientes.", "El turno de guardia al que pertenece el policía.", "Las manifestaciones de los testigos en el lugar."],
                correctAnswer: "Lugar, fecha y hora. El nombre y apellido de las personas que intervengan. La firma, previa lectura, de todos los intervinientes."
            },
            {
                question: "Son delitos de exclusiva competencia del Juez Federal:",
                options: ["Intimidación pública, Ley Nº 22.362 (Marcas y Designaciones) y Ley Nº 11 .723 (Propiedad Intelectual) sólo en concurso con Ley 22.362.", "Robo, Hurto y lesiones en riña.", "Hallazgo Automotor, uso indebido del espacio público y daño."],
                correctAnswer: "Intimidación pública, Ley Nº 22.362 (Marcas y Designaciones) y Ley Nº 11 .723 (Propiedad Intelectual) sólo en concurso con Ley 22.362."
            },
            {
                question: "Son delitos NO transferidos y continúa la competencia a cargo Poder Judicial de la Nación:",
                options: ["Homicidio, robo y encubrimiento.", "Hallazgo automotor, amenaza simple y tenencia, portación (Ilegítima) y provisión de Armas de Fuego.", "Abandono de persona, infracción Ley 23.737 y ruidos molestos."],
                correctAnswer: "Homicidio, robo y encubrimiento."
            },
            {
                question: "Son delitos NO transferidos:",
                options: ["Abuso sexual, hurto y extorsión.", "Robo, amenaza simple, hostigamiento.", "Portación ilegal de arma de fuego de uso civil condicional, infracción Ley Nº 23.737 y ruidos molestos."],
                correctAnswer: "Abuso sexual, hurto y extorsión."
            },
            {
                question: "Son delitos transferidos a la justicia de la CABA:",
                options: ["Amenazas simples, atentado, resistencia y desobediencia a la autoridad (contra un funcionario público de la CABA), lesiones leves, graves y gravísimas.", "Robo, hurto, extorsión.", "Defraudación/estafa, y abuso sexual."],
                correctAnswer: "Amenazas simples, atentado, resistencia y desobediencia a la autoridad (contra un funcionario público de la CABA), lesiones leves, graves y gravísimas."
            },
            {
                question: "Son delitos transferidos a la justicia de la CABA:",
                options: ["Atentado, resistencia y desobediencia contra la autoridad (cometidos por o contra funcionarios de C.A.B.A.), lesiones en riña y usurpación.", "Amenazas coactivas, privación ilegítima de la libertad y Ley 11.723 (propiedad intelectual).", "Robo, encubrimiento y estafa."],
                correctAnswer: "Atentado, resistencia y desobediencia contra la autoridad (cometidos por o contra funcionarios de C.A.B.A.), lesiones en riña y usurpación."
            },
            {
                question: "Testigos de actuación. ¿Por regla general, deben prestar declaración testimonial en sede policial?",
                options: ["No, habitualmente se les recibe declaración testimonial en formulario pre impreso en el lugar del hecho.", "Eso dependerá de las directivas de la autoridad judicial en turno al momento del hecho.", "Sí, porque en sede policial hay mayores comodidades para llevar adelante la diligencia."],
                correctAnswer: "No, habitualmente se les recibe declaración testimonial en formulario pre impreso en el lugar del hecho."
            },
            {
                question: "Un efectivo inicia su servicio tras un importante temporal, al arribar a su objetivo habitual observa que una de las ramas de un árbol de gran envergadura cayó sobre un vehículo estacionado, causando el estallido del parabrisas. El efectivo debe:",
                options: [
                  "Resguardar el rodado para evitar la sustracción de efectos de su habitáculo hasta el arribo del propietario, entre otras medidas. Dejará constancia de su intervención mediante Acta circunstanciada o constancia en parte de móvil.",
                  "Comunicar el hecho al MPF para recibir directivas por el delito de daño.",
                  "Alejarse del lugar antes de que regrese el propietario."
                ],
                correctAnswer: "Resguardar el rodado para evitar la sustracción de efectos de su habitáculo hasta el arribo del propietario, entre otras medidas. Dejará constancia de su intervención mediante Acta circunstanciada o constancia en parte de móvil."
              },
              {
                question: "Un funcionario policial ante una flagrante contravención por portación de un arma no convencional (una manopla metálica con una navaja incrustada) debe labrar el acta contravencional y secuestro del elemento correspondientes.",
                options: [
                  "Verdadero",
                  "Falso"
                ],
                correctAnswer: "Verdadero"
              },
              {
                question: "Un funcionario policial constata durante su servicio que una persona instaló un puesto precario sobre la vereda para vender frutas y verduras. Mientras se acerca para abordarlo, observa que en la esquina hay un local que comercializa esa misma clase de productos alimenticios. En este caso, ante qué hecho nos encontramos:",
                options: [
                  "Una contravención",
                  "Un Delito Federal",
                  "Un delito Criminal y Correccional no transferido"
                ],
                correctAnswer: "Una contravención"
              },
              {
                question: "Un funcionario policial constata durante su servicio que una persona instaló un puesto sobre la vereda para vender tortillas y chorizos. Qué medida/s debe adoptar el personal policial:",
                options: [
                  "Labrado de Acta Contravencional y secuestro de mercadería.",
                  "Lectura de Derechos y Garantías.",
                  "No adopta ninguna medida."
                ],
                correctAnswer: "Labrado de Acta Contravencional y secuestro de mercadería."
              },
              {
                question: "Un vecino señala a un efectivo una falta de tránsito que tiene lugar a pocos metros de su ubicación y reclama que intervenga. En consecuencia, el funcionario policial...",
                options: [
                  "Hace cesar la acción y labra la infracción mediante la aplicación habilitada en su teléfono reglamentario o, en su defecto, en un acta de constatación de falta.",
                  "Le explica que eso es competencia del Cuerpo de Agentes de Tránsito de la C.A.B.A. y que lamentablemente no puede hacer nada al respecto.",
                  "Informa a Comando para que comisionen un agente de tránsito, dado que su función es de prevención de delitos y no puede descuidar su objetivo."
                ],
                correctAnswer: "Hace cesar la acción y labra la infracción mediante la aplicación habilitada en su teléfono reglamentario o, en su defecto, en un acta de constatación de falta."
              },
              {
                question: "Una comisión policial arriba a la intersección de Avenida Corrientes y Humboldt, donde observa en la esquina dos vehículos colisionados. Los conductores se encuentran intercambiando sus datos personales. Preliminarmente se determina que NO hay persona alguna lesionada. No concurre al lugar el SAME. En el caso planteado:",
                options: [
                  "Es una actuación que solo requiere la asistencia policial de ser solicitada o desplazado el personal al lugar.",
                  "Hay Delito y corresponde intervenir.",
                  "Es una contravención y corresponde intervenir."
                ],
                correctAnswer: "Es una actuación que solo requiere la asistencia policial de ser solicitada o desplazado el personal al lugar."
              },
              {
                question: "A partir de la publicación de la Guía de Recomendaciones a tener en cuenta respecto del material asignado por la División Armamento, Munición y Explosivos, las Dependencias pertenecientes a la Superintendencia de Seguridad Comunal deberán realizar el 'Control de Existencia y Estado de Conservación de los Elementos asignados con Cargo Individual al Personal'.",
                options: [
                  "VERDADERO",
                  "FALSO"
                ],
                correctAnswer: "FALSO"
              },
              {
                question: "Acorde al contenido del artículo 227 del C.P.P.N., el personal policial podrá ingresar a un domicilio particular sin previa orden judicial cuando:",
                options: [
                  "Se proceda a resguardar y preservar toda la evidencia que pueda surgir de un hecho.",
                  "Se escuchen voces anunciando que allí se está cometiendo un delito o pidan socorro.",
                  "Ambas respuestas son correctas."
                ],
                correctAnswer: "Se escuchen voces anunciando que allí se está cometiendo un delito o pidan socorro."
              },
              {
                question: "Al adecuar el oficial de policía su posición corporal a la postura recomendada en aquellos casos de hallarse en una posición estática, poner los pies separados a una distancia equivalente a un ancho de hombros, propicia un desplazamiento normal, además de lateralizar levemente el flanco en el cual se porta el arma de fuego, facilitando la adopción de una posición defensiva ante una eventual agresión física.",
                options: [
                  "VERDADERO",
                  "FALSO"
                ],
                correctAnswer: "FALSO"
              },
              {
                question: "Al adecuar el oficial de policía su posición corporal a la postura recomendada en aquellos casos de hallarse en una posición estática, poner el pie de la mano hábil un poco retrasado, alineando su punta con el talón del otro pie, permite distribuir el peso del cuerpo entre ambas piernas, iniciar un desplazamiento a paso gentil o emprender una carrera corta.",
                options: [
                  "VERDADERO",
                  "FALSO"
                ],
                correctAnswer: "FALSO"
              },
              {
                question: "Al cargar las actuaciones por desaparición o extravió de un menor en el sistema GAP debemos primeramente:",
                options: [
                  "Caratular como Averiguación Ilícito-Solicitud de Paradero-Ley Nº 114 y el lugar del hecho será el último domicilio donde fue visto.",
                  "Caratular como Averiguación Ilícito-Búsqueda de Personas y el lugar del hecho será el último lugar donde fue visto.",
                  "Caratular como Averiguación Ilícito-Solicitud de Paradero-Ley Nº 114 y el lugar del hecho será el último domicilio donde fue visto."
                ],
                correctAnswer: "Caratular como Averiguación Ilícito-Búsqueda de Personas y el lugar del hecho será el último lugar donde fue visto."
              },
              {
                question: "Al cargar las actuaciones por desaparición o extravío de una persona en el sistema GAP debemos primeramente:",
                options: [
                  "Caratularlo como Diligencia Judicial-Búsqueda de Personas, y el lugar del hecho será el último lugar donde fue vista.",
                  "Caratularlo como Averiguación Ilícito-Búsqueda de Persona y el lugar del hecho será el último domicilio donde fue vista.",
                  "Caratularlo como Averiguación Ilícito-Búsqueda de Personas, y el lugar del hecho será el último lugar donde fue vista."
                ],
                correctAnswer: "Caratularlo como Averiguación Ilícito-Búsqueda de Personas, y el lugar del hecho será el último lugar donde fue vista."
              },
              {
                question: "Ante la presentación en la vía pública de un damnificado o tercero denunciando un hecho que no requiere intervención policial inmediata, el efectivo debe registrar las circunstancias del mismo y los datos personales del denunciante, pudiendo:",
                options: [
                  "Con el consentimiento de la persona, solicitar un móvil jurisdiccional que lo acompañe a la dependencia para formalizar la denuncia.",
                  "Iniciar actuaciones en la dependencia con la información obtenida.",
                  "Ambas respuestas son correctas."
                ],
                correctAnswer: "Ambas respuestas son correctas."
              },
              {
                question: "Ante una situación de flagrancia el efectivo policial registrara las circunstancias del hecho y los datos personales del denunciante, procediendo al traslado del mismo de manera inmediata hasta el asiento de la Dependencia a los fines de radicar su denuncia.",
                options: [
                  "VERDADERO",
                  "FALSO"
                ],
                correctAnswer: "FALSO"
              },
              {
                question: "Cuando se logre la localización de la persona, la dependencia en donde fue hallada debe inmediatamente trasladarla hasta el asiento de la Dependencia donde se iniciaron las actuaciones por Búsqueda de Personas, a los fines de cumplimentar con las diligencias dispuestas en las mismas.",
                options: [
                  "VERDADERO",
                  "FALSO"
                ],
                correctAnswer: "FALSO"
              },
              {
                question: "De constatarse una anomalía, desperfecto, rotura o faltante de pieza, en el armamento provisto, los armeros de Dependencias, deberán realizar las comunicaciones de rigor ante la División Armamento, Munición y Explosivos, a los efectos de:",
                options: [
                  "solicitar la reposición del arma; haciendo constar novedad que presenta, acompañando exposición del causante e informe técnico correspondiente.",
                  "informar la novedad que presenta, circunstancias que la originaron, acompañando informe técnico y exposición del efectivo, todo ello con el fin de solicitar la reposición del armamento.",
                  "de solicitar la reposición del arma; llevar adelante las pericias correspondientes, acompañando exposición del causante e informe técnico correspondiente."
                ],
                correctAnswer: "informar la novedad que presenta, circunstancias que la originaron, acompañando informe técnico y exposición del efectivo, todo ello con el fin de solicitar la reposición del armamento."
              },
              {
                question: "Dentro de los delitos que comprende el procedimiento de Flagrancia, acorde al artículo 353bis del Código Procesal Penal de Nación, se encuentran:",
                options: [
                  "Delitos dolosos cuya pena máxima no supere los 15 años de prisión.",
                  "Concurso de delitos que no supere los 20 años de prisión.",
                  "Ambas respuestas son correctas."
                ],
                correctAnswer: "Ambas respuestas son correctas."
              },
              {
                question: "Efectuada consulta con la Fiscalía, y en caso de corresponder la aplicación del procedimiento de flagrancia, se deberá dar inmediata noticia al Juzgado en turno quien dispondrá:",
                options: [
                  "Emitirá directivas relacionadas con el sumario y el detenido de acuerdo al procedimiento ordinario.",
                  "La fecha y hora de audiencia inicial de flagrancia, la cual deberá ser notificada a la Fiscalía y a la Defensoría en Turno.",
                  "Ambas respuestas son incorrectas."
                ],
                correctAnswer: "La fecha y hora de audiencia inicial de flagrancia, la cual deberá ser notificada a la Fiscalía y a la Defensoría en Turno."
              },
              {
                question: "El fallo del Tribunal Oral en lo Criminal Nº9 \"Weber, Javier Claudio s/homicidio calificado por alevosía\" del año 2012, menciona por primera vez al Femicidio como:",
                options: [
                  "La muerte violenta de mujeres por razones de género, ya sea que tenga lugar dentro de la familia, unidad doméstica o en cualquier otra relación interpersonal.",
                  "La muerte de una mujer o de una persona con identidad femenina, ejecutada por un varón en razón de género.",
                  "La muerte de una mujer o de una persona con identidad femenina, ejecutada por razones de, género."
                ],
                correctAnswer: "La muerte de una mujer o de una persona con identidad femenina, ejecutada por un varón en razón de género."
              },
              {
                question: "El médico legista en el lugar del hallazgo de femicidio, deberá efectuar la descripción de la posición del cadáver, posición de la cabeza y miembros, su entorno, describir presencia o ausencia de ligaduras en manos y pies, mordazas, bolsas plásticas en cabeza, otros, etc.",
                options: ["VERDADERO", "FALSO"],
                correctAnswer: "VERDADERO"
              },
              {
                question: "El oficial de policía durante su servicio, mientras se encuentre estático, debe adecuar su posición corporal de la siguiente manera: Pies separados a una distancia equivalente a un ancho de hombros; pie de la mano hábil un poco retrasado, alineando su punta con el talón del otro pie; antebrazos apoyados ligeramente sobre los portaobjetos al frente del correaje y ambas manos a la altura de la hebilla del cinturón posando la mano que asiste sobre el dorso de la mano hábil.",
                options: ["VERDADERO", "FALSO"],
                correctAnswer: "VERDADERO"
              },
              {
                question: "El personal policial procederá al secuestro de elementos con o sin orden judicial en aquellos casos que estos provengan o estén relacionadas con un delito, comunicando de inmediato lo actuado a la autoridad judicial correspondiente.",
                options: ["VERDADERO", "FALSO"],
                correctAnswer: "VERDADERO"
              },
              {
                question: "El personal policial que deba hacer entrega del armamento reglamentario por suspensión de empleo, deberá concurrir a hacer entrega del mismo ante la División Armamento, Munición y Explosivos o a retirarlo luego de finalizada la sanción correctamente uniformado.",
                options: ["VERDADERO", "FALSO"],
                correctAnswer: "FALSO"
              },
              {
                question: "El personal policial que haya llevado a cabo el secuestro de elementos relacionados con un delito procederá a confeccionar acta de secuestro y planilla de cadena de custodia, y en el caso de tratarse de un elemento vinculado con un expediente constancia solo confeccionara el acta de secuestro.",
                options: ["VERDADERO", "FALSO"],
                correctAnswer: "FALSO"
              },
              {
                question: "El primer interventor debe proceder a levantar y acondicionar del lugar del hecho aquellas evidencias que puedan estar adheridas o fijadas a superficies como ser manchas de sangre en la vía pública.",
                options: ["VERDADERO", "FALSO"],
                correctAnswer: "FALSO"
              },
              {
                question: "El Titular de una Dependencia de Policía de la Ciudad, al tomar conocimiento de un hecho de Violencia Familiar o de género, en la cual resulte denunciado personal a sus órdenes, y de acuerdo a la gravedad o especiales circunstancias del caso, deberá retener de forma permanente el armamento asignado al efectivo, elevándolo a la División de Armamento, Munición y Explosivos para su custodia.",
                options: ["VERDADERO", "FALSO"],
                correctAnswer: "FALSO"
              },
              {
                question: "En aquellos casos de delitos de acción pública, se pondrá al denunciante en conocimiento del contenido del artículo 72 del Código Penal de la Nación, debiéndose plasmar en el texto de la denuncia su decisión expresa de \"INSTAR\" o \"NO\" a la acción penal.",
                options: ["VERDADERO", "FALSO"],
                correctAnswer: "FALSO"
              },
              {
                question: "En aquellos casos de llevarse a cabo el desarme preventivo de un efectivo acorde a lo estipulado en el Protocolo de Actuación sobre Violencia Familiar o de Género en el que se encuentre involucrado personal policial, y el resguardo se deba realizar en la División Armamento, Munición y Explosivos, el Jefe de Dependencia del efectivo a desarmar, deberá indicar:",
                options: [
                  "Cronograma de días y horarios laborales, teléfono reglamentario del Jefe de Dependencia, teléfono reglamentario del Jefe de Servicio, Mail de la Dependencia y teléfono del Efectivo.",
                  "remitir Acta de desarme, Comunicación oficial que deberá contener a modo enunciativo que el funcionario se encuentra involucrado en una problemática familiar, el juzgado interviniente, carátula y número de causa.",
                  "Ambas son incorrectas."
                ],
                correctAnswer: "Cronograma de días y horarios laborales, teléfono reglamentario del Jefe de Dependencia, teléfono reglamentario del Jefe de Servicio, Mail de la Dependencia y teléfono del Efectivo."
              },
              {
                question: "En aquellos casos donde se presenten a la Dependencia, tanto la víctima como el agresor, se procederá a separarlas y entrevistarlas en forma individual, evitando el contacto visual, ya que la víctima puede sentirse coaccionada o amenazada, quedando expresamente prohibida la mediación negociación.",
                options: ["VERDADERO", "FALSO"],
                correctAnswer: "VERDADERO"
              },
              {
                question: "En aquellos casos en que las niñas, niños o adolescentes no se encuentren acompañados por un adulto responsable o sean los progenitores los presuntos autores, se deberá dar inmediata intervención:",
                options: [
                  "a la Guardia Permanente de Abogados dependiente de la Fiscalía Especializada en Delitos contra la Violencia de Género e Intrafamiliar del Gobierno de la Ciudad Autónoma de Buenos Aires.",
                  "a la Guardia Permanente de Abogados dependiente del Consejo de los Derechos de Niñas, Niños y Adolescentes del Gobierno de la Ciudad Autónoma de Buenos Aires.",
                  "Ambas respuestas son correctas."
                ],
                correctAnswer: "a la Guardia Permanente de Abogados dependiente del Consejo de los Derechos de Niñas, Niños y Adolescentes del Gobierno de la Ciudad Autónoma de Buenos Aires."
              },
              {
                question: "En caso de presentarse a la Dependencia una persona con la finalidad de radicar una denuncia sobre un hecho ocurrido en otra jurisdicción, será interiorizada de los pasos a seguir y de la ubicación de la Dependencia en la cual deberá efectuar la misma.",
                options: ["VERDADERO", "FALSO"],
                correctAnswer: "FALSO"
              },
              {
                question: "En el acta de prevención confeccionada en el lugar del hallazgo de un femicidio, se deberá dejar debida constancia de las manifestaciones verbales de manera literal efectuadas por parte del presunto autor, en respuesta a las preguntas formuladas por parte del personal interventor relacionadas con las circunstancias del hecho.",
                options: ["VERDADERO", "FALSO"],
                correctAnswer: "FALSO"
              },
              {
                question: "En el caso de proceder al secuestro de cocaína, pasta base o marihuana, dependiendo de su volumen y características, deben resguardarse en:",
                options: [
                  "contenedores adecuados debidamente rotulados y numerados de ser posible concretando el test orientativo y pesaje.",
                  "bolsas de plástico con cierre hermético de manera que se pueda visualizar el material, debidamente cerrada y rotulada.",
                  "en una caja de cartón adecuada de manera que queden inmovilizados, debidamente cerrada y rotulada."
                ],
                correctAnswer: "contenedores adecuados debidamente rotulados y numerados de ser posible concretando el test orientativo y pesaje."
              },
              {
                question: "En el lugar del hallazgo de un femicidio, el médico legista no deberá manipular ni desvestir al cadáver, esto sólo podrá ser realizado por los peritos de la Superintendencia de Policía Científica previo haber fotografiado el cadáver y detallado pormenorizadamente el estado y posición del mismo en el lugar al momento del hallazgo.",
                options: ["VERDADERO", "FALSO"],
                correctAnswer: "FALSO"
              },
              {
                question: "En el procedimiento de flagrancia, se le recepcionara declaración testimonial a la víctima, y en la misma acta se la notificara:",
                options: [
                  "De su derecho de asistir a todas las audiencias orales vinculadas con el procedimiento de flagrancia.",
                  "De su obligación de concurrir a todas las audiencias orales vinculadas con el procedimiento de flagrancia.",
                  "Ambas respuestas son incorrectas."
                ],
                correctAnswer: "De su derecho de asistir a todas las audiencias orales vinculadas con el procedimiento de flagrancia."
              },
              {
                question: "En hechos relacionados con violencia familiar o de género, donde se encuentre involucrado personal policial, la junta médica determinara la aptitud psicológica del involucrado para el servicio policial, como así también en su informe psicodiagnóstico indicara si el causante se encuentra en condiciones psicofísicas de portar armamento.",
                options: ["VERDADERO", "FALSO"],
                correctAnswer: "VERDADERO"
              },
              {
                question: "En las actuaciones por Búsqueda de Niños, Niñas y Adolescentes, la comunicación ante el Consejo de Derechos de Niños, Niñas y Adolescentes se realizara mediante \"Nota de Comunicación Búsqueda de Personas (Altas o Bajas).",
                options: ["VERDADERO", "FALSO"],
                correctAnswer: "FALSO"
              },
              {
                question: "En los casos de sufrir la sustracción o perdida, del armamento, cargadores o chalecos de protección balística, se deberá informar mediante nota que contenga la numeración correcta y cantidad de elementos involucrados, como así también todo otro dato de interés de manera inmediata a la Agencia Nacional de Materiales Controlados (ANMac).",
                options: ["VERDADERO", "FALSO"],
                correctAnswer: "FALSO"
              },
                {
    question: "En los casos que el niño, niña o adolescente fuera hallado, por la dependencia policial donde se inició la búsqueda se procede a solicitar el 'SIN EFECTO' del paradero, y:",
    options: [
      "Dejar constancia de las circunstancias del mismo, de su estado físico y de salud, y de ser necesario, se convocara al SAME, efectuando inmediata comunicación al Magistrado Interventor y a la Guardia Jurídica de Abogados del C.D.N.N. y A.",
      "Deberá iniciar actuaciones 'HALLAZGO DE PERSONA- LEY 114'.",
      "Ambas respuestas son correctas."
    ],
    correctAnswer: "Ambas respuestas son correctas."
  },
  {
    question: "En los delitos de Desobediencia y Atentado y/o Resistencia contra la autoridad (artículos 237 y siguientes del Código Penal) por los cuales se aplique el procedimiento de flagrancia, deberá efectuarse consulta inmediata con la Fiscalía Nacional en lo Criminal y Correccional en Turno.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "VERDADERO"
  },
  {
    question: "En los hechos de violencia de género, previo a la detención del agresor, se deberá consultar a la víctima sobre su parecer con relación a la medida que se adoptará, con el fin de contar con su correspondiente autorización y así llevar adelante la misma.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "FALSO"
  },
  {
    question: "Encontrándose en su horario de servicio el personal policial, ante una situación de violencia en la vía pública, tiene el deber de dar aviso al servicio de atención telefónica de emergencia.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "VERDADERO"
  },
  {
    question: "Existe cierto consenso al momento de definir el concepto de femicidio, como:",
    options: [
      "La muerte violenta de mujeres por razones de género.",
      "Los homicidios de personas con identidad de género femenino o mujeres que ocurren por razón de género.",
      "Los homicidios de personas con identidad de género femenino que ocurren por razón de género."
    ],
    correctAnswer: "La muerte violenta de mujeres por razones de género."
  },
  {
    question: "Existiendo en la Dependencia Cabinas Digitales del Sistema Único de Denuncias (SUD), el personal policial ante la presencia de una persona que desea realizar una denuncia y que manifieste su expresa voluntad de ser atendido por personal policial, en primera instancia derivará al mismo a las cabinas de denuncia toda vez que la presente guía así lo establece.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "VERDADERO"
  },
  {
    question: "Guía de Actuación en caso de Siniestros Viales: Dentro de las diligencias a llevar a cabo en caso de un siniestro vial se deberá comunicar la situación al Comando para:",
    options: [
      "Gestionar asistencia en el caso de la existencia de personas lesionadas.",
      "Para obtener apoyo para encauzar el tránsito, delimitar la zona y/o para obtener cualquier otro tipo de recursos que puedan ser necesarios.",
      "Ambas respuestas son correctas."
    ],
    correctAnswer: "Ambas respuestas son correctas."
  },
  {
    question: "Guía de Actuación en caso de Siniestros Viales: En aquellos hechos con personas lesionadas, si los vehículos están provocando una obstrucción o bloqueo de la calzada se procederá a remover los vehículos para facilitar la circulación del tránsito.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "VERDADERO"
  },
  {
    question: "Guía de Actuación en caso de Siniestros Viales: En caso de personas lesionadas debe comunicarse al Juzgado Nacional en lo Criminal y Correccional en Turno, desde el lugar del hecho y proceder para con los imputados a confeccionar acta de detención, lectura de derechos y garantías.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "VERDADERO"
  },
  {
    question: "Guía de Actuación en caso de Siniestros Viales: Evaluación del Accidente: Se procederá a registrar datos sobre la situación del hecho por medio de testigos con respecto a la ubicación y daños de los vehículos involucrados, condición y estado de las personas involucradas, descripción del lugar de los hechos, existencia y estado de semáforos, domos, cámaras de seguridad públicas y privadas, señalizaciones, elementos que pudieran haber obstruido la visión, etc.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "VERDADERO"
  },
  {
    question: "Guía de Actuación en caso de Siniestros Viales: Según el artículo 64 de la Ley 24449 de Tránsito y Seguridad Vial de la Nación, Se considera accidente de tránsito a:",
    options: [
      "Todo hecho que produzca daño en personas o cosas como consecuencia de la circulación.",
      "es un suceso que ocurre generalmente cuando un vehículo colisiona contra otro vehículo, peatón, animal o escombros del camino.",
      "Evento generalmente involuntario, generado al menos por un vehículo en movimiento que causa daño a personas y bienes involucrados."
    ],
    correctAnswer: "Todo hecho que produzca daño en personas o cosas como consecuencia de la circulación."
  },
  {
    question: "Guía de Aprehensión, custodia y egreso de detenidos: Al momento de confeccionar el acta de detención, lectura de derechos y garantías sobre la persona detenida se deberá realizar:",
    options: [
      "En presencia de dos testigos hábiles mayores de 16 años, siendo recomendable que estos no sean los testigos presenciales del hecho.",
      "En presencia de dos testigos los cuales pueden ser menores de 18 años, mientras no se encuentren dementes o en estado de inconsciencia al momento de ser requerida su participación.",
      "En presencia de dos testigos hábiles mayores de 18 años, siendo recomendable que estos no sean los testigos presenciales del hecho."
    ],
    correctAnswer: "En presencia de dos testigos hábiles mayores de 18 años, siendo recomendable que estos no sean los testigos presenciales del hecho."
  },
  {
    question: "Guía de Aprehensión, custodia y egreso de detenidos: En caso de que la persona aprehendida estuviera imposibilitada de comprender los contenidos del acta (estado de inconsciencia, ebriedad notoria, desconocimiento del idioma, intoxicación por estupefacientes o psicofármacos, etc.) se deberá labrar de igual manera Acta de Detención, lectura de derechos y garantías en presencia de dos testigos hábiles.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "VERDADERO"
  },
  {
    question: "Guía de Aprehensión, custodia y egreso de detenidos: Esta Guía incluye los temas específicos vinculados con el traslado de detenidos, con el régimen de visitas, con la custodia en Centros de Salud, y contempla lo relacionado con el régimen y gestión interna de las Alcaidías o de otros centros de Detención.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "VERDADERO"
  },
  {
    question: "Guía de Aprehensión, custodia y egreso de detenidos: Este procedimiento es de aplicación para todo el personal policial relacionado con:",
    options: [
      "El derecho que poseen los detenidos a recibir visitas y prevenir el ingreso de elementos que puedan alterar la seguridad.",
      "El traslado y custodia de un detenido que se encuentre bajo el ámbito de responsabilidad de la Policía de la Ciudad.",
      "El proceso de personas detenidas, desde su detención hasta su remisión o liberación."
    ],
    correctAnswer: "El proceso de personas detenidas, desde su detención hasta su remisión o liberación."
  },
  {
    question: "Guía de Aprehensión, custodia y egreso de detenidos: Los Menores de dieciocho (18) años, son punibles en caso de cometer una contravención, con excepción de la comisión de contravenciones de tránsito, en cuyo caso son inimputables.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "VERDADERO"
  },
  {
    question: "Guía de Control Vehicular y Poblacional: Cuando se proceda al control de un motovehículo se solicitará a sus ocupantes:",
    options: [
      "Que detengan la marcha del vehículo, desciendan de la misma y aporten la documentación propia y del vehículo.",
      "Que detengan la marcha del vehículo, se quiten los cascos y aporten la documentación propia y del vehículo.",
      "Que detengan la marcha del vehículo, se quiten los cascos, desciendan de la misma, y aporten la documentación propia y del vehículo."
    ],
    correctAnswer: "Que detengan la marcha del vehículo, se quiten los cascos, desciendan de la misma, y aporten la documentación propia y del vehículo."
  },
  {
    question: "Guía de Control Vehicular y Poblacional: Este procedimiento incluye actividades relacionadas con la elaboración de programas de control vehicular, determinación de frecuencias, lugares, zonas de riesgos, horarios, etc.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "VERDADERO"
  },
  {
    question: "Guía de Control Vehicular y Poblacional: La Orden de Servicio en su contenido no contempla la participación de otros organismos (Ejemplo: Tránsito, CNRT, Perito verificador, otras fuerzas de seguridad, etc.), los cuales de ser necesarios se solicitarán por la Dependencia interviniente.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "VERDADERO"
  },
  {
    question: "Guía de Control Vehicular y Poblacional: La Orden que dispone la implementación del Servicio contiene:",
    options: [
      "Lugar del control, horario de inicio y objetivo del control.",
      "Lugar del control, horario de inicio y finalización, objetivo del control, recursos necesarios y aspectos generales para su cumplimiento.",
      "Lugar del control, horario de inicio y finalización, recursos necesarios y aspectos generales para su cumplimiento."
    ],
    correctAnswer: "Lugar del control, horario de inicio y finalización, objetivo del control, recursos necesarios y aspectos generales para su cumplimiento."
  },
  {
    question: "En los casos que el niño, niña o adolescente fuera hallado, por la dependencia policial donde se inició la búsqueda se procede a solicitar el 'SIN EFECTO' del paradero, y:",
    options: [
      "Dejar constancia de las circunstancias del mismo, de su estado físico y de salud, y de ser necesario, se convocara al SAME, efectuando inmediata comunicación al Magistrado Interventor y a la Guardia Jurídica de Abogados del C.D.N.N. y A.",
      "Deberá iniciar actuaciones 'HALLAZGO DE PERSONA- LEY 114'.",
      "Ambas respuestas son correctas."
    ],
    correctAnswer: "Dejar constancia de las circunstancias del mismo, de su estado físico y de salud, y de ser necesario, se convocara al SAME, efectuando inmediata comunicación al Magistrado Interventor y a la Guardia Jurídica de Abogados del C.D.N.N. y A."
  },
  {
    question: "En los delitos de Desobediencia y Atentado y/o Resistencia contra la autoridad (artículos 237 y siguientes del Código Penal) por los cuales se aplique el procedimiento de flagrancia, deberá efectuarse consulta inmediata con la Fiscalía Nacional en lo Criminal y Correccional en Turno.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "FALSO"
  },
  {
    question: "En los hechos de violencia de género, previo a la detención del agresor, se deberá consultar a la víctima sobre su parecer con relación a la medida que se adoptará, con el fin de contar con su correspondiente autorización y así llevar adelante la misma.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "FALSO"
  },
  {
    question: "Encontrándose en su horario de servicio el personal policial, ante una situación de violencia en la vía pública, tiene el deber de dar aviso al servicio de atención telefónica de emergencia.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "FALSO"
  },
  {
    question: "Existe cierto consenso al momento de definir el concepto de femicidio, como:",
    options: [
      "La muerte violenta de mujeres por razones de género.",
      "Los homicidios de personas con identidad de género femenino o mujeres que ocurren por razón de género.",
      "Los homicidios de personas con identidad de género femenino que ocurren por razón de género."
    ],
    correctAnswer: "Los homicidios de personas con identidad de género femenino o mujeres que ocurren por razón de género."
  },
  {
    question: "Existiendo en la Dependencia Cabinas Digitales del Sistema Único de Denuncias (SUD), el personal policial ante la presencia de una persona que desea realizar una denuncia y que manifieste su expresa voluntad de ser atendido por personal policial, en primera instancia derivará al mismo a las cabinas de denuncia toda vez que la presente guía así lo establece.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "FALSO"
  },
  {
    question: "Guía de Actuación en caso de Siniestros Viales: Dentro de las diligencias a llevar a cabo en caso de un siniestro vial se deberá comunicar la situación al Comando para:",
    options: [
      "Gestionar asistencia en el caso de la existencia de personas lesionadas.",
      "Para obtener apoyo para encauzar el tránsito, delimitar la zona y/o para obtener cualquier otro tipo de recursos que puedan ser necesarios.",
      "Ambas respuestas son correctas."
    ],
    correctAnswer: "Ambas respuestas son correctas."
  },
  {
    question: "Guía de Actuación en caso de Siniestros Viales: En aquellos hechos con personas lesionadas, si los vehículos están provocando una obstrucción o bloqueo de la calzada se procederá a remover los vehículos para facilitar la circulación del tránsito.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "FALSO"
  },
  {
    question: "Guía de Actuación en caso de Siniestros Viales: En caso de personas lesionadas debe comunicarse al Juzgado Nacional en lo Criminal y Correccional en Turno, desde el lugar del hecho y proceder para con los imputados a confeccionar acta de detención, lectura de derechos y garantías.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "FALSO"
  },
  {
    question: "Guía de Actuación en caso de Siniestros Viales: Evaluación del Accidente: Se procederá a registrar datos sobre la situación del hecho por medio de testigos con respecto a la ubicación y daños de los vehículos involucrados, condición y estado de las personas involucradas, descripción del lugar de los hechos, existencia y estado de semáforos, domos, cámaras de seguridad públicas y privadas, señalizaciones, elementos que pudieran haber obstruido la visión, etc.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "FALSO"
  },
  {
    question: "Guía de Actuación en caso de Siniestros Viales: Según el artículo 64 de la Ley 24449 de Tránsito y Seguridad Vial de la Nación, Se considera accidente de tránsito a:",
    options: [
      "Todo hecho que produzca daño en personas o cosas como consecuencia de la circulación.",
      "es un suceso que ocurre generalmente cuando un vehículo colisiona contra otro vehículo, peatón, animal o escombros del camino.",
      "Evento generalmente involuntario, generado al menos por un vehículo en movimiento que causa daño a personas y bienes involucrados."
    ],
    correctAnswer: "Todo hecho que produzca daño en personas o cosas como consecuencia de la circulación."
  },
  {
    question: "Guía de Aprehensión, custodia y egreso de detenidos: Al momento de confeccionar el acta de detención, lectura de derechos y garantías sobre la persona detenida se deberá realizar:",
    options: [
      "En presencia de dos testigos hábiles mayores de 16 años, siendo recomendable que estos no sean los testigos presenciales del hecho.",
      "En presencia de dos testigos los cuales pueden ser menores de 18 años, mientras no se encuentren dementes o en estado de inconsciencia al momento de ser requerida su participación.",
      "En presencia de dos testigos hábiles mayores de 18 años, siendo recomendable que estos no sean los testigos presenciales del hecho."
    ],
    correctAnswer: "En presencia de dos testigos hábiles mayores de 18 años, siendo recomendable que estos no sean los testigos presenciales del hecho."
  },
  {
    question: "Guía de Aprehensión, custodia y egreso de detenidos: En caso de que la persona aprehendida estuviera imposibilitada de comprender los contenidos del acta (estado de inconsciencia, ebriedad notoria, desconocimiento del idioma, intoxicación por estupefacientes o psicofármacos, etc.) se deberá labrar de igual manera Acta de Detención, lectura de derechos y garantías en presencia de dos testigos hábiles.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "FALSO"
  },
  {
    question: "Guía de Aprehensión, custodia y egreso de detenidos: Esta Guía incluye los temas específicos vinculados con el traslado de detenidos, con el régimen de visitas, con la custodia en Centros de Salud, y contempla lo relacionado con el régimen y gestión interna de las Alcaidías o de otros centros de Detención.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "FALSO"
  },
  {
    question: "Guía de Aprehensión, custodia y egreso de detenidos: Este procedimiento es de aplicación para todo el personal policial relacionado con:",
    options: [
      "El derecho que poseen los detenidos a recibir visitas y prevenir el ingreso de elementos que puedan alterar la seguridad.",
      "El traslado y custodia de un detenido que se encuentre bajo el ámbito de responsabilidad de la Policía de la Ciudad.",
      "El proceso de personas detenidas, desde su detención hasta su remisión o liberación."
    ],
    correctAnswer: "El proceso de personas detenidas, desde su detención hasta su remisión o liberación."
  },
  {
    question: "Guía de Aprehensión, custodia y egreso de detenidos: Los Menores de dieciocho (18) años, son punibles en caso de cometer una contravención, con excepción de la comisión de contravenciones de tránsito, en cuyo caso son inimputables.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "FALSO"
  },
  {
    question: "Guía de Control Vehicular y Poblacional: Cuando se proceda al control de un motovehículo se solicitará a sus ocupantes:",
    options: [
      "Que detengan la marcha del vehículo, desciendan de la misma y aporten la documentación propia y del vehículo.",
      "Que detengan la marcha del vehículo, se quiten los cascos y aporten la documentación propia y del vehículo.",
      "Que detengan la marcha del vehículo, se quiten los cascos, desciendan de la misma, y aporten la documentación propia y del vehículo."
    ],
    correctAnswer: "Que detengan la marcha del vehículo, se quiten los cascos, desciendan de la misma, y aporten la documentación propia y del vehículo."
  },
  {
    question: "Guía de Control Vehicular y Poblacional: Este procedimiento incluye actividades relacionadas con la elaboración de programas de control vehicular, determinación de frecuencias, lugares, zonas de riesgos, horarios, etc.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "FALSO"
  },
  {
    question: "Guía de Control Vehicular y Poblacional: La Orden de Servicio en su contenido no contempla la participación de otros organismos (Ejemplo: Tránsito, CNRT, Perito verificador, otras fuerzas de seguridad, etc.), los cuales de ser necesarios se solicitarán por la Dependencia interviniente.",
    options: ["VERDADERO", "FALSO"],
    correctAnswer: "FALSO"
  },
  {
    question: "Guía de Control Vehicular y Poblacional: La Orden que dispone la implementación del Servicio contiene:",
    options: [
      "Lugar del control, horario de inicio y objetivo del control.",
      "Lugar del control, horario de inicio y finalización, objetivo del control, recursos necesarios y aspectos generales para su cumplimiento.",
      "Lugar del control, horario de inicio y finalización, recursos necesarios y aspectos generales para su cumplimiento."
    ],
    correctAnswer: "Lugar del control, horario de inicio y finalización, objetivo del control, recursos necesarios y aspectos generales para su cumplimiento."
  },
  {
    question: "Una vez iniciado el operativo se seleccionaran al azar los vehículos que serán sometidos para su control, efectuando las señales correspondientes para su desvío y detención, cuando se detenga el vehículo, el oficial encargado de identificar a los ocupantes deberá:",
    options: [
      "Solicitar que se detenga la marcha del vehículo, saludar informando su grado, nombre y apellido, comunicando asimismo los motivos del control.",
      "Solicitar que se detenga la marcha del vehículo y proceder a completar la planilla de control vehicular requerida para estos operativos, con los datos del vehículo y ocupantes.",
      "Solicitar que se detenga la marcha del vehículo, saludar informando su grado y comunicar los motivos del control."
    ],
    correctAnswer: "Solicitar se detenga la marcha del vehículo, saludar informando su grado, nombre y apellido, comunicando asimismo los motivos del control."
  },
  {
    question: "Cuando por algún motivo sea necesario desplazar al detenido a otro sector o área del Centro de Salud se debe interiorizarse sobre la orden del médico autorizado y se debe efectuar la comunicación a la línea de mando correspondiente, utilizando los medios habituales, un (1) oficial de custodia debe acompañar el desplazamiento del detenido, previa verificación de la adecuada colocación de los elementos de sujeción.",
    options: [
      "VERDADERO.",
      "FALSO."
    ],
    correctAnswer: "FALSO."
  },
  {
    question: "El principio general es que el detenido se encuentre siempre sin los elementos de sujeción colocados, con el fin de evitar que se ocasione lesiones a sí mismo y que pueda causar daños a objetos o lesiones a terceros.",
    options: [
      "VERDADERO",
      "FALSO"
    ],
    correctAnswer: "FALSO"
  },
  {
    question: "Guía de Detenidos en Centros de Salud: En caso de fallecimiento del detenido en el Centro de Salud, se deberá:",
    options: [
      "Trasladar el cuerpo a la morgue del hospital, solicitar una copia de la Historia Clínica, para su incorporación al legajo del detenido y se procederá a dejar sin efecto la custodia policial.",
      "Mantener la custodia, hasta que se reciban instrucciones específicas por parte de la justicia. No se permitirá el acceso de ninguna persona y eventuales pedidos de los familiares del fallecido serán derivados a la Oficina de Judiciales interviniente.",
      "Tomar contacto con personal de Buenos Aires Trasplante quienes se harán cargo del cuerpo quedando sin efecto la custodia policial."
    ],
    correctAnswer: "Mantener la custodia, hasta que se reciban instrucciones específicas por parte de la justicia. No se permitirá el acceso de ninguna persona y eventuales pedidos de los familiares del fallecido serán derivados a la Oficina de Judiciales interviniente."
  },
  {
    question: "Guía de Detenidos en Centros de Salud: Esta guía posee como objetivo:",
    options: [
      "Establecer los lineamientos para la custodia de detenidos trasladados a un Centro de Salud para su atención médica, y evitar cualquier intento de fuga o evasión.",
      "Establecer los lineamientos para el traslado de detenidos a un Centro de Salud y evitar cualquier intento de fuga o evasión.",
      "Establecer los lineamientos relacionados con el régimen de custodia de detenidos en Centros Asistenciales."
    ],
    correctAnswer: "Establecer los lineamientos para la custodia de detenidos trasladados a un Centro de Salud para su atención médica, y evitar cualquier intento de fuga o evasión."
  },
  {
    question: "Los oficiales de custodia deben permanecer desarmados y contar con elementos de seguridad y comunicación que les hubieran sido provistos, mantenerse en estado de alerta, en actitud de servicio y presto para actuar ante cualquier situación de peligro o de riesgo de fuga.",
    options: [
      "VERDADERO.",
      "FALSO."
    ],
    correctAnswer: "VERDADERO."
  },
  {
    question: "El Celador es aquel personal policial correctamente uniformado, destinado a la vigilancia y cuidado del detenido desde el momento de la aprehensión hasta su alojamiento en la Alcaidía o en un Centro de Salud, que por lo tanto deberá estar armado y con los elementos de seguridad y de comunicaciones provistos.",
    options: [
      "VERDADERO.",
      "FALSO."
    ],
    correctAnswer: "VERDADERO."
  },
  {
    question: "Al momento de proceder al traslado de un detenido se debe tener en cuenta:",
    options: [
      "Si durante el traslado se produjera alguna emergencia médica, falla mecánica o cualquier otra circunstancia que altere el esquema programado, se debe informar de inmediato al Comando para que activen los servicios de emergencia y envíen el apoyo necesario.",
      "Introducir los efectos personales de cada detenido en sobres o bolsas separadas, con identificación clara y visible.",
      "Realizar comunicación telefónica con la Mesa de Operaciones de la División Coordinación Alcaidías de Comisarias Comunales, para solicitar cupo de alojamiento."
    ],
    correctAnswer: "Si durante el traslado se produjera alguna emergencia médica, falla mecánica o cualquier otra circunstancia que altere el esquema programado, se debe informar de inmediato al Comando para que activen los servicios de emergencia y envíen el apoyo necesario."
  },
  {
    question: "Antes de efectuar el traslado de un detenido se debe proceder a realizar la requisa del mismo y de sus pertenencias antes del ingreso al vehículo, debiendo esposarlo con las manos ubicadas por detrás de la espalda a excepción de las mujeres en estado de gravidez, quienes deben ser esposadas con las manos delante del cuerpo.",
    options: [
      "VERDADERO.",
      "FALSO."
    ],
    correctAnswer: "VERDADERO."
  },
  {
    question: "Cantidad mínima de personal policial que se debe asignar para realizar un traslado en una Unidad de Traslado de Detenidos:",
    options: [
      "Se realizara el traslado como mínimo con la participación de un chofer y dos (2) Oficiales de custodia.",
      "Se realizara como mínimo con la participación de un chofer, un Oficial Encargado y dos (2) Oficiales como celadores.",
      "Se debe realizar el traslado con la participación de dos (2) Oficiales de custodia armados, salvo que por algún motivo sólo sea posible el ingreso de uno."
    ],
    correctAnswer: "Se realizara el traslado como mínimo con la participación de un chofer y dos (2) Oficiales de custodia."
  },
  {
    question: "Esta guía posee como objetivo:",
    options: [
      "Establecer los lineamientos relacionados con el traslado de detenidos con el fin de preservar la integridad física y los derechos de los involucrados y de terceros, así como para prevenir eventuales intentos de fuga o evasión.",
      "Establecer los lineamientos relacionados con la custodia de personas detenidas, a los efectos de preservar los derechos de los involucrados, procurar su adecuada identificación y prevenir eventuales intentos de fuga.",
      "Establecer los lineamientos para la custodia de detenidos trasladados a un Centro de Salud para su atención médica, y evitar cualquier intento de fuga o evasión."
    ],
    correctAnswer: "Establecer los lineamientos relacionados con el traslado de detenidos con el fin de preservar la integridad física y los derechos de los involucrados y de terceros, así como para prevenir eventuales intentos de fuga o evasión."
  },
  {
    question: "La requisa que se efectúa sobre las personas que van a visitar a un detenido, es una actividad orientada a revisar a una persona y los objetos que posea en el momento de hacerse presente en la Alcaidía, con el fin de identificar elementos que puedan afectar la seguridad, ser de interés para la causa y/o ser constitutivos de un delito.",
    options: [
      "VERDADERO",
      "FALSO."
    ],
    correctAnswer: "VERDADERO"
  },
  {
    question: "Los medicamentos que tuvieran los visitantes para el detenido:",
    options: [
      "Serán controlados y registrados en el Libro de Novedades de la Alcaidía y posteriormente entregados al correspondiente detenido.",
      "No serán suministrados los mismos al detenido, hasta tanto personal de SAME no autorice su entrega.",
      "Deben ser derivados junto con la prescripción médica pertinente al personal médico de la dependencia, para su posterior entrega al detenido si fueran autorizados."
    ],
    correctAnswer: "Deben ser derivados junto con la prescripción médica pertinente al personal médico de la dependencia, para su posterior entrega al detenido si fueran autorizados."
  },
  {
    question: "Los visitantes menores de dieciocho (18) años:",
    options: [
      "Podrán ingresar previo registro de su concurrencia en el Libro de Registro de Visitas.",
      "Deben ingresar acompañados por padre, madre, tutor o un adulto que cuente con autorización judicial.",
      "No se encuentran autorizados a ingresar a la Alcaidía por razones de seguridad."
    ],
    correctAnswer: "Deben ingresar acompañados por padre, madre, tutor o un adulto que cuente con autorización judicial."
  },
  {
    question: "Habrá flagrancia según el artículo 285 del Código Procesal Penal de la Nacional, si el autor del delito:",
    options: [
      "fuera sorprendido en el momento de intentarlo, cometerlo o inmediatamente después de cometido.",
      "fuera sorprendido en el momento de su aprehensión, sin contar con pruebas que lo incriminen.",
      "fuera sorprendido en el momento de su aprehensión, con pruebas que lo incriminen."
    ],
    correctAnswer: "fuera sorprendido en el momento de intentarlo, cometerlo o inmediatamente después de cometido."
  },
  {
    question: "En el caso de un detenido con una enfermedad terminal o que haya sido informado por los médicos del Centro de Salud que se encuentra en estado terminal, se debe:",
    options: [
      "Gestionar el traslado de inmediato a su domicilio particular, conforme las disposiciones vigentes.",
      "Gestionar el traslado del detenido con urgencia a su domicilio particular o a un hospital de mayor complejidad, si así lo determina el médico.",
      "Mantener al detenido en el Centro de Salud, en custodia hasta recibir instrucciones específicas de la justicia."
    ],
    correctAnswer: "Gestionar el traslado del detenido con urgencia a su domicilio particular o a un hospital de mayor complejidad, si así lo determina el médico."
  },
  {
    question: "Durante el traslado de detenidos, el conductor del vehículo deberá:",
    options: [
      "Informar inmediatamente cualquier contingencia o imprevisto al Comando a través del medio de comunicación dispuesto para tal fin.",
      "Asegurarse de que el vehículo cuente con las condiciones de seguridad necesarias antes de iniciar el traslado.",
      "Informar al conductor del centro de salud de cualquier incidente durante el traslado, sin tener en cuenta el medio de comunicación dispuesto para tal fin."
    ],
    correctAnswer: "Informar inmediatamente cualquier contingencia o imprevisto al Comando a través del medio de comunicación dispuesto para tal fin."
  },
  {
    question: "En el caso de que se requiera el uso de medios de fuerza durante el traslado, se deberá:",
    options: [
      "Comunicar inmediatamente la situación al Comando, seguir los procedimientos establecidos para el uso de la fuerza y documentar el incidente en el Libro de Novedades.",
      "Seguir los procedimientos establecidos para el uso de la fuerza, sin necesidad de comunicación al Comando.",
      "Comunicar la situación al Comando y utilizar los medios de fuerza necesarios sin seguir los procedimientos establecidos."
    ],
    correctAnswer: "Comunicar inmediatamente la situación al Comando, seguir los procedimientos establecidos para el uso de la fuerza y documentar el incidente en el Libro de Novedades."
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
