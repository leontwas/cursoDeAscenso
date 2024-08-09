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
      },
        {
          question: "El concepto de GENERO se refiere a:",
          options: [
            "Las capacidades diferenciales de cada persona en función de su determinación biológica.",
            "Un conjunto de características sociales y culturales asignadas a las personas en función de su sexo.",
            "Diferencias biológicas y naturales que las personas tenemos al nacer."
          ],
          correctAnswer: "Un conjunto de características sociales y culturales asignadas a las personas en función de su sexo."
        },
        {
          question: "La perspectiva de género trata de:",
          options: [
            "Analizar la sociedad partiendo de la base de que hay una igualdad clara de oportunidades entre hombres y mujeres.",
            "Analizar la sociedad haciendo visible la desigualdad y discriminación de género reinantes como presupuesto."
          ],
          correctAnswer: "Analizar la sociedad haciendo visible la desigualdad y discriminación de género reinantes como presupuesto."
        },
        {
          question: "Los estereotipos de género comprenden:",
          options: [
            "Las ideas preconcebidas sobre lo que debe ser el comportamiento social de hombres y mujeres.",
            "El conjunto de características vinculadas a las diferencias biológicas entre hombres y mujeres.",
            "La división de roles funcionales que se hace familiarmente entre hombres y mujeres."
          ],
          correctAnswer: "Las ideas preconcebidas sobre lo que debe ser el comportamiento social de hombres y mujeres."
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
            "A una mujer cuando el hecho sea perpetrado por un hombre o mediare violencia de género.",
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
            "Se relacionan directamente con la orientación sexual de cada individuo."
          ],
          correctAnswer: "Definen cómo se espera que actuemos, hablemos, nos vistamos, nos arreglemos y nos comportemos según nuestro género asignado."
        },

        {
          question: "Es recomendable entrenar 3 o 4 veces por semana para generar un hábito y lograr mejoras", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "Entrenando 1 o 2 veces por semana solo se mantiene el estado pero no se logran mejoras", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "Es recomendable realizar actividad física de manera solitaria, para no depender del resto y mantener la constancia", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Falso"
        },
        {
          question: "A la hora de planificar su entrenamiento, es importante fijarse metas y objetivos lo más ambicioso posible para estimular la superación", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Falso"
        },
        {
          question: "Fijarse metas y objetivos acordes a las posibilidades de cada uno es clave para planificar el entrenamiento", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "Las horas de descanso no influyen en el estado físico general siempre y cuando se entrene regularmente", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Falso"
        },
        {
          question: "¿Debe realizar chequeos médicos independientemente de si se siente bien?", 
          options: ["No", "Si"],
          correctAnswer: "Si"
        },
        {
          question: "¿Cuando debe hidratarse al realizar actividad física?", 
          options: ["Cuando tiene sed", "Antes, durante y después del ejercicio físico.", "Después del ejercicio físico."],
          correctAnswer: "Antes, durante y después del ejercicio físico."
        },
        {
          question: "¿Es saludable realizar un solo encuentro deportivo semanal de alta intensidad?", 
          options: ["No", "Si"],
          correctAnswer: "No"
        },
        {
          question: "¿Es cierto que las muchas lesiones ocurren por no utilizar el calzado correcto?", 
          options: ["Si", "No"],
          correctAnswer: "Si"
        },
        {
          question: "¿Por qué es importante entrenar la zona media del cuerpo?", 
          options: ["Mejora la coordinación y el equilibrio.", "Optimiza la postura corporal.", "Todas son correctas.", "Previene lesiones y molestias."],
          correctAnswer: "Todas son correctas."
        },
        {
          question: "¿Hay que entrenar siempre a intensidades altas?", 
          options: ["No", "Si"],
          correctAnswer: "No"
        },
        {
          question: "¿Salud es sinónimo de enfermedad?", 
          options: ["No", "Si"],
          correctAnswer: "No"
        },
        {
          question: "¿Salud es sinónimo de ausencia de enfermedad?", 
          options: ["No", "Si"],
          correctAnswer: "No"
        },
        {
          question: "¿Es conveniente abrigarse o usar fajas para perder peso durante la actividad física?", 
          options: ["Si", "No"],
          correctAnswer: "No"
        },
        {
          question: "Entendemos por actividad física a todo movimiento del cuerpo que hace trabajar a los músculos y requiere más energía que estar en reposo", 
          options: ["Falso", "Verdadero"],
          correctAnswer: "Verdadero"
        },
        {
          question: "El ejercicio aporta beneficios para todas las edades", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "Elija la opción que considere correcta ¿cuándo realizar los ejercicios de elongación?", 
          options: ["Al final de cada entrenamiento físico", "Solamente cuando tengo dolores musculares.", "Antes, durante y después de cada actividad física."],
          correctAnswer: "Antes, durante y después de cada actividad física"
        },
        {
          question: "¿Cuántos mecanismos de seguridad posee la pistola Pietro Beretta PX4 Storm?", 
          options: ["Uno", "Dos", "Tres"],
          correctAnswer: "Dos"
        },
        {
          question: "La pistola Pietro Beretta PX4 Storn posee dos mecanismos de seguridad. El automático y el manual", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "El mecanismo de seguridad manual de la pistola Pietro Beretta PX4 Storn se desactiva momentos antes de que el martillo impacte el saliente de percutor", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Falso"
        },
        {
          question: "Como medida esencial de seguridad, debemos considerar toda arma como si estuviera cargada salvo que sepamos que no lo está", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Falso"
        },
        {
          question: "Como medida esencial de seguridad, coloque el dedo en contacto con la cola del disparador y luego decida si realizara el disparo", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Falso"
        },
        {
          question: "Como medida esencial de seguridad, no apunte a nada ni nadie que no se quiera herir o dañar", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "Como medida esencial de seguridad, dispare solo si se aseguró el objetivo, lo que hay detrás y a sus laterales", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "La pistola Pietro Beretta, modelo PX4 Storm, es un arma", 
          options: ["Automática", "Semiautomática"],
          correctAnswer: "Semiautomática"
        },
        {
          question: "La pistola Pietro Beretta, modelo PX4 Storm, es un arma", 
          options: ["De simple acción.", "De doble acción.", "De simple y doble acción."],
          correctAnswer: "De simple y doble acción."
        },
        {
          question: "Al ser una pistola semiautomática, el procedimiento de carga, descarga y recarga, se produce automáticamente", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "Al ser una pistola semiautomática, el tirador no debe liberar y presionar el disparador entre cada disparo", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Falso"
        },
        {
          question: "La pistola Pietro Beretta, modelo PX4 Storm Full Size, tiene una capacidad del cargador de", 
          options: ["15 cartuchos", "17 cartuchos", "9 cartuchos"],
          correctAnswer: "17 cartuchos"
        },
        {
          question: "La pistola Px4 Storm “F” posee DOS mecanismos de seguro", 
          options: ["Un seguro automático de percutor y otro manual ambidiestro ubicado en los laterales posteriores de la corredera con función de abatimiento del martillo.", "Un seguro automático de percutor y otro manual ambidiestro ubicado en la parte superior de la corredera."],
          correctAnswer: "Un seguro automático de percutor y otro manual ambidiestro ubicado en los laterales posteriores de la corredera con función de abatimiento del martillo."
        },
        {
          question: "El seguro automático debe activarse cada vez que se recarga el arma.", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Falso"
        },
        {
          question: "El seguro manual se activa al girar la palanca hacia abajo", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "El seguro manual", 
          options: ["Inutiliza el disparador.", "Desalinea el saliente de percutor.", "Desarticula el martillo.", "Todas las opciones son correctas."],
          correctAnswer: "Todas las opciones son correctas."
        },
        {
          question: "POSICION DE TIRO ISOSCELES MODIFICADA. Se optó por el empleo de esta posición de tiro, porque se adopta y abandona con rapidez y facilidad", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "POSICION DE TIRO ISOSCELES MODIFICADA. Permite que, estando de costado al objetivo, haya menos volumen del cuerpo del tirador expuesto al blanco desde donde es posible que provenga una agresión por lo que el tirador estará más protegido",
          options: ["Verdadero", "Falso"],
          correctAnswer: "Falso"
        },
        {
          question: "En la POSICION DE TIRO ISOSCELES MODIFICADA, las piernas deben estar separadas el ancho de hombros, para permitir al tirador desplazarse y disparar al mismo tiempo",
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "La carga administrativa e inicial es la que produce el operador cuando el arma se encuentra descargada",
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "La carga administrativa del arma siempre se realiza dirigiendo el arma a un lugar seguro",
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "La carga administrativa, ¿es posible realizarla con el seguro colocado?",
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "Descarga administrativa del arma: es la descarga que se produce cuando el arma se encuentra con cartucho en la recamara y el operador requiere descargar la misma",
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "Una interrupción que impide la continuidad en el empleo del arma de fuego necesita de una solución lo más rápida y eficiente posible. Existen diversas causas de interrupción",
          options: ["Falla de fulminante.", "Cargador mal colocado.", "Chimenea.", "Todas las opciones son correctas."],
          correctAnswer: "Todas las opciones son correctas."
        },
        {
          question: "En una “INTERRUPCION LARGA”, el perfil del arma se encuentra cerrada, por efecto de elementos que obstruyen la recamara",
          options: ["Verdadero", "Falso"],
          correctAnswer: "Falso"
        },
        {
          question: "¿En cuál de las interrupciones cortas el arma no se encuentra acerrojada (cerrada)?",
          options: ["Falla de fulminante.", "Cargador mal colocado.", "Chimenea."],
          correctAnswer: "Chimenea."
        },
        {
          question: "En las prácticas de tiro voluntarias en polígonos, está permitida la utilización de cualquier tipo de munición",
          options: ["Verdadero", "Falso"],
          correctAnswer: "Falso"
        },
        {
          question: "En las prácticas de tiro voluntarias en polígonos, está prohibido la modificación del armamento asignado, en todo o alguna de sus partes",
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "En la práctica de tiro voluntarias en polígono, está prohibido efectuar desarme primario y desarme explosivo del armamento",
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "Un cuchillo en manos de una persona con actitud hostil, ¿Debe considerarse un arma letal?",
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "Respecto de la manera de empuñar de la pistola de dotación policial al momento de disparar en un enfrentamiento",
          options: ["Debe intentarse, siempre que la situación lo permita, empuñar con ambas manos para su mejor control y precisión.", "Realmente no importa si se aplica simple o doble empuñe, dado que el estrés genera una momentánea cuota de fuerza extra, suficiente para ser preciso, aún disparando con una sola mano.", "La precisión no es necesaria al momento de disparar en defensa propia, dado que lo que se busca es responder al fuego a toda costa."],
          correctAnswer: "Debe intentarse, siempre que la situación lo permita, empuñar con ambas manos para su mejor control y precisión."
        },
        {
          question: "Para la intervención ante un agresor que esgrime un arma blanca ¿Cuál cree que debe ser el modo recomendable de proceder?",
          options: ["Acercarse y desarmarlo a mano limpia.", "Utilizar la tonfa como medio racionalmente idóneo para emplear frente a una agresión equivalente.", "Aumentar la distancia de seguridad y empuñar el arma."],
          correctAnswer: "Aumentar la distancia de seguridad y empuñar el arma."
        },
        {
          question: "No se debe llegar al lugar del hecho delictivo con autores en el lugar, empuñando el arma de fuego provista",
          options: ["Verdadero", "Falso"],
          correctAnswer: "Falso"
        },
        {
          question: "¿Qué debe tenerse en cuenta antes de la dar la voz de “Alto Policía”?",
          options: ["Tener la mayor proximidad posible a la persona a identificar y evitar la toma de coberturas para que la orden sea correctamente interpretada.", "Tomar cobertura, observar que no existan otras posibles amenazas y empuñar el arma si es necesario."],
          correctAnswer: "Tomar cobertura, observar que no existan otras posibles amenazas y empuñar el arma si es necesario."
        },
        {
          question: "En el caso que el intervenido porte un arma blanca, un arma de fuego o tenga las manos ocultas, debe priorizar su seguridad alejándose y buscando una cubierta si es posible",
          options: ["Falso", "Verdadero"],
          correctAnswer: "Verdadero"
        },
        {
          question: "¿La palanca de seguro manual se utiliza para abatir el martillo de forma segura?",
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "Cuál debe ser la posicion de las manos en las postura que el oficial debe adoptar durante su servicio mientras se encuentra estático?",
          options: ["Ambas manos a la altura de la hebilla del cinturón posando la mano que asiste sobre el dorso de la mano hábil.", "Ambas manos a la altura de la hebilla del cinturón posando la mano hábil sobre el dorso de la mano que asiste."],
          correctAnswer: "Ambas manos a la altura de la hebilla del cinturón posando la mano que asiste sobre el dorso de la mano hábil."
        }, 
        {
          question: "Cuál debe ser la posición de los pies en la postura que el oficial debe adoptar durante su servicio mientras se encuentra estático?",
          options: ["Pié derecho delante 30 cm respecto del pié izquierdo", "Pies juntos", "Pies separados a una distancia equivalente a un ancho de hombros."],
          correctAnswer: "Pies separados a una distancia equivalente a un ancho de hombros."
        },
        {
          question: "Cuál es el pie que el funcionario debe ubicar un poco retrasado mientras se encuentra estático durante su servicio?",
          options: ["El pié de la mano hábil.", "El pié de la mano que asiste."],
          correctAnswer: "El pié de la mano hábil."
        },
        {
          question: "De qué lado del correaje debe ubicarse el equipo de comunicación provisto?",
          options: ["Debe sujetarse cercano al oído y del lado de la mano hábil.", "Debe sujetarse cercano al oído y del lado de la mano que asiste."],
          correctAnswer: "Debe sujetarse cercano al oído y del lado de la mano que asiste."
        },
        {
          question: "Qué denotan las manos en los bolsillos del personal durante el servicio?",
          options: ["Denotan cansancio y hastío", "Demuestra excesiva confianza en el entorno, falta de preocupación", "Ninguna es correcta"],
          correctAnswer: "Demuestra excesiva confianza en el entorno, falta de preocupación"
        },
        {
          question: "Qué mano debe utilizar para extraer las esposas?",
          options: ["La mano hábil.", "La mano inhabil."],
          correctAnswer: "La mano hábil."
        },
        {
          question: "Qué reflejan las manos del personal sobre pistola asignada y porta cargador?",
          options: ["Demuestra desdén y falta de interés en el ciudadano.", "Denota hostilidad, puede generar rechazo en el ciudadano."],
          correctAnswer: "Denota hostilidad, puede generar rechazo en el ciudadano."
        },
        {
          question: "Qué reflejan las manos del personal dentro del chaleco a la altura de las axilas?",
          options: ["Demuestra desdén y falta de interés en el ciudadano.", "Denota cansancio y hastío."],
          correctAnswer: "Demuestra desdén y falta de interés en el ciudadano."
        },
        {
          question: "El personal policial de brazos cruzados...",
          options: ["Demuestra desdén y falta de interés en el ciudadano.", "Pierde capacidad operativa dificultando el acceso a los elementos asignados."],
          correctAnswer: "Pierde capacidad operativa dificultando el acceso a los elementos asignados."
        },
        {
          question: "Qué reflejan las manos dentro de los bolsillos del personal policial?",
          options: ["Denota excesiva confianza en el entorno, falta de preocupación.", "Pérdida de la capacidad operativa dificultando el acceso a los elementos asignados.", "Ambas son correctas."],
          correctAnswer: "Ambas son correctas."
        },
        {
          question: "Qué reflejan las manos en la espalda del personal policial?",
          options: ["Denota excesiva confianza en el entorno, falta de preocupación.", "Falta de apertura o predisposición."],
          correctAnswer: "Falta de apertura o predisposición."
        },
        {
          question: "El personal policial con la espalda apoyada contra la pared y/o planta de un pié contra la misma...",
          options: ["Afecta gravemente la imagen institucional.", "Demuestra comodidad y un total desinterés en el entorno.", "Todas son correctas."],
          correctAnswer: "Todas son correctas."
        },
        {
          question: "Qué reflejan las manos del personal colgadas del cuello del chaleco balístico? ",
          options: ["Demuestra desdén y falta de interés en el ciudadano.", "Denota cansancio y hastío."],
          correctAnswer: "Denota cansancio y hastío."
        },
        {
          question: "Adoptar una postura incorrecta durante el servicio afecta la imagen de la institucion policial?", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "El correaje policial es de uso obligatorio para el personal policial en servicio?", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "La posición correcta mientras se encuentra estático le permite adoptar rápidamente una posición defensiva ante una potencial agresión?", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "En el caso que el intervenido porte un arma blanca, un arma de fuego o tenga las manos ocultas, debe priorizar su seguridad alejándose y buscando una cubierta si es posible?", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "La distribución de los elementos en el correaje busca que el acceso sea fácil y liberar la zona lumbar de objetos que puedan atentar contra la integridad física del funcionario ante una eventual caída.", 
          options: ["Verdadero", "Falso"],
          correctAnswer: "Verdadero"
        },
        {
          question: "El porta tonfa debe ubicarse:", 
          options: ["En el mismo lateral a la ubicación de la pistolera", "En el lateral opuesto a la ubicación de la pistolera"],
          correctAnswer: "En el lateral opuesto a la ubicación de la pistolera"
        },
        {
          question: "En el procedimiento para la evaluación de la escena se deberá considerar:", 
          options: ["El riesgo  y la pronta evacuación.", "La seguridad, la situación y los recursos necesarios", "Ninguna es correcta"],
          correctAnswer: "La seguridad, la situación y los recursos necesarios"
        },
        {
          question: "En caso de un parto en vía pública, una vez efectuado el nacimiento ¿qué hacemos con el cordón?", 
          options: ["No cortar el cordón umbilical se utilizará hilos anchos para ligarlo", "Atarlo a cuatro dedos de separación del obligo y cortarlo", "Ninguna es correcta"],
          correctAnswer: "No cortar el cordón umbilical se utilizará hilos anchos para ligarlo"
        },
        {
          question: "La cadena de la vida está conformada por eslabones que se deben cumplimentar para lograr con éxito los objetivos de los primeros auxilios y estos son:", 
          options: ["Seguridad de la escena y activación del sistema.", "Efectuar los primeros auxilios y garantizar el traslado.", "Todas son correctas."],
          correctAnswer:  "Todas son correctas."
        },
        {
          question: "Las compresiones a un niño se hacen:", 
          options: ["A dos manos.", "A una mano.", "Con dos dedos."],
          correctAnswrrer:  "A una mano."
        },
        {
          question: "En caso de un parto en vía pública ¿qué hacemos si vemos que el bebe tiene el cordón umbilical rodeando su cuello?", 
          options: ["Con un dedo tirar suavemente y desenrollarlo, pasándolo por arriba de la cabeza del bebe, así se evita que se estrangule.", "Pedir SAME en prioridad, o conducir al menor inmediatamente al nosocomio más cercano.", "No tratar de desenrrollar el cordón porque podría cortarse provocando un daño a la madre y al bebé."],
          correctAnswrrer:  "Con un dedo tirar suavemente y desenrollarlo, pasándolo por arriba de la cabeza del bebe, así se evita que se estrangule."
        },
        {
          question: "Ante una quemadura debo:", 
          options: ["Cubrir la herida inmediatamente con gaza o paños limpios.", "Enfriar la zona quemada con agua de la canilla.", "Ninguna es correcta."],
          correctAnswrrer:  "Enfriar la zona quemada con agua de la canilla."
        },
        {
          question: "Cómo se llama la herramienta intelectual para ordenar las acciones y/o maniobras, que está conformada por cuatro eslabones que se deben cumplimentar para lograr con éxito los objetivos de los primeros auxilios?", 
          options: ["Protocolo de salvataje.", "Primeros auxilios.", "Cadena de la vida."],
          correctAnswrrer:  "Cadena de la vida."
        },
        {
          question: "Ante una fractura debo:", 
          options: ["No mover a la víctima y llamar a emergencia.", "Colocar dos tablillas alrededor de la fractura y sujetarlas con alguna tela.", "Ambas son correctas."],
          correctAnswrrer:  "No mover a la víctima y llamar a emergencia."
        },
        {
          question: "Ante una amputación:", 
          options: ["Hacer presión sobre la herida. Y conservar la parte amputada en una bolsa sin colocar hielo.", "Debo conservar la parte amputada en una bolsa y esa bolsa en agua y hielo. También comprimir la herida para detener la hemorragia.", "Hacer un torniquete para detener el sangrado, y conservar la parte amputada."],
          correctAnswrrer:  "Debo conservar la parte amputada en una bolsa y esa bolsa en agua y hielo. También comprimir la herida para detener la hemorragia."
        },       
        {
         question: "Ante un desmayo debo:", 
         options: ["Levantarle las piernas al paciente.", "Darle agua y un caramelo al paciente.", "Colocar al paciente en la posición de seguridad."],
         correctAnswrrer:  "Levantarle las piernas al paciente."
        },
        {
          question: "Ante una convulsión:", 
          options: ["Debo sostener su cabeza hasta que se detenga la convulsión.", "Meter los dedos en su boca pare evitar que se muerda la lengua.", "Recostar boca abajo a la persona con una almohada en su cabeza."],
          correctAnswrrer:  "Debo sostener su cabeza hasta que se detenga la convulsión."
        },
        {
          question: "Ante una herida cortopunzante debo:", 
          options: ["Llamar a emergencia y no retirar el objeto que haya penetrado el cuerpo.", "Retirar el elemento cortopunsante y hacer compresión sobre la herida.", "Ninguna es correcta."],
          correctAnswrrer:  "Llamar a emergencia y no retirar el objeto que haya penetrado el cuerpo."
        },
        {
          question: "La maniobra de Heimlich es utilizada para:", 
          options: ["Hacerle reanimación cardio pulmonar a una persona.", "Ayudar a una persona cuando esta atragantada.", "Ayudar a una persona a normalizar su presión arterial."],
          correctAnswrrer:  "Ayudar a una persona cuando esta atragantada."
        },
        {
          question: "Ante una hemorragia debo:", 
          options: ["Hacer un torniquete por encima y por debajo de la herida.", "Cubrir con una manta a la persona a activar el SAME", "Hacer compresión directa sobre la herida."],
          correctAnswrrer:  "Hacer compresión directa sobre la herida.."
        },
        {
          question: "Cuándo comienza a implementar un parto en vía pública", 
          options: ["Cuando el útero se dilata unos 10cm, o si se le puede ver la cabeza al bebé.", "Cuando la madre rompe la bolsa.", "Cuando ya rompió bolsa y las contracciones superan las 10 por minuto."],
          correctAnswrrer:  "Cuando el útero se dilata unos 10cm, o si se le puede ver la cabeza al bebé."
        },
        {
          question: "Una vez presionado durante un segundo el botón de emergencia, el micrófono queda abierto durante 10 segundos sin necesidad de presionar el boton ptt para modular",
          options: ["Verdadero", "Falso"],
          correctAnswrrer:  "Verdadero"
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
