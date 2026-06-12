/* =====================================================
   PISCINAS DE PREGUNTAS — CIBERGAME b720
   Dos piscinas independientes:
   · POOL_CIBERGAME2 → Cibergame 2 (Protocolo de Seguridad)
   · POOL_CIBERGAME3 → Cibergame 3 (La Torre Ciberresiliente)
   Categorías: facil · media · dificil · extrema
   Cada juego usa 36 preguntas propias (10+10+9+7) para que
   varias partidas seguidas no repitan las mismas preguntas.
   ===================================================== */

/* ---------------------------------------------------
   PISCINA CIBERGAME 2 — PROTOCOLO DE SEGURIDAD
   --------------------------------------------------- */
const POOL_CIBERGAME2 = [

  /* ───── FÁCIL (10) ───── */
  {
    cat: "facil", tema: "Phishing",
    pregunta: "Recibes un email de «soporte-microsoft365@gmail.com» pidiendo tu contraseña por «mantenimiento del servidor». ¿Qué haces?",
    opciones: [
      "No responder y reportarlo al departamento de IT",
      "Enviar la contraseña, parece oficial",
      "Responder pidiendo más información",
      "Reenviarlo a todo el estudio por si acaso"
    ],
    correcta: 0,
    explicacion: "Ningún proveedor legítimo pide contraseñas por email. Además, Microsoft jamás escribiría desde una cuenta de Gmail. Ante la duda: no respondas y reporta."
  },
  {
    cat: "facil", tema: "Baiting (USB)",
    pregunta: "Tras una visita de obra, encuentras un USB con la etiqueta «FOTOS OBRA FIRA» en la sala de reuniones. ¿Qué haces?",
    opciones: [
      "Entregarlo a IT sin conectarlo a ningún equipo",
      "Conectarlo a tu portátil para ver de quién es",
      "Conectarlo al PC de un becario, por si acaso",
      "Guardarlo en el cajón y olvidarlo"
    ],
    correcta: 0,
    explicacion: "Un USB «perdido» es un cebo clásico (baiting). Puede ejecutar malware con solo conectarlo. Y no, usar el PC del becario tampoco es ciberseguridad: es maldad."
  },
  {
    cat: "facil", tema: "Conceptos",
    pregunta: "¿Qué es exactamente el «phishing»?",
    opciones: [
      "Suplantar a una entidad de confianza para robar credenciales o datos",
      "Un virus que borra archivos de AutoCAD",
      "Una técnica para acelerar renders",
      "Un firewall de nueva generación"
    ],
    correcta: 0,
    explicacion: "El phishing es ingeniería social: el atacante se hace pasar por alguien legítimo (banco, proveedor, IT…) para que tú mismo le entregues tus datos."
  },
  {
    cat: "facil", tema: "Actualizaciones",
    pregunta: "¿Cuándo conviene instalar las actualizaciones de Windows, Revit o el antivirus?",
    opciones: [
      "En cuanto estén disponibles: parchean fallos de seguridad",
      "Nunca, las actualizaciones rompen los plugins",
      "Solo cuando el equipo vaya lento",
      "Una vez al año, en agosto"
    ],
    correcta: 0,
    explicacion: "La mayoría de ataques explotan vulnerabilidades ya corregidas. Actualizar pronto cierra esas puertas antes de que alguien las use contra ti."
  },
  {
    cat: "facil", tema: "Buenas prácticas",
    pregunta: "Te levantas de tu puesto para ir a una reunión de proyecto. ¿Qué haces con tu equipo?",
    opciones: [
      "Bloquearlo (Win + L) aunque sea un momento",
      "Dejarlo abierto, es solo media hora",
      "Apagar la pantalla, con eso basta",
      "Pedirle al de al lado que lo vigile"
    ],
    correcta: 0,
    explicacion: "Un equipo desbloqueado da acceso a tu correo, proyectos y credenciales. Bloquear el equipo cuesta un segundo y es la medida de seguridad más rentable que existe."
  },
  {
    cat: "facil", tema: "Adjuntos",
    pregunta: "Te llega un correo de un desconocido con el asunto «Factura pendiente de pago» y un adjunto. No esperabas ninguna factura. ¿Qué haces?",
    opciones: [
      "No abrir el adjunto y reportar el correo a IT",
      "Abrirlo rápido para ver si de verdad debéis dinero",
      "Reenviarlo a contabilidad sin abrirlo",
      "Responder preguntando de qué factura se trata"
    ],
    correcta: 0,
    explicacion: "La «factura inesperada» es uno de los cebos más usados para colar malware. Si no esperabas el documento y no conoces al remitente, no lo abras: repórtalo."
  },
  {
    cat: "facil", tema: "Contraseñas",
    pregunta: "¿Es buena idea usar la misma contraseña para el correo del estudio, BIM 360 y tu cuenta personal de Netflix?",
    opciones: [
      "No: si se filtra una, caen todas; cada servicio necesita la suya",
      "Sí, así no se te olvida ninguna",
      "Sí, siempre que sea muy larga",
      "Solo si Netflix es el perfil de la oficina"
    ],
    correcta: 0,
    explicacion: "Las filtraciones de webs ocurren cada semana. Si reutilizas contraseña, una filtración en cualquier servicio abre TODAS tus cuentas. Un gestor de contraseñas resuelve el problema de memorizarlas."
  },
  {
    cat: "facil", tema: "Contraseñas",
    pregunta: "Un compañero tiene su contraseña apuntada en un post-it pegado al monitor. ¿Cuál es el problema?",
    opciones: [
      "Cualquiera que pase por su mesa (visitas incluidas) puede leerla y usarla",
      "Ninguno, en el estudio sois todos de confianza",
      "Solo es grave si el post-it es amarillo fosforito",
      "Que el pegamento estropea la pantalla"
    ],
    correcta: 0,
    explicacion: "Clientes, mensajeros, técnicos de mantenimiento… por un estudio pasa mucha gente. Una contraseña a la vista es una puerta abierta. Para no memorizar: gestor de contraseñas, no papelitos."
  },
  {
    cat: "facil", tema: "Malware",
    pregunta: "Tu equipo va lento desde ayer y se abren ventanas emergentes solas. ¿Qué haces?",
    opciones: [
      "Avisar a IT cuanto antes: puede ser malware",
      "Ignorarlo, ya se pasará",
      "Instalar tres antivirus gratuitos a la vez",
      "Formatear tú mismo sin avisar a nadie"
    ],
    correcta: 0,
    explicacion: "Lentitud repentina y popups son síntomas clásicos de infección. Cuanto antes actúe IT, menos se extiende. Actuar por tu cuenta puede destruir pistas o empeorarlo."
  },
  {
    cat: "facil", tema: "Sesiones",
    pregunta: "Usas el ordenador compartido de la sala de maquetas para mirar tu correo. Al terminar, ¿qué haces?",
    opciones: [
      "Cerrar la sesión del correo y no guardar la contraseña en el navegador",
      "Dejar la sesión abierta, mañana vuelves",
      "Minimizar la ventana, nadie mira",
      "Apagar el monitor"
    ],
    correcta: 0,
    explicacion: "En un equipo compartido, una sesión abierta es tu buzón entero a disposición del siguiente que se siente. Cierra sesión siempre y rechaza el «¿guardar contraseña?» del navegador."
  },

  /* ───── MEDIA (10) ───── */
  {
    cat: "media", tema: "Copias de seguridad",
    pregunta: "¿En qué consiste la regla «3-2-1» de copias de seguridad?",
    opciones: [
      "3 copias, en 2 soportes distintos, 1 fuera de la oficina",
      "3 discos duros, 2 contraseñas, 1 antivirus",
      "Copiar 3 veces al día, 2 por la noche, 1 el finde",
      "3 carpetas, 2 USB, 1 email a ti mismo"
    ],
    correcta: 0,
    explicacion: "3-2-1: tres copias de los datos, en dos tipos de soporte diferentes, y al menos una fuera del estudio (o en la nube). Es lo que te salva si un ransomware cifra el servidor."
  },
  {
    cat: "media", tema: "MFA",
    pregunta: "¿Por qué conviene activar la verificación en dos pasos (MFA) en tus cuentas?",
    opciones: [
      "Porque aunque roben tu contraseña, no podrán entrar sin el segundo factor",
      "Porque hace que la contraseña sea más larga",
      "Porque cifra el disco duro automáticamente",
      "Porque elimina la necesidad de contraseñas"
    ],
    correcta: 0,
    explicacion: "El MFA añade una segunda llave (móvil, app, huella). Si tu contraseña se filtra —y tarde o temprano alguna se filtra—, el atacante se queda en la puerta."
  },
  {
    cat: "media", tema: "Software",
    pregunta: "Una web desconocida ofrece un plugin gratuito de Revit que promete «renders 10 veces más rápidos». ¿Qué haces?",
    opciones: [
      "Descargarlo solo si está en la tienda o web oficial de Autodesk",
      "Instalarlo ya: 10x más rápido es 10x más rápido",
      "Instalarlo en el equipo de un compañero para probar",
      "Desactivar el antivirus para que no moleste durante la instalación"
    ],
    correcta: 0,
    explicacion: "El software «milagroso» de fuentes no oficiales es un vector de malware clásico. Si hay que desactivar el antivirus para instalarlo, no es un plugin: es una trampa."
  },
  {
    cat: "media", tema: "Malware",
    pregunta: "Te llega un adjunto llamado «Presupuesto_Obra.pdf.exe». ¿Cuál es el problema?",
    opciones: [
      "La doble extensión: es un ejecutable disfrazado de PDF",
      "Ninguno, los presupuestos siempre llegan así",
      "Que el nombre del archivo es demasiado largo",
      "Que debería ser un .dwg"
    ],
    correcta: 0,
    explicacion: "Lo que cuenta es la ÚLTIMA extensión: «.exe» es un programa. Windows a veces oculta extensiones conocidas, así que «Presupuesto_Obra.pdf» podría ser en realidad un ejecutable."
  },
  {
    cat: "media", tema: "Vishing",
    pregunta: "Llamada: «Soy de Microsoft, su equipo está infectado. Instale TeamViewer y le ayudamos ahora mismo». ¿Qué haces?",
    opciones: [
      "Colgar: Microsoft no llama a nadie, es vishing",
      "Instalar TeamViewer, qué amables",
      "Darles solo el usuario, sin la contraseña",
      "Pedirles que llamen más tarde, ahora estás liado"
    ],
    correcta: 0,
    explicacion: "Microsoft, tu banco o Hacienda no llaman para «arreglar tu PC». Dar control remoto a un desconocido es entregarle el equipo con los planos dentro. Cuelga y reporta."
  },
  {
    cat: "media", tema: "Gestor de contraseñas",
    pregunta: "¿Qué aporta un gestor de contraseñas frente a memorizarlas o apuntarlas?",
    opciones: [
      "Genera y guarda contraseñas únicas y fuertes; tú solo memorizas una maestra",
      "Hace que ya no necesites contraseñas",
      "Envía tus contraseñas a IT por seguridad",
      "Solo sirve para cuentas personales, no de empresa"
    ],
    correcta: 0,
    explicacion: "El gestor resuelve el dilema imposible («contraseñas únicas y fuertes» vs «memorizarlas todas»): genera una distinta por servicio y las cifra. Tú solo proteges la maestra (larga y con MFA)."
  },
  {
    cat: "media", tema: "Quishing",
    pregunta: "En una feria de construcción hay carteles con un QR: «Escanea para descargar el catálogo BIM gratis». ¿Qué haces?",
    opciones: [
      "Comprobar la URL que abre el QR antes de continuar; los QR también se falsifican",
      "Escanearlo sin más, los QR son seguros",
      "Escanearlo con el móvil del trabajo, que tiene antivirus",
      "Escanear todos los QR de la feria para comparar catálogos"
    ],
    correcta: 0,
    explicacion: "Es «quishing»: pegar un QR malicioso encima del original cuesta céntimos. El móvil muestra la URL antes de abrirla: léela. Un QR es solo un enlace con disfraz de cuadraditos."
  },
  {
    cat: "media", tema: "Reuniones",
    pregunta: "Vas a compartir pantalla en una videollamada con el cliente. ¿Qué conviene hacer antes?",
    opciones: [
      "Cerrar el correo, chats y documentos sensibles; compartir solo la ventana necesaria",
      "Compartir el escritorio completo, es más cómodo",
      "Nada, el cliente es de confianza",
      "Poner el fondo de pantalla corporativo"
    ],
    correcta: 0,
    explicacion: "Notificaciones de correo, presupuestos de OTRO cliente, chats internos… todo eso puede aparecer en plena demo. Comparte la ventana concreta, no el escritorio entero."
  },
  {
    cat: "media", tema: "Cifrado",
    pregunta: "Te roban el portátil del coche volviendo de la obra. ¿Qué impide que el ladrón lea los proyectos del disco?",
    opciones: [
      "El cifrado de disco (BitLocker) junto con una contraseña fuerte",
      "La contraseña de Windows por sí sola",
      "Tener los archivos en carpetas ocultas",
      "Nada, un portátil robado siempre es legible"
    ],
    correcta: 0,
    explicacion: "Sin cifrado, basta sacar el disco y conectarlo a otro equipo: la contraseña de Windows no protege los datos. BitLocker (o equivalente) hace el disco ilegible sin la clave."
  },
  {
    cat: "media", tema: "Offboarding",
    pregunta: "Un compañero deja el estudio hoy. ¿Qué debe pasar con sus cuentas y accesos?",
    opciones: [
      "Desactivarlos el mismo día: correo, VPN, BIM 360, carpetas compartidas",
      "Dejarlos un año por si vuelve",
      "Solo cambiarle la foto del perfil",
      "Pasarle su usuario al siguiente que entre"
    ],
    correcta: 0,
    explicacion: "Las cuentas huérfanas son un clásico de los incidentes: nadie las vigila y conservan acceso a todo. El offboarding (baja inmediata de accesos) es tan importante como el alta."
  },

  /* ───── DIFÍCIL (9) ───── */
  {
    cat: "dificil", tema: "Typosquatting",
    pregunta: "Necesitas descargar DWG TrueView. ¿Cuál de estos dominios es el legítimo?",
    opciones: [
      "autodesk.com",
      "autodesk-downloads.com",
      "autodek.com",
      "autodesk.support"
    ],
    correcta: 0,
    explicacion: "El «typosquatting» registra dominios casi idénticos al real (guiones añadidos, letras cambiadas, extensiones raras) para colarte descargas infectadas. Ante la duda, escribe tú la URL oficial."
  },
  {
    cat: "dificil", tema: "BEC",
    pregunta: "Un proveedor habitual te escribe desde su email REAL, con su firma y el hilo de conversación previo, adjuntando una factura con un IBAN «actualizado». ¿Qué haces?",
    opciones: [
      "Verificar el cambio de IBAN llamando a un número que ya conocieras",
      "Pagar: el email es auténtico y el hilo también",
      "Responder al email preguntando si es correcto",
      "Pagar solo la mitad hasta confirmar"
    ],
    correcta: 0,
    explicacion: "Es un BEC (Business Email Compromise): el buzón del proveedor está hackeado, por eso todo parece legítimo. Responder no sirve —contesta el atacante—. Un cambio de IBAN se verifica SIEMPRE por otro canal."
  },
  {
    cat: "dificil", tema: "Macros",
    pregunta: "Recibes unas mediciones en Excel que al abrirse piden «Habilitar contenido» para ver los datos. ¿Qué haces?",
    opciones: [
      "No habilitar: las macros pueden ejecutar código malicioso; verificar antes el origen",
      "Habilitar, si no, no se ven las mediciones",
      "Habilitar pero con el antivirus abierto al lado",
      "Reenviarlo a un compañero a ver si a él le funciona"
    ],
    correcta: 0,
    explicacion: "«Habilitar contenido» ejecuta macros: pequeños programas dentro del documento. Es uno de los vectores de ransomware más usados del mundo. Si el archivo no necesita macros para funcionar, jamás las actives."
  },
  {
    cat: "dificil", tema: "MFA fatigue",
    pregunta: "A las 3 de la madrugada tu móvil recibe notificaciones MFA repetidas: «¿Eres tú quien inicia sesión?». Tú no eres. ¿Qué está pasando y qué haces?",
    opciones: [
      "Un atacante tiene mi contraseña y busca que acepte por cansancio: rechazar, cambiarla y avisar a IT",
      "Es un fallo del sistema: aceptar una para que pare",
      "Apagar el móvil y dormir",
      "Aceptar, será un compañero del turno de noche"
    ],
    correcta: 0,
    explicacion: "Es «MFA fatigue»: el atacante YA tiene tu contraseña y bombardea con peticiones hasta que aceptes una por agotamiento. Aceptar una sola = entregarle la cuenta. Rechaza, cambia la contraseña y reporta."
  },
  {
    cat: "dificil", tema: "Consent phishing",
    pregunta: "Un enlace te lleva a la pantalla REAL de inicio de sesión de Microsoft, pero pide autorizar una app desconocida con permisos para «leer y enviar tu correo». ¿Qué haces?",
    opciones: [
      "No autorizar: es consent phishing; la app del atacante tendría tu buzón sin necesitar tu contraseña",
      "Autorizar: la página de Microsoft es auténtica, no hay riesgo",
      "Autorizar pero cambiar la contraseña después",
      "Autorizar solo si la app tiene buen logo"
    ],
    correcta: 0,
    explicacion: "En el «consent phishing» todo es legítimo excepto la app que pides autorizar. Si concedes permisos OAuth, el atacante accede a tu buzón aunque cambies la contraseña mil veces: hay que revocar la app."
  },
  {
    cat: "dificil", tema: "Buzón comprometido",
    pregunta: "Descubres en tu correo una regla de reenvío automático hacia una dirección externa que tú no creaste. ¿Qué significa?",
    opciones: [
      "Alguien comprometió tu buzón y lleva tiempo leyendo tu correo: borrarla, cambiar contraseña, MFA y avisar a IT",
      "Es una función nueva de Outlook, ignorarla",
      "La creó IT para hacer copias de seguridad",
      "Basta con borrar la regla y listo"
    ],
    correcta: 0,
    explicacion: "Las reglas de reenvío ocultas son la táctica favorita tras robar un buzón: el atacante lee todo (presupuestos, IBAN, contratos) sin volver a entrar. Borrarla no basta: hay que cerrar la puerta y revisar el alcance."
  },
  {
    cat: "dificil", tema: "Adjuntos evasivos",
    pregunta: "Un correo de «licitación pública» adjunta un archivo .ISO «con los pliegos». ¿Por qué es sospechoso?",
    opciones: [
      "Los .ISO/.IMG se usan para esquivar los filtros del antivirus de correo; nadie envía pliegos así",
      "No es sospechoso, los pliegos siempre van en ISO",
      "Solo es sospechoso si pesa más de 10 MB",
      "Porque los ISO solo funcionan en Linux"
    ],
    correcta: 0,
    explicacion: "Montar un .ISO ejecuta su contenido fuera del control de muchos filtros de correo (la marca «descargado de internet» se pierde). Documentos de obra van en PDF; un ISO inesperado es bandera roja."
  },
  {
    cat: "dificil", tema: "Tailgating",
    pregunta: "Entras al estudio con tu tarjeta y alguien cargado de cajas te pide que le aguantes la puerta. No le conoces. ¿Qué haces?",
    opciones: [
      "Dirigirle amablemente a recepción: nadie entra sin acreditación, ni con cajas",
      "Aguantarle la puerta, es lo educado",
      "Dejarle pasar si las cajas parecen pesadas",
      "Dejarle pasar pero mirándole mal"
    ],
    correcta: 0,
    explicacion: "Es «tailgating»: colarse aprovechando la cortesía ajena. Las cajas, el uniforme o las prisas son atrezzo. La puerta de seguridad solo funciona si entra UNA persona por credencial."
  },
  {
    cat: "dificil", tema: "OSINT",
    pregunta: "El estudio sube fotos a Instagram donde se ven pantallas con planos, nombres de clientes y post-its. ¿Cuál es el riesgo?",
    opciones: [
      "Los atacantes recopilan esos detalles (OSINT) para construir ataques dirigidos muy convincentes",
      "Ninguno, son fotos de ambiente",
      "Solo el copyright de los planos",
      "Que la competencia copie la decoración"
    ],
    correcta: 0,
    explicacion: "Un spear phishing convincente se fabrica con datos reales: proyectos, clientes, software que usáis, hasta nombres en los post-its. Revisa qué se ve en cada foto antes de publicarla."
  },

  /* ───── EXTREMA (7) ───── */
  {
    cat: "extrema", tema: "Cadena de suministro",
    pregunta: "La actualización OFICIAL y firmada de tu software de mediciones resulta contener malware (ataque tipo SolarWinds). ¿Cuál es la defensa más realista para un estudio?",
    opciones: [
      "Mínimos privilegios, red segmentada y vigilar comportamientos anómalos: no basta con confiar en lo firmado",
      "No actualizar nunca ningún software",
      "Tener dos antivirus instalados a la vez",
      "Usar solo software de pago, que nunca se infecta"
    ],
    correcta: 0,
    explicacion: "En un ataque a la cadena de suministro el malware llega por el canal legítimo, firmado por el fabricante. La defensa es limitar el daño posible: privilegios mínimos, segmentación de red y detección de comportamiento extraño. No actualizar es aún peor: te deja expuesto a todo lo demás."
  },
  {
    cat: "extrema", tema: "Seguridad física",
    pregunta: "Llega al estudio un técnico con casco, chaleco y carpeta: «Vengo a revisar el rack de comunicaciones, tengo cita con mantenimiento». Nadie le esperaba. ¿Qué haces?",
    opciones: [
      "Verificarlo con administración/mantenimiento antes de darle acceso: la seguridad física también es ciberseguridad",
      "Acompañarle al rack, va uniformado",
      "Dejarle pasar pero vigilándole de lejos",
      "Pedirle que vuelva por la tarde"
    ],
    correcta: 0,
    explicacion: "Es «pretexting»: el disfraz de operario es de los más efectivos que existen. Con 5 minutos ante el rack puede pinchar la red entera del estudio. Toda visita técnica se verifica ANTES de abrir la puerta."
  },
  {
    cat: "extrema", tema: "Deepfake",
    pregunta: "Recibes un audio de WhatsApp con la voz EXACTA de tu jefe: «Comparte el modelo BIM con esta dirección externa antes de las 14:00, es urgente». ¿Qué haces?",
    opciones: [
      "Verificarlo por otro canal antes de enviar nada: la voz ya no es prueba de identidad (deepfake)",
      "Enviarlo: es su voz, sin duda",
      "Enviarlo solo si lo repite en una nota de voz más larga",
      "Enviar una versión antigua del modelo, por si acaso"
    ],
    correcta: 0,
    explicacion: "Con unos segundos de audio público, una IA clona cualquier voz. Urgencia + canal informal + petición inusual = todas las alarmas. Para peticiones sensibles: verificación por canal alternativo o palabra clave acordada."
  },
  {
    cat: "extrema", tema: "Deepfake en vídeo",
    pregunta: "En una videollamada, «el cliente» —su cara y su voz, en directo— te pide cambiar el IBAN del contrato hoy mismo. ¿Qué haces?",
    opciones: [
      "Cortésmente, verificar después por un canal independiente acordado: los deepfake en vídeo en tiempo real ya existen",
      "Hacer el cambio: le estás viendo la cara",
      "Pedirle que mueva la cabeza para comprobar que es real",
      "Cambiar el IBAN pero solo durante una semana"
    ],
    correcta: 0,
    explicacion: "Hay fraudes millonarios cometidos con videollamadas deepfake de directivos (caso Arup, 2024: 25 M$). Ni la cara ni la voz en directo son ya prueba suficiente para una orden de pago: procedimiento de verificación independiente, siempre."
  },
  {
    cat: "extrema", tema: "CDE / BIM compartido",
    pregunta: "El entorno común de datos (CDE) del proyecto lo usan 12 empresas. Un subcontratista resulta comprometido. ¿Cómo se limita el daño ANTES de que ocurra?",
    opciones: [
      "Permisos por rol y carpeta (mínimo privilegio), cuentas nominales por empresa y auditoría de accesos",
      "Dar a todos acceso total para que el trabajo no se pare",
      "Una única cuenta compartida con contraseña rotatoria",
      "Prohibir los CDE y volver al correo con ZIPs"
    ],
    correcta: 0,
    explicacion: "En un CDE, el eslabón más débil de las 12 empresas define tu seguridad. Mínimo privilegio (cada uno ve SOLO su parte), cuentas nominales y registro de accesos convierten un compromiso total en un incidente contenido."
  },
  {
    cat: "extrema", tema: "APT",
    pregunta: "IT descubre que un atacante lleva 6 MESES dentro de la red del estudio (APT). ¿Cuál es la respuesta correcta?",
    opciones: [
      "Investigación forense coordinada y contención planificada: expulsarlo de golpe y sin plan le avisa y puede destruir evidencias",
      "Apagar todos los equipos inmediatamente",
      "Cambiar todas las contraseñas y dar el incidente por cerrado",
      "Formatear los servidores esa misma noche"
    ],
    correcta: 0,
    explicacion: "Con un intruso persistente, actuar a lo bruto alerta al atacante (que puede tener diez puertas traseras más) y borra las pistas. Se investiga en silencio, se mapea su acceso y se le expulsa de forma coordinada, con ayuda especializada."
  },
  {
    cat: "extrema", tema: "Secuestro de dominio",
    pregunta: "La web del estudio empieza a redirigir a una página extraña y los correos rebotan: alguien controla el dominio. ¿Qué pasó y cómo se previene?",
    opciones: [
      "Comprometieron la cuenta del registrador: MFA en el registrador, bloqueo de transferencias y contacto urgente con el proveedor",
      "Caducó el hosting, basta con renovarlo",
      "Es un fallo de Google, esperar a que se arregle",
      "Cambiar el wifi de la oficina"
    ],
    correcta: 0,
    explicacion: "Quien controla tu dominio controla tu web Y tu correo (y puede pedir restablecimientos de contraseña de casi todo). La cuenta del registrador es una joya de la corona: MFA, bloqueo de transferencia (registrar lock) y acceso restringido."
  }
];


