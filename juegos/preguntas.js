/* =====================================================
   PISCINAS DE PREGUNTAS — CIBERGAME b720
   Dos piscinas independientes:
   · POOL_CIBERGAME2 → Cibergame 2 (Protocolo de Seguridad)
   · POOL_CIBERGAME3 → Cibergame 3 (La Torre Ciberresiliente)
   Categorías: facil · media · dificil · extrema
   Cada juego tiene 64 preguntas (24+16+16+8) → 8 rondas de 8
   exactas, sin repetir, recorriendo TODAS las preguntas.

   Realismo b720 (ver memoria b720-entorno-it-soporte):
   · Público = arquitectos (no IT): nada de procedimientos internos de IT.
   · ESKAPE (soporte externo) solo por el grupo de chat de Teams; NO llama.
   · Licencias: las da Fernando (jefe de IT) por el chat de ESKAPE.
   · Archivos: solo Google Drive y Gmail (nunca WeTransfer ni USB personales).
   · Acceso a oficina: por recepción (Inés abre con mando), no hay tarjetas.
   Estilo de opciones: la correcta NO es siempre la más larga, los
   distractores son plausibles y hay 1 opción de broma por pregunta.
   La correcta está en el índice 0 y se baraja al mostrarse.
   ===================================================== */

/* ---------------------------------------------------
   PISCINA CIBERGAME 2 — PROTOCOLO DE SEGURIDAD
   --------------------------------------------------- */
