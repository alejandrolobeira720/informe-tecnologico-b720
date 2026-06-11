/* =========================================
   VARIABLES GLOBALES DEL JUEGO
   ========================================= */
let nivelActual = 1;
let vidas = 3;
let puntosXP = 0;

/* =========================================
   FUNCIÓN DE INICIO
   ========================================= */
function empezarPartida() {
    // 1. Ocultamos la portada
    document.getElementById("start-screen").style.display = "none";
    
    // 2. Mostramos el contenedor del juego
    document.getElementById("game-wrapper").style.display = "flex"; 
    
    // 3. Reseteamos valores
    nivelActual = 1;
    vidas = 3;
    puntosXP = 0;
    
    // 4. Actualizamos la barra de vidas y rango
    actualizarInterfaz();
    
    // 5. Cargamos el primer nivel
    cargarSiguienteEscenario(); 
}

/* =========================================
   SISTEMA DE VIDAS Y ERRORES
   ========================================= */
function cometerError(mensajeOverride) {
    // 1. Restamos vida y actualizamos la barra
    if (vidas > 0) {
        vidas--; 
        actualizarInterfaz();
    }

    // 2. Comprobamos si nos hemos muerto
if (vidas === 0) {
        // Seleccionamos la pantalla para borrar todo y poner el mensaje final
        const pantalla = document.getElementById("game-screen");
        const botones = document.getElementById("action-buttons");
        const dialogo = document.getElementById("dialogue-box");
        
        // Limpiamos la interfaz
        botones.innerHTML = "";
        dialogo.innerText = "SISTEMA CRÍTICO: DESCONEXIÓN INMINENTE...";

        // PINTAMOS LA PANTALLA DE LA MUERTE
        pantalla.innerHTML = `
            <div class="game-over-screen">
                <div class="skull-icon">☠️</div>
                
                <h1 class="game-over-title">GAME OVER</h1>
                
                <div class="game-over-text">
                    <p><strong>TU ESTUDIO HA SIDO HACKEADO.</strong></p>
                    <br>
                    <p>Los ciberdelincuentes han encriptado el servidor.</p>
                    <p>Han convertido todos tus planos de AutoCAD a <strong>Comic Sans</strong> y han pintado los muros de carga en magenta fosforito.</p>
                    <br>
                    <p style="color: #ff5252; font-style: italic;">"Tu reputación ha caído más rápido que un falso techo de pladur mal anclado."</p>
                </div>

                <button onclick="location.reload()" class="btn-danger" style="font-size: 20px;">
                    🔄 REINICIAR SISTEMA (Y REZAR)
                </button>
            </div>
        `;
        
    } else {
        // --- CASO ERROR PERO VIVO (Ventana Modal Roja) ---
        let mensajeFallo = "";
		
		// Si nos han pasado un mensaje específico (Nivel 5), lo usamos
        if (mensajeOverride) {
            mensajeFallo = mensajeOverride;
        } 
        // Si no, usamos el switch clásico de los niveles anteriores
        else {
        switch(nivelActual) {
            case 1: 
                mensajeFallo = "¡Catástrofe! 💥 Ahora tu ordenador tiene más virus que un baño público. Nunca te fíes de las ofertas suculentas, de las prisas y, por supuesto, de los enlaces o archivos adjuntos."; 
                break;
            case 2: 
                mensajeFallo = "¡Error Fatal! 💾 Conectaste el USB. El virus ha borrado el proyecto básico, el de ejecución y hasta la cafetera."; 
                break;
            case 3: 
                mensajeFallo = "¡Te pillaron! 📞 Diste el código. Los hackers están brindando con champán a tu salud (y con tu tarjeta)."; 
                break;
            case 4: 
                mensajeFallo = "¡Infectado! Ese botón no era de descarga. Ahora tu navegador está minando criptomonedas para alguien en Siberia."; 
                break;
            case 5: 
                mensajeFallo = "¡Has pagado! 💸 Grave error. Te has quedado sin dinero y sin archivos. Los cibercriminales no tienen servicio de devolución."; 
                break;
            default:
                mensajeFallo = "¡Error de sistema! Has metido la pata hasta el fondo.";
			}
		}
		
        // Configurar Modal ROJO
        const modal = document.getElementById("level-modal");
        const caja = document.querySelector(".level-box");
        const titulo = document.getElementById("modal-title");
        const icono = document.querySelector(".level-icon");
        const boton = document.querySelector(".level-box button");

        caja.style.border = "2px solid #ff5252"; 
        caja.style.boxShadow = "0 0 50px rgba(255, 82, 82, 0.3)";
        titulo.style.color = "#ff5252";
        titulo.style.textShadow = "0 0 20px rgba(255, 82, 82, 0.5)";

        icono.innerText = "💀";
        titulo.innerText = "¡FALLO DE SEGURIDAD!";
        document.getElementById("modal-message").innerText = mensajeFallo;

        boton.innerText = "INTENTAR DE NUEVO 🔄";
        boton.onclick = cerrarModalError; 

        modal.style.display = "flex";
    }
}

