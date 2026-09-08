/* Contenido del portafolio de Alejandra García Gómez — ES/EN.
   Se carga como script clásico desde <helmet>; expone window.AG_PORTFOLIO. */
window.AG_PORTFOLIO = {
  testimonials: [
    { name: "Nombre y apellido", role: "Cargo actual, Empresa", photo: "",
      es: "Ejemplo de longitud: Alejandra entró al equipo cuando la marca hablaba distinto en cada país y no teníamos criterio para decidir qué publicar. Montó el marco de mensajes, ordenó el calendario y se sentó con ventas y con producto hasta que el contenido dejó de ser un favor y pasó a ser parte del plan. Tiene algo poco común: defiende una idea con argumentos y también la suelta cuando la evidencia dice otra cosa. Coordinó diseño, web y agencias sin que se le cayera un entregable y sin perder el tono de la marca en el camino.",
      en: "Length example: Alejandra joined when the brand sounded different in every country and we had no criteria for deciding what to publish. She built the messaging framework, fixed the calendar and sat down with sales and product until content stopped being a favour and became part of the plan. She has something rare: she defends an idea with arguments and also lets it go when the evidence says otherwise. She coordinated design, web and agencies without dropping a deliverable and without losing the brand's tone along the way." },
    { name: "Nombre y apellido", role: "Cargo actual, Empresa", photo: "",
      es: "Ejemplo de longitud media: trabajamos juntas en el evento más grande del año y lo que más recuerdo es la calma. Alejandra tenía claro el para qué de cada pieza, así que las decisiones de última hora se tomaban rápido y sin discusión. El equipo llegó al día del evento sabiendo qué decir y por qué.",
      en: "Medium-length example: we worked together on the biggest event of the year and what I remember most is the calm. Alejandra was clear on the why behind every asset, so last-minute decisions happened fast and without argument. The team arrived on the day knowing what to say and why." },
    { name: "Nombre y apellido", role: "Cargo actual, Empresa", photo: "",
      es: "Ejemplo corto: criterio, oficio y una capacidad enorme para traducir producto técnico a algo que la gente entiende y quiere leer.",
      en: "Short example: judgment, craft and a real ability to turn technical product into something people understand and want to read." }
  ],
  cases: [
    {
      slug: "estrategia-omnicanal", client: "Salitre Mágico", year: "2021 – 2022", slot: "case-omnicanal", n: "01",
      es: {
        title: "De la línea telefónica a una estrategia omnicanal",
        summary: "Conectar teléfono, chatbot, redes sociales, correo y punto presencial en una sola experiencia, con medición propia.",
        headline: "NPS sostenido en 80%",
        tags: ["Estrategia omnicanal", "Servicio al cliente", "Liderazgo de área"],
        challenge: "Entré como analista de social media a un proceso reactivo: se respondían llamadas, las encuestas de satisfacción eran en papel y se archivaban en carpetas físicas, y la gestión de PQR estaba dispersa sin ningún sistema que conectara la información. Cada canal hablaba su propio idioma.",
        roleText: "Diagramé en papel el recorrido del cliente y, con la jefe de marketing y el jefe de eCommerce, le dimos forma a la estrategia omnicanal de atención y experiencia del parque. Tras una queja ante la SIC documentamos y auditamos todo el proceso de PQRS junto al área de calidad.",
        process: [
          { n: "01", title: "PBX", body: "Propuse un árbol de decisiones más estratégico y un proveedor que permitiera varias líneas, locución propia, mensajes predeterminados y contacto directo con otras áreas sin pasar por recepción." },
          { n: "02", title: "Chatbot y redes", body: "Carola como primer canal automatizado, un tono unificado en redes y la consolidación en un solo canal de lo que antes operaba en dos." },
          { n: "03", title: "Presencial y correo", body: "Intervención del punto de información del parque, con sus PQRS en el mismo módulo, y el correo habilitado como canal formal de seguimiento." },
          { n: "04", title: "Medición", body: "Tiempos mínimos y máximos de respuesta alineados con la SIC y la Ley 1480 de 2012, encuestas digitalizadas y un informe mensual de NPS revisado por dirección general." }
        ],
        result: "Mi rol pasó de social media a liderar el área de servicio al cliente y experiencia. El parque no volvió a recibir una queja formal ante la SIC y el NPS se mantuvo en 80%. La credibilidad interna creció tanto que se sumaron dos personas dedicadas a medir NPS y satisfacción en distintas áreas.",
        metrics: [
          { value: "5", label: "Canales conectados: PBX, chatbot, redes, presencial y correo" },
          { value: "80%", label: "NPS sostenido con medición mensual" },
          { value: "0", label: "Quejas formales ante la SIC después del rediseño" }
        ]
      },
      en: {
        title: "From a phone line to an omnichannel strategy",
        summary: "Connecting phone, chatbot, social, email and the on-site desk into one experience, with measurement of its own.",
        headline: "NPS held at 80%",
        tags: ["Omnichannel strategy", "Customer service", "Team leadership"],
        challenge: "I joined as a social media analyst into a reactive process: calls were answered, satisfaction surveys were on paper filed in physical folders, and complaint handling was scattered with no system connecting the information. Every channel spoke its own language.",
        roleText: "I mapped the customer journey on paper and, with the head of marketing and the head of eCommerce, shaped the park's omnichannel service and experience strategy. After a formal consumer-protection complaint, we documented and audited the whole complaints process with the quality team.",
        process: [
          { n: "01", title: "PBX", body: "I proposed a more strategic decision tree and a vendor allowing multiple lines, custom voice recording, preset messages and direct contact with other areas without going through reception." },
          { n: "02", title: "Chatbot and social", body: "Carola as the first automated channel, a unified tone across social, and two channels consolidated into one." },
          { n: "03", title: "On-site and email", body: "The park's information desk brought into the same complaints module, and email enabled as a formal follow-up channel." },
          { n: "04", title: "Measurement", body: "Minimum and maximum response times aligned with consumer-protection law, digitized surveys and a monthly NPS report reviewed by general management." }
        ],
        result: "My role moved from social media to leading the customer service and experience area. The park received no further formal consumer-protection complaints and NPS held at 80%. Internal credibility grew enough that two people were added to measure NPS and satisfaction across service areas.",
        metrics: [
          { value: "5", label: "Channels connected: PBX, chatbot, social, on-site, email" },
          { value: "80%", label: "NPS sustained with monthly measurement" },
          { value: "0", label: "Formal consumer-protection complaints after the redesign" }
        ]
      }
    },
    {
      slug: "comunidad-esri", client: "Esri", year: "2023 – 2025", slot: "case-comunidad", n: "02", img: "assets/proyecto-comunidad-esri-2026.jpg",
      es: {
        title: "+126% de crecimiento en la Comunidad Esri de Colombia y Ecuador",
        summary: "Consolidar la comunidad, hacerla interactuar y conectarla con la ruta de formación de sus miembros.",
        headline: "1.026 → 3.116 miembros",
        tags: ["Estrategia de comunidad", "Eventos", "Contenido y redes"],
        challenge: "Desde 2023 acompañé a la comunidad entendiendo su objetivo y su foco. En 2025 me entregaron su crecimiento como proyecto, con tres objetivos: consolidarla, hacerla interactuar y sostener el crecimiento profesional de sus miembros.",
        roleText: "Diseñé la experiencia de comunidad del evento más grande de la organización para Colombia y Ecuador —la Conferencia de Usuarios Esri— y conecté el crecimiento con una estrategia transversal a todas las campañas de la marca.",
        process: [
          { n: "01", title: "Espacios para los que ya estaban", body: "El evento no solo sumaba personas nuevas: abría espacios para que los miembros divulgaran sus propios proyectos." },
          { n: "02", title: "Un test de nivel SIG", body: "Una experiencia en pantallas que le decía a cada asistente su nivel y a qué apuntar, conectada con el programa de insignias de la organización." },
          { n: "03", title: "Divulgación multicanal", body: "Página web y redes: +479% de visitas en Colombia y +1655% en Ecuador frente a 2024, con permanencia superior a dos minutos y LinkedIn como mejor canal (9,1% de engagement en Colombia)." },
          { n: "04", title: "Escucha", body: "524 encuestados —20% de la comunidad— con 83% de promotores y solo 2% de detractores. Lo más valorado: aprender de casos reales y conectar con expertos SIG." }
        ],
        result: "La comunidad cerró 2025 con 3.116 miembros (2.376 en Colombia y 735 en Ecuador) frente a 1.026 en 2024: un crecimiento del 126%, con Colombia al 168% y Ecuador al 93%. Más del 40% del crecimiento total se atribuye directamente a eventos.",
        metrics: [
          { value: "+126%", label: "Crecimiento de la comunidad en 2025 (Colombia +168%, Ecuador +93%)" },
          { value: "3.116", label: "Miembros al cierre de 2025, frente a 1.026 en 2024" },
          { value: "40%", label: "Del crecimiento total atribuido directamente a eventos" }
        ]
      },
      en: {
        title: "+126% growth in the Esri Community of Colombia and Ecuador",
        summary: "Consolidating the community, getting it to interact, and connecting it to its members' learning path.",
        headline: "1,026 → 3,116 members",
        tags: ["Community strategy", "Events", "Content and social"],
        challenge: "From 2023 I worked with the community, learning its purpose and focus. In 2025 its growth became my project, with three objectives: consolidate it, make it interact, and support its members' professional growth.",
        roleText: "I designed the community experience at the organization's largest event for Colombia and Ecuador — the Esri User Conference — and tied the growth to a strategy running across all of the brand's campaigns.",
        process: [
          { n: "01", title: "Space for existing members", body: "The event didn't just add new people: it opened space for members to present their own projects." },
          { n: "02", title: "A GIS level test", body: "An on-screen experience telling each attendee their level and what to aim for, connected to the organization's badge program." },
          { n: "03", title: "Multichannel outreach", body: "Website and social: +479% visits in Colombia and +1,655% in Ecuador versus 2024, with over two minutes' dwell time and LinkedIn as the strongest channel (9.1% engagement in Colombia)." },
          { n: "04", title: "Listening", body: "524 respondents — 20% of the community — with 83% promoters and only 2% detractors. Most valued: learning from real cases and connecting with GIS experts." }
        ],
        result: "The community closed 2025 with 3,116 members (2,376 in Colombia, 735 in Ecuador) versus 1,026 in 2024: 126% growth, with Colombia at 168% and Ecuador at 93%. Over 40% of total growth is attributed directly to events.",
        metrics: [
          { value: "+126%", label: "Community growth in 2025 (Colombia +168%, Ecuador +93%)" },
          { value: "3,116", label: "Members at the close of 2025, up from 1,026 in 2024" },
          { value: "40%", label: "Of total growth attributed directly to events" }
        ]
      }
    },
    {
      slug: "casos-de-exito", client: "Esri · Lundin Gold, Gobernación de Norte de Santander", year: "2023 – 2026", slot: "case-casos", n: "03",
      es: {
        title: "15+ historias de éxito que construyeron marca, confianza y comunidad",
        summary: "Traducir proyectos de analítica geoespacial en historias de negocio para audiencias que no son técnicas.",
        headline: "Dos países, seis historias",
        tags: ["Storytelling", "Audiovisual", "B2B"],
        challenge: "La comunicación de producto no le decía nada a quien decide: el valor estaba en el resultado del cliente, no en la funcionalidad.",
        roleText: "Produje los casos de éxito y las historias de usuario de la región, en formato escrito y audiovisual, incluyendo el teaser del caso de la Gobernación de Norte de Santander y el promocional de gestión de riesgos en Ecuador.",
        process: [
          { n: "01", title: "Entrevista y foco", body: "Una conversación con el cliente para encontrar la decisión que cambió, no la lista de funcionalidades." },
          { n: "02", title: "Casos de éxito", body: "Lundin Gold en Ecuador y la Gobernación de Norte de Santander en Colombia." },
          { n: "03", title: "Historias de usuario", body: "Barichara, ANLA, la Federación Nacional de Cafeteros y ACT." },
          { n: "04", title: "Activación", body: "Los casos entran a campañas, eventos y vocerías como evidencia, no como pieza suelta." }
        ],
        result: "Un cuerpo de evidencia reputacional disponible para los equipos comerciales y de vocería, con versión escrita y audiovisual de cada historia.",
        metrics: [
          { value: "2", label: "Casos de éxito: Lundin Gold y Gobernación de Norte de Santander" },
          { value: "4", label: "Historias de usuario: Barichara, ANLA, Federación Nacional de Cafeteros y ACT" },
          { value: "2", label: "Países: Colombia y Ecuador" }
        ]
      },
      en: {
        title: "15+ success stories that built brand, trust and community",
        summary: "Turning geospatial analytics projects into business stories for non-technical audiences.",
        headline: "Two countries, six stories",
        tags: ["Storytelling", "Video", "B2B"],
        challenge: "Product communication said nothing to the person who decides: the value was in the client's outcome, not in the feature.",
        roleText: "I produced the region's success stories and user stories in written and video form, including the Norte de Santander regional government teaser and the risk-management promo in Ecuador.",
        process: [
          { n: "01", title: "Interview and focus", body: "One conversation with the client to find the decision that changed, not the feature list." },
          { n: "02", title: "Success stories", body: "Lundin Gold in Ecuador and the Norte de Santander regional government in Colombia." },
          { n: "03", title: "User stories", body: "Barichara, ANLA, the National Coffee Growers Federation and ACT." },
          { n: "04", title: "Activation", body: "The stories feed campaigns, events and spokesperson work as evidence, not as loose assets." }
        ],
        result: "A body of reputational evidence available to sales and spokesperson teams, with a written and a video version of every story.",
        metrics: [
          { value: "2", label: "Success stories: Lundin Gold and Norte de Santander" },
          { value: "4", label: "User stories: Barichara, ANLA, Coffee Growers Federation, ACT" },
          { value: "2", label: "Countries: Colombia and Ecuador" }
        ]
      }
    },
    {
      slug: "chatbot-carola", client: "Salitre Mágico", year: "2021 – 2022", slot: "case-carola", n: "04", illo: "chat",
      es: {
        title: "Carola: el primer chatbot con personalidad de Salitre Mágico",
        summary: "Diseño del flujo conversacional del primer asistente automático del parque, en web y WhatsApp, para descargar un canal telefónico saturado.",
        headline: "El parque recibía +20 llamadas por hora",
        tags: ["Diseño conversacional", "Automatización", "Experiencia de cliente"],
        challenge: "El teléfono era el único canal disponible y el parque recibía más de veinte llamadas por hora, la mayoría por preguntas repetidas: horarios, precios, atracciones cerradas. Había que automatizar la información y controlar el acceso a un agente humano sin que el visitante sintiera un muro.",
        roleText: "Con el proveedor IT Cloud Services diseñé el esquema inicial del chatbot: elegí su nombre y su diseño como coordinadora, construí el mapa de flujo conversacional y quedé a cargo de su funcionamiento, sus métricas y sus mejoras.",
        process: [
          { n: "01", title: "Árbol de decisiones", body: "Bienvenida y datos personales, y de ahí un menú con compras, preguntas frecuentes, cambios, devoluciones, PQRS y módulos comerciales para fiestas infantiles y eventos corporativos." },
          { n: "02", title: "Dos canales, dos lenguajes", body: "En la web, un flujo conversacional de texto. En WhatsApp, piezas gráficas que facilitaban la comunicación y diversificaban la experiencia." },
          { n: "03", title: "Escalamiento humano", body: "Conexión con un supervisor que tomaba las decisiones y dos analistas de contacto operativo; más adelante, un canal propio para recepción." },
          { n: "04", title: "Mejora continua", body: "Actualización diaria, semanal y mensual de precios y datos variables, y lectura de los menús más elegidos para optimizar opciones e información." }
        ],
        result: "Carola canalizó a los usuarios según su intención —información, compra o PQRS— y se personalizó con el key visual del Festival del Terror en sus ediciones de 2021 y 2022 para mantener la coherencia con la campaña.",
        metrics: [
          { value: "+20", label: "Llamadas por hora que recibía el único canal disponible" },
          { value: "2", label: "Canales del chatbot: página web y WhatsApp" },
          { value: "2", label: "Ediciones del Festival del Terror con versión propia" }
        ]
      },
      en: {
        title: "Carola: Salitre Mágico's first chatbot with a personality",
        summary: "Conversational design for the park's first automated assistant, on web and WhatsApp, to relieve a saturated phone line.",
        headline: "The park took 20+ calls an hour",
        tags: ["Conversation design", "Automation", "Customer experience"],
        challenge: "The phone was the only channel available and the park received more than twenty calls an hour, mostly repeat questions: opening hours, prices, closed rides. Information had to be automated and access to a human agent managed — without the visitor hitting a wall.",
        roleText: "With the vendor IT Cloud Services I designed the chatbot's initial scheme: as coordinator I chose its name and design, built the conversational flow map, and owned its operation, metrics and improvements.",
        process: [
          { n: "01", title: "Decision tree", body: "Welcome and personal details, then a menu covering purchases, FAQs, changes, refunds, complaints and commercial modules for kids' parties and corporate events." },
          { n: "02", title: "Two channels, two languages", body: "On the web, a text conversation. On WhatsApp, graphic assets that eased communication and varied the experience." },
          { n: "03", title: "Human escalation", body: "Connected to a supervisor who made decisions and two analysts handling operational contact; later, a dedicated channel for reception." },
          { n: "04", title: "Continuous improvement", body: "Daily, weekly and monthly updates to prices and variable data, and reading the most-chosen menus to optimize options and content." }
        ],
        result: "Carola routed users by intent — information, purchase or complaint — and was restyled with the Festival del Terror key visual in its 2021 and 2022 editions to stay consistent with the campaign.",
        metrics: [
          { value: "20+", label: "Calls per hour on the only channel available" },
          { value: "2", label: "Chatbot channels: website and WhatsApp" },
          { value: "2", label: "Festival del Terror editions with a custom version" }
        ]
      }
    },
    {
      slug: "indice-govtech", client: "CAF – Banco de Desarrollo de América Latina", year: "2020", slot: "case-govtech", n: "05",
      img: "assets/caf-visualizador-govtech.png", illo: "screen", screenUrl: "govtechindex.org · The GovTech Index 2020",
      gallery: [
        { src: "assets/caf-policy-brief-12.png", es: "Policy Brief #12 · transformación digital del sector público", en: "Policy Brief #12 · digital transformation of the public sector" },
        { src: "assets/caf-infografia-espana.png", es: "Infografía de país · España", en: "Country infographic · Spain" },
        { src: "assets/caf-infografia-brasil.png", es: "Infografía de país · Brasil", en: "Country infographic · Brazil" },
        { src: "assets/caf-infografia-uruguay.png", es: "Infografía de país · Uruguay", en: "Country infographic · Uruguay" }
      ],
      es: {
        title: "El primer Índice GovTech de Iberoamérica, contado para que se entienda",
        summary: "Contenido ejecutivo, visualizador e infografías del primer índice que midió la preparación de los ecosistemas GovTech de la región.",
        headline: "Publicación oficial en dos idiomas",
        tags: ["Contenido ejecutivo", "Visualización de datos", "Sector público"],
        challenge: "El ecosistema GovTech —gobiernos trabajando con startups, scale-ups y mipymes que usan datos y tecnología para resolver retos públicos— era un tema nuevo y técnico. El índice tenía que servir a dos frentes a la vez: generar conocimiento interno y sostener la estrategia externa con los oficiales de México, Brasil, Argentina y Colombia.",
        roleText: "Definí el estilo, el diseño y la organización general del visualizador del índice y de las infografías por país. Generé las infografías del documento oficial para Latinoamérica, España y Portugal en español e inglés, redacté y corregí policy briefs, y preparé materiales para presentaciones ejecutivas y reuniones con alcaldes, presidentes y altos funcionarios.",
        process: [
          { n: "01", title: "Entender el tema", body: "Traducir un ecosistema técnico y nuevo a un lenguaje que un tomador de decisiones público pudiera usar en una reunión." },
          { n: "02", title: "Estructura del visualizador", body: "Estilo, diseño y organización general del visualizador, con una lectura por país." },
          { n: "03", title: "Infografías y policy briefs", body: "Resúmenes por país y del documento oficial, en español e inglés, más redacción y corrección de estilo." },
          { n: "04", title: "Divulgación", body: "Blogs, boletines internos y externos, eventos virtuales durante la pandemia y materiales para vocerías de alto nivel." }
        ],
        result: "El documento oficial y el visualizador fueron el hito de mayor alcance del proyecto, y sostuvieron el posicionamiento interno y externo de la transformación digital del Estado desde la Dirección de Innovación Digital.",
        metrics: [
          { value: "4", label: "Países en la estrategia externa: México, Brasil, Argentina y Colombia" },
          { value: "2", label: "Idiomas de la publicación oficial: español e inglés" },
          { value: "1º", label: "Índice GovTech para Latinoamérica, España y Portugal" }
        ]
      },
      en: {
        title: "Ibero-America's first GovTech Index, told so it makes sense",
        summary: "Executive content, data visualizer and infographics for the first index measuring the readiness of the region's GovTech ecosystems.",
        headline: "Official publication in two languages",
        tags: ["Executive content", "Data visualization", "Public sector"],
        challenge: "The GovTech ecosystem — governments working with startups, scale-ups and SMEs that use data and technology to solve public challenges — was a new, technical subject. The index had to serve two fronts at once: internal knowledge and the external strategy with country officials in Mexico, Brazil, Argentina and Colombia.",
        roleText: "I defined the style, design and overall structure of the index visualizer and the country infographics. I produced the infographics for the official Latin America, Spain and Portugal report in Spanish and English, wrote and edited policy briefs, and prepared materials for executive presentations and meetings with mayors, presidents and senior officials.",
        process: [
          { n: "01", title: "Understanding the subject", body: "Translating a new, technical ecosystem into language a public decision-maker could use in a meeting." },
          { n: "02", title: "Visualizer structure", body: "Style, design and overall organization of the visualizer, with a country-level read." },
          { n: "03", title: "Infographics and policy briefs", body: "Country and report summaries in Spanish and English, plus writing and copy editing." },
          { n: "04", title: "Outreach", body: "Blogs, internal and external newsletters, virtual events during the pandemic, and materials for high-level spokespeople." }
        ],
        result: "The official report and the visualizer were the project's highest-reach milestone, supporting the internal and external positioning of digital government from the Digital State Innovation Directorate.",
        metrics: [
          { value: "4", label: "Countries in the external strategy: Mexico, Brazil, Argentina, Colombia" },
          { value: "2", label: "Languages of the official publication: Spanish and English" },
          { value: "1st", label: "GovTech Index for Latin America, Spain and Portugal" }
        ]
      }
    },
    {
      slug: "planeta-esri", client: "Esri", year: "2023 – 2026", slot: "case-planeta", n: "06", img: "assets/proyecto-planeta-esri.jpg",
      es: {
        title: "Llevar la marca a las regiones: tecnología que llega al aula",
        summary: "Planeta Esri, un evento para estudiantes y docentes. Ediciones 2023, 2024 y 2025 en seis ciudades.",
        headline: "1.000 estudiantes en 6 ciudades",
        tags: ["Eventos educativos", "Activaciones", "Coordinación"],
        challenge: "El evento buscaba acercar los sistemas de información geográfica a estudiantes y docentes, y necesitaba una razón para participar más allá de la asistencia.",
        roleText: "Participé como analista y creativa hasta 2024 y como coordinadora de los eventos en 2025. En 2023 propuse las activaciones que llevaron el evento por encima de su meta en Bogotá.",
        process: [
          { n: "01", title: "Activaciones", body: "Propuesta de activaciones que dieran al estudiante una razón concreta para participar." },
          { n: "02", title: "Alcance nacional", body: "Bogotá, Cali, Bucaramanga, Quindío, Barranquilla, Medellín y Quito." },
          { n: "03", title: "Coordinación", body: "En 2025, coordinación de los eventos de las ciudades asignadas: Cali y Medellín." },
          { n: "04", title: "Cumplimiento", body: "Lectura de metas por ciudad para entender dónde el formato funcionaba y dónde no." }
        ],
        result: "En 2023 las activaciones incrementaron en 20% la meta de 250 estudiantes en Bogotá, con una participación total de 1.000 estudiantes en seis ciudades. Medellín llegó al 61% de cumplimiento: un evento que nunca antes había cumplido su meta.",
        metrics: [
          { value: "1.000", label: "Estudiantes participantes en total" },
          { value: "6", label: "Ciudades: Bogotá, Cali, Bucaramanga, Quindío, Barranquilla y Medellín" },
          { value: "+20%", label: "Sobre la meta de 250 estudiantes en Bogotá (2023)" }
        ]
      },
      en: {
        title: "Taking the brand to the regions: technology that reaches the classroom",
        summary: "Planeta Esri, an event for students and teachers. 2023, 2024 and 2025 editions across six cities.",
        headline: "1,000 students in 6 cities",
        tags: ["Education events", "Activations", "Coordination"],
        challenge: "The event set out to bring geographic information systems closer to students and teachers, and needed a reason to take part beyond simply attending.",
        roleText: "I took part as analyst and creative through 2024 and as event coordinator in 2025. In 2023 I proposed the activations that took the event past its Bogotá target.",
        process: [
          { n: "01", title: "Activations", body: "Activations designed to give students a concrete reason to take part." },
          { n: "02", title: "National reach", body: "Bogotá, Cali, Bucaramanga, Quindío, Barranquilla, Medellín and Quito." },
          { n: "03", title: "Coordination", body: "In 2025, coordinating the events in the assigned cities: Cali and Medellín." },
          { n: "04", title: "Target reading", body: "Reviewing targets city by city to understand where the format worked and where it didn't." }
        ],
        result: "In 2023 the activations pushed the 250-student Bogotá target up by 20%, with 1,000 students taking part across six cities. Medellín reached 61% of its target — an event that had never met it before.",
        metrics: [
          { value: "1,000", label: "Students taking part in total" },
          { value: "6", label: "Cities: Bogotá, Cali, Bucaramanga, Quindío, Barranquilla, Medellín" },
          { value: "+20%", label: "Above the 250-student Bogotá target (2023)" }
        ]
      }
    }
    ,{
      slug: "conversion-a-contenido", client: "Scala Learning", year: "2022 – 2023", slot: "case-scala", n: "—", secondary: true,
      es: {
        title: "Posicionar y vender educación virtual: contenido que convierte",
        summary: "Un objetivo de aceleración del funnel convertido en una estrategia de contenido conectada con pauta, redes y referidos.",
        headline: "Matrículas virtuales de Uniminuto",
        tags: ["Email marketing", "Funnel", "Estrategia de contenido"],
        challenge: "El encargo inicial era acelerar el movimiento del funnel con acciones de email marketing, SMS y WhatsApp. Visto solo así, el contenido quedaba reducido a un disparador de mensajes.",
        roleText: "Además de operar los canales de conversión, conecté los mensajes con pauta y redes sociales, y apalanqué programas de referidos y promociones adicionales para sostener la meta de matrículas virtuales de los programas de Uniminuto virtual.",
        process: [
          { n: "01", title: "Canales de conversión", body: "Email marketing, SMS y WhatsApp trabajando sobre la etapa de decisión." },
          { n: "02", title: "Mensajes conectados", body: "Los mismos mensajes en pauta y redes, no piezas sueltas por canal." },
          { n: "03", title: "Referidos y promociones", body: "Programas de referidos y promociones adicionales, con mensajes cercanos que sostuvieran la conversión." },
          { n: "04", title: "Calendario", body: "Uso de los timings especiales del año como estructura de la comunicación." }
        ],
        result: "Antes de salir de la organización levanté una propuesta de influenciadores, entendiendo el poder de la recomendación para aumentar y cumplir el objetivo de ventas de matrículas virtuales.",
        metrics: [
          { value: "3", label: "Canales de conversión: email, SMS y WhatsApp" },
          { value: "1", label: "Propuesta de influenciadores levantada al cierre" },
          { value: "—", label: "Tasa de conversión sin métrica publicable" }
        ]
      },
      en: {
        title: "Positioning and selling online education: content that converts",
        summary: "A funnel-acceleration brief turned into a content strategy connected to paid media, social and referrals.",
        headline: "Uniminuto online enrollments",
        tags: ["Email marketing", "Funnel", "Content strategy"],
        challenge: "The initial brief was to accelerate funnel movement through email, SMS and WhatsApp. Framed that way, content was reduced to a message trigger.",
        roleText: "Beyond running the conversion channels, I connected the messaging to paid media and social, and leveraged referral programs and added promotions to sustain the online enrollment target for Uniminuto's virtual programs.",
        process: [
          { n: "01", title: "Conversion channels", body: "Email marketing, SMS and WhatsApp working the decision stage." },
          { n: "02", title: "Connected messaging", body: "The same messages across paid and social, not loose per-channel assets." },
          { n: "03", title: "Referrals and promotions", body: "Referral programs and added promotions, with close, human messaging to sustain conversion." },
          { n: "04", title: "Calendar", body: "Using the year's key moments as the structure of the communication." }
        ],
        result: "Before leaving the organization I put forward an influencer proposal, understanding the power of recommendation to grow and meet the online enrollment sales target.",
        metrics: [
          { value: "3", label: "Conversion channels: email, SMS, WhatsApp" },
          { value: "1", label: "Influencer proposal raised at close" },
          { value: "—", label: "Conversion rate: no publishable metric" }
        ]
      }
    },
    {
      slug: "podcast-hablemos-naturalmente", client: "Esri · MP Comunicaciones, Lighthouse", year: "2025", slot: "case-podcast", n: "—", secondary: true,
      es: {
        title: "Segunda temporada de Hablemos Naturalmente",
        summary: "Acompañar la producción del podcast de sostenibilidad y llevarlo a una experiencia multicanal.",
        headline: "Audiencia sostenida entre temporadas",
        tags: ["Podcast", "Sostenibilidad", "Multicanal"],
        challenge: "Entre la primera y la segunda temporada el podcast tuvo un silencio importante. El reto era retomar sin perder la audiencia que ya lo escuchaba.",
        roleText: "Acompañé la producción con MP Comunicaciones, la gerencia de sostenibilidad y la agencia Lighthouse: validación de la parrilla de contenidos, evento de relacionamiento, material POP, estrategias con las organizaciones participantes y actualización de los canales de la marca.",
        process: [
          { n: "01", title: "Parrilla de contenidos", body: "Validación de la parrilla pensando en el crecimiento del podcast, no solo en llenar episodios." },
          { n: "02", title: "Relacionamiento", body: "Un evento y estrategias conjuntas con las organizaciones que participaban en la temporada." },
          { n: "03", title: "Divulgación", body: "Material POP y actualización de los canales de Esri para sostener la conversación entre episodios." },
          { n: "04", title: "Multicanal", body: "Llevar el podcast más allá del audio: piezas, canales propios y activaciones alrededor de cada tema." }
        ],
        result: "La temporada se retomó manteniendo una audiencia importante a pesar del silencio entre temporadas, con el podcast integrado a los canales de la marca.",
        metrics: [
          { value: "2ª", label: "Temporada acompañada de principio a fin" },
          { value: "3", label: "Aliados en producción: MP Comunicaciones, sostenibilidad y Lighthouse" },
          { value: "—", label: "Métricas de escucha por documentar" }
        ]
      },
      en: {
        title: "Second season of Hablemos Naturalmente",
        summary: "Supporting the production of the sustainability podcast and taking it into a multichannel experience.",
        headline: "Audience held between seasons",
        tags: ["Podcast", "Sustainability", "Multichannel"],
        challenge: "There was a long silence between the first and second seasons. The challenge was resuming without losing the audience already listening.",
        roleText: "I supported production alongside MP Comunicaciones, the sustainability practice and the agency Lighthouse: validating the content lineup, a relationship-building event, POP materials, strategies with participating organizations, and updates across the brand's channels.",
        process: [
          { n: "01", title: "Content lineup", body: "Validating the lineup for the podcast's growth, not just to fill episodes." },
          { n: "02", title: "Relationships", body: "An event and joint strategies with the organizations taking part in the season." },
          { n: "03", title: "Outreach", body: "POP materials and updates to Esri's channels to keep the conversation alive between episodes." },
          { n: "04", title: "Multichannel", body: "Taking the podcast beyond audio: assets, owned channels and activations around each topic." }
        ],
        result: "The season resumed while holding a substantial audience despite the gap, with the podcast integrated into the brand's channels.",
        metrics: [
          { value: "2nd", label: "Season supported end to end" },
          { value: "3", label: "Production partners: MP Comunicaciones, sustainability, Lighthouse" },
          { value: "—", label: "Listening metrics to be documented" }
        ]
      }
    },
  ],
  stats: {
    es: [
      { value: "+126%", label: "Creció la Comunidad Esri de Colombia y Ecuador en 2025" },
      { value: "80%", label: "NPS sostenido en la estrategia omnicanal de Salitre Mágico" },
      { value: "5", label: "Canales de atención conectados en una sola experiencia" },
      { value: "1.000", label: "Estudiantes en seis ciudades con Planeta Esri" }
    ],
    en: [
      { value: "+126%", label: "Growth of Esri's Colombia and Ecuador community in 2025" },
      { value: "80%", label: "NPS sustained in Salitre Mágico's omnichannel strategy" },
      { value: "5", label: "Service channels connected into one experience" },
      { value: "1,000", label: "Students across six cities with Planeta Esri" }
    ]
  },
  skills: {
    es: ["Estrategia de contenidos", "Identidad verbal y tono de voz", "Campañas integradas", "Estrategia de comunidad", "Diseño conversacional", "Copywriting", "UX writing", "SEO on-page", "AEO", "IA generativa aplicada", "Storytelling", "HubSpot", "Pardot", "Salesforce", "Email marketing", "Eventos B2B", "Scrum", "Coordinación de agencias", "Español nativo", "Inglés B1+"],
    en: ["Content strategy", "Verbal identity & tone of voice", "Integrated campaigns", "Community strategy", "Conversation design", "Copywriting", "UX writing", "On-page SEO", "AEO", "Applied generative AI", "Storytelling", "HubSpot", "Pardot", "Salesforce", "Email marketing", "B2B events", "Scrum", "Agency management", "Native Spanish", "English B1+"]
  },
  jobs: {
    es: [
      { dates: "Abr. 2023 — Presente", place: "Colombia · Ecuador · Panamá", role: "Analista de Comunicaciones y Contenidos", company: "Esri", note: "Estrategia de contenidos, comunidad, campañas integradas y eventos. Coordino diseño, desarrollo web, redes y audiovisual junto a agencias externas." },
      { dates: "Sept. 2022 — Abr. 2023", place: "Bogotá", role: "Especialista de Conversiones", company: "Scala Learning", note: "Email marketing, SMS y WhatsApp conectados con pauta, redes y referidos para las matrículas virtuales de Uniminuto." },
      { dates: "Oct. 2021 — Sept. 2022", place: "Bogotá", role: "Coordinadora de Social Media y Experiencia", company: "Salitre Mágico", note: "Promovida a los seis meses. Estrategia omnicanal de cinco canales, el chatbot Carola y un NPS sostenido en 80%." },
      { dates: "Abr. — Oct. 2021", place: "Bogotá", role: "Analista de Social Media", company: "Salitre Mágico", note: "Respuesta en redes sociales y atención telefónica; diagnóstico del recorrido del cliente que originó la estrategia omnicanal." },
      { dates: "Feb. — Ago. 2020", place: "Bogotá", role: "Practicante de Comunicaciones", company: "CAF – Banco de Desarrollo de América Latina", note: "Contenido ejecutivo, infografías y policy briefs del primer Índice GovTech para Latinoamérica, España y Portugal." }
    ],
    en: [
      { dates: "Apr 2023 — Present", place: "Colombia · Ecuador · Panama", role: "Communications & Content Analyst", company: "Esri", note: "Content strategy, community, integrated campaigns and events. I coordinate design, web, social and video alongside external agencies." },
      { dates: "Sep 2022 — Apr 2023", place: "Bogotá", role: "Conversion Specialist", company: "Scala Learning", note: "Email, SMS and WhatsApp connected to paid media, social and referrals for Uniminuto's online enrollments." },
      { dates: "Oct 2021 — Sep 2022", place: "Bogotá", role: "Social Media & Experience Coordinator", company: "Salitre Mágico", note: "Promoted after six months. A five-channel omnichannel strategy, the Carola chatbot and NPS held at 80%." },
      { dates: "Apr — Oct 2021", place: "Bogotá", role: "Social Media Analyst", company: "Salitre Mágico", note: "Social media response and phone support; the customer-journey diagnosis that led to the omnichannel strategy." },
      { dates: "Feb — Aug 2020", place: "Bogotá", role: "Communications Intern", company: "CAF – Development Bank of Latin America", note: "Executive content, infographics and policy briefs for the first GovTech Index for Latin America, Spain and Portugal." }
    ]
  },
  certs: [
    { name: { es: "AEO – Optimización para motores de respuesta", en: "AEO – Answer Engine Optimization" }, org: "HubSpot Academy", date: { es: "Jul. 2026 · vigente hasta ago. 2028", en: "Jul 2026 · valid to Aug 2028" } },
    { name: { es: "UX Writing y UX Editing", en: "UX Writing & UX Editing" }, org: "Crehana", date: { es: "May. 2026", en: "May 2026" } },
    { name: { es: "Estrategia e inversión en ads y performance marketing", en: "Ads strategy & performance marketing" }, org: "Crehana", date: { es: "Oct. 2025", en: "Oct 2025" } },
    { name: { es: "Metodologías ágiles", en: "Agile methodologies" }, org: "Scrum Study", date: { es: "Jun. 2024", en: "Jun 2024" } },
    { name: { es: "Diplomado en Storytelling Estratégico", en: "Diploma in Strategic Storytelling" }, org: "Universidad EAN", date: { es: "Feb. 2024", en: "Feb 2024" } },
    { name: { es: "Customer Experience", en: "Customer Experience" }, org: "Coderhouse", date: { es: "Jul. 2022", en: "Jul 2022" } },
    { name: { es: "Diplomado: Instagram para el desarrollo de marcas", en: "Diploma: Instagram for brand building" }, org: "Politécnico Superior de Colombia", date: { es: "Abr. — may. 2022", en: "Apr — May 2022" } },
    { name: { es: "Diplomado: CRM, gerencia de relaciones con clientes", en: "Diploma: CRM & customer relationship management" }, org: "Politécnico Superior de Colombia", date: { es: "Mar. — abr. 2021", en: "Mar — Apr 2021" } },
    { name: { es: "Diplomado: Marketing digital", en: "Diploma: Digital marketing" }, org: "Politécnico Superior de Colombia", date: { es: "Feb. — mar. 2021", en: "Feb — Mar 2021" } }
  ]
};
