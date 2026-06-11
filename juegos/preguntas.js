/* =====================================================
   PISCINA DE PREGUNTAS — CIBERGAME b720
   Compartida por Cibergame 2 y Cibergame 3.
   Categorías: facil · media · dificil · extrema
   Basada en las amenazas del juego original (backs.html):
   phishing, baiting (USB), vishing, plugins falsos y ransomware.
   ===================================================== */

const POOL_PREGUNTAS = [

  /* ---------------- FÁCIL ---------------- */
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

  /* ---------------- MEDIA ---------------- */
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

  /* ---------------- DIFÍCIL ---------------- */
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

  /* ---------------- EXTREMA ---------------- */
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
  Genera el set de la partida: 8 preguntas.
  - 5 primeras: mezcla aleatoria de fáciles y medias (3 + 2).
  - 3 últimas SIEMPRE: 2 difíciles + 1 extrema (el jefe final).
  Cada partida sale distinta porque se baraja la piscina entera.
*/
function generarSetPartida() {
  const faciles   = barajar(POOL_PREGUNTAS.filter(q => q.cat === "facil")).slice(0, 3);
  const medias    = barajar(POOL_PREGUNTAS.filter(q => q.cat === "media")).slice(0, 2);
  const dificiles = barajar(POOL_PREGUNTAS.filter(q => q.cat === "dificil")).slice(0, 2);
  const extrema   = barajar(POOL_PREGUNTAS.filter(q => q.cat === "extrema")).slice(0, 1);

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