const POOL_CIBERGAME2 = [

  /* ───── FÁCIL (24) ───── */
  {
    cat: "facil", tema: "Phishing",
    pregunta: "Un email de «soporte-microsoft365@gmail.com» te pide la contraseña «por mantenimiento». ¿Qué haces?",
    opciones: [
      "No responder y reportarlo a IT",
      "Enviar la contraseña, parece oficial",
      "Responder pidiendo más detalles del mantenimiento",
      "Cambiarla por «1234» y mandársela, así no pierdes nada"
    ],
    correcta: 0,
    explicacion: "Microsoft jamás escribe desde un Gmail ni pide contraseñas por correo. Ante la duda, no respondas y reporta."
  },
  {
    cat: "facil", tema: "Contraseñas",
    pregunta: "¿Cuál de estas contraseñas es más segura para tu cuenta del estudio?",
    opciones: [
      "Tr&mpeta-Lila_42!",
      "b720madrid",
      "FerminVazquez2026",
      "contraseña (en minúsculas, para despistar)"
    ],
    correcta: 0,
    explicacion: "Longitud, mezcla de caracteres y nada de datos del estudio. Lo primero que prueba un atacante es el nombre de la empresa."
  },
  {
    cat: "facil", tema: "Buenas prácticas",
    pregunta: "Te levantas a una reunión y dejas el equipo encendido. ¿Qué haces antes de irte?",
    opciones: [
      "Bloquearlo con Win + L",
      "Nada, vuelves enseguida",
      "Apagar solo el monitor",
      "Pedir al de al lado que lo vigile como un guardia jurado"
    ],
    correcta: 0,
    explicacion: "Bloquear cuesta un segundo y evita que cualquiera que pase use tu correo y tus proyectos. La medida más rentable que existe."
  },
  {
    cat: "facil", tema: "Adjuntos",
    pregunta: "Un desconocido te manda «Factura_pendiente» con un adjunto. No esperabas ninguna factura. ¿Qué haces?",
    opciones: [
      "No abrir el adjunto y reportarlo",
      "Abrirlo rápido para ver si debéis dinero",
      "Reenviarlo a administración sin abrirlo",
      "Imprimirlo y colgarlo en el corcho por si acaso"
    ],
    correcta: 0,
    explicacion: "La «factura inesperada» es de los cebos más usados para colar malware. Si no la esperabas y no conoces al remitente, no la abras."
  },
  {
    cat: "facil", tema: "Contraseñas",
    pregunta: "¿Es buena idea usar la misma contraseña para el correo del estudio y para tus cuentas personales?",
    opciones: [
      "No: si se filtra una, caen todas",
      "Sí, así no se te olvida",
      "Sí, si es muy larga da igual",
      "Sí, pero le cambias una letra y ya es otra distinta"
    ],
    correcta: 0,
    explicacion: "Las filtraciones de webs ocurren cada semana. Reutilizar contraseña convierte una filtración cualquiera en la llave de todo. Usa un gestor."
  },
  {
    cat: "facil", tema: "Contraseñas",
    pregunta: "Un compañero tiene la contraseña en un post-it pegado al monitor. ¿Cuál es el problema?",
    opciones: [
      "Cualquier visita que pase por su mesa puede leerla",
      "Ninguno, sois todos de confianza",
      "Solo que el post-it queda feo",
      "Que el pegamento podría estropear la pantalla"
    ],
    correcta: 0,
    explicacion: "Por el estudio pasa mucha gente (clientes, mensajeros, técnicos). Una contraseña a la vista es una puerta abierta. Para no memorizar: gestor."
  },
  {
    cat: "facil", tema: "Soporte ESKAPE",
    pregunta: "No te arranca AutoCAD y necesitas ayuda del soporte (ESKAPE). ¿Cómo se pide?",
    opciones: [
      "Por el grupo de Teams de ESKAPE: describes el problema y te contestan",
      "Buscando su teléfono en Google y llamando",
      "Mandando un email a una dirección que encontraste en un foro",
      "Gritando «¡ESKAPE!» tres veces frente al router"
    ],
    correcta: 0,
    explicacion: "En b720 el soporte de ESKAPE se gestiona solo por su grupo de Teams: pones el problema y alguien te atiende por privado. Es el único canal."
  },
  {
    cat: "facil", tema: "Suplantación",
    pregunta: "Por el chat te escribe una cuenta nueva que dice ser «IT b720» y pide que entres en un enlace para «revalidar tu cuenta hoy». ¿Qué haces?",
    opciones: [
      "Desconfiar: IT escribe desde sus cuentas de siempre y le conoces; verificar antes de tocar el enlace",
      "Entrar rápido, no quieres quedarte sin cuenta",
      "Pedir que te lo manden también por correo",
      "Contestar con tu contraseña para ahorrar pasos"
    ],
    correcta: 0,
    explicacion: "En el estudio se conoce a los de IT fijos. Una cuenta nueva con prisas y enlaces es suplantación: fíjate en la cuenta, no en el nombre, y verifica."
  },
  {
    cat: "facil", tema: "Cultura de reporte",
    pregunta: "Has hecho clic sin pensar en un enlace sospechoso y luego has cerrado la página. ¿Y ahora?",
    opciones: [
      "Avisar a IT igualmente y contar lo que pasó",
      "No decir nada, total no pasó nada",
      "Borrar el historial para que no quede rastro",
      "Apagar el equipo y fingir demencia"
    ],
    correcta: 0,
    explicacion: "Picar le pasa a cualquiera; ocultarlo es lo único grave. Avisar a tiempo permite revisar el equipo y proteger al resto. Nadie te va a regañar por reportar."
  },
  {
    cat: "facil", tema: "Red de invitados",
    pregunta: "Un cliente en una reunión te pide el wifi para su portátil. ¿Qué le das?",
    opciones: [
      "El acceso a la red de invitados, nunca la red interna",
      "La del wifi interno, es de confianza",
      "Tu equipo, para que mire su correo",
      "La contraseña del wifi escrita en una servilleta firmada"
    ],
    correcta: 0,
    explicacion: "El portátil de un invitado puede venir infectado sin que él lo sepa. La red de invitados da internet sin tocar servidores ni carpetas del estudio."
  },
  {
    cat: "facil", tema: "Juice jacking",
    pregunta: "En el aeropuerto, de camino a una presentación, te queda poca batería y ves un puerto USB público. ¿Qué haces?",
    opciones: [
      "Cargar con tu cargador en un enchufe normal",
      "Conectar el móvil al puerto USB, para eso está",
      "Conectar el portátil del trabajo, que aguanta más",
      "Pedir batería prestada a quien tenga cara de buena gente"
    ],
    correcta: 0,
    explicacion: "Un puerto USB público puede estar trucado para robar datos o colar malware («juice jacking»). Usa tu cargador y el enchufe de corriente."
  },
  {
    cat: "facil", tema: "Contraseñas",
    pregunta: "Alguien que dice ser de soporte te pide tu contraseña «para dejarte todo configurado». ¿Qué haces?",
    opciones: [
      "No darla: ni IT ni el soporte necesitan nunca tu contraseña",
      "Dársela, es soporte y va a ayudarte",
      "Darle solo la mitad y la otra mitad luego",
      "Dársela cantada en voz alta para toda la oficina"
    ],
    correcta: 0,
    explicacion: "El soporte legítimo trabaja con sus propios permisos: jamás necesita tu contraseña. Que te la pidan es la señal de alarma más clara."
  },
  {
    cat: "facil", tema: "Remitente real",
    pregunta: "Un correo urgente firma como «Dirección b720», pero la dirección real es «direccion.b720@gmail-secure.com». ¿En qué te fijas?",
    opciones: [
      "En la dirección real, no en el nombre: ese dominio no es del estudio",
      "En el nombre mostrado, que pone Dirección b720",
      "En que la firma lleve el logo correcto",
      "En el horario al que llega, los malos solo trabajan de noche"
    ],
    correcta: 0,
    explicacion: "El nombre que se muestra lo pone quien envía: es trivial falsearlo. Lo que cuenta es la dirección real, y «gmail-secure.com» no es b720."
  },
  {
    cat: "facil", tema: "Cuentas personales",
    pregunta: "Un becario aún no tiene su usuario y te pide entrar con el tuyo «solo por hoy». ¿Qué haces?",
    opciones: [
      "No prestar tu cuenta: que IT le dé su acceso; todo quedaría a tu nombre",
      "Prestársela, total es un día",
      "Darle tu contraseña pero pedirle que no toque nada",
      "Dejarle tu sesión abierta y marcharte a comer"
    ],
    correcta: 0,
    explicacion: "Las cuentas son personales: lo que se haga con la tuya queda como tuyo. Que IT le cree su acceso; no es burocracia, es protegerte a ti."
  },
  {
    cat: "facil", tema: "Estafas web",
    pregunta: "Navegando salta una ventana enorme: «¡Has ganado un iPhone! Haz clic para reclamarlo». ¿Qué haces?",
    opciones: [
      "Cerrarla sin tocar nada",
      "Hacer clic, por si acaso es verdad",
      "Rellenar tus datos para que te lo envíen",
      "Llamar a casa para contar que te ha tocado un iPhone"
    ],
    correcta: 0,
    explicacion: "Nadie regala premios por navegar: detrás hay robo de datos o malware. Si no participaste en ningún sorteo, no hay premio."
  },
  {
    cat: "facil", tema: "Fraude de pagos",
    pregunta: "WhatsApp del «socio director»: «Estoy reunido, compra 500 € en tarjetas regalo y mándame los códigos. Urgente». ¿Qué haces?",
    opciones: [
      "No comprar nada y verificarlo con él por otro canal",
      "Comprarlas, es el director y corre prisa",
      "Comprar la mitad por si acaso",
      "Pedirle un selfie sujetando las tarjetas como prueba"
    ],
    correcta: 0,
    explicacion: "Pedir tarjetas regalo y sus códigos es una estafa clásica de suplantación de jefes: dinero imposible de rastrear. Urgencia + secreto = fraude."
  },
  {
    cat: "facil", tema: "Enlaces",
    pregunta: "Un correo trae un botón «Ver factura». ¿Cómo compruebas a dónde lleva de verdad?",
    opciones: [
      "Pasando el ratón por encima sin hacer clic y leyendo la URL",
      "Haciendo clic y, si es raro, cerrando rápido",
      "Fiándote del texto del botón, que pone «factura»",
      "Cerrando los ojos y dándole, que sea lo que Dios quiera"
    ],
    correcta: 0,
    explicacion: "El texto de un enlace puede decir una cosa y llevar a otra. Al pasar el cursor ves el destino real; si no cuadra con quien envía, no entres."
  },
  {
    cat: "facil", tema: "Dispositivos personales",
    pregunta: "Quieres pasar fotos de obra de tu móvil personal al equipo del estudio. ¿Cuál es la forma prudente?",
    opciones: [
      "Subirlas por el canal del estudio (Drive corporativo)",
      "Conectar tu USB personal directamente, es un momento",
      "Enchufar el móvil por cable al equipo del trabajo",
      "Pedirle el USB al primero que pase por el pasillo"
    ],
    correcta: 0,
    explicacion: "Mezclar dispositivos personales con los del estudio salta los controles y puede traer malware. Para mover archivos, usa Google Drive corporativo."
  },
  {
    cat: "facil", tema: "Actualizaciones",
    pregunta: "Windows o el antivirus te avisan de una actualización disponible. ¿Cuándo conviene instalarla?",
    opciones: [
      "Cuanto antes: tapan fallos de seguridad ya conocidos",
      "Nunca, las actualizaciones rompen cosas",
      "Solo si el equipo va lento",
      "El 29 de febrero, para que sea especial"
    ],
    correcta: 0,
    explicacion: "La mayoría de ataques explotan fallos ya corregidos. Actualizar pronto cierra esas puertas antes de que alguien las use contra ti."
  },
  {
    cat: "facil", tema: "Baiting (USB)",
    pregunta: "Encuentras un USB con la etiqueta «FOTOS OBRA» en la sala de reuniones. ¿Qué haces?",
    opciones: [
      "Entregarlo a IT sin conectarlo a ningún equipo",
      "Conectarlo a tu portátil para ver de quién es",
      "Conectarlo al equipo de un becario por si acaso",
      "Quedártelo, USB gratis es USB gratis"
    ],
    correcta: 0,
    explicacion: "Un USB «perdido» es un cebo clásico: puede ejecutar malware con solo conectarlo. No lo enchufes; entrégalo a IT."
  },
  {
    cat: "facil", tema: "Conceptos",
    pregunta: "¿Qué es exactamente el «phishing»?",
    opciones: [
      "Suplantar a alguien de confianza para robarte datos o credenciales",
      "Un virus que borra los planos de AutoCAD",
      "Una técnica para acelerar los renders",
      "Un deporte de pesca con caña en alta mar"
    ],
    correcta: 0,
    explicacion: "El phishing es ingeniería social: el atacante se hace pasar por alguien legítimo (banco, proveedor, IT) para que tú le entregues tus datos."
  },
  {
    cat: "facil", tema: "Móvil",
    pregunta: "Tu móvil de empresa no tiene PIN ni huella. ¿Cuál es el problema?",
    opciones: [
      "Si lo pierdes, quien lo encuentre entra a tu correo y apps del estudio",
      "Ninguno, así se desbloquea más rápido",
      "Solo es grave si lo pierdes en el extranjero",
      "Que sin PIN gasta más batería"
    ],
    correcta: 0,
    explicacion: "Un móvil sin bloqueo es tu identidad digital regalada: correo, apps corporativas, segundo factor. PIN o biometría es lo mínimo."
  },
  {
    cat: "facil", tema: "Sesiones",
    pregunta: "Usas un ordenador compartido de la sala de maquetas para mirar tu correo. Al terminar, ¿qué haces?",
    opciones: [
      "Cerrar la sesión y no guardar la contraseña en el navegador",
      "Dejarla abierta, mañana vuelves",
      "Minimizar la ventana, nadie mira",
      "Apagar el monitor y rezar"
    ],
    correcta: 0,
    explicacion: "En un equipo compartido, una sesión abierta es tu buzón a disposición del siguiente. Cierra sesión y rechaza el «¿guardar contraseña?»."
  },
  {
    cat: "facil", tema: "Licencias",
    pregunta: "Necesitas una licencia nueva de un programa. ¿Cuál es el camino correcto en b720?",
    opciones: [
      "Pedirla por el chat de ESKAPE; Fernando (IT) la asigna si hay",
      "Descargar un «activador» gratis de un foro",
      "Comprarla tú con tu tarjeta y pasar el ticket",
      "Usar la licencia de un amigo de otro estudio"
    ],
    correcta: 0,
    explicacion: "Las licencias las gestiona Fernando (jefe de IT) y se piden por el chat de ESKAPE. Ni activadores piratas ni licencias prestadas: son malware o ilegales."
  },

  /* ───── MEDIA (16) ───── */
  {
    cat: "media", tema: "Copias de seguridad",
    pregunta: "¿En qué consiste la regla «3-2-1» de copias de seguridad?",
    opciones: [
      "3 copias, en 2 soportes distintos, 1 fuera de la oficina",
      "3 discos, 2 contraseñas, 1 antivirus",
      "Copiar 3 veces al día, 2 de noche, 1 el finde",
      "3 carpetas en el escritorio con nombres distintos"
    ],
    correcta: 0,
    explicacion: "Tres copias, en dos tipos de soporte, y al menos una fuera del estudio o en la nube. Es lo que te salva si un ransomware cifra el servidor."
  },
  {
    cat: "media", tema: "MFA",
    pregunta: "¿Por qué conviene activar la verificación en dos pasos (MFA)?",
    opciones: [
      "Porque aunque roben tu contraseña, no entran sin el segundo factor",
      "Porque hace la contraseña más larga",
      "Porque cifra el disco automáticamente",
      "Porque así ya puedes usar «1234» tranquilo"
    ],
    correcta: 0,
    explicacion: "El MFA añade una segunda llave (móvil, app, huella). Si tu contraseña se filtra, el atacante se queda en la puerta."
  },
  {
    cat: "media", tema: "Software",
    pregunta: "Una web desconocida ofrece un plugin gratis de Revit que promete «renders 10 veces más rápidos». ¿Qué haces?",
    opciones: [
      "Instalarlo solo si está en la tienda o web oficial de Autodesk",
      "Instalarlo ya, 10x es 10x",
      "Probarlo antes en el equipo de un compañero",
      "Desactivar el antivirus para que no estorbe al instalar"
    ],
    correcta: 0,
    explicacion: "El software «milagro» de fuentes no oficiales es un vector de malware clásico. Si hay que apagar el antivirus para instalarlo, es una trampa."
  },
  {
    cat: "media", tema: "Malware",
    pregunta: "Te llega un adjunto llamado «Presupuesto_Obra.pdf.exe». ¿Cuál es el problema?",
    opciones: [
      "La doble extensión: es un ejecutable disfrazado de PDF",
      "Ninguno, los presupuestos llegan así",
      "Que el nombre es demasiado largo",
      "Que debería terminar en .dwg para abrirlo en AutoCAD"
    ],
    correcta: 0,
    explicacion: "Lo que cuenta es la última extensión: «.exe» es un programa. Windows oculta extensiones conocidas, así que un PDF puede ser en realidad un ejecutable."
  },
  {
    cat: "media", tema: "Suplantación de IT",
    pregunta: "Te llama alguien que dice ser «el nuevo de IT» y te pide instalar una herramienta de control remoto. No te suena de nada. ¿Qué haces?",
    opciones: [
      "No instalar nada y confirmarlo con IT por el canal de siempre",
      "Instalarla, ha dicho que es de IT",
      "Instalarla pero quedarte mirando la pantalla",
      "Pedirle que recite la lista de empleados para creerle"
    ],
    correcta: 0,
    explicacion: "En el estudio se conoce a los de IT fijos. Una llamada de un «nuevo» pidiendo control remoto es el guion clásico de estafa: verifica antes de instalar."
  },
  {
    cat: "media", tema: "Gestor de contraseñas",
    pregunta: "¿Qué aporta un gestor de contraseñas frente a memorizarlas o apuntarlas?",
    opciones: [
      "Genera y guarda una distinta por servicio; tú solo recuerdas la maestra",
      "Hace que ya no necesites contraseñas",
      "Manda tus contraseñas a IT por seguridad",
      "Te las lee en voz alta cuando las olvidas"
    ],
    correcta: 0,
    explicacion: "Resuelve el dilema imposible (únicas y fuertes vs. memorizarlas): genera una por servicio y las cifra. Tú solo proteges la maestra, con MFA."
  },
  {
    cat: "media", tema: "Quishing",
    pregunta: "En una feria hay carteles con un QR: «Escanea para el catálogo BIM gratis». ¿Qué haces?",
    opciones: [
      "Mirar la URL que abre el QR antes de continuar",
      "Escanearlo sin más, los QR son seguros",
      "Escanearlo con el móvil del trabajo, que tiene antivirus",
      "Escanear todos los QR de la feria a ver qué pasa"
    ],
    correcta: 0,
    explicacion: "Es «quishing»: pegar un QR malicioso encima del bueno cuesta céntimos. El móvil muestra la URL antes de abrirla: léela. Un QR es un enlace con disfraz."
  },
  {
    cat: "media", tema: "Reuniones",
    pregunta: "Vas a compartir pantalla en una videollamada con un cliente. ¿Qué haces antes?",
    opciones: [
      "Cerrar correo, chats y documentos de otros clientes; compartir solo la ventana necesaria",
      "Compartir el escritorio entero, es más cómodo",
      "Nada, el cliente es de confianza",
      "Poner un fondo de pantalla bonito y ya"
    ],
    correcta: 0,
    explicacion: "Notificaciones, presupuestos de otro cliente o chats internos pueden aparecer en plena demo. Comparte la ventana concreta, no todo el escritorio."
  },
  {
    cat: "media", tema: "Cifrado",
    pregunta: "Te roban el portátil del coche volviendo de la obra. ¿Qué impide que el ladrón lea los proyectos?",
    opciones: [
      "El cifrado de disco (BitLocker) más una contraseña fuerte",
      "La contraseña de Windows por sí sola",
      "Tener los archivos en carpetas ocultas",
      "Que el ladrón no sepa usar AutoCAD"
    ],
    correcta: 0,
    explicacion: "Sin cifrado, basta sacar el disco y leerlo en otro equipo: la contraseña de Windows no protege los datos. BitLocker hace el disco ilegible sin la clave."
  },
  {
    cat: "media", tema: "Compartir en Drive",
    pregunta: "Vas a compartir una carpeta de planos en Google Drive con un colaborador externo. ¿Cómo lo haces?",
    opciones: [
      "Compartir con su correo concreto y los permisos justos",
      "Poner «cualquiera con el enlace» para no complicarte",
      "Hacerla pública, total son solo planos",
      "Mandarle tu usuario y contraseña de Drive"
    ],
    correcta: 0,
    explicacion: "«Cualquiera con el enlace» significa que ese enlace, reenviado o filtrado, abre tus planos a quien sea. Comparte con personas concretas y permisos mínimos."
  },
  {
    cat: "media", tema: "Ransomware",
    pregunta: "¿Qué es exactamente un «ransomware»?",
    opciones: [
      "Malware que cifra tus archivos y pide un rescate por ellos",
      "Un programa que ralentiza el equipo para venderte RAM",
      "Un virus que solo afecta al correo",
      "Una app de pago para organizar carpetas"
    ],
    correcta: 0,
    explicacion: "El ransomware secuestra tus datos cifrándolos. Para un estudio significa perder proyectos enteros. La defensa: copias y prevención."
  },
  {
    cat: "media", tema: "Wi-Fi pública",
    pregunta: "En el aeropuerto necesitas enviar los planos finales al cliente y hay una wifi gratis «AEROPUERTO_FREE». ¿Qué haces?",
    opciones: [
      "Usar la VPN del estudio o compartir datos desde tu móvil",
      "Conectarte a la wifi gratis, es solo un envío",
      "Pedir la contraseña al de la cafetería",
      "Esperar a llegar a casa dentro de tres días"
    ],
    correcta: 0,
    explicacion: "Una wifi abierta puede estar monitorizada o ser falsa. Para datos de proyecto, usa la VPN del estudio o la red de datos de tu móvil."
  },
  {
    cat: "media", tema: "Spear phishing",
    pregunta: "Te llega por LinkedIn una oferta de trabajo irresistible con un adjunto «condiciones.zip». ¿Qué haces?",
    opciones: [
      "No abrir el ZIP y verificar la empresa por canales oficiales",
      "Abrirlo, las oportunidades no esperan",
      "Abrirlo en el equipo del estudio, que tiene antivirus",
      "Reenviarlo a tu jefe pidiendo aumento ya"
    ],
    correcta: 0,
    explicacion: "Las falsas ofertas de trabajo son una táctica documentada para infectar a empleados concretos. La ilusión baja las defensas igual que el miedo."
  },
  {
    cat: "media", tema: "Macros",
    pregunta: "Recibes unas mediciones en Excel que al abrirse piden «Habilitar contenido» para ver los datos. ¿Qué haces?",
    opciones: [
      "No habilitar: las macros ejecutan código; verificar antes el origen",
      "Habilitar, si no, no se ven las mediciones",
      "Habilitar con el antivirus abierto al lado",
      "Habilitar y, si explota, ya veremos"
    ],
    correcta: 0,
    explicacion: "«Habilitar contenido» ejecuta macros: programas dentro del documento, uno de los vectores de ransomware más usados. Si no las necesita, no las actives."
  },
  {
    cat: "media", tema: "Fraude de licencias",
    pregunta: "Un correo dice que tu licencia de Autodesk caduca y que pagues la renovación en un enlace. ¿Qué haces?",
    opciones: [
      "No pagar nada: la renovación se pide a Fernando por el chat de ESKAPE",
      "Pagar en el enlace para no quedarte sin programa",
      "Pagar pero pedir factura para protegerte",
      "Reenviarlo a todo el estudio para que paguen entre todos"
    ],
    correcta: 0,
    explicacion: "Las licencias en b720 las gestiona Fernando (IT) por el chat de ESKAPE: nunca se pagan en un enlace de un correo. Ese «pago urgente» es la estafa."
  },
  {
    cat: "media", tema: "Canal de archivos",
    pregunta: "Un técnico externo te pide que le mandes la carpeta del proyecto por tu WeTransfer personal. ¿Qué haces?",
    opciones: [
      "No usar WeTransfer: en b720 los archivos van por Google Drive/Gmail; comparte lo mínimo por ahí",
      "Subirlo a WeTransfer, es rápido y gratis",
      "Mandarlo desde tu Gmail personal, que es más cómodo",
      "Grabarlo en un USB y mandarlo por mensajero en moto"
    ],
    correcta: 0,
    explicacion: "En b720 el canal de archivos es solo Google Drive y Gmail corporativos. WeTransfer (y más el personal) deja los planos fuera de todo control."
  },

  /* ───── DIFÍCIL (16) ───── */
  {
    cat: "dificil", tema: "Typosquatting",
    pregunta: "Necesitas descargar DWG TrueView. ¿Cuál de estos dominios es el legítimo?",
    opciones: [
      "autodesk.com",
      "autodesk-downloads.com",
      "autodek.com",
      "autodesk.gratis-ya.net"
    ],
    correcta: 0,
    explicacion: "El typosquatting registra dominios casi idénticos (guiones, letras cambiadas, extensiones raras) para colarte descargas infectadas. Escribe tú la URL oficial."
  },
  {
    cat: "dificil", tema: "BEC",
    pregunta: "Un proveedor habitual te escribe desde su email REAL, con su firma y el hilo previo, y adjunta una factura con un IBAN «actualizado». ¿Qué haces?",
    opciones: [
      "Verificar el cambio de IBAN llamando a un número que ya tuvieras",
      "Pagar: el email es auténtico y el hilo también",
      "Responder al email preguntando si es correcto",
      "Pagar y, si era falso, que lo arregle el banco"
    ],
    correcta: 0,
    explicacion: "Es un BEC: el buzón del proveedor está hackeado, por eso todo parece legítimo. Responder no sirve (contesta el atacante). Un IBAN nuevo se verifica por otro canal."
  },
  {
    cat: "dificil", tema: "ClickFix",
    pregunta: "Buscando un error de AutoCAD, una web te pide «verificar que eres humano» pulsando Win+R y pegando lo que ya copió. ¿Qué haces?",
    opciones: [
      "No hacerlo: te dictan los pasos para que ejecutes tú su malware",
      "Hacerlo, los CAPTCHA modernos van así",
      "Hacerlo pero leyendo antes el comando",
      "Hacerlo en el equipo del becario para no arriesgar el tuyo"
    ],
    correcta: 0,
    explicacion: "Ninguna verificación humana pide abrir Ejecutar ni pegar comandos. El truco (ClickFix) hace que el malware lo lances tú. Cierra y reporta."
  },
  {
    cat: "dificil", tema: "Malvertising",
    pregunta: "Buscas «descargar visor DWG» y el PRIMER resultado es un anuncio con un dominio casi idéntico al oficial. ¿Cuál es el riesgo?",
    opciones: [
      "Los anuncios se compran: es malvertising; baja al resultado real o teclea la URL",
      "Ninguno, Google revisa los anuncios",
      "Solo si el anuncio tiene faltas de ortografía",
      "Que el anuncio tape la cookie de turno"
    ],
    correcta: 0,
    explicacion: "Comprar un anuncio que salga por encima del resultado real cuesta poco, y clonan webs de instaladores al píxel. El primer puesto pagado no es un aval."
  },
  {
    cat: "dificil", tema: "Buzón comprometido",
    pregunta: "Descubres en tu correo una regla de reenvío automático a una dirección externa que tú no creaste. ¿Qué significa?",
    opciones: [
      "Que comprometieron tu buzón: borrarla, cambiar contraseña, MFA y avisar a IT",
      "Es una función nueva de Gmail, ignorarla",
      "La creó IT para hacer copias",
      "Que el correo se aburre y reenvía solo"
    ],
    correcta: 0,
    explicacion: "Las reglas de reenvío ocultas son la táctica favorita tras robar un buzón: el atacante lo lee todo sin volver a entrar. Borrarla no basta: cierra la puerta."
  },
  {
    cat: "dificil", tema: "Adjuntos evasivos",
    pregunta: "Un correo de «licitación pública» adjunta los pliegos en un archivo .ISO. ¿Por qué es sospechoso?",
    opciones: [
      "Los .ISO esquivan filtros de antivirus de correo; nadie manda pliegos así",
      "No lo es, los pliegos van siempre en ISO",
      "Solo si pesa más de 10 MB",
      "Porque los ISO solo se abren en Marte"
    ],
    correcta: 0,
    explicacion: "Montar un .ISO ejecuta su contenido fuera del control de muchos filtros. Los documentos de obra van en PDF; un ISO inesperado es bandera roja."
  },
  {
    cat: "dificil", tema: "OSINT",
    pregunta: "El estudio sube fotos a Instagram donde se ven pantallas con planos, nombres de clientes y post-its. ¿Cuál es el riesgo?",
    opciones: [
      "Que recopilen esos detalles (OSINT) para ataques dirigidos convincentes",
      "Ninguno, son fotos de ambiente",
      "Solo el copyright de los planos",
      "Que la competencia copie la decoración de la oficina"
    ],
    correcta: 0,
    explicacion: "Un engaño convincente se fabrica con datos reales: proyectos, clientes, software, hasta nombres en post-its. Revisa qué se ve antes de publicar."
  },
  {
    cat: "dificil", tema: "Malware en CAD",
    pregunta: "¿Por qué un simple bloque .dwg bajado de internet puede ser peligroso, aunque «solo sea un dibujo»?",
    opciones: [
      "Puede traer rutinas AutoLISP que se ejecutan solas al abrir el dibujo",
      "No puede serlo, un .dwg es solo geometría",
      "Solo si pesa más de 50 MB",
      "Únicamente si lo abres un martes"
    ],
    correcta: 0,
    explicacion: "Existen virus específicos de AutoCAD: scripts AutoLISP que viajan con el dibujo, se autocargan y se copian a tus proyectos. Usa fuentes de bloques de confianza."
  },
  {
    cat: "dificil", tema: "Notificaciones falsas",
    pregunta: "Salta un aviso «Windows: su equipo está infectado, haga clic aquí». IT ve que viene de una web de bloques visitada días atrás. ¿Qué era?",
    opciones: [
      "Notificaciones que esa web pidió permiso para enviarte: falsas alertas; revocar permiso y cookies",
      "Windows avisando de una infección real",
      "El antivirus del estudio trabajando",
      "Un recordatorio de actualizar AutoCAD"
    ],
    correcta: 0,
    explicacion: "Caso real del estudio: una web pidió «Permitir notificaciones» y desde entonces mandaba alertas disfrazadas de Windows. Se arregla quitando el permiso y las cookies."
  },
  {
    cat: "dificil", tema: "Contraseñas en el navegador",
    pregunta: "IT insiste en no guardar las contraseñas del trabajo en el navegador. ¿Por qué tanto empeño?",
    opciones: [
      "Un infostealer exporta en segundos todo lo guardado en el navegador; un gestor con MFA resiste",
      "Manía de IT: el navegador las cifra y basta",
      "Porque el navegador solo guarda diez",
      "Porque ralentizan el arranque de Chrome"
    ],
    correcta: 0,
    explicacion: "Robar el almacén del navegador es la primera acción de cualquier infostealer: un archivo, un segundo, todas tus cuentas. El «¿guardar contraseña?» es justo lo que explota."
  },
  {
    cat: "dificil", tema: "Ataque homógrafo",
    pregunta: "Recibes un enlace a «autodesk.com» que pasa el filtro visual… pero la «o» es un carácter cirílico idéntico. ¿Cómo te proteges?",
    opciones: [
      "No seguir enlaces a webs críticas: teclear la URL a mano o usar favoritos",
      "Es un error tipográfico inofensivo",
      "Mirar que tenga candado HTTPS y entrar",
      "Acercar mucho la cara a la pantalla para distinguir la letra"
    ],
    correcta: 0,
    explicacion: "Cirílico o griego tienen letras idénticas a las latinas: «аutodesk.com» puede ser otro dominio. Contra lo indistinguible a la vista: favoritos y URL a mano."
  },
  {
    cat: "dificil", tema: "Watering hole",
    pregunta: "La web del Colegio de Arquitectos, que tu sector visita a diario, ha sido comprometida y sirve malware. ¿Cómo se llama esta táctica?",
    opciones: [
      "Watering hole: comprometer una web que tu colectivo frecuenta",
      "Phishing masivo de toda la vida",
      "Un defacement sin consecuencias",
      "Un ataque «de abrevadero de camellos»"
    ],
    correcta: 0,
    explicacion: "Como los leones en la charca: no persiguen a la presa, esperan donde va a beber. Defensa: navegador y sistema al día, y desconfiar de webs que de pronto piden «instalar» algo."
  },
  {
    cat: "dificil", tema: "Extensiones",
    pregunta: "Una web (dominio correcto, candado en regla) te pide instalar una extensión del navegador para «visualizar el archivo CAD». ¿Qué haces?",
    opciones: [
      "No instalarla desde la web: solo del catálogo oficial y revisando permisos",
      "Instalarla, el dominio y el candado son correctos",
      "Instalarla en incógnito, que es más seguro",
      "Instalarla y borrarla nada más ver el archivo"
    ],
    correcta: 0,
    explicacion: "Una extensión maliciosa ve TODO lo que haces en el navegador: sesiones, contraseñas, banca. Web legítima no es extensión legítima."
  },
  {
    cat: "dificil", tema: "Cuenta comprometida",
    pregunta: "La cuenta de Teams de un compañero —la real— te envía un ZIP: «instálate este parche urgente». El tono no suena a él. ¿Qué haces?",
    opciones: [
      "No abrirlo y verificarlo con él por otro canal: su cuenta puede estar comprometida",
      "Abrirlo, viene de una cuenta interna real",
      "Abrirlo en el equipo de las visitas",
      "Pedirle por el mismo chat que confirme que es él"
    ],
    correcta: 0,
    explicacion: "Una cuenta interna robada hereda toda la confianza de su dueño, y el atacante responde «sí, soy yo» en el mismo chat. Verifica por OTRO canal."
  },
  {
    cat: "dificil", tema: "Suplantación de ESKAPE",
    pregunta: "Por privado en Teams te escribe alguien que dice ser de ESKAPE (no por el grupo oficial) y pide acceso remoto «para un mantenimiento». ¿Qué haces?",
    opciones: [
      "No darlo: ESKAPE atiende por su grupo y a partir de un problema que tú planteas, no por privado a lo loco",
      "Dárselo, ha dicho que es de ESKAPE",
      "Dárselo pero quedarte mirando",
      "Pedirle que te invite a un café primero"
    ],
    correcta: 0,
    explicacion: "El soporte de ESKAPE arranca en su grupo de Teams y de un ticket que abres tú; un privado espontáneo pidiendo control remoto es suplantación. Verifica por el grupo."
  },
  {
    cat: "dificil", tema: "Respuesta del estudio (APT)",
    pregunta: "IT cuenta que un atacante llevaba 6 meses dentro y que lo van a expulsar de forma coordinada, no «a lo bruto». Como arquitecto, ¿qué deberías entender?",
    opciones: [
      "Que actuar de golpe avisaría al atacante y destruiría pistas; por eso IT lo planifica",
      "Que IT exagera y debería apagarlo todo ya",
      "Que es problema tuyo resolver el incidente",
      "Que hay que cambiar el wifi y listo"
    ],
    correcta: 0,
    explicacion: "No tienes que ejecutar la respuesta (es de IT), pero sí entender el porqué: con un intruso persistente, actuar a lo bruto le alerta y borra evidencias. Se expulsa con plan."
  },

  /* ───── EXTREMA (8) ───── */
  {
    cat: "extrema", tema: "Ransomware en directo",
    pregunta: "Ves que tus archivos se están cifrando AHORA y aparecen mensajes de rescate. ¿Qué haces de inmediato?",
    opciones: [
      "Desconectar el equipo de la red (cable/wifi) y avisar a IT ya, sin apagarlo",
      "Apagarlo de un botonazo cuanto antes",
      "Seguir trabajando a ver si para solo",
      "Pagar rápido desde el móvil antes de que suba"
    ],
    correcta: 0,
    explicacion: "Aislar de la red corta la propagación; mantenerlo encendido preserva pistas que ayudan a recuperar. Desenchufa el cable, avisa a IT, no apagues ni pagues."
  },
  {
    cat: "extrema", tema: "Deepfake en vídeo",
    pregunta: "En una videollamada, «el cliente» —su cara y su voz, en directo— te pide cambiar el IBAN del contrato hoy mismo. ¿Qué haces?",
    opciones: [
      "Verificarlo después por un canal independiente acordado: el vídeo en directo ya se falsifica",
      "Hacer el cambio, le estás viendo la cara",
      "Pedirle que mueva la cabeza para comprobar que es real",
      "Cambiar el IBAN pero solo por una semana de prueba"
    ],
    correcta: 0,
    explicacion: "Hay fraudes millonarios con videollamadas deepfake de directivos. Ni la cara ni la voz en directo bastan para una orden de pago: verificación independiente, siempre."
  },
  {
    cat: "extrema", tema: "Doble extorsión",
    pregunta: "Ransomware: han cifrado el servidor Y amenazan con publicar los planos confidenciales de un cliente. ¿Qué debe hacer el estudio?",
    opciones: [
      "Aislar, denunciar, notificar a la AEPD en 72 h si hay datos personales y restaurar copias; pagar no garantiza nada",
      "Pagar ya para que no publiquen",
      "Formatear todo y no contárselo al cliente",
      "Negociar el rescate a la baja, como en una obra"
    ],
    correcta: 0,
    explicacion: "Pagar no garantiza ni la clave ni el silencio. El plan: aislar, denunciar, notificar a la AEPD (72 h si hay datos personales) y restaurar de copias. Ocultarlo al cliente puede ser ilegal."
  },
  {
    cat: "extrema", tema: "Deepfake de voz",
    pregunta: "Recibes una nota de voz de WhatsApp con la voz EXACTA de tu jefe: «Comparte el modelo BIM con esta dirección externa antes de las 14:00». ¿Qué haces?",
    opciones: [
      "Verificarlo por otro canal antes de enviar nada: la voz ya se clona",
      "Enviarlo, es su voz sin duda",
      "Enviarlo si lo repite en una nota más larga",
      "Enviar una versión antigua del modelo por si acaso"
    ],
    correcta: 0,
    explicacion: "Con unos segundos de audio, una IA clona cualquier voz. Urgencia + canal informal + petición rara = todas las alarmas. Verifica por canal alternativo."
  },
  {
    cat: "extrema", tema: "Proveedor comprometido",
    pregunta: "Por el grupo de ESKAPE llega: «incidente, instalad urgentemente esta nueva herramienta», y cita datos reales de tus tickets. ¿Qué haces?",
    opciones: [
      "No instalar y verificar por un canal independiente: si conocen tus tickets, el proveedor puede estar comprometido",
      "Instalarla, conocen tus tickets, es imposible que sea falso",
      "Instalarla solo en un equipo poco importante",
      "Reenviarla a los compañeros para que instalen ellos primero"
    ],
    correcta: 0,
    explicacion: "Comprometer a un proveedor de soporte hereda la confianza de todos sus clientes: usan tus tickets reales como credencial. Cuanto más urgente el «instala esto», más verificación."
  },
  {
    cat: "extrema", tema: "IA y datos de cliente",
    pregunta: "Para «optimizar» una distribución, un compañero sugiere subir los planos confidenciales del cliente a una IA pública (tipo ChatGPT). ¿Qué haces?",
    opciones: [
      "No subirlos: salen del control del estudio y rompen el NDA y el RGPD; usar solo herramientas aprobadas",
      "Subirlos, la IA ayuda mucho y va rápido",
      "Subirlos pero borrando el nombre del cliente",
      "Subirlos y pedirle a la IA que «no se lo cuente a nadie»"
    ],
    correcta: 0,
    explicacion: "Subir planos de cliente a una IA pública entrega datos confidenciales a un tercero fuera de tu control, contra el NDA y el RGPD. Usa solo herramientas aprobadas por el estudio."
  },
  {
    cat: "extrema", tema: "Suplantación de Fernando",
    pregunta: "Por Teams, «Fernando (IT)» te pide con urgencia que apruebes una transferencia o le pases unas credenciales antes de una reunión. ¿Qué haces?",
    opciones: [
      "Verificarlo en persona o por otro canal: la urgencia y el secreto suplantando a un jefe son el patrón del fraude",
      "Hacerlo, es Fernando y tiene prisa",
      "Hacer la mitad y confirmar luego",
      "Pedirle que lo jure por Snapchat"
    ],
    correcta: 0,
    explicacion: "Suplantar a un cargo conocido con urgencia y secreto es el fraude del CEO. Aunque ponga «Fernando», una orden sensible se verifica en persona o por otro canal."
  },
  {
    cat: "extrema", tema: "Anatomía de un incidente",
    pregunta: "Caso real: cliente con prisa → falta un bloque CAD → web dudosa → permiso de notificaciones aceptado → semanas de falsas alertas. ¿Cuál era el corte más barato?",
    opciones: [
      "Tener una vía rápida y conocida para conseguir assets (biblioteca interna, fuentes aprobadas, pedir a IT) para que la prisa no empuje a webs dudosas",
      "Prohibir descargar nada de internet, sin excepciones",
      "Que el antivirus bloquee todas las notificaciones",
      "No aceptar encargos de última hora de clientes"
    ],
    correcta: 0,
    explicacion: "Los incidentes los causa la prisa sin alternativa segura, no la maldad. El eslabón más barato es dar un camino bueno Y rápido; las prohibiciones absolutas crean atajos peores."
  }
];