function cerrarModalError() {
    document.getElementById("level-modal").style.display = "none";
    cargarSiguienteEscenario(); 
}

/* =========================================
   INTERFAZ Y NAVEGACIÓN
   ========================================= */
function actualizarInterfaz() {
    // Corazones
    const visualVidas = "⛑️".repeat(vidas);
    document.getElementById("lives").innerText = visualVidas;
    
    // Nota Real
    let vidasPerdidas = 3 - vidas;
    let notaReal = puntosXP - (vidasPerdidas * 20);
    if (notaReal < 0) notaReal = 0; 

    // Rango
    let rango = "Abuelita del CAD 👵"; 
    if (notaReal >= 60) rango = "Arquitecto Pasable 📐"; 
    if (notaReal >= 100) rango = "Hacker de Hormigón 🛡️"; 
    
    document.getElementById("risk-level").innerText = rango;
}

function superarNivel() {
    // Configurar Modal VERDE
    const caja = document.querySelector(".level-box");
    const titulo = document.getElementById("modal-title");
    const icono = document.querySelector(".level-icon");
    const boton = document.querySelector(".level-box button");

    caja.style.border = "2px solid #38ef7d"; 
    caja.style.boxShadow = "0 0 50px rgba(56, 239, 125, 0.3)";
    titulo.style.color = "#38ef7d";
    titulo.style.textShadow = "0 0 20px rgba(56, 239, 125, 0.5)";
    icono.innerText = "🏆";
    titulo.innerText = "¡NIVEL COMPLETADO!";
    boton.innerText = "SIGUIENTE NIVEL ⏩";
    boton.onclick = continuarJuego; 
   
    let mensajeVictoria = "";
    switch(nivelActual) {
        case 1: mensajeVictoria = "¡Cimentación Antisísmica! 🏗️ Has detectado que ese enlace era más falso que un pilar de poliespán. Tu red sigue sólida."; break;
        case 2: mensajeVictoria = "¡Quieto ahí! ✋ Ese USB tenía más peligro que un cliente con 'ideas propias'."; break;
        case 3: mensajeVictoria = "¡Cortafuegos Humano! 📵 Le has colgado al estafador con elegancia."; break;
        case 4: mensajeVictoria = "¡Ojo de Francotirador! 🦅 Has esquivado el botón falso con más precisión que un 'Osnap' en AutoCAD."; break;
        default: mensajeVictoria = "¡Nivel Superado! Estás más limpio que un render de concurso. ✨";
    }
    
    document.getElementById("modal-message").innerText = mensajeVictoria;
    document.getElementById("level-modal").style.display = "flex"; 
    
    // ¡AQUÍ ESTABA EL ERROR! 
    // He borrado todo el código que sumaba nivel aquí abajo.
    // Ahora el juego espera pacientemente a que pulses el botón.
}