/* ---------------------------------------------------
   PISCINA CIBERGAME 3 — LA TORRE CIBERRESILIENTE
   --------------------------------------------------- */
const POOL_CIBERGAME3 = [

  /* ───── FÁCIL (10) ───── */
  {
    cat: "facil", tema: "Contraseñas",
    pregunta: "¿Cuál de estas contraseñas protegería mejor tu cuenta de BIM 360?",
    opciones: [
      "Tr&mpeta-Lila_42!",
      "b720rocks",
      "FerminVazquez2026",
      "12345678"
    ],
    correcta: 0,
    explicacion: "Longitud + mezcla de caracteres + sin datos personales ni nombres de la empresa. Las contraseñas con el nombre del estudio son lo primero que prueba un atacante."
  },
  {
    cat: "facil", tema: "Phishing",
    pregunta: "Un email contiene el enlace «http://b720-nominas.com.ru/login». ¿Cuál es la principal señal de alarma?",
    opciones: [
      "El dominio no es el oficial del estudio y usa una extensión extraña",
      "Que hable de nóminas",
      "Que sea un enlace, los enlaces siempre son peligrosos",
      "Ninguna, parece correcto"
    ],
    correcta: 0,
    explicacion: "Mira siempre el dominio completo: «b720-nominas.com.ru» no tiene nada que ver con el dominio real del estudio. Los atacantes registran dominios parecidos para engañarte."
  },
  {
    cat: "facil", tema: "Navegación segura",
    pregunta: "Vas a pagar una licencia de software y el navegador avisa: «La conexión no es segura». ¿Qué haces?",
    opciones: [
      "No introducir ningún dato y cerrar la página",
      "Continuar, seguro que es un error del navegador",
      "Introducir la tarjeta rápido antes de que caduque la sesión",
      "Recargar la página hasta que desaparezca el aviso"
    ],
    correcta: 0,
    explicacion: "Sin conexión cifrada (HTTPS), cualquier dato que envíes puede ser interceptado. Nunca introduzcas datos de pago o contraseñas si el navegador lo advierte."
  },
  {
    cat: "facil", tema: "Smishing",
    pregunta: "SMS recibido: «Su paquete está retenido en aduanas. Pague 1,99 € aquí: bit.ly/aduana-pago». ¿Qué haces?",
    opciones: [
      "Borrarlo: es smishing (phishing por SMS)",
      "Pagar, solo son 1,99 €",
      "Hacer clic para ver qué paquete es",
      "Responder pidiendo el número de seguimiento"
    ],
    correcta: 0,
    explicacion: "El «pago pequeño» es el anzuelo: lo que buscan son los datos completos de tu tarjeta. Las empresas de mensajería no cobran aduanas por SMS con enlaces acortados."
  },
  {
    cat: "facil", tema: "Antivirus",
    pregunta: "¿Qué hace (y qué NO hace) un antivirus?",
    opciones: [
      "Detecta y bloquea malware conocido, pero no sustituye el sentido común",
      "Te protege de absolutamente todo, puedes hacer clic tranquilo",
      "Solo sirve para que el PC vaya más lento",
      "Bloquea los emails aburridos"
    ],
    correcta: 0,
    explicacion: "El antivirus es una capa más, no un escudo total: el malware nuevo o los engaños de ingeniería social pueden saltárselo. La última barrera siempre eres tú."
  },
  {
    cat: "facil", tema: "Móvil",
    pregunta: "Tu móvil de empresa no tiene PIN ni huella configurados. ¿Cuál es el problema?",
    opciones: [
      "Si lo pierdes, quien lo encuentre accede a tu correo, fotos de obra y apps del estudio",
      "Ninguno, así se desbloquea más rápido",
      "Solo es un problema si lo pierdes en el extranjero",
      "Que gasta más batería sin PIN"
    ],
    correcta: 0,
    explicacion: "Un móvil sin bloqueo es tu identidad digital regalada: correo, MFA, WhatsApp, apps corporativas. PIN o biometría es lo mínimo; el cifrado del dispositivo depende de ello."
  },
  {
    cat: "facil", tema: "Apps móviles",
    pregunta: "Para ver renders en el móvil te pasan un enlace a un .APK «mejor que la app oficial». ¿Qué haces?",
    opciones: [
      "No instalarlo: solo apps de las tiendas oficiales (App Store / Google Play)",
      "Instalarlo, si lo recomienda un colega será bueno",
      "Instalarlo solo si pesa poco",
      "Instalarlo en el móvil personal en vez del de empresa"
    ],
    correcta: 0,
    explicacion: "Instalar APKs sueltos se salta todos los controles de la tienda: es la vía principal de malware en Android. Si no está en la tienda oficial, no se instala (en ningún móvil)."
  },
  {
    cat: "facil", tema: "Redes sociales",
    pregunta: "Una cuenta de Instagram que imita al estudio te escribe pidiendo tu número «para un evento interno». ¿Qué haces?",
    opciones: [
      "No responder, reportar la cuenta falsa y avisar al equipo",
      "Darle el número, parece la cuenta oficial",
      "Preguntarle algo que solo el estudio sabría",
      "Bloquearla sin avisar a nadie"
    ],
    correcta: 0,
    explicacion: "Las cuentas clonadas se usan para recolectar datos y lanzar estafas a empleados y clientes. Reporta y AVISA: si te ha escrito a ti, está escribiendo a más gente del estudio."
  },
  {
    cat: "facil", tema: "Mesa limpia",
    pregunta: "Encuentras en la impresora compartida unos planos confidenciales de un concurso que alguien olvidó recoger. ¿Cuál es la lección?",
    opciones: [
      "Lo impreso también es información sensible: recoger al momento y usar impresión segura",
      "Ninguna, el papel no se puede hackear",
      "Que hay que imprimir menos por el medio ambiente",
      "Dejarlos ahí, ya los recogerá su dueño"
    ],
    correcta: 0,
    explicacion: "La seguridad no acaba en la pantalla: un plano olvidado lo lee cualquier visita. Recoge tus impresiones al momento (o usa impresión con liberación por tarjeta) y aplica la política de mesa limpia."
  },
  {
    cat: "facil", tema: "Conceptos",
    pregunta: "¿Cuál es la diferencia entre «spam» y «phishing»?",
    opciones: [
      "El spam es publicidad molesta; el phishing busca engañarte para robarte datos o dinero",
      "Son exactamente lo mismo",
      "El spam es por email y el phishing por teléfono",
      "El phishing es spam pero en inglés"
    ],
    correcta: 0,
    explicacion: "El spam te hace perder tiempo; el phishing te tiende una trampa. El primero se borra y punto; el segundo se reporta, porque detrás hay un ataque dirigido a ti o al estudio."
  },

  /* ───── MEDIA (10) ───── */
  {
    cat: "media", tema: "Fraude del CEO",
    pregunta: "Email de «Fermín» a contabilidad: «Necesito una transferencia URGENTE y CONFIDENCIAL. No comentes con nadie. Te paso el IBAN». ¿Qué haces?",
    opciones: [
      "Verificarlo con él por otro canal (teléfono, en persona) antes de mover un euro",
      "Hacer la transferencia, es el jefe",
      "Responder al email pidiendo confirmación",
      "Hacerla pero solo de la mitad del importe"
    ],
    correcta: 0,
    explicacion: "Es el «fraude del CEO»: urgencia + secretismo + autoridad. Responder al mismo email no sirve (lo controla el atacante). Verifica siempre por un canal distinto."
  },
  {
    cat: "media", tema: "Wi-Fi pública",
    pregunta: "Estás en el aeropuerto y necesitas enviar los planos finales al cliente. Hay una Wi-Fi gratis «AEROPUERTO_FREE». ¿Qué haces?",
    opciones: [
      "Usar la VPN del estudio o compartir datos desde tu móvil",
      "Conectarte a la Wi-Fi gratis, es solo un envío",
      "Pedirle la contraseña al de la cafetería",
      "Enviar los planos por WhatsApp, que es más seguro"
    ],
    correcta: 0,
    explicacion: "Las Wi-Fi abiertas pueden estar monitorizadas o ser falsas (gemelo malvado). Para información de proyecto, usa siempre VPN o la red de datos de tu propio móvil."
  },
  {
    cat: "media", tema: "Ransomware",
    pregunta: "¿Qué es exactamente un «ransomware»?",
    opciones: [
      "Malware que cifra tus archivos y exige un rescate para devolverlos",
      "Un programa que ralentiza el equipo para vender más RAM",
      "Un virus que solo afecta a servidores de correo",
      "Una estafa telefónica"
    ],
    correcta: 0,
    explicacion: "El ransomware secuestra tus datos cifrándolos. Para un estudio de arquitectura significa perder proyectos enteros. La mejor defensa: copias de seguridad y prevención."
  },
  {
    cat: "media", tema: "Accesos",
    pregunta: "Terminó el concurso en el que colaborabais con un estudio externo. ¿Qué haces con su acceso a vuestras carpetas compartidas?",
    opciones: [
      "Revocarlo: los accesos se conceden por proyecto y se retiran al acabar",
      "Dejarlo, por si colaboramos otra vez",
      "Cambiar el nombre de la carpeta para despistar",
      "Pedirles amablemente que no miren más"
    ],
    correcta: 0,
    explicacion: "Cada acceso vivo es una puerta abierta: si comprometen al colaborador mañana, te comprometen a ti. Principio de mínimo privilegio: acceso solo a quien lo necesita, solo mientras lo necesita."
  },
  {
    cat: "media", tema: "Ingeniería social",
    pregunta: "¿Qué es la «ingeniería social» en ciberseguridad?",
    opciones: [
      "Manipular psicológicamente a las personas para que cometan errores de seguridad",
      "Diseñar redes sociales corporativas",
      "Un software de cálculo de estructuras",
      "Programar bots para LinkedIn"
    ],
    correcta: 0,
    explicacion: "El eslabón más débil no es la máquina: eres tú. La ingeniería social explota urgencia, miedo, autoridad o curiosidad. Por eso casi todos los ataques empiezan con un engaño, no con código."
  },
  {
    cat: "media", tema: "Router",
    pregunta: "El router Wi-Fi del estudio lleva 4 años sin actualizar el firmware. ¿Por qué importa?",
    opciones: [
      "Acumula vulnerabilidades conocidas: es la puerta de toda la red y hay que actualizarlo como cualquier equipo",
      "No importa, los routers no se hackean",
      "Solo importa si el wifi va lento",
      "Basta con esconder el nombre de la red"
    ],
    correcta: 0,
    explicacion: "El router es el portero del estudio y los fabricantes publican parches que nadie instala. Un router vulnerable permite espiar o desviar TODO el tráfico. Firmware al día y contraseña de administración propia."
  },
  {
    cat: "media", tema: "Spear phishing social",
    pregunta: "Te llega por LinkedIn una oferta de trabajo irresistible de un «estudio internacional» con un adjunto «condiciones.zip». ¿Qué haces?",
    opciones: [
      "No abrir el ZIP: las ofertas señuelo por redes son spear phishing; verificar la empresa por canales oficiales",
      "Abrirlo, las oportunidades no esperan",
      "Abrirlo en el ordenador del estudio, que tiene antivirus",
      "Pedir que te lo reenvíen al correo del trabajo"
    ],
    correcta: 0,
    explicacion: "Las falsas ofertas de trabajo son una táctica documentada (grupo Lazarus incluido) para infectar a empleados concretos. La vanidad y la ilusión bajan las defensas igual que el miedo: mismo cuidado con los adjuntos."
  },
  {
    cat: "media", tema: "Permisos de apps",
    pregunta: "Una app de linterna pide acceso a tus contactos, micrófono y ubicación. ¿Qué hay de raro?",
    opciones: [
      "Pide permisos que no necesita para funcionar: señal típica de app espía o de venta de datos",
      "Nada, todas las apps piden lo mismo",
      "Que debería pedir también la cámara",
      "Solo sería raro si fuera de pago"
    ],
    correcta: 0,
    explicacion: "Regla de oro: los permisos deben corresponder a la función. ¿Una linterna con tu agenda y tu micrófono? Revisa los permisos de las apps (también las ya instaladas) y recorta los innecesarios."
  },
  {
    cat: "media", tema: "IoT",
    pregunta: "Las cámaras IP y la impresora de la oficina siguen con la contraseña de fábrica («admin/admin»). ¿Cuál es el riesgo?",
    opciones: [
      "Cualquiera puede tomar su control y usarlas como puerta de entrada a la red del estudio",
      "Ninguno, son solo periféricos",
      "Que alguien gaste vuestro tóner",
      "Solo es grave en oficinas grandes"
    ],
    correcta: 0,
    explicacion: "Los dispositivos IoT con credenciales por defecto se encuentran con buscadores como Shodan en segundos. Una cámara comprometida es un espía y un punto de salto hacia los servidores. Contraseña propia y red separada."
  },
  {
    cat: "media", tema: "SIM swapping",
    pregunta: "Tu móvil se queda sin cobertura de repente y empiezan a llegarte avisos de acceso a tus cuentas. ¿Qué puede estar pasando?",
    opciones: [
      "SIM swapping: alguien duplicó tu SIM para recibir tus SMS de verificación; contacta YA con la operadora y avisa a IT",
      "Una avería de antena, esperar a mañana",
      "El móvil se ha quedado viejo",
      "Demasiadas apps abiertas a la vez"
    ],
    correcta: 0,
    explicacion: "Con un duplicado de tu SIM, el atacante recibe tus códigos SMS y va reseteando contraseñas una a una. La pérdida súbita de cobertura es LA señal: cada minuto cuenta. Mejor MFA por app que por SMS."
  },

  /* ───── DIFÍCIL (9) ───── */
  {
    cat: "dificil", tema: "Cryptojacking",
    pregunta: "Tu workstation va lenta, los ventiladores rugen incluso en reposo y la factura eléctrica del estudio ha subido. El antivirus no detecta nada. ¿Qué sospechas?",
    opciones: [
      "Cryptojacking: alguien está minando criptomonedas con tu equipo",
      "Que Revit necesita más RAM",
      "Que el equipo es viejo y toca cambiarlo",
      "Polvo en los ventiladores"
    ],
    correcta: 0,
    explicacion: "El cryptojacking usa tu CPU/GPU para minar criptomonedas ajenas. Es sigiloso: no roba datos, roba recursos. Síntomas: calor, ruido y consumo sin carga de trabajo que lo justifique."
  },
  {
    cat: "dificil", tema: "Spear phishing",
    pregunta: "¿Qué diferencia al «spear phishing» del phishing masivo?",
    opciones: [
      "Está dirigido y personalizado: usa datos reales de la víctima o su empresa",
      "Usa SMS en lugar de email",
      "Solo afecta a directivos",
      "Es phishing enviado en horario laboral"
    ],
    correcta: 0,
    explicacion: "El spear phishing investiga primero: tu cargo, tus proyectos, tus proveedores (a menudo desde LinkedIn o la web del estudio). Un email que menciona tu obra real es mucho más convincente… y peligroso."
  },
  {
    cat: "dificil", tema: "Shadow IT",
    pregunta: "¿Cuál es el mayor riesgo del «shadow IT» (p. ej., usar tu WeTransfer personal para enviar planos del estudio)?",
    opciones: [
      "Los datos del estudio quedan fuera de su control, sin sus políticas de seguridad ni trazabilidad",
      "Que IT se enfade contigo",
      "Que es más lento que el servidor interno",
      "Ninguno, si el archivo lleva contraseña"
    ],
    correcta: 0,
    explicacion: "Las herramientas no aprobadas escapan a los controles del estudio: nadie sabe dónde acaban los datos, quién accede ni cuándo se borran. Si la herramienta oficial no te sirve, pide una mejor: no improvises."
  },
  {
    cat: "dificil", tema: "HTTPS",
    pregunta: "Una web de phishing puede tener candado HTTPS. ¿Qué garantiza realmente el candado?",
    opciones: [
      "Que la conexión va cifrada, pero NO que la web sea legítima",
      "Que la web es oficial y de confianza",
      "Que la web no tiene virus",
      "Que la web cumple el RGPD"
    ],
    correcta: 0,
    explicacion: "HTTPS cifra el canal: nadie puede espiar lo que envías. Pero un atacante también puede comprar un certificado para su web falsa. El candado dice «conexión segura», no «sitio honesto»."
  },
  {
    cat: "dificil", tema: "Ataque homógrafo",
    pregunta: "Recibes un enlace a «autodesk.com» que pasa todos los filtros visuales… pero la «o» es en realidad un carácter cirílico idéntico. ¿Cómo se llama y cómo te proteges?",
    opciones: [
      "Ataque homógrafo (IDN): no seguir enlaces a webs críticas; escribir la URL a mano o usar favoritos",
      "Es un error tipográfico inofensivo del remitente",
      "Se llama typosquatting clásico y el antivirus lo bloquea siempre",
      "Basta mirar que tenga candado HTTPS"
    ],
    correcta: 0,
    explicacion: "Los alfabetos cirílico o griego tienen letras visualmente IDÉNTICAS a las latinas: «аutodesk.com» puede ser otro dominio. Contra lo indistinguible a la vista: marcadores propios, URL a mano y gestores de contraseñas (no rellenan en el dominio falso)."
  },
  {
    cat: "dificil", tema: "Watering hole",
    pregunta: "La web del Colegio de Arquitectos —que tu sector visita a diario— ha sido comprometida y sirve malware. ¿Cómo se llama esta táctica?",
    opciones: [
      "Watering hole: comprometer una web que tu colectivo frecuenta para infectar a sus visitantes",
      "Phishing masivo de toda la vida",
      "Un defacement sin más consecuencias",
      "Cryptojacking de servidor"
    ],
    correcta: 0,
    explicacion: "Como los leones en la charca: no persiguen a la presa, esperan donde va a beber. Defensas: navegador y sistema siempre parcheados, y desconfiar de webs legítimas que de pronto piden «instalar un visor o actualización»."
  },
  {
    cat: "dificil", tema: "Sesiones",
    pregunta: "En el ordenador de la oficina de un cliente inicias sesión en tu correo para reenviar un plano. ¿Qué haces al terminar y por qué?",
    opciones: [
      "Cerrar sesión y no guardar nada: las cookies de sesión permiten entrar SIN contraseña (session hijacking)",
      "Cerrar solo la pestaña del navegador",
      "Nada, la sesión caduca sola en unos minutos",
      "Borrar el historial y listo"
    ],
    correcta: 0,
    explicacion: "Mientras la cookie de sesión viva, quien use ese equipo entra en tu buzón sin necesitar contraseña NI MFA. Cierra sesión explícitamente, rechaza «mantener sesión iniciada» y, mejor, usa tu propio dispositivo."
  },
  {
    cat: "dificil", tema: "Respuesta a incidentes",
    pregunta: "Detectas ransomware cifrando archivos en tu equipo AHORA MISMO. ¿Apagarlo de un botonazo?",
    opciones: [
      "No: desconectarlo de la red (cable/wifi) pero dejarlo encendido; apagarlo destruye evidencia en memoria",
      "Sí, apagarlo es lo más rápido",
      "Sí, y de paso formatear",
      "Dejarlo todo como está y esperar instrucciones sin aislar nada"
    ],
    correcta: 0,
    explicacion: "Aislar de la red corta la propagación; mantenerlo encendido preserva claves de cifrado y rastros en RAM que los forenses pueden usar para recuperar archivos e investigar. Desenchufa el cable, no el equipo."
  },
  {
    cat: "dificil", tema: "Extensiones",
    pregunta: "Una web (dominio correcto, candado en regla) te pide instalar una extensión del navegador para «visualizar el archivo CAD». ¿Qué haces?",
    opciones: [
      "No instalarla desde la web: las extensiones se instalan solo del catálogo oficial y tras revisar permisos",
      "Instalarla: el dominio y el candado son correctos",
      "Instalarla en modo incógnito, que es más seguro",
      "Instalarla y borrarla después de ver el archivo"
    ],
    correcta: 0,
    explicacion: "Una extensión maliciosa ve TODO lo que haces en el navegador: sesiones, contraseñas, banca. Web legítima ≠ extensión legítima. Catálogo oficial, permisos mínimos y cuantas menos extensiones, mejor."
  },

  /* ───── EXTREMA (7) ───── */
  {
    cat: "extrema", tema: "Zero-day",
    pregunta: "¿Por qué una vulnerabilidad «zero-day» es especialmente peligrosa?",
    opciones: [
      "Porque se explota antes de que exista un parche: ni el fabricante la conoce",
      "Porque solo ataca a las 00:00 horas",
      "Porque borra los datos en cero segundos",
      "Porque afecta únicamente a sistemas sin antivirus"
    ],
    correcta: 0,
    explicacion: "«Zero-day» = el fabricante lleva cero días sabiendo que existe: no hay parche posible. Por eso la defensa en profundidad importa: si una capa falla (y fallará), que las demás contengan el daño."
  },
  {
    cat: "extrema", tema: "Doble extorsión",
    pregunta: "Ransomware con doble extorsión: han cifrado el servidor Y amenazan con publicar los planos confidenciales de un cliente. ¿Cuál es la respuesta correcta?",
    opciones: [
      "Aislar los equipos, denunciar (INCIBE/Policía), notificar a la AEPD en 72 h si hay datos personales y restaurar copias: pagar no garantiza nada",
      "Pagar inmediatamente para que no publiquen nada",
      "Formatear todos los equipos y no contárselo al cliente",
      "Negociar el rescate a la baja, como en cualquier obra"
    ],
    correcta: 0,
    explicacion: "Pagar no garantiza ni la clave ni el silencio: estás tratando con criminales. El plan de respuesta es: aislar, denunciar, notificar a la AEPD (el RGPD da 72 horas si hay datos personales) y restaurar desde copias. Ocultárselo al cliente puede ser, además, ilegal."
  },
  {
    cat: "extrema", tema: "Backups",
    pregunta: "El ransomware cifró el servidor… y también el NAS de copias de seguridad, que estaba siempre conectado. ¿Qué falló en la estrategia?",
    opciones: [
      "Faltaba una copia desconectada o inmutable: un backup siempre accesible es cifrable como cualquier disco",
      "Nada, fue mala suerte",
      "El NAS era de una marca mala",
      "Faltaba un segundo NAS conectado al lado"
    ],
    correcta: 0,
    explicacion: "Los ransomware modernos buscan y cifran los backups ANTES de mostrarse. La regla 3-2-1 exige una copia fuera de su alcance: offline (desconectada) o inmutable (no modificable ni borrable durante un periodo). Es la diferencia entre incidente y catástrofe."
  },
  {
    cat: "extrema", tema: "Insider",
    pregunta: "Un empleado descontento descarga el archivo histórico completo de proyectos la semana antes de irse a la competencia. ¿Qué controles lo habrían evitado o detectado?",
    opciones: [
      "Mínimo privilegio, alertas de descargas masivas (DLP) y retirada de accesos desde el preaviso",
      "Ninguno: contra un empleado no hay defensa posible",
      "Cámaras enfocando todas las pantallas",
      "Prohibir los USB y nada más"
    ],
    correcta: 0,
    explicacion: "La amenaza interna se gestiona con capas: que nadie tenga acceso a TODO (mínimo privilegio), que las descargas anómalas disparen alertas (DLP) y que el offboarding empiece con el preaviso, no el último día. Confianza sí; control, también."
  },
  {
    cat: "extrema", tema: "OT / Domótica",
    pregunta: "El BMS (domótica) de un edificio que entregasteis es accesible desde internet con la contraseña por defecto. ¿Qué hacéis como estudio?",
    opciones: [
      "Avisar formalmente al cliente: cambiar credenciales, sacar el BMS de internet y segmentarlo de la red ofimática",
      "Nada, el edificio ya está entregado",
      "Cambiar la contraseña sin decírselo a nadie",
      "Publicar un manual de usuario más completo"
    ],
    correcta: 0,
    explicacion: "Un BMS expuesto permite manipular clima, accesos o incendios: es seguridad FÍSICA de las personas. El estudio que lo proyectó tiene deber de avisar: credenciales propias, fuera de internet (o tras VPN) y red OT separada de la ofimática."
  },
  {
    cat: "extrema", tema: "Exfiltración",
    pregunta: "IT detecta un goteo constante de tráfico saliente, pequeño pero diario, hacia un servidor desconocido a las 3 AM. ¿Qué es y por qué es grave?",
    opciones: [
      "Exfiltración lenta: alguien saca datos poco a poco para no disparar alarmas; hay que investigar, no ignorar",
      "Actualizaciones automáticas de Windows",
      "Ruido normal de internet, sin importancia",
      "El becario viendo series por la noche"
    ],
    correcta: 0,
    explicacion: "Robar 200 GB de golpe enciende alarmas; 200 MB cada noche durante un año, no. La exfiltración «low and slow» es la firma de un intruso paciente. El tráfico saliente anómalo SIEMPRE se investiga: es la diferencia entre pillarlo a tiempo o leerlo en prensa."
  },
  {
    cat: "extrema", tema: "Certificado digital",
    pregunta: "Roban el certificado digital del estudio (el de firmar licitaciones). ¿Cuál es la respuesta y la prevención correctas?",
    opciones: [
      "Revocarlo de inmediato, avisar a las plataformas de licitación y custodiar los certificados en hardware (token/HSM)",
      "Cambiar la contraseña del correo y seguir",
      "Esperar a que caduque solo",
      "Crear otro certificado y usar los dos"
    ],
    correcta: 0,
    explicacion: "Con tu certificado, el atacante ES el estudio ante la administración: puede firmar ofertas, avales o contratos. Revocación inmediata (FNMT/CA), aviso a las plataformas y, de ahí en adelante, certificado en token físico, no en un archivo .p12 en el escritorio."
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
  Genera el set de la partida a partir de la piscina indicada: 8 preguntas.
  - 5 primeras: mezcla aleatoria de fáciles y medias (3 + 2).
  - 3 últimas SIEMPRE: 2 difíciles + 1 extrema (el jefe final).
  Cada partida sale distinta porque se baraja la piscina entera.
*/
function generarSetPartida(pool) {
  const faciles   = barajar(pool.filter(q => q.cat === "facil")).slice(0, 3);
  const medias    = barajar(pool.filter(q => q.cat === "media")).slice(0, 2);
  const dificiles = barajar(pool.filter(q => q.cat === "dificil")).slice(0, 2);
  const extrema   = barajar(pool.filter(q => q.cat === "extrema")).slice(0, 1);

  return [...barajar([...faciles, ...medias]), ...dificiles, ...extrema];
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