/* ---------------------------------------------------
   PISCINA CIBERGAME 3 — LA TORRE CIBERRESILIENTE
   --------------------------------------------------- */
const POOL_CIBERGAME3 = [

  /* ───── FÁCIL (24) ───── */
  {
    cat: "facil", tema: "Contraseñas",
    pregunta: "¿Cuál de estas protegería mejor tu cuenta de BIM 360?",
    opciones: [
      "Gr4nVi4-Cobalto_77!",
      "b720rocks",
      "ferminvazquez",
      "qwerty (que está cerca en el teclado)"
    ],
    correcta: 0,
    explicacion: "Longitud, mezcla de caracteres y sin datos del estudio. Los nombres de la empresa son lo primero que prueban."
  },
  {
    cat: "facil", tema: "Phishing",
    pregunta: "Un email lleva el enlace «http://b720-nominas.com.ru/login». ¿Cuál es la señal de alarma?",
    opciones: [
      "El dominio no es el del estudio y usa una extensión rara (.ru)",
      "Que hable de nóminas",
      "Que sea un enlace; todos son peligrosos",
      "Que esté en minúsculas"
    ],
    correcta: 0,
    explicacion: "Mira el dominio completo: «b720-nominas.com.ru» no tiene nada que ver con el real. Registran dominios parecidos para engañarte."
  },
  {
    cat: "facil", tema: "Navegación segura",
    pregunta: "Vas a pagar una licencia y el navegador avisa: «La conexión no es segura». ¿Qué haces?",
    opciones: [
      "No introducir ningún dato y cerrar la página",
      "Continuar, será un fallo del navegador",
      "Meter la tarjeta rápido antes de que caduque",
      "Recargar hasta que el aviso se canse y se vaya"
    ],
    correcta: 0,
    explicacion: "Sin conexión cifrada (HTTPS), lo que envíes puede interceptarse. Nunca metas pagos o contraseñas si el navegador lo advierte."
  },
  {
    cat: "facil", tema: "Smishing",
    pregunta: "SMS: «Su paquete está retenido en aduanas. Pague 1,99 € aquí: bit.ly/aduana». ¿Qué haces?",
    opciones: [
      "Borrarlo: es smishing (phishing por SMS)",
      "Pagar, solo son 1,99 €",
      "Hacer clic para ver qué paquete es",
      "Responder «STOP aduanas» a ver si funciona"
    ],
    correcta: 0,
    explicacion: "El pago pequeño es el anzuelo: buscan los datos completos de tu tarjeta. Las empresas de mensajería no cobran aduanas por SMS con enlaces acortados."
  },
  {
    cat: "facil", tema: "Antivirus",
    pregunta: "¿Qué hace (y qué NO hace) un antivirus?",
    opciones: [
      "Detecta y bloquea malware conocido, pero no sustituye al sentido común",
      "Te protege de todo, puedes hacer clic tranquilo",
      "Solo sirve para que el PC vaya lento",
      "Bloquea los correos que te dan pereza"
    ],
    correcta: 0,
    explicacion: "El antivirus es una capa más, no un escudo total: el malware nuevo o el engaño pueden saltárselo. La última barrera eres tú."
  },
  {
    cat: "facil", tema: "Móvil",
    pregunta: "Tu móvil de empresa no tiene PIN ni huella. Si lo pierdes, ¿qué pasa?",
    opciones: [
      "Quien lo encuentre accede a tu correo, fotos de obra y apps del estudio",
      "Nada, así se desbloquea más rápido",
      "Solo es grave si lo pierdes de viaje",
      "Que se queda triste y sin dueño"
    ],
    correcta: 0,
    explicacion: "Un móvil sin bloqueo es tu identidad regalada: correo, WhatsApp, apps corporativas. PIN o biometría es lo mínimo imprescindible."
  },
  {
    cat: "facil", tema: "Apps móviles",
    pregunta: "Para ver renders en el móvil te pasan un enlace a un «.APK mejor que la app oficial». ¿Qué haces?",
    opciones: [
      "No instalarlo: solo apps de las tiendas oficiales",
      "Instalarlo, si lo recomienda un colega será bueno",
      "Instalarlo solo si pesa poco",
      "Instalarlo en el móvil de tu madre para probar"
    ],
    correcta: 0,
    explicacion: "Instalar APKs sueltos se salta todos los controles de la tienda: es la vía principal de malware en Android. Si no está en la tienda oficial, no se instala."
  },
  {
    cat: "facil", tema: "Redes sociales",
    pregunta: "Una cuenta de Instagram que imita al estudio te escribe pidiendo tu número «para un evento interno». ¿Qué haces?",
    opciones: [
      "No responder, reportar la cuenta falsa y avisar al equipo",
      "Darle el número, parece la cuenta oficial",
      "Preguntarle algo que solo el estudio sabría",
      "Pedirle entradas VIP para el evento"
    ],
    correcta: 0,
    explicacion: "Las cuentas clonadas recolectan datos y lanzan estafas. Reporta y avisa: si te ha escrito a ti, está escribiendo a más gente."
  },
  {
    cat: "facil", tema: "Mesa limpia",
    pregunta: "Encuentras en la impresora unos planos de un concurso que alguien olvidó recoger. ¿Cuál es la lección?",
    opciones: [
      "Lo impreso también es información sensible: recógelo al momento",
      "Ninguna, el papel no se puede hackear",
      "Que hay que imprimir menos por el medio ambiente",
      "Dejarlos ahí, ya volverá su dueño"
    ],
    correcta: 0,
    explicacion: "La seguridad no acaba en la pantalla: un plano olvidado lo lee cualquier visita. Recoge tus impresiones al momento."
  },
  {
    cat: "facil", tema: "Conceptos",
    pregunta: "¿Cuál es la diferencia entre «spam» y «phishing»?",
    opciones: [
      "El spam es publicidad molesta; el phishing busca engañarte para robarte",
      "Son lo mismo",
      "El spam es por email y el phishing por teléfono",
      "El phishing es spam pero en inglés"
    ],
    correcta: 0,
    explicacion: "El spam te hace perder tiempo; el phishing te tiende una trampa. El primero se borra; el segundo se reporta, porque hay un ataque detrás."
  },
  {
    cat: "facil", tema: "Notificaciones falsas",
    pregunta: "Trabajando salta «Windows: su equipo está infectado, haga clic para solucionarlo», y viene de una web de bloques visitada hace días. ¿Qué era?",
    opciones: [
      "Notificaciones del navegador que esa web pidió permiso para enviarte",
      "Windows avisando de una infección real",
      "El antivirus del estudio haciendo su trabajo",
      "Un recordatorio de actualizar AutoCAD"
    ],
    correcta: 0,
    explicacion: "Caso real: una web pidió «Permitir notificaciones» y desde entonces mandaba falsas alertas disfrazadas de Windows. Se quita el permiso y las cookies del sitio."
  },
  {
    cat: "facil", tema: "Botones de descarga",
    pregunta: "Entras a una web de descargas y hay CUATRO botones «DESCARGAR» enormes. ¿Cuál es la trampa?",
    opciones: [
      "Los botones llamativos suelen ser anuncios o instaladores basura",
      "Ninguna, más botones, más opciones",
      "El bueno es siempre el más grande",
      "Que hay que pulsarlos todos a la vez"
    ],
    correcta: 0,
    explicacion: "Los botones-anuncio gigantes son el negocio de esas webs: cada clic equivocado instala basura. Si hay que adivinar el botón real, estás en el sitio equivocado."
  },
  {
    cat: "facil", tema: "Contraseña olvidada",
    pregunta: "Has olvidado tu contraseña de acceso. ¿Cómo la recuperas en b720?",
    opciones: [
      "Pidiendo el restablecimiento por el chat de ESKAPE y eligiendo una nueva",
      "Usando la cuenta de un compañero mientras tanto",
      "Probando tus contraseñas viejas hasta que se bloquee",
      "Apuntando la nueva en un post-it bien grande"
    ],
    correcta: 0,
    explicacion: "Olvidarla es normal: se pide el reset por el chat de ESKAPE. La temporal se cambia al primer uso y la nueva va al gestor, no a un post-it."
  },
  {
    cat: "facil", tema: "Actualizaciones falsas",
    pregunta: "Una web muestra: «Su Chrome está desactualizado. Descargue aquí la actualización (update.exe)». ¿Qué haces?",
    opciones: [
      "Cerrar la página: el navegador se actualiza solo, no con un .exe de una web",
      "Descargarlo, hay que estar al día",
      "Descargarlo pero ejecutarlo otro día",
      "Pedir a un compañero que lo pruebe primero"
    ],
    correcta: 0,
    explicacion: "Las «actualizaciones de navegador» ofrecidas por webs son una campaña de malware clásica. Chrome se actualiza solo o desde su menú de Ayuda."
  },
  {
    cat: "facil", tema: "Shoulder surfing",
    pregunta: "En el tren, de camino a una obra, vas a entrar al correo y el de al lado mira tu pantalla. ¿Qué haces?",
    opciones: [
      "Esperar a tener privacidad o tapar la pantalla al teclear",
      "Teclear rápido, nadie se fija tanto",
      "Pedirle que mire para otro lado y seguir",
      "Apuntar la contraseña en el móvil para no teclearla"
    ],
    correcta: 0,
    explicacion: "El «shoulder surfing» es de baja tecnología pero muy eficaz: una contraseña vista es una contraseña robada. Protege lo que tecleas en público."
  },
  {
    cat: "facil", tema: "Phishing de cuota",
    pregunta: "Correo: «Tu buzón está al 99 %. Verifica aquí para no dejar de recibir correos». ¿Qué haces?",
    opciones: [
      "Desconfiar y no hacer clic; si dudas, preguntar a IT",
      "Hacer clic y meter tus datos para ampliarlo",
      "Reenviarlo a IT pidiendo más espacio",
      "Borrar correos a lo loco y luego hacer clic"
    ],
    correcta: 0,
    explicacion: "El «buzón lleno, verifica aquí» es un señuelo clásico para robar credenciales: la urgencia te empuja a meter tu usuario y contraseña en una web falsa."
  },
  {
    cat: "facil", tema: "Plugins falsos",
    pregunta: "Abres un «documento del proyecto» y la web dice: «Para verlo, instala este visor». ¿Qué haces?",
    opciones: [
      "No instalar nada y cerrar: un documento normal no exige instalar complementos",
      "Instalar el visor, si no, no se ve",
      "Instalarlo solo si la web tiene candado",
      "Instalarlo y rezar un padrenuestro"
    ],
    correcta: 0,
    explicacion: "«Instala esto para ver el contenido» es una trampa típica para colar malware: ese supuesto visor es el programa malicioso."
  },
  {
    cat: "facil", tema: "Señales de phishing",
    pregunta: "¿Cuál de estas es una señal típica de un correo de phishing?",
    opciones: [
      "Saludo genérico («Estimado usuario»), urgencia y amenaza de cerrar tu cuenta",
      "Que lo firme un compañero por su nombre",
      "Que tenga el logo de la empresa",
      "Que llegue a las 10 de la mañana"
    ],
    correcta: 0,
    explicacion: "El phishing masivo no sabe tu nombre y mete prisa con amenazas. Logo, firma u horario no garantizan nada. Ante urgencia + saludo genérico, frena."
  },
  {
    cat: "facil", tema: "Antivirus desactivado",
    pregunta: "Para instalar un programa, una web te dice que «desactives el antivirus, da un falso aviso». ¿Qué haces?",
    opciones: [
      "No desactivarlo: si algo exige apagar la protección, es lo que el antivirus intenta frenar",
      "Desactivarlo un momento, será un falso positivo",
      "Desactivarlo y reactivarlo justo después",
      "Bajar el antivirus al mínimo «por si las moscas»"
    ],
    correcta: 0,
    explicacion: "Ningún programa legítimo necesita que apagues tu protección para instalarse. «Desactiva el antivirus» es la frase estrella del malware."
  },
  {
    cat: "facil", tema: "Pérdida de equipo",
    pregunta: "Te das cuenta de que has perdido el portátil del trabajo. ¿Qué es lo primero?",
    opciones: [
      "Avisar a IT cuanto antes para que bloqueen accesos y el equipo en remoto",
      "Esperar un par de días por si aparece",
      "No decir nada para no meterte en líos",
      "Cambiar solo la contraseña del wifi de casa"
    ],
    correcta: 0,
    explicacion: "Cada hora cuenta: avisando rápido, IT bloquea el equipo, cierra sesiones y borra datos en remoto antes de que alguien acceda. Ocultarlo solo da ventaja al que lo tenga."
  },
  {
    cat: "facil", tema: "Spam",
    pregunta: "Recibes spam evidente con un enlace «Darse de baja» al final. ¿Qué haces?",
    opciones: [
      "No pulsar nada y marcarlo como spam: el «baja» suele confirmar que tu dirección existe",
      "Pulsar «Darse de baja» para que paren",
      "Responder pidiendo que te quiten de la lista",
      "Reenviarlo a los compañeros para avisar"
    ],
    correcta: 0,
    explicacion: "En spam fraudulento, el «baja» a menudo solo confirma que tu cuenta está activa (o te lleva a una web maliciosa). Márcalo como spam y no interactúes."
  },
  {
    cat: "facil", tema: "Acceso a la oficina",
    pregunta: "En recepción, un desconocido sin avisar quiere pasar contigo a la zona de trabajo. ¿Qué haces?",
    opciones: [
      "Decirle que espere y avisar a recepción (Inés) para que lo gestione",
      "Dejarle pasar, parece que viene a una reunión",
      "Aguantarle la puerta, es lo educado",
      "Hacerle un tour por la oficina mientras tanto"
    ],
    correcta: 0,
    explicacion: "En b720 se entra por recepción (Inés abre con el mando). Un desconocido que quiere colarse a la zona de trabajo se gestiona en recepción, no se le franquea el paso."
  },
  {
    cat: "facil", tema: "Pantalla a la vista",
    pregunta: "Te vas a una reunión y dejas en pantalla los planos de un cliente, con el equipo desbloqueado. ¿Qué hay mal?",
    opciones: [
      "Bloquea el equipo: dejas a la vista (y a mano) información confidencial",
      "Nada, vuelves enseguida",
      "Solo que gasta batería",
      "Que el salvapantallas es muy soso"
    ],
    correcta: 0,
    explicacion: "Planos de cliente a la vista y un equipo desbloqueado son una fuga esperando a pasar. Bloquear con Win + L cuesta un segundo."
  },
  {
    cat: "facil", tema: "Canal de archivos",
    pregunta: "Quieres compartir unos planos con un compañero. ¿Cuál es el canal correcto en b720?",
    opciones: [
      "Google Drive o Gmail corporativos",
      "Tu WeTransfer personal, que es gratis",
      "Un USB que llevas en el llavero",
      "Subirlos a tu perfil de Instagram en privado"
    ],
    correcta: 0,
    explicacion: "En b720 los archivos van solo por Google Drive y Gmail corporativos. Otros canales (WeTransfer, USB personales) dejan los datos fuera de control."
  },

  /* ───── MEDIA (16) ───── */
  {
    cat: "media", tema: "Fraude del CEO",
    pregunta: "Email de «Fermín» a administración: «Transferencia URGENTE y CONFIDENCIAL, no comentes con nadie. Te paso el IBAN». ¿Qué haces?",
    opciones: [
      "Verificarlo con él por otro canal antes de mover un euro",
      "Hacer la transferencia, es el jefe",
      "Responder al email pidiendo confirmación",
      "Hacerla solo de la mitad por prudencia"
    ],
    correcta: 0,
    explicacion: "Es el «fraude del CEO»: urgencia + secretismo + autoridad. Responder al mismo email no sirve. Verifica por un canal distinto."
  },
  {
    cat: "media", tema: "Wi-Fi pública",
    pregunta: "En una cafetería necesitas abrir el correo del estudio. Hay wifi gratis abierta. ¿Qué haces?",
    opciones: [
      "Usar la VPN del estudio o los datos de tu móvil",
      "Conectarte a la wifi abierta, es un momento",
      "Pedir la contraseña al camarero",
      "Esperar a que escampe la lluvia de bits"
    ],
    correcta: 0,
    explicacion: "Una wifi abierta puede estar espiada o ser falsa (gemelo malvado). Para datos del estudio, VPN o la red de datos de tu móvil."
  },
  {
    cat: "media", tema: "Ransomware",
    pregunta: "En seguridad, ¿qué describe mejor a un «ransomware»?",
    opciones: [
      "Malware que cifra tus archivos y exige un rescate para devolverlos",
      "Un programa que ralentiza el equipo aposta",
      "Un virus que solo afecta a servidores de correo",
      "Una estafa que se hace solo por carta certificada"
    ],
    correcta: 0,
    explicacion: "El ransomware secuestra tus datos cifrándolos. Para un estudio significa perder proyectos. La mejor defensa: copias y prevención."
  },
  {
    cat: "media", tema: "Accesos compartidos",
    pregunta: "Terminó el concurso con un estudio externo al que diste acceso a una carpeta de Drive. ¿Qué haces?",
    opciones: [
      "Retirarles el acceso: se concede por proyecto y se quita al acabar",
      "Dejarlo, por si colaboráis otra vez",
      "Cambiar el nombre de la carpeta para despistar",
      "Pedirles por favor que no miren más"
    ],
    correcta: 0,
    explicacion: "Cada acceso vivo es una puerta abierta: si comprometen al colaborador mañana, te comprometen a ti. Mínimo privilegio: acceso solo mientras se necesita."
  },
  {
    cat: "media", tema: "Ingeniería social",
    pregunta: "¿Qué es la «ingeniería social»?",
    opciones: [
      "Manipular a las personas para que cometan errores de seguridad",
      "Diseñar las redes sociales del estudio",
      "Un software de cálculo de estructuras",
      "Organizar la cena de Navidad de la oficina"
    ],
    correcta: 0,
    explicacion: "El eslabón más débil no es la máquina: eres tú. Explota urgencia, miedo, autoridad o curiosidad. Por eso casi todo ataque empieza con un engaño."
  },
  {
    cat: "media", tema: "Bulos y cadenas",
    pregunta: "Llega un correo: «¡Virus peligrosísimo! Reenvía esto a todos tus contactos YA». ¿Qué haces?",
    opciones: [
      "No reenviarlo: es un bulo en cadena; si dudas, preguntar a IT",
      "Reenviarlo a todo el estudio por seguridad",
      "Reenviarlo solo a los que te caen bien",
      "Reenviarlo y añadir tres signos de exclamación más"
    ],
    correcta: 0,
    explicacion: "Las cadenas alarmistas saturan el correo y a veces llevan enlaces falsos. Las alertas reales las da IT, no un reenvío de un conocido."
  },
  {
    cat: "media", tema: "Spear phishing",
    pregunta: "Por LinkedIn, un «headhunter» te ofrece una prueba técnica y te pide bajar un programa para «hacerla». ¿Qué haces?",
    opciones: [
      "No descargar nada y verificar a la empresa por canales oficiales",
      "Descargarlo, es una oportunidad laboral",
      "Descargarlo en el equipo del estudio, que tiene antivirus",
      "Descargarlo y dejar tu CV dentro por si acaso"
    ],
    correcta: 0,
    explicacion: "Las falsas pruebas técnicas con software a instalar son una vía documentada de infección a profesionales concretos. Verifica antes de ejecutar nada."
  },
  {
    cat: "media", tema: "Permisos de apps",
    pregunta: "Una app de linterna pide acceso a contactos, micrófono y ubicación. ¿Qué hay de raro?",
    opciones: [
      "Pide permisos que no necesita: señal de app espía o vendedora de datos",
      "Nada, todas piden lo mismo",
      "Que debería pedir también la cámara",
      "Que una linterna debería pedir pilas"
    ],
    correcta: 0,
    explicacion: "Regla de oro: los permisos deben corresponder a la función. ¿Una linterna con tu agenda y tu micro? Revisa y recorta permisos, también en apps ya instaladas."
  },
  {
    cat: "media", tema: "Baiting (USB)",
    pregunta: "En una reunión, un proveedor te da un USB «con el catálogo» para que lo conectes a tu equipo. ¿Qué haces?",
    opciones: [
      "Pedirle que te lo mande por Drive/correo en vez de conectar el USB",
      "Conectarlo, es un proveedor conocido",
      "Conectarlo al equipo de la sala, no al tuyo",
      "Quedártelo, que los USB siempre hacen falta"
    ],
    correcta: 0,
    explicacion: "Un USB ajeno puede traer malware sin que su dueño lo sepa. Pide el material por el canal digital del estudio (Drive/correo) y evita conectar dispositivos de fuera."
  },
  {
    cat: "media", tema: "SIM swapping",
    pregunta: "Tu móvil se queda sin cobertura de golpe y empiezan a llegarte avisos de acceso a tus cuentas. ¿Qué puede pasar?",
    opciones: [
      "SIM swapping: alguien duplicó tu SIM para recibir tus SMS; avisa ya a la operadora y a IT",
      "Una avería de antena, esperar a mañana",
      "El móvil se ha hecho viejo",
      "Demasiadas apps abiertas a la vez"
    ],
    correcta: 0,
    explicacion: "Con un duplicado de tu SIM reciben tus códigos por SMS y van reseteando contraseñas. La pérdida súbita de cobertura es la señal: cada minuto cuenta."
  },
  {
    cat: "media", tema: "Segundo factor",
    pregunta: "Vas a activar la verificación en dos pasos. ¿Qué opción es más segura?",
    opciones: [
      "Una app de autenticación (o llave física)",
      "Recibir el código por SMS",
      "No activar nada, ya tienes contraseña",
      "Apuntar un código fijo en la cartera"
    ],
    correcta: 0,
    explicacion: "El SMS se puede interceptar (SIM swapping). Una app de autenticación o una llave física es bastante más robusta como segundo factor."
  },
  {
    cat: "media", tema: "Suplantación en Teams",
    pregunta: "Por el grupo de Teams aparece un usuario nuevo que dice ser de ESKAPE y pide tu usuario y contraseña «para validar tu cuenta». ¿Qué haces?",
    opciones: [
      "No darlas: ESKAPE nunca pide tus credenciales; confirmar con IT/el grupo oficial",
      "Dárselas, ha escrito en el grupo de ESKAPE",
      "Darle solo el usuario, la contraseña no",
      "Pedirle que se presente con una foto del carné"
    ],
    correcta: 0,
    explicacion: "Ni ESKAPE ni IT necesitan tus credenciales: trabajan con sus propios permisos. Un «usuario nuevo» pidiéndolas, aunque sea en el grupo, es sospechoso: verifica."
  },
  {
    cat: "media", tema: "Grabaciones",
    pregunta: "Vas a grabar un vídeo de tu pantalla para enseñar el proyecto al cliente. ¿Qué cuidas antes?",
    opciones: [
      "Cerrar correo, chats y archivos de otros clientes; grabar solo lo necesario",
      "Grabar el escritorio entero, total se entiende",
      "Nada, luego se corta lo que sobre",
      "Poner música épica de fondo y a grabar"
    ],
    correcta: 0,
    explicacion: "Una grabación se reenvía y se queda. Notificaciones, chats internos o datos de otro cliente pueden colarse en el vídeo: graba solo la ventana necesaria."
  },
  {
    cat: "media", tema: "Licencias",
    pregunta: "Un compañero te reenvía un correo de «renovación de licencia» con un botón de pago y te dice que lo pagues tú. ¿Qué haces?",
    opciones: [
      "No pagar y pedir la licencia a Fernando por el chat de ESKAPE",
      "Pagar, te lo ha pasado un compañero",
      "Pagar pero guardando el justificante",
      "Reenviarlo a más gente para repartir el gasto"
    ],
    correcta: 0,
    explicacion: "Que lo reenvíe un compañero no lo hace legítimo. En b720 las licencias las da Fernando (IT) por el chat de ESKAPE, nunca pagando un enlace de correo."
  },
  {
    cat: "media", tema: "Spear phishing dirigido",
    pregunta: "Un correo menciona tu obra real, tu cargo y a tu cliente, y pide que abras un documento. ¿Qué te hace sospechar?",
    opciones: [
      "Que sea tan personalizado: es spear phishing hecho con datos reales tuyos",
      "Nada, si sabe tanto es de fiar",
      "Solo el tamaño del adjunto",
      "Que no te salude por tu apodo del cole"
    ],
    correcta: 0,
    explicacion: "El spear phishing investiga primero (web, LinkedIn, redes del estudio). Que un correo conozca tu proyecto lo hace más convincente y más peligroso, no más fiable."
  },
  {
    cat: "media", tema: "Copia de tu trabajo",
    pregunta: "Trabajas en un proyecto importante solo en la carpeta local de tu equipo. ¿Qué conviene?",
    opciones: [
      "Guardarlo también en el Drive/servidor del estudio, que sí tiene copias",
      "Dejarlo solo en local, va más rápido",
      "Mandártelo a tu Gmail personal por si acaso",
      "Confiar en que tu disco duro es inmortal"
    ],
    correcta: 0,
    explicacion: "Lo que solo está en tu equipo no tiene copia: un fallo de disco o un ransomware y desaparece. Trabaja sobre el Drive/servidor del estudio, que sí se respalda."
  },

  /* ───── DIFÍCIL (16) ───── */
  {
    cat: "dificil", tema: "Spear phishing",
    pregunta: "¿Qué diferencia al «spear phishing» del phishing masivo?",
    opciones: [
      "Está dirigido y personalizado: usa datos reales de la víctima o su empresa",
      "Usa SMS en lugar de email",
      "Solo afecta a directivos",
      "Se manda únicamente en días de lluvia"
    ],
    correcta: 0,
    explicacion: "El spear phishing investiga tu cargo, tus obras y tus proveedores. Un email que menciona tu proyecto real es mucho más convincente… y peligroso."
  },
  {
    cat: "dificil", tema: "Cryptojacking",
    pregunta: "Tu workstation va lenta, los ventiladores rugen en reposo y la factura eléctrica sube. El antivirus no ve nada. ¿Qué sospechas?",
    opciones: [
      "Cryptojacking: alguien mina criptomonedas con tu equipo",
      "Que Revit necesita más RAM",
      "Que el equipo es viejo, toca cambiarlo",
      "Polvo en los ventiladores"
    ],
    correcta: 0,
    explicacion: "El cryptojacking usa tu CPU/GPU para minar cripto ajena. Es sigiloso: no roba datos, roba recursos. Síntomas: calor, ruido y consumo sin carga que lo justifique."
  },
  {
    cat: "dificil", tema: "Shadow IT",
    pregunta: "La herramienta oficial te resulta incómoda y empiezas a mandar planos por tu WeTransfer personal. ¿Cuál es el mayor riesgo?",
    opciones: [
      "Los datos salen del control del estudio, sin sus políticas ni trazabilidad",
      "Que IT se enfade contigo",
      "Que es más lento que Drive",
      "Que se te llene el WeTransfer de globos"
    ],
    correcta: 0,
    explicacion: "El «shadow IT» (herramientas no aprobadas) escapa a los controles: nadie sabe dónde acaban los datos ni quién accede. Si la oficial no sirve, pide una mejor, no improvises."
  },
  {
    cat: "dificil", tema: "HTTPS",
    pregunta: "Una web de phishing puede tener candado HTTPS. ¿Qué garantiza realmente el candado?",
    opciones: [
      "Que la conexión va cifrada, pero NO que la web sea legítima",
      "Que la web es oficial y de confianza",
      "Que la web no tiene virus",
      "Que la web cumple el RGPD y paga impuestos"
    ],
    correcta: 0,
    explicacion: "HTTPS cifra el canal: nadie espía lo que envías. Pero un atacante también compra un certificado para su web falsa. El candado dice «conexión segura», no «sitio honesto»."
  },
  {
    cat: "dificil", tema: "Sesiones",
    pregunta: "En el ordenador de la oficina de un cliente entras a tu correo para reenviar un plano. Al terminar, ¿qué haces y por qué?",
    opciones: [
      "Cerrar sesión: las cookies permiten entrar SIN contraseña (session hijacking)",
      "Cerrar solo la pestaña del navegador",
      "Nada, la sesión caduca sola",
      "Borrar el historial y salir corriendo"
    ],
    correcta: 0,
    explicacion: "Mientras la cookie de sesión viva, quien use ese equipo entra en tu buzón sin contraseña ni MFA. Cierra sesión explícitamente y, mejor, usa tu propio dispositivo."
  },
  {
    cat: "dificil", tema: "Permisos de administrador",
    pregunta: "Un instalador descargado pide permisos de administrador para algo que no debería necesitarlo. ¿Qué haces?",
    opciones: [
      "Frenar y desconfiar: dar admin a algo dudoso le da control del equipo",
      "Aceptar, todos los programas lo piden",
      "Aceptar pero desconectar el wifi antes",
      "Aceptar dos veces para que vaya más rápido"
    ],
    correcta: 0,
    explicacion: "Los permisos de administrador permiten cambiarlo todo en el equipo. Si un programa de origen dudoso los pide sin motivo claro, es una bandera roja: no se los des."
  },
  {
    cat: "dificil", tema: "MFA fatigue",
    pregunta: "A las 3 de la madrugada tu móvil recibe avisos repetidos: «¿Eres tú quien inicia sesión?». No eres tú. ¿Qué pasa y qué haces?",
    opciones: [
      "Un atacante tiene tu contraseña y busca que aceptes por cansancio: rechazar, cambiarla y avisar a IT",
      "Es un fallo del sistema: acepta uno para que pare",
      "Apagar el móvil y dormir",
      "Aceptar, será un compañero del turno de noche"
    ],
    correcta: 0,
    explicacion: "Es «MFA fatigue»: ya tienen tu contraseña y bombardean hasta que aceptes una por agotamiento. Aceptar una = entregar la cuenta. Rechaza, cambia la contraseña y reporta."
  },
  {
    cat: "dificil", tema: "Consent phishing",
    pregunta: "Un enlace te lleva a la pantalla REAL de Google, pero pide autorizar una app desconocida con permiso para «leer y enviar tu correo». ¿Qué haces?",
    opciones: [
      "No autorizar: la app del atacante tendría tu Gmail sin saber tu contraseña",
      "Autorizar: la página de Google es auténtica",
      "Autorizar y cambiar la contraseña después",
      "Autorizar solo si la app tiene un logo bonito"
    ],
    correcta: 0,
    explicacion: "En el «consent phishing» todo es legítimo salvo la app que autorizas. Si le das permisos, accede a tu correo aunque cambies la contraseña: hay que revocar la app."
  },
  {
    cat: "dificil", tema: "Cuenta comprometida",
    pregunta: "Notas que algunos correos aparecen como leídos solos y hay envíos en «Enviados» que tú no hiciste. ¿Qué significa?",
    opciones: [
      "Que alguien está dentro de tu cuenta: cambiar contraseña, MFA, cerrar sesiones y avisar a IT",
      "Que Gmail va raro hoy",
      "Que un compañero te gasta una broma",
      "Que el correo tiene vida propia"
    ],
    correcta: 0,
    explicacion: "Correos leídos solos o envíos que no hiciste son señales de cuenta comprometida. Cambia la contraseña desde un equipo limpio, activa MFA, cierra sesiones y avisa a IT."
  },
  {
    cat: "dificil", tema: "Extensiones",
    pregunta: "Una extensión del navegador que ya usabas pide de repente muchos más permisos tras una actualización. ¿Qué haces?",
    opciones: [
      "Revisar y, si no encajan, desinstalarla: pudo cambiar de dueño o estar comprometida",
      "Aceptar, ya la tenías de antes",
      "Aceptar, las actualizaciones son buenas",
      "Aceptar y cruzar los dedos"
    ],
    correcta: 0,
    explicacion: "Las extensiones populares se compran o se secuestran y, vía actualización, piden permisos para robar datos. Un salto de permisos sin motivo es señal de desinstalar."
  },
  {
    cat: "dificil", tema: "Enlaces acortados",
    pregunta: "Un correo de trabajo trae un enlace acortado (bit.ly/xxxx) sin más contexto. ¿Qué haces?",
    opciones: [
      "Expandirlo o pedir el enlace real antes de entrar: el acortador oculta el destino",
      "Hacer clic, los acortadores son cómodos",
      "Hacer clic solo si es bit.ly",
      "Acortarlo aún más y reenviarlo"
    ],
    correcta: 0,
    explicacion: "Un acortador esconde a dónde vas hasta que ya estás dentro. En contextos de trabajo, desconfía de enlaces acortados sin explicación: pide o expande la URL real."
  },
  {
    cat: "dificil", tema: "Scripts de Revit",
    pregunta: "Encuentras en un foro una herramienta/script de pyRevit que promete automatizar tu trabajo. ¿Qué haces antes de usarla?",
    opciones: [
      "Verificar la fuente y consultarlo: un script ejecuta código con tus permisos sobre tus modelos",
      "Ejecutarla ya, viene de un foro de arquitectos",
      "Ejecutarla en un modelo importante para probar de verdad",
      "Ejecutarla con los ojos cerrados, es solo Revit"
    ],
    correcta: 0,
    explicacion: "Un script o complemento ejecuta código con tus permisos y puede tocar todos tus modelos. Usa solo fuentes de confianza y, ante la duda, consúltalo antes de ejecutarlo."
  },
  {
    cat: "dificil", tema: "Cuenta personal y trabajo",
    pregunta: "En tu equipo del estudio inicias sesión en Chrome con tu Gmail personal y se sincroniza todo. ¿Cuál es el problema?",
    opciones: [
      "Mezclas mundos: si cae tu cuenta personal, llegan a datos del trabajo (y al revés)",
      "Ninguno, así lo tienes todo a mano",
      "Solo si usas también Firefox",
      "Que se te llena el equipo de marcadores de recetas"
    ],
    correcta: 0,
    explicacion: "La sincronización sube contraseñas y datos del trabajo a tu cuenta personal, fuera del control del estudio. Una filtración doméstica se vuelve brecha corporativa."
  },
  {
    cat: "dificil", tema: "Códigos de respaldo",
    pregunta: "Al activar el doble factor, la app te da unos «códigos de respaldo». ¿Qué haces con ellos?",
    opciones: [
      "Guardarlos en un sitio seguro (gestor), no en una nota suelta ni en el escritorio",
      "Pegarlos en un post-it en el monitor",
      "Mandártelos por email para tenerlos a mano",
      "Tatuártelos en el brazo por comodidad"
    ],
    correcta: 0,
    explicacion: "Los códigos de respaldo abren la cuenta si pierdes el segundo factor: valen tanto como la contraseña. Guárdalos cifrados en el gestor, no a la vista ni en el correo."
  },
  {
    cat: "dificil", tema: "Soporte con supervisión",
    pregunta: "El técnico de ESKAPE, en una sesión que sí pediste, propone que le dejes el equipo desbloqueado a la hora de comer y entra él solo. ¿Qué haces?",
    opciones: [
      "Hacer la sesión con él en directo y por la herramienta corporativa, no dejar el equipo solo y abierto",
      "Dejárselo, así no pierdes tiempo",
      "Dejárselo pero apuntando la hora",
      "Dejarle también las llaves del cajón"
    ],
    correcta: 0,
    explicacion: "Un equipo desbloqueado y sin supervisión es acceso total sin testigos. El soporte serio trabaja contigo presente y con trazabilidad; si la propuesta es «cuando no estés», no."
  },
  {
    cat: "dificil", tema: "Respuesta inmediata",
    pregunta: "Abres un archivo y notas que carpetas enteras se renombran solas con extensiones raras. ¿Qué haces?",
    opciones: [
      "Desconectar el equipo de la red y avisar a IT de inmediato, sin seguir trabajando",
      "Seguir trabajando, ya se arreglará",
      "Renombrar tú los archivos de vuelta a mano",
      "Reiniciar quince veces a ver si se cura"
    ],
    correcta: 0,
    explicacion: "El renombrado masivo con extensiones raras es ransomware empezando a cifrar. Aislar de la red corta la propagación; avisa a IT ya y no toques más el equipo."
  },

  /* ───── EXTREMA (8) ───── */
  {
    cat: "extrema", tema: "Ransomware y copias",
    pregunta: "Un ransomware ha cifrado el servidor, pero el estudio tiene copias desconectadas. ¿Cuál es el camino correcto?",
    opciones: [
      "Aislar lo afectado, denunciar y restaurar desde las copias; no pagar el rescate",
      "Pagar rápido para recuperar antes",
      "Formatear todo sin avisar a nadie",
      "Negociar con los atacantes un descuento por volumen"
    ],
    correcta: 0,
    explicacion: "Tener copias offline es justo lo que te permite no pagar: aíslas, denuncias y restauras. Pagar financia el crimen y no garantiza recuperar nada."
  },
  {
    cat: "extrema", tema: "Deepfake en directo",
    pregunta: "En una videollamada, un «directivo» en directo (cara y voz) ordena un pago inmediato a una cuenta nueva. ¿Qué haces?",
    opciones: [
      "Verificarlo por un canal independiente antes de pagar: los deepfake en directo ya existen",
      "Pagar, le estás viendo y oyendo",
      "Pagar la mitad y confirmar el resto",
      "Pedirle que cante para comprobar que es humano"
    ],
    correcta: 0,
    explicacion: "Hay fraudes millonarios con videollamadas deepfake de directivos (caso Arup, 2024). Ni la cara ni la voz en directo bastan para una orden de pago: verificación independiente."
  },
  {
    cat: "extrema", tema: "IA pública y planos",
    pregunta: "Para acelerar, alguien propone subir los planos confidenciales de un cliente a una IA pública. ¿Qué haces?",
    opciones: [
      "No subirlos: entregas datos del cliente a un tercero, contra el NDA y el RGPD",
      "Subirlos, la IA es muy útil",
      "Subirlos quitando el membrete del cliente",
      "Subirlos y pedir a la IA que los olvide luego"
    ],
    correcta: 0,
    explicacion: "Subir planos de cliente a una IA pública saca datos confidenciales del control del estudio y puede usarlos para entrenarse. Rompe NDA y RGPD: usa solo herramientas aprobadas."
  },
  {
    cat: "extrema", tema: "Conversores online",
    pregunta: "Con prisa por entregar, vas a usar una web gratis de «conversión/compresión» para procesar los planos del cliente. ¿Qué haces?",
    opciones: [
      "No subirlos a una web cualquiera: usar las herramientas internas; esos planos son confidenciales",
      "Subirlos, es gratis y rápido",
      "Subirlos a la primera web que salga en Google",
      "Subirlos a tres webs a la vez por si una falla"
    ],
    correcta: 0,
    explicacion: "Las webs gratis de conversión se quedan con lo que subes en servidores desconocidos. Para archivos confidenciales, herramientas internas o aprobadas, nunca un servicio público al azar."
  },
  {
    cat: "extrema", tema: "Proveedor comprometido",
    pregunta: "Un proveedor de soporte es hackeado y su herramienta de acceso remoto se usa para colar malware a sus clientes. ¿Qué limita el daño en el estudio?",
    opciones: [
      "Que su acceso esté acotado (mínimo privilegio), con MFA y registro de sus sesiones",
      "Nada: si cae el proveedor, caes tú y punto",
      "Tener dos proveedores por si acaso",
      "Prohibir el soporte y arreglarlo todo a mano"
    ],
    correcta: 0,
    explicacion: "El acceso permanente de un proveedor es una autopista a tus equipos. Acotar qué puede tocar, exigir MFA y registrar sus sesiones convierte una catástrofe del sector en un susto contenido."
  },
  {
    cat: "extrema", tema: "Suplantación de Fernando",
    pregunta: "Por Teams, «Fernando (IT)» te pide con mucha urgencia aprobar una transferencia antes de una reunión. ¿Qué haces?",
    opciones: [
      "Verificarlo en persona o por otro canal: urgencia + secreto suplantando a un jefe es el patrón del fraude",
      "Hacerlo, es Fernando y corre prisa",
      "Hacerlo a medias y confirmar luego",
      "Pedirle que lo confirme bailando en cámara"
    ],
    correcta: 0,
    explicacion: "Suplantar a un cargo conocido con urgencia y secreto es el fraude del CEO. Aunque ponga «Fernando», una orden sensible se verifica en persona o por otro canal."
  },
  {
    cat: "extrema", tema: "Cultura de reporte",
    pregunta: "Un compañero ha picado en un phishing y le da vergüenza decirlo. ¿Qué es lo mejor para el estudio?",
    opciones: [
      "Que lo reporte cuanto antes y sin miedo: actuar rápido limita el daño",
      "Que lo oculte para no quedar mal",
      "Que lo borre todo y disimule",
      "Que se cambie de nombre y empiece una vida nueva"
    ],
    correcta: 0,
    explicacion: "Picar le pasa a cualquiera; lo grave es ocultarlo. Un aviso rápido permite cambiar contraseñas, cerrar sesiones y frenar el ataque. Si reportar da miedo, el estudio se entera tarde."
  },
  {
    cat: "extrema", tema: "Confidencialidad con terceros",
    pregunta: "Alguien externo, muy amable, te pide «echar un vistazo» a un proyecto bajo NDA y que le pases un enlace. ¿Qué haces?",
    opciones: [
      "No compartir: un proyecto confidencial no se enseña a terceros sin autorización, por muy simpático que sea",
      "Pasarle el enlace, parece buena gente",
      "Pasarle solo unas pocas láminas",
      "Pasárselo si promete no enseñárselo a nadie"
    ],
    correcta: 0,
    explicacion: "La simpatía es una herramienta de ingeniería social. Un proyecto bajo NDA no se comparte con terceros sin autorización: ante la petición, deriva a quien corresponda y no envíes nada."
  }
];