function continuarJuego() {
    document.getElementById("level-modal").style.display = "none";

    // 1. Sumamos puntos
    puntosXP += 20;
    
    // 2. Avanzamos el contador de nivel
    nivelActual++; 

    // 3. Actualizamos la barra visualmente
    actualizarInterfaz();
    document.getElementById("level-text").innerText = "Nivel " + nivelActual + " de 5";
    let porcentaje = nivelActual * 20; 
    document.getElementById("progress-bar-fill").style.width = porcentaje + "%";

    // 4. Cargamos el siguiente escenario (Ahora sí cargará el Nivel 2 si estabas en el 1)
    cargarSiguienteEscenario();
}

/* =========================================
   RENDERIZADO DE NIVELES (HTML DINÁMICO)
   ========================================= */
function cargarSiguienteEscenario() {
    const pantalla = document.getElementById("game-screen");
    const dialogo = document.getElementById("dialogue-box");
    const botones = document.getElementById("action-buttons");

    // Limpiamos pantalla
    pantalla.innerHTML = "";
    botones.innerHTML = "";

    
    // === NIVEL 1: PHISHING ===
    if (nivelActual === 1) {
        pantalla.innerHTML = `
            <div class="email-window">
                <div class="email-header">
                    <p><strong>De:</strong> 
                        <span class="pista-zona pista-abajo" data-pista="❌ DOMINIO SOSPECHOSO. No coincide con la empresa oficial y usa una extensión rara (.web.id).">
                            maria.perez@materiales-increibles-baratitos.net
                        </span>
                    </p>
                    <p><strong>Asunto:</strong> 
                        <span class="pista-zona pista-abajo" data-pista="⚠️ URGENCIA FALSA. Los estafadores usan palabras como 'URGENTE' para que no pienses.">
                            ⚠️ ¡URGENTE! Catálogo mármol Carrara 2026
                        </span>
                    </p>
                </div>
                <div class="email-body">
                    <br>
                    <p>Hola 
                        <span class="pista-zona" data-pista="🤖 SALUDO IMPERSONAL. Un proveedor real usaría tu nombre, no el nombre de tu estudio o un genérico.">
                            b720
                        </span>,
                    </p>
                    <p>Ofrecemos a clientes especiales como vosotros descuentos del 40%.</p>
                    <p>Aguantamos la oferta 48hrs por ser cliente recurrente.<br><br>Seguimos en contacto.</p>
                    <br>
                    <span class="pista-zona" data-pista="⛔ URL PELIGROSA. No tiene 'https' (candado), tiene faltas de ortografía ('increibes') y la web no parece oficial.">
                        <p onclick="cometerError()" class="fake-link">👉 HACER CLIC AQUÍ PARA VER EL CATÁLOGO (http://materiales-increibes/price.com)</p>
                    </span>
                </div>
            </div>
        `;
        
        // Actualizamos el diálogo para invitar al jugador a investigar
        dialogo.innerHTML = 'Pasa el ratón por los textos subrayados <span style="border-bottom:1px dashed #fff">---</span> y luego confía en el antivirus, clica en el enlace.';
        
        botones.innerHTML = `<button onclick="superarNivel()" class="btn-safe">🛡️ REPORTAR COMO PHISHING</button>`;
    // === NIVEL 2: USB ===
    } else if (nivelActual === 2) {
        pantalla.innerHTML = `
            <div class="scene-construction">
                <div class="character-paco">👷‍♂️</div>
                <h2>Visita de Obra: Planta 1</h2>
                <p>Luca, el director de obra, te ofrece un USB que ha encontrado en el suelo.</p>
				<br>
                <div class="usb-item">💾 FOTOS CENA DE NAVIDAD</div>
            </div>
        `;
        dialogo.innerText = 'Luca: "Mira, seguro que son las fotos del finde pasado. Ponlo en tu portátil y las vemos."';
        botones.innerHTML = `
            <button onclick="simularVirus()" class="btn-start">🔌 Conectar USB ("Solo un momento")</button>
            <button onclick="superarNivel()" class="btn-safe">🚫 Rechazar y llevar a IT</button>
        `;
    
    // === NIVEL 3: VISHING ===
    } else if (nivelActual === 3) {
        pantalla.innerHTML = `
            <div class="modal-overlay">
                <div class="system-popup">
                    <div class="popup-header"><span class="pulse-icon">🔴</span> LLAMADA ENTRANTE</div>
                    <div class="popup-body">
                        <h3>Soporte Técnico IT</h3>
                        <p>Departamento de Ciberseguridad</p>
                        <div class="phone-icon">📞</div>
                    </div>
                </div>
            </div>
        `;
        dialogo.innerText = 'Tu teléfono empieza a sonar insistentemente...';
        botones.innerHTML = `
            <button onclick="contestarLlamada()" class="btn-safe">📞 Contestar</button>
            <button onclick="reportarLlamada()" class="btn-safe">🚫 Colgar y Reportar</button>
        `;

    // === NIVEL 4: FALSO PLUGIN ===
    } else if (nivelActual === 4) {
        pantalla.innerHTML = `
            <div class="browser-mockup">
                <div class="browser-bar">
                    <div class="browser-controls">
                        <div class="red-dot" onclick="superarNivel()"></div> 
                        <div class="yellow-dot"></div><div class="green-dot"></div>
                    </div>
                    <div class="address-bar">🔒 http://visor-cad-online.net/render/chamartin_final.dwg</div>
                </div>
                <div class="web-content">
                    <div class="blueprint-bg">🏗️ PROYECTO MUSEO 2026</div>
                    <div class="plugin-modal">
                        <h3>⚠️ Falta Plugin: CAD Viewer 2026</h3>
                        <p>Para visualizar este archivo .DWG de alta resolución, necesita actualizar su navegador.</p>
                        <div class="modal-actions">
                            <button onclick="instalarMalware()" class="btn-download">⬇️ Actualizar Plugin</button>
                            <button onclick="superarNivel()" class="btn-cancel">✕ No actualizar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        dialogo.innerText = 'Intentas ver los planos de Chamartín online porque no tienes instalado DWG TrueView.';
        botones.innerHTML = ''; 
    
    // === NIVEL 5: RANSOMWARE ===
    } else if (nivelActual === 5) {
        pantalla.innerHTML = `
            <div class="ransomware-screen">
                <div class="lock-icon">🔒</div>
                <h1>¡TUS ARCHIVOS HAN SIDO SECUESTRADOS!</h1>
                <div class="ransom-message">
                    <p>El proyecto <strong>FIRA_FINAL.rvt</strong> está encriptado.</p>
                    <p>Tienes <strong>24 horas</strong> para realizar el pago o se perderá todo.</p>
                </div>
                <div class="countdown">23:59:59</div>
                <div class="bitcoin-address">BTC: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</div>
            </div>
        `;
        dialogo.innerText = '¡PÁNICO! Un ransomware ha bloqueado el servidor. ¿Qué haces?';
        botones.innerHTML = `
            <button onclick="resolverIncidente('pagar')" class="btn-safe">💸 Pagar el Rescate (1000 BTC)</button>
            <button onclick="resolverIncidente('reiniciar')" class="btn-safe">🔄 Reiniciar el PC</button>
            <button onclick="resolverIncidente('aislar')" class="btn-safe">🔌 Desconectar Cable de Red</button>
        `;
    }
}

/* =========================================
   FUNCIONES ESPECÍFICAS DE NIVELES
   ========================================= */

// --- NIVEL 3 ---
function contestarLlamada() {
    const cuerpoPopup = document.querySelector(".popup-body");
    const botones = document.getElementById("action-buttons");

    cuerpoPopup.innerHTML = `
        <h3>📞 En línea con Soporte</h3>
        <p>"Hola, necesitamos verificar su identidad. Por favor, díganos el código que acabamos de enviar a su móvil."</p>
        <input type="text" id="codigo-mfa" placeholder="Ej: 894301" class="input-hack">
        <button onclick="enviarCodigo()" class="btn-warning" style="margin-top:10px;">Enviar Código</button>
    `;
    botones.innerHTML = `<button onclick="reportarLlamada()" class="btn-safe">🛡️ Colgar y Reportar (Es una estafa)</button>`;
}

function enviarCodigo() {
    const codigo = document.getElementById("codigo-mfa").value;
    const popup = document.querySelector(".system-popup"); // Seleccionamos la ventana de llamada
    const cuerpoPopup = document.querySelector(".popup-body");
    const cabecera = document.querySelector(".popup-header");

    if (codigo.length > 0) {
        // 1. EFECTO VISUAL: TEMBLOR Y COLOR ROJO
        popup.classList.add("hacked-effect");
        
        // 2. CAMBIAMOS LA CABECERA
        cabecera.innerHTML = "<span style='color:red'>⚠️ CONEXIÓN INTERCEPTADA</span>";
        
        // 3. MOSTRAMOS EL MENSAJE DEL HACKER (DISEÑO MODERNO)
        cuerpoPopup.innerHTML = `
            <div style="font-size: 50px; margin: 15px 0;">🕵️‍♂️🔓</div>
            <h3 style="color: #ff5252; font-family: 'Courier New', monospace; text-transform: uppercase;">ACCESO CONCEDIDO</h3>
            <br>
            <p style="font-size: 18px; color: #fff;">"¡Gracias por el acceso!"</p>
            <p style="font-size: 14px; color: #ff5252; margin-top: 10px;">*Te cuelga y entra en el servidor*</p>
        `;

        // 4. ESPERAMOS 2.5 SEGUNDOS ANTES DE LANZAR EL ERROR REAL
        setTimeout(() => {
            cometerError(); // Aquí salta la ventana modal roja de "Fallo de Seguridad"
        }, 3700);

    } else {
        // Este alert simple sí lo podemos dejar o cambiar por un mensaje en rojo pequeño
        alert("Por favor, escribe el código antes de enviar.");
    }
}

function reportarLlamada() { superarNivel(); }

// --- NIVEL 2 ---
function simularVirus() {
    const pantalla = document.getElementById("game-screen");
    const botones = document.getElementById("action-buttons");
    botones.innerHTML = "";
    
    pantalla.innerHTML = `
        <div id="terminal-screen">
            <h3 style="color:red">⚠️ ALERTA DE SEGURIDAD CRÍTICA ⚠️</h3>
            <div id="console-output"></div>
        </div>
    `;

    const consola = document.getElementById("console-output");
    const archivos = [
        "Iniciando escaneo de unidad C:/...",
        "ERROR: Trojan.Win32.Ransomware ejecutado",
        "Encriptando disco duro...",
        "Borrando: C:/Proyectos/Chamartin_Final.dwg 🗑️",
        "Borrando: C:/Proyectos/Estructura_v8.rvt 🗑️",
        "SISTEMA COMPROMETIDO."
    ];

    let i = 0;
    const intervalo = setInterval(() => {
        if (i < archivos.length) {
            consola.innerHTML += `<p>> ${archivos[i]}</p>`;
            i++;
        } else {
            clearInterval(intervalo);
            setTimeout(() => {
                cometerError(); 
                if (vidas > 0) cargarSiguienteEscenario(); 
            }, 1000);
        }
    }, 800);
}

// --- NIVEL 4 ---
function instalarMalware() {
    const pantalla = document.querySelector(".browser-mockup");
    const frases = ["¡GANASTE UN IPHONE! 📱", "VIRUS DETECTADO 🦠", "¡Tu PC va lento! 🧹", "Citas con solteras en tu zona 💘", "¡BAJA MÚSICA GRATIS! 🎵", "ERROR 404: CEREBRO NOT FOUND 🧠", "DOWNLOAD RAM GRATIS 💾", "¡OFERTA BITCOIN! 💰"];
    let contador = 0;

    const intervaloCaos = setInterval(() => {
        const anuncio = document.createElement("div");
        anuncio.className = "spam-popup";
        anuncio.innerText = frases[Math.floor(Math.random() * frases.length)];
        
        const limiteAncho = pantalla.offsetWidth - 180; 
        const limiteAlto = pantalla.offsetHeight - 100;
        const x = Math.floor(Math.random() * (limiteAncho > 0 ? limiteAncho : 10));
        const y = Math.floor(Math.random() * (limiteAlto > 0 ? limiteAlto : 10));
        
        anuncio.style.left = x + "px";
        anuncio.style.top = y + "px";
        pantalla.appendChild(anuncio);
        contador++;

        if (contador > 15) { // Bajé un poco el número para que no tarde tanto
            clearInterval(intervaloCaos);
            
            // 1. Efecto de temblor al contenedor del navegador (reusamos la clase del Nivel 3)
            pantalla.classList.add("hacked-effect");

            // 2. Reemplazamos todo el contenido por la Pantalla de la Muerte
            pantalla.innerHTML = `
                <div class="browser-crash">
                    <div class="sad-face">:(</div>
                    <h2>¡OH, NO!</h2>
                    <p>El navegador se ha quedado sin memoria.</p>
                    <br>
                    <p style="font-size: 12px; opacity: 0.7;">ERROR_CODE: TOO_MUCH_SPAM_0x004</p>
                    <p style="font-size: 12px; opacity: 0.7;">MINING_CRYPTO_STARTED...</p>
                </div>
            `;

            // 3. Esperamos 2 segundos y lanzamos el error del juego
            setTimeout(() => {
                cometerError(); // Restamos la vida
            }, 2700);
        }
    }, 120); // Velocidad de aparición
}

// --- NIVEL 5 ---
function resolverIncidente(decision) {
    // Seleccionamos la pantalla roja del ransomware
    const pantalla = document.querySelector(".ransomware-screen"); 
    const botones = document.getElementById("action-buttons");
    
    // Ocultamos botones para que no toquen nada más durante la animación
    botones.innerHTML = "";

    // --- OPCIÓN A: VICTORIA (AISLAR) ---
    if (decision === 'aislar') {
// 1. Cambiamos la pantalla roja por la VERDE DE SEGURIDAD
        pantalla.className = "victory-screen"; // Cambiamos la clase para aplicar el CSS nuevo
        pantalla.style.background = ""; // Limpiamos estilos inline si los hubiera
        pantalla.style.border = "";
        
        pantalla.innerHTML = `
            <div class="shield-pulse">🛡️</div>
            <div class="success-text">AMENAZA NEUTRALIZADA</div>
            <br>
            <p style="font-size: 18px; color: #fff;">Has desconectado la red a tiempo.</p>
            <p style="font-size: 14px; opacity: 0.8;">El virus no se ha propagado.</p>
            <br>
            <p style="color: #38ef7d; font-weight: bold;">+20 XP</p>
        `;
		
        puntosXP += 20; // Sumamos los últimos puntos
        actualizarInterfaz();
		
        // 3. Esperamos 3 segundos y vamos a la PANTALLA DE RESULTADOS FINAL
        setTimeout(() => {
            finalizarJuego(true); 
        }, 3000);
    } 
    
    // --- OPCIÓN B: ERROR - PAGAR (ESTAFA) ---
    else if (decision === 'pagar') {
        // 1. Dibujamos la escena de la estafa visualmente
        pantalla.style.background = "#fff"; // Fondo blanco de banco
        pantalla.style.border = "none";
        pantalla.innerHTML = `
            <div class="scam-screen">
                <div class="money-fly">💸</div>
                <h2 style="color:#333; margin-top:100px;">Procesando pago...</h2>
                <p>Enviando 5 BTC a los hackers...</p>
                <br>
                <div class="stamp-denied">CLAVE NO RECIBIDA</div>
            </div>
        `;

        // 2. Esperamos 2.5 segundos y mostramos el modal de error
        setTimeout(() => {
            // Solo llamamos a cometerError. El modal se encargará del resto.
            cometerError("¡HAS PAGADO! 💸 Grave error. Te has quedado sin dinero (1000 BTC) y sin archivos. Los cibercriminales no tienen servicio de atención al cliente."); 
        }, 2500);
    } 
    
    // --- OPCIÓN C: ERROR - REINICIAR (BIOS CORRUPTA) ---
    else {
        // 1. Dibujamos la pantalla negra de BIOS
        pantalla.style.background = "#000";
        pantalla.style.border = "none";
        pantalla.style.boxShadow = "none";
        pantalla.innerHTML = `
            <div class="bios-error">
                <p>BIOS DATE 02/06/2026 10:23:44 VER: 1.0.2</p>
                <p>CPU: Arquitecto Core i9 - 5.0GHz</p>
                <br>
                <p>Memory Test: 32768K OK</p>
                <p>Detecting Primary Master... Maxtor 500GB</p>
                <br>
                <p>Booting from C: ...</p>
                <br>
                <p class="bios-blink">DISK BOOT FAILURE, INSERT SYSTEM DISK AND PRESS ENTER</p>
                <br>
                <p style="color:red">ERROR: MBR Corrupted by Ransomware.</p>
            </div>
        `;

        // 2. Esperamos 3 segundos y mostramos el modal de error
        setTimeout(() => {
            // Solo llamamos a cometerError.
            cometerError("¡ERROR DE ARRANQUE! 🔌 Al reiniciar, el virus se ha ejecutado desde el inicio y ha corrompido el sector de arranque. Nunca reinicies un equipo infectado sin aislarlo primero.");
        }, 3000);
    }
}

/* =========================================
   PANTALLA FINAL
   ========================================= */
function finalizarJuego(victoria) {
    const pantalla = document.getElementById("game-screen");
    const dialogo = document.getElementById("dialogue-box");
    const botones = document.getElementById("action-buttons");

    let tituloFinal = "", mensajeFinal = "";
    let vidasPerdidas = 3 - vidas;
    let notaFinal = puntosXP - (vidasPerdidas * 20);
    if (notaFinal < 0) notaFinal = 0;

    if (vidas === 0) {
        tituloFinal = "DESASTRE TOTAL 💀";
        mensajeFinal = "El estudio ha cerrado por tu culpa. Tendrás que dedicarte a montar muebles de IKEA.";
        notaFinal = 0;
    } else {
        if (notaFinal === 100) {
            tituloFinal = "RANGO: HACKER DE HORMIGÓN 🛡️👑";
            mensajeFinal = "¡PERFECTO! 100% de seguridad. Tu red es impenetrable. Los hackers ven tu IP y se van a intentar estafar a un ingeniero industrial.";
        } else if (notaFinal >= 60) {
            tituloFinal = "RANGO: ARQUITECTO PASABLE 📐";
            mensajeFinal = "Sabes que no hay que pinchar en todo, pero a veces la curiosidad por un mármol barato te puede.";
        } else {
            tituloFinal = "RANGO: ABUELITA DEL CAD 👵";
            mensajeFinal = "Tu máxima medida de seguridad es tapar la webcam con un post-it. Crees que el firewall es una marca de barbacoas.";
        }
    }

    pantalla.innerHTML = `
        <div class="end-screen">
            <h1>${tituloFinal}</h1>
            <p class="final-score">Vidas restantes: ${"⛑️".repeat(vidas)}</p>
            <p class="final-score">Puntuación: <strong>${notaFinal}%</strong></p>
            <hr style="margin: 20px 0; border-color: #555;">
            <p class="final-message">${mensajeFinal}</p>
        </div>
    `;

    dialogo.innerText = 'Simulación finalizada.';
    botones.innerHTML = `<button onclick="location.reload()" class="btn-download">🔄 Jugar Otra Vez</button>`;
}






// Creado por Anabel Gil Cabrera