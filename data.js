window.MANUAL_DATA = {
  configuracion: `
    <h2>Capítulo 1 · Escritorio y Navegación Básica</h2>
    <p>
      <strong>Tecno Presente Circular</strong> es la distribución educativa de software libre del
      Ministerio de Educación de la Provincia de Córdoba, basada en <strong>Zorin OS</strong>.
      Al encender la computadora vas a ver el escritorio principal desde donde accedés a tus archivos y programas.
    </p>

    <img class="screenshot" src="./assets/capturas/escritorio.png" alt="Escritorio principal de Tecno Presente Circular">

    <h3>Elementos principales del escritorio</h3>
    <ul>
      <li><strong>Área de trabajo:</strong> espacio central donde se abren las ventanas y aparecen accesos directos como <em>Carpeta personal</em> y <em>Papelera</em>.</li>
      <li><strong>Botón de menú:</strong> ícono en la esquina inferior izquierda para abrir el menú con todas las aplicaciones.</li>
      <li><strong>Barra inferior (Dock):</strong> accesos rápidos a los programas más usados (Explorador de archivos, Software, navegadores y terminal).</li>
      <li><strong>Panel del sistema:</strong> en la esquina inferior derecha muestra hora, fecha, red Wi-Fi, volumen y notificaciones.</li>
    </ul>

    <h3>El menú de aplicaciones y Zorin Appearance</h3>
    <p>
      El menú organiza los programas en 8 categorías: <em>Accesorios</em>, <em>Educación</em> (GCompris, GeoGebra, Kolibri, KTouch),
      <em>Gráficos</em> (Dibujo, LibreCAD, LibreOffice Draw), <em>Herramientas del sistema</em>, <em>Internet</em>,
      <em>Oficina</em>, <em>Programación</em> (Builder, Fritzing, GDevelop 5) y <em>Sonido y video</em> (Audacity, MuseScore, Rhythmbox).
    </p>

    <img class="screenshot" src="./assets/capturas/menu.png" alt="Menú de aplicaciones abierto en Tecno Presente Circular">

    <ul>
      <li><strong>Barra de búsqueda inferior:</strong> escribí el nombre de cualquier aplicación para encontrarla al instante.</li>
      <li><strong>Carpeta personal:</strong> acceso directo a tus Documentos, Descargas, Imágenes y Música.</li>
      <li><strong>Software:</strong> tienda de aplicaciones para instalar programas gratuitos de forma segura.</li>
      <li><strong>Configuración:</strong> ajustes de pantalla, red, usuarios e impresoras.</li>
      <li><strong>Zorin Appearance:</strong> personalizá el aspecto visual del escritorio (temas, disposición de paneles, íconos y fuentes).</li>
    </ul>
  `,

  redes: `
    <h2>Capítulo 2 · Conexión a Redes y Periféricos</h2>
    <p>
      Tecno Presente Circular detecta automáticamente la mayoría de los dispositivos y facilita la conexión
      a redes inalámbricas desde el panel inferior derecho.
    </p>

    <h3>Cómo conectarse a una red Wi-Fi</h3>
    <ol>
      <li>Hacé clic en el ícono de red ubicado en la barra inferior derecha del escritorio.</li>
      <li>En el menú emergente, seleccioná <strong>WiFi</strong> para desplegar las redes disponibles.</li>
      <li>Hacé clic sobre el nombre de la red deseada.</li>
      <li>Si la red tiene clave, ingresá la contraseña y presioná <strong>Conectar</strong>.</li>
      <li>El ícono cambiará para confirmar la conexión (las redes guardadas se reconectarán automáticamente).</li>
    </ol>

    <img class="screenshot" src="./assets/capturas/redes.png" alt="Menú rápido del sistema con acceso a Wi-Fi">
    <img class="screenshot" src="./assets/capturas/redes-2.png" alt="Lista de redes Wi-Fi disponibles">

    <h3>Conexión de impresoras</h3>
    <ul>
      <li><strong>Impresoras USB:</strong> conectá el cable USB; el sistema instala los drivers automáticamente y muestra la notificación <em>"Impresora lista"</em>.</li>
      <li><strong>Impresoras en red:</strong> abrí <strong>Configuración &gt; Dispositivos &gt; Impresoras</strong>, hacé clic en <strong>Añadir impresora...</strong>, elegí la impresora detectada o ingresá su IP y seguí el asistente.</li>
    </ul>

    <img class="screenshot" src="./assets/capturas/agregar-impresoras.png" alt="Panel de Configuración en la sección Impresoras">

    <div class="manual-tip">
      <strong>Solución de problemas y otros periféricos:</strong>
      Si una impresora USB no responde, verificá el cable y reiniciá; si es de red, asegurate de que ambos equipos estén en el mismo Wi-Fi.
      Para pendrives USB, hacé clic derecho &gt; <em>Expulsar</em> antes de desconectar. Podés probar webcams con <strong>Cheese</strong> y escáneres con <strong>Simple Scan</strong>.
    </div>
  `,

  archivos: `
    <h2>Capítulo 3 · Explorador de Archivos y PDF</h2>
    <p>
      El Explorador de Archivos (<strong>Archivos / Nautilus</strong>) permite organizar carpetas y documentos de manera
      muy similar al Explorador de Windows.
    </p>

    <img class="screenshot" src="./assets/capturas/navegador-de-archivos.png" alt="Explorador de Archivos mostrando la Carpeta personal">

    <h3>Barra lateral y operaciones esenciales</h3>
    <ul>
      <li><strong>Ubicaciones rápidas:</strong> <em>Recientes</em>, <em>Destacados</em>, <em>Carpeta personal</em>, <em>Documentos</em>, <em>Descargas</em>, <em>Imágenes</em>, <em>Música</em>, <em>Videos</em> y <em>Papelera</em>.</li>
      <li><strong>Crear carpeta nueva:</strong> clic derecho en un área vacía &gt; <em>Nueva carpeta</em> &gt; escribí el nombre &gt; <code>Enter</code>.</li>
      <li><strong>Copiar, cortar y pegar:</strong> seleccioná el archivo y usá <code>Ctrl+C</code> (copiar), <code>Ctrl+X</code> (cortar) y <code>Ctrl+V</code> (pegar).</li>
      <li><strong>Buscar archivos:</strong> tocá el ícono de lupa o presioná <code>Ctrl+F</code>.</li>
      <li><strong>Crear acceso directo:</strong> clic derecho en el archivo &gt; <em>Crear enlace</em> y arrastralo al escritorio.</li>
    </ul>

    <h3>Gestión de documentos PDF</h3>
    <ul>
      <li><strong>Visualizar PDF:</strong> hacé doble clic para abrirlo con el <em>Visor de Documentos</em> predeterminado (usá <code>+</code> / <code>-</code> para zoom y las flechas para cambiar de página).</li>
      <li><strong>Editar con LibreOffice Draw:</strong> clic derecho sobre el PDF &gt; <em>Abrir con LibreOffice Draw</em>. Agregá texto, formas o anotaciones y guardá con <strong>Archivo &gt; Exportar como PDF</strong>.</li>
      <li><strong>Combinar, dividir y rotar con PDF Arranger:</strong> abrí <strong>PDF Arranger</strong> desde el menú, arrastrá los PDFs al área de trabajo para reordenar o girar páginas, o usá <em>Exportar páginas seleccionadas</em> para dividir un documento.</li>
    </ul>
  `,

  navegadores: `
    <h2>Capítulo 4 · Navegadores Web</h2>
    <p>
      Tecno Presente Circular incluye tres navegadores modernos, rápidos y seguros para estudiar e investigar en internet:
    </p>

    <ul>
      <li><strong>Google Chrome:</strong> el más popular, con integración total con Gmail, Drive y Meet. Permite sincronizar marcadores e historial con tu cuenta de Google e instalar extensiones desde Chrome Web Store.</li>
      <li><strong>Microsoft Edge:</strong> basado en Chromium. Se destaca por sus <em>Colecciones</em> temáticas, el <em>Lector inmersivo</em> sin distracciones para estudiar y el asistente integrado Bing AI.</li>
      <li><strong>Brave:</strong> navegador de código abierto enfocado en la privacidad. Bloquea anuncios y rastreadores automáticamente, haciendo que las páginas carguen más rápido y consuman menos datos.</li>
    </ul>

    <img class="screenshot" src="./assets/capturas/brave.png" alt="Navegador Brave en Tecno Presente Circular">

    <h3>Comparativa de navegadores</h3>
    <table>
      <thead>
        <tr>
          <th>Característica</th>
          <th>Chrome</th>
          <th>Edge</th>
          <th>Brave</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bloqueo de anuncios</td>
          <td>No</td>
          <td>Básico</td>
          <td>Sí</td>
        </tr>
        <tr>
          <td>Sincronización Google</td>
          <td>Sí</td>
          <td>Parcial</td>
          <td>Sí</td>
        </tr>
        <tr>
          <td>Lector inmersivo</td>
          <td>No</td>
          <td>Sí</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Privacidad</td>
          <td>Media</td>
          <td>Media</td>
          <td>Alta</td>
        </tr>
      </tbody>
    </table>

    <div class="manual-tip">
      <strong>Extensiones recomendadas:</strong> <em>uBlock Origin</em> (bloqueo de anuncios), <em>Google Translate</em> y <em>Grammarly</em>.
    </div>
  `,

  ofimatica: `
    <h2>Capítulo 5 · Suite Ofimática LibreOffice</h2>
    <p>
      <strong>LibreOffice</strong> es la suite ofimática libre y gratuita preinstalada en Tecno Presente Circular.
      No requiere licencias pagas y es compatible con los formatos de Microsoft Office (<code>.docx</code>, <code>.xlsx</code>, <code>.pptx</code>).
    </p>

    <h3>Aplicaciones de la suite</h3>
    <ul>
      <li><strong>Writer:</strong> procesador de textos (equivalente a Word), ideal para trabajos prácticos, cartas e informes (idioma predeterminado: Español Argentina).</li>
      <li><strong>Calc:</strong> planilla de cálculo (equivalente a Excel) para tablas, gráficos y fórmulas comenzando con <code>=</code> (ejemplo: <code>=SUMA(A1:A10)</code>).</li>
      <li><strong>Impress:</strong> creación de presentaciones con diapositivas y efectos (equivalente a PowerPoint).</li>
      <li><strong>Draw y Base:</strong> dibujo vectorial/edición de PDF (Draw) y gestión de bases de datos (Base).</li>
    </ul>

    <img class="screenshot" src="./assets/capturas/libreoffice-calc.png" alt="Hoja de cálculo LibreOffice Calc">

    <div class="manual-tip">
      <strong>Compatibilidad:</strong> Usá <strong>Archivo &gt; Guardar como</strong> y seleccioná <code>.docx</code>, <code>.xlsx</code> o <code>.pptx</code> cuando necesites compartir trabajos con usuarios de Microsoft Office.
    </div>

    <h3>Atajos de teclado esenciales</h3>
    <table>
      <thead>
        <tr>
          <th>Atajo</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><kbd>Ctrl+N</kbd></td><td>Nuevo documento</td></tr>
        <tr><td><kbd>Ctrl+O</kbd></td><td>Abrir documento existente</td></tr>
        <tr><td><kbd>Ctrl+S</kbd></td><td>Guardar el documento actual</td></tr>
        <tr><td><kbd>Ctrl+P</kbd></td><td>Imprimir el documento</td></tr>
        <tr><td><kbd>Ctrl+Z</kbd></td><td>Deshacer la última acción</td></tr>
        <tr><td><kbd>Ctrl+B</kbd></td><td>Aplicar negrita al texto seleccionado</td></tr>
        <tr><td><kbd>Ctrl+I</kbd></td><td>Aplicar cursiva al texto seleccionado</td></tr>
        <tr><td><kbd>Ctrl+U</kbd></td><td>Subrayar el texto seleccionado</td></tr>
      </tbody>
    </table>
  `,

  terminal: `
    <div class="terminal-guide">
      <h3>Capítulo 6 · Terminal y Comandos Básicos</h3>
      <p>
        La terminal permite controlar el sistema mediante texto. Podés abrirla con <kbd>Ctrl+Alt+T</kbd>, desde el dock o en
        <em>Herramientas del sistema</em>. Un comando sigue la forma <code>comando [opciones] [argumentos]</code> (por ejemplo, <code>ls -la /home/usuario</code>).
      </p>
      <p class="terminal-warning">
        <strong>Precaución:</strong> tené cuidado al usar <code>sudo</code> y <code>rm -r</code> en un equipo real. Probá aquí abajo comandos seguros como <code>help</code>, <code>neofetch</code>, <code>ls</code>, <code>sudo apt update</code> o comprobá la alerta de <code>sudo rm -rf /</code>.
      </p>
    </div>
  `,

  wine: `
    <h2>Capítulo 7 · Wine: Aplicaciones Windows en Linux</h2>
    <p>
      <strong>Wine</strong> (<em>Wine Is Not an Emulator</em>) es una capa de compatibilidad integrada en Zorin OS que permite ejecutar
      programas diseñados para Windows (<code>.exe</code>) directamente en Linux.
    </p>

    <h3>Instalación y configuración</h3>
    <ol>
      <li>Abrí la terminal (<kbd>Ctrl+Alt+T</kbd>) y ejecutá <code>sudo apt update</code> seguido de <code>sudo apt install wine-stable</code>.</li>
      <li>Verificá la instalación con <code>wine --version</code>.</li>
      <li>Ejecutá <code>winecfg</code>: en la pestaña <em>Aplicaciones</em> elegí <strong>Windows 10</strong> (recomendado) y en <em>Gráficos</em> ajustá la resolución.</li>
      <li>Para instalar un programa: descargá el instalador <code>.exe</code> oficial, hacé clic derecho &gt; <strong>Abrir con Wine</strong> y seguí el asistente.</li>
    </ol>

    <h3>Tabla de compatibilidad con Wine</h3>
    <table>
      <thead>
        <tr>
          <th>Aplicación</th>
          <th>Compatibilidad</th>
          <th>Notas del manual</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Microsoft Office 2016</td>
          <td>Alta</td>
          <td>Funciona bien. Alternativa nativa: LibreOffice u OnlyOffice.</td>
        </tr>
        <tr>
          <td>Adobe Photoshop CS6</td>
          <td>Media</td>
          <td>Requiere configuración adicional. Alternativa: GIMP.</td>
        </tr>
        <tr>
          <td>AutoCAD</td>
          <td>Baja</td>
          <td>Se recomienda usar alternativas nativas como FreeCAD o LibreCAD.</td>
        </tr>
        <tr>
          <td>Spotify</td>
          <td>Alta</td>
          <td>También cuenta con versión nativa para Linux.</td>
        </tr>
        <tr>
          <td>Zoom</td>
          <td>Alta</td>
          <td>Versión nativa disponible y recomendada para Linux.</td>
        </tr>
      </tbody>
    </table>

    <h3>Alternativas nativas recomendadas</h3>
    <table>
      <thead>
        <tr>
          <th>Programa de Windows</th>
          <th>Alternativa nativa en Linux</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>MS Office</td><td>LibreOffice u OnlyOffice</td></tr>
        <tr><td>Photoshop</td><td>GIMP o Krita</td></tr>
        <tr><td>AutoCAD</td><td>FreeCAD o LibreCAD</td></tr>
        <tr><td>Notepad++</td><td>Gedit o Kate</td></tr>
      </tbody>
    </table>

    <div class="manual-tip">
      <strong>Recomendación:</strong> siempre que sea posible usá aplicaciones nativas de Linux: son más estables, seguras y no requieren Wine.
    </div>
  `,

  ayuda: `
    <h2>Capítulo 8 · Preguntas Frecuentes y Recursos</h2>

    <h3>Preguntas frecuentes</h3>
    <ul>
      <li><strong>¿Cómo actualizo el sistema?</strong> Desde <em>Menú &gt; Herramientas del sistema &gt; Actualización de software</em>, o en terminal con <code>sudo apt update</code> y <code>sudo apt upgrade</code> (se recomienda hacerlo una vez por semana).</li>
      <li><strong>¿Es necesario usar antivirus?</strong> Linux es muy seguro y los virus son poco frecuentes. Al descargar software desde fuentes oficiales y mantener el sistema actualizado no necesitás antivirus cotidiano.</li>
      <li><strong>¿Puedo usar Microsoft Office?</strong> No hay versión nativa para Linux, pero podés usar <strong>LibreOffice</strong> (incluido), <strong>OnlyOffice</strong>, <strong>Office 365 Online</strong> desde el navegador o instalar Office 2016 mediante Wine.</li>
      <li><strong>¿Cómo hago una copia de seguridad?</strong> Usá <strong>Dup (Respaldos)</strong> en <em>Menú &gt; Herramientas del sistema &gt; Respaldos</em> y elegí un disco externo o USB, o copiá tus carpetas manualmente.</li>
      <li><strong>¿Qué hago si el sistema no arranca?</strong> Mantené presionada la tecla <kbd>Shift</kbd> al encender para entrar al menú GRUB y elegí <em>Opciones avanzadas &gt; Modo de recuperación</em>.</li>
      <li><strong>¿Cómo cambio mi contraseña?</strong> En <em>Configuración &gt; Usuarios &gt; Contraseña</em>, o ejecutando <code>passwd</code> en la terminal.</li>
      <li><strong>¿Se pueden jugar videojuegos?</strong> Sí: Steam tiene versión nativa para Linux (con Proton para juegos de Windows) y también podés usar Lutris o consultar ProtonDB.</li>
    </ul>

    <h3>Recursos y sitios de consulta</h3>
    <table>
      <thead>
        <tr>
          <th>Recurso</th>
          <th>Sitio web</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Zorin OS Help (oficial)</td><td><a href="https://help.zorin.com" target="_blank" rel="noopener noreferrer">help.zorin.com</a></td></tr>
        <tr><td>LibreOffice Docs</td><td><a href="https://documentation.libreoffice.org/es" target="_blank" rel="noopener noreferrer">documentation.libreoffice.org/es</a></td></tr>
        <tr><td>Ubuntu Manuals</td><td><a href="https://manpages.ubuntu.com" target="_blank" rel="noopener noreferrer">manpages.ubuntu.com</a></td></tr>
        <tr><td>WineHQ Database</td><td><a href="https://appdb.winehq.org" target="_blank" rel="noopener noreferrer">appdb.winehq.org</a></td></tr>
        <tr><td>Linux en Español</td><td><a href="https://linuxenespanol.net" target="_blank" rel="noopener noreferrer">linuxenespanol.net</a></td></tr>
        <tr><td>Foro Ubuntu-es</td><td><a href="https://ubuntuforums.org/es" target="_blank" rel="noopener noreferrer">ubuntuforums.org/es</a></td></tr>
        <tr><td>MuyLinux</td><td><a href="https://muylinux.com" target="_blank" rel="noopener noreferrer">muylinux.com</a></td></tr>
      </tbody>
    </table>

    <div class="manual-tip">
      <strong>Aplicaciones recomendadas por categoría:</strong>
      Productividad (<em>LibreOffice, OnlyOffice, Thunderbird, GNOME Calendar</em>) ·
      Multimedia (<em>VLC, Rhythmbox, GIMP, Audacity</em>) ·
      Educación (<em>GCompris, GeoGebra, Kolibri, KTouch</em>).
    </div>

    <div class="manual-note">
      <strong>Manual oficial completo (PDF):</strong>
      Podés consultar o descargar la versión original en
      <a href="./assets/capturas/manual-capacitacion-tecnopresente-circular.pdf" target="_blank" rel="noopener noreferrer">Manual de Capacitación Tecno Presente Circular v2026.1 (PDF)</a>.
    </div>
  `
};

