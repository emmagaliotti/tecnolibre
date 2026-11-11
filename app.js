var topZ = 10;

function bringToFront(win) {
  if (!win) return;
  topZ += 1;
  win.style.zIndex = String(topZ);
}

function initTerminal() {
  const historyEl = document.getElementById('terminal-history');
  const inputEl = document.getElementById('terminal-input');

  if (!historyEl || !inputEl) return;

  const commandHistory = [];
  let historyIndex = -1;

  const appendLine = (text, color = '') => {
    const line = document.createElement('div');
    line.textContent = text;
    if (color) {
      line.style.color = color;
    }
    historyEl.appendChild(line);
    historyEl.scrollTop = historyEl.scrollHeight;
  };

  if (historyEl.childElementCount === 0) {
    appendLine('Tecno Presente Circular v2026.1 (Zorin OS 18.1) - Terminal');
    appendLine('Escribe "help" para ver los comandos disponibles.');
  }

  const commands = {
    help: () => [
      'Comandos básicos disponibles:',
      '  help                  Muestra esta lista de comandos',
      '  neofetch              Muestra información del sistema operativo',
      '  ls -la /home/usuario  Lista los archivos de /home/usuario',
      '  sudo apt update       Actualiza la lista de paquetes',
      '  wine --version        Muestra la versión instalada de Wine',
      '  winecfg               Abre la configuración de Wine',
      '  clear                 Limpia el historial de la terminal'
    ].join('\n'),
    neofetch: () => [
      '  ______ ____',
      ' /_  __/ __ \\  Tecno Presente Circular v2026.1 - Zorin OS 18.1 - Ministerio de Córdoba',
      '  / / / /_/ /  -----------------------------------------------------------------------',
      ' / / / ____/   SO:      Tecno Presente Circular v2026.1 (Zorin OS 18.1)',
      '/_/ /_/        Org:     Ministerio de Educación de la Provincia de Córdoba',
      '               Usuario: estudiante@tecno-presente',
      '               Shell:   bash (simulador web)'
    ].join('\n'),
    'ls -la /home/usuario': () => [
      'total 48',
      'drwxr-xr-x 10 usuario usuario 4096 may  8 17:30 .',
      'drwxr-xr-x  3 root    root    4096 mar  6 09:00 ..',
      '-rw-r--r--  1 usuario usuario  220 mar  6 09:00 .bash_logout',
      '-rw-r--r--  1 usuario usuario 3771 mar  6 09:00 .bashrc',
      'drwxr-xr-x  2 usuario usuario 4096 mar 27 14:15 Descargas',
      'drwxr-xr-x  2 usuario usuario 4096 mar 18 11:20 Documentos',
      'drwxr-xr-x  2 usuario usuario 4096 mar  6 10:05 Escritorio',
      'drwxr-xr-x  2 usuario usuario 4096 mar 20 16:40 Imágenes',
      'drwxr-xr-x  2 usuario usuario 4096 mar  6 10:05 Música',
      'drwxr-xr-x  2 usuario usuario 4096 mar  6 10:05 Plantillas',
      'drwxr-xr-x  2 usuario usuario 4096 mar  6 10:05 Público',
      'drwxr-xr-x  2 usuario usuario 4096 mar 19 12:00 Vídeos'
    ].join('\n'),
    'sudo apt update': () => 'Actualizando listas de paquetes... [OK]',
    'wine --version': () => 'wine-9.0',
    winecfg: () => 'Abriendo ventana de configuración de Wine... (simulado)'
  };

  inputEl.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
      if (commandHistory.length > 0 && historyIndex > 0) {
        event.preventDefault();
        historyIndex -= 1;
        inputEl.value = commandHistory[historyIndex];
      }
      return;
    }

    if (event.key === 'ArrowDown') {
      if (commandHistory.length > 0) {
        event.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
          historyIndex += 1;
          inputEl.value = commandHistory[historyIndex];
        } else {
          historyIndex = commandHistory.length;
          inputEl.value = '';
        }
      }
      return;
    }

    if (event.key !== 'Enter') return;

    const raw = inputEl.value.trim();
    inputEl.value = '';
    if (!raw) return;

    commandHistory.push(raw);
    historyIndex = commandHistory.length;

    appendLine(`estudiante@tecno-presente:~$ ${raw}`);

    const normalized = raw.replace(/\s+/g, ' ');

    if (normalized === 'clear') {
      historyEl.innerHTML = '';
      return;
    }

    const handler = commands[normalized];
    if (handler) {
      appendLine(handler());
    } else {
      appendLine("Comando no encontrado. Prueba con 'help'.", '#ff5555');
    }
  });
}

function setupWindowDragging(win) {
  const titlebar = win.querySelector('.window-titlebar');
  if (!titlebar) return;

  titlebar.addEventListener('mousedown', (event) => {
    if (event.button !== 0 || event.target.closest('.window-close')) {
      return;
    }

    event.preventDefault();
    bringToFront(win);

    const rect = win.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    const onMouseMove = (moveEvent) => {
      const maxLeft = Math.max(0, window.innerWidth - win.offsetWidth);
      const maxTop = Math.max(0, window.innerHeight - win.offsetHeight);

      const newLeft = Math.min(Math.max(0, moveEvent.clientX - offsetX), maxLeft);
      const newTop = Math.min(Math.max(0, moveEvent.clientY - offsetY), maxTop);

      win.style.left = `${newLeft}px`;
      win.style.top = `${newTop}px`;
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
}

function renderWindowContent(appName) {
  const contentEl = document.getElementById(`content-${appName}`);
  if (!contentEl || contentEl.dataset.loaded === 'true') return;

  const html = window.MANUAL_DATA && window.MANUAL_DATA[appName];
  if (!html) return;

  if (appName === 'terminal') {
    contentEl.insertAdjacentHTML('afterbegin', html);
  } else {
    contentEl.innerHTML = html;
  }

  contentEl.dataset.loaded = 'true';
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('[TecnoPresente] cargado');

  const desktopIcons = document.querySelectorAll('.desktop-icon');
  const windows = document.querySelectorAll('.window');
  const closeButtons = document.querySelectorAll('.window-close');

  desktopIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const appName = icon.dataset.app;
      const targetWindow = document.querySelector(`.window[data-window="${appName}"]`);
      if (!targetWindow) return;

      renderWindowContent(appName);
      targetWindow.classList.remove('hidden');
      bringToFront(targetWindow);

      if (appName === 'terminal') {
        const terminalInput = document.getElementById('terminal-input');
        if (terminalInput) terminalInput.focus();
      }
    });
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const win = btn.closest('.window');
      if (win) {
        win.classList.add('hidden');
      }
    });
  });

  windows.forEach((win) => {
    win.addEventListener('mousedown', () => {
      bringToFront(win);
    });
    setupWindowDragging(win);
  });

  initTerminal();
});