/* --- Utilidades compartidas --- */

function barajar(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/*
  Genera el set de cada ronda (hasta 8 preguntas) EXCLUYENDO las ya usadas
  en rondas anteriores de la sesión (Set de textos de pregunta).
  - Composición ideal: 3 fáciles + 2 medias al inicio · 2 difíciles + 1 extrema al cierre.
  - Si una categoría se queda corta (piscina casi agotada), la ronda se
    completa con lo que reste, manteniendo el orden fácil→difícil; la última
    ronda puede ser más corta. Así se pueden recorrer TODAS las preguntas.
  - Devuelve null solo cuando ya no queda ninguna pregunta sin usar.
*/
function generarSetPartidaSinRepetir(pool, usadas) {
  const libres = pool.filter(q => !usadas.has(q.pregunta));
  if (libres.length === 0) return null;

  // Pilas barajadas por categoría
  const pilas = {
    facil:   barajar(libres.filter(q => q.cat === "facil")),
    media:   barajar(libres.filter(q => q.cat === "media")),
    dificil: barajar(libres.filter(q => q.cat === "dificil")),
    extrema: barajar(libres.filter(q => q.cat === "extrema"))
  };
  const sacar = (cat, n) => pilas[cat].splice(0, n);

  let inicio = [...sacar("facil", 3), ...sacar("media", 2)];   // bloque fácil/medio
  let cierre = [...sacar("dificil", 2), ...sacar("extrema", 1)]; // jefe final

  // Completar hasta 8 con lo que quede: lo más fácil al inicio, lo más duro al cierre
  const sobranSuaves = [...pilas.facil, ...pilas.media];
  const sobranDuras  = [...pilas.dificil, ...pilas.extrema];
  while (inicio.length + cierre.length < 8 && (sobranSuaves.length || sobranDuras.length)) {
    if (sobranSuaves.length) inicio.push(sobranSuaves.shift());
    else cierre.push(sobranDuras.shift());
  }

  return [...barajar(inicio), ...cierre];
}

/* ¿Queda alguna pregunta sin usar para otra ronda (aunque sea más corta)? */
function hayPreguntasRestantes(pool, usadas) {
  return pool.some(q => !usadas.has(q.pregunta));
}

/* Baraja las opciones de una pregunta manteniendo cuál es la correcta */
function prepararOpciones(pregunta) {
  const indices = barajar(pregunta.opciones.map((_, i) => i));
  return {
    opciones: indices.map(i => pregunta.opciones[i]),
    correcta: indices.indexOf(pregunta.correcta)
  };
}

/* Puntos por categoría (total máximo de la partida: 100) */
const PUNTOS_CATEGORIA = { facil: 10, media: 10, dificil: 15, extrema: 20 };

const ETIQUETA_CATEGORIA = {
  facil:   "Nivel · Fácil",
  media:   "Nivel · Medio",
  dificil: "Nivel · Difícil",
  extrema: "Nivel · Extremo"
};
