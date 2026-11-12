var topZ = 10;

const APP_SHORT_LABELS = {
  configuracion: '⚙️ Configuración',
  redes: '📶 Redes y Periféricos',
  archivos: '📁 Archivos y PDF',
  navegadores: '🌐 Navegadores Web',
  ofimatica: '📝 Ofimática',
  terminal: '💻 Terminal',
  wine: '🍷 Wine',
  ayuda: '❓ Ayuda y FAQ'
};

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

function updateTasklist() {
  const tasklist = document.getElementById('panel-tasklist');
  if (!tasklist) return;

  tasklist.innerHTML = '';
  const openWindows = document.querySelectorAll('.mint-window:not(.hidden)');

  openWindows.forEach((win) => {
    const appName = win.dataset.window;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'task-item';

    if (win.classList.contains('active') && !win.classList.contains('minimized')) {
      btn.classList.add('active');
    }
    if (win.classList.contains('minimized')) {
      btn.classList.add('minimized-task');
    }

    const span = document.createElement('span');
    span.className = 'task-title';
    span.textContent = APP_SHORT_LABELS[appName] || appName;
    btn.appendChild(span);

    btn.addEventListener('click', () => {
      if (win.classList.contains('minimized')) {
        win.classList.remove('minimized');
        bringToFront(win);
      } else if (win.classList.contains('active')) {
        minimizeWindow(win);
      } else {
        bringToFront(win);
      }
    });

    tasklist.appendChild(btn);
  });
}

function bringToFront(win) {
  if (!win) return;

  document.querySelectorAll('.mint-window').forEach((w) => {
    w.classList.remove('active');
  });

  topZ += 1;
  win.style.zIndex = String(topZ);
  win.classList.add('active');
  updateTasklist();
}

function activateTopVisibleWindow() {
  const visible = Array.from(
    document.querySelectorAll('.mint-window:not(.hidden):not(.minimized)')
  );
  if (visible.length === 0) {
    updateTasklist();
    return;
  }

  visible.sort((a, b) => Number(b.style.zIndex || 0) - Number(a.style.zIndex || 0));
  bringToFront(visible[0]);
}

function minimizeWindow(win) {
  if (!win) return;
  win.classList.add('minimized');
  win.classList.remove('active');
  activateTopVisibleWindow();
}

function closeWindow(win) {
  if (!win) return;
  win.classList.add('hidden');
  win.classList.remove('active', 'minimized', 'maximized');
  activateTopVisibleWindow();
}

function openApp(appName) {
  const targetWindow = document.querySelector(`.mint-window[data-window="${appName}"]`);
  if (!targetWindow) return;

  const wasHidden = targetWindow.classList.contains('hidden');
  renderWindowContent(appName);

  if (wasHidden && !targetWindow.dataset.positioned && window.innerWidth > 680) {
    const openCount = document.querySelectorAll('.mint-window:not(.hidden)').length;
    const offset = (openCount % 5) * 26;
    targetWindow.style.left = `${145 + offset}px`;
    targetWindow.style.top = `${28 + offset}px`;
    targetWindow.dataset.positioned = 'true';
  }

  targetWindow.classList.remove('hidden', 'minimized');
  bringToFront(targetWindow);
  closeStartMenu();

  if (appName === 'terminal') {
    const terminalInput = document.getElementById('terminal-input');
    if (terminalInput) terminalInput.focus();
  }
}

function setupWindowDragging(win) {
  const header = win.querySelector('.window-header');
  if (!header) return;

  header.addEventListener('mousedown', (event) => {
    if (event.button !== 0 || event.target.closest('.win-btn')) {
      return;
    }

    bringToFront(win);

    if (win.classList.contains('maximized')) {
      return;
    }

    event.preventDefault();

    const desktop = document.getElementById('desktop');
    const desktopRect = desktop
      ? desktop.getBoundingClientRect()
      : { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };

    const winRect = win.getBoundingClientRect();
    const offsetX = event.clientX - winRect.left;
    const offsetY = event.clientY - winRect.top;

    const onMouseMove = (moveEvent) => {
      const maxLeft = Math.max(0, desktopRect.width - win.offsetWidth);
      const maxTop = Math.max(0, desktopRect.height - win.offsetHeight);

      const rawLeft = moveEvent.clientX - desktopRect.left - offsetX;
      const rawTop = moveEvent.clientY - desktopRect.top - offsetY;

      const clampedLeft = Math.min(Math.max(0, rawLeft), maxLeft);
      const clampedTop = Math.min(Math.max(0, rawTop), maxTop);

      win.style.left = `${clampedLeft}px`;
      win.style.top = `${clampedTop}px`;
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
}

function closeStartMenu() {
  const menu = document.getElementById('zorin-menu-popup');
  const btn = document.getElementById('zorin-menu-btn');
  if (menu) menu.classList.remove('open');
  if (btn) {
    btn.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
  }
}

function initStartMenuAndPanel() {
  const menuBtn = document.getElementById('zorin-menu-btn');
  const menuPopup = document.getElementById('zorin-menu-popup');
  const searchInput = document.getElementById('menu-search-input');
  const menuEntries = document.querySelectorAll('.app-menu-entry');
  const showDesktopBtn = document.getElementById('btn-show-desktop');
  const clockEl = document.getElementById('tray-clock');

  if (menuBtn && menuPopup) {
    menuBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      const willOpen = !menuPopup.classList.contains('open');
      if (willOpen) {
        menuPopup.classList.add('open');
        menuBtn.classList.add('active');
        menuBtn.setAttribute('aria-expanded', 'true');
        if (searchInput) {
          searchInput.value = '';
          menuEntries.forEach((entry) => {
            entry.style.display = 'flex';
          });
          searchInput.focus();
        }
      } else {
        closeStartMenu();
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const term = searchInput.value.trim().toLowerCase();
      menuEntries.forEach((entry) => {
        const text = entry.textContent.toLowerCase();
        entry.style.display = text.includes(term) ? 'flex' : 'none';
      });
    });
  }

  menuEntries.forEach((entry) => {
    entry.addEventListener('click', () => {
      openApp(entry.dataset.app);
    });
  });

  document.querySelectorAll('.quick-icon-btn[data-app], .tray-item[data-app]').forEach((el) => {
    el.addEventListener('click', () => {
      openApp(el.dataset.app);
    });
  });

  document.addEventListener('click', (event) => {
    if (
      menuPopup &&
      menuPopup.classList.contains('open') &&
      !menuPopup.contains(event.target) &&
      menuBtn &&
      !menuBtn.contains(event.target)
    ) {
      closeStartMenu();
    }
  });

  if (showDesktopBtn) {
    showDesktopBtn.addEventListener('click', () => {
      const openWindows = Array.from(document.querySelectorAll('.mint-window:not(.hidden)'));
      if (openWindows.length === 0) return;

      const anyVisible = openWindows.some((w) => !w.classList.contains('minimized'));
      openWindows.forEach((w) => {
        if (anyVisible) {
          w.classList.add('minimized');
          w.classList.remove('active');
        } else {
          w.classList.remove('minimized');
        }
      });

      if (!anyVisible) {
        activateTopVisibleWindow();
      } else {
        updateTasklist();
      }
    });
  }

  if (clockEl) {
    const updateClock = () => {
      const now = new Date();
      const datePart = now.toLocaleDateString('es-AR', {
        day: 'numeric',
        month: 'short'
      });
      const timePart = now.toLocaleTimeString('es-AR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      clockEl.textContent = `${datePart} ${timePart}`;
    };
    updateClock();
    setInterval(updateClock, 15000);
  }
}

function initTerminal() {
  const historyEl = document.getElementById('terminal-history');
  const inputEl = document.getElementById('terminal-input');
  const terminalBody = document.getElementById('content-terminal');

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
    appendLine('Tecno Presente Circular v2026.1 (Zorin OS 18.1) - Consola interactiva');
    appendLine('Escribe "help" para ver los comandos disponibles.');
  }

  const commands = {
    help: () => ({
      text: [
        'Comandos disponibles:',
        '  help                  Muestra esta lista de comandos',
        '  neofetch              Información de Tecno Presente Circular',
        '  ls                    Lista las carpetas de tu directorio personal',
        '  ls -la /home/usuario  Listado detallado del directorio /home/usuario',
        '  sudo apt update       Actualiza las listas de paquetes del sistema',
        '  wine --version        Muestra la versión instalada de Wine',
        '  winecfg               Abre la configuración de Wine',
        '  sudo rm -rf /         Demuestra la alerta de seguridad del manual',
        '  clear                 Limpia el historial de la terminal'
      ].join('\n')
    }),
    neofetch: () => ({
      text: [
        '  ______ ____',
        ' /_  __/ __ \\  Tecno Presente Circular v2026.1 - Zorin OS 18.1 - Ministerio de Córdoba',
        '  / / / /_/ /  -----------------------------------------------------------------------',
        ' / / / ____/   SO:      Tecno Presente Circular v2026.1 (Zorin OS 18.1)',
        '/_/ /_/        Org:     Ministerio de Educación de la Provincia de Córdoba',
        '               Usuario: estudiante@tecno-presente',
        '               Shell:   bash • Software Libre · Tecnología Sostenible'
      ].join('\n'),
      color: '#7dd3fc'
    }),
    ls: () => ({
      text: 'Descargas  Documentos  Escritorio  Imágenes  Música  Plantillas  Público  Vídeos'
    }),
    'ls -la /home/usuario': () => ({
      text: [
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
      ].join('\n')
    }),
    'sudo apt update': () => ({
      text: 'Actualizando listas de paquetes... [OK]',
      color: '#4ade80'
    }),
    'wine --version': () => ({
      text: 'wine-9.0'
    }),
    winecfg: () => ({
      text: 'Abriendo ventana de configuración de Wine... (simulado)'
    }),
    'sudo rm -rf /': () => ({
      text: '⚠️ PRECAUCIÓN: El comando "sudo rm -rf /" borraría todos los archivos del sistema operativo. Como indica el Capítulo 6 del manual, verificá siempre antes de usar sudo y rm -r. Operación bloqueada por seguridad.',
      color: '#fbbf24'
    })
  };

  if (terminalBody) {
    terminalBody.addEventListener('click', () => {
      const selectedText = window.getSelection ? window.getSelection().toString() : '';
      if (!selectedText) {
        inputEl.focus();
      }
    });
  }

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

    appendLine(`estudiante@tecno-presente:~$ ${raw}`, '#93c5fd');

    const normalized = raw.replace(/\s+/g, ' ');

    if (normalized === 'clear') {
      historyEl.innerHTML = '';
      return;
    }

    if (/^(sudo\s+)?rm\s+(-[a-zA-Z]*r[a-zA-Z]*\s+)*\/\*?$/.test(normalized)) {
      const warn = commands['sudo rm -rf /']();
      appendLine(warn.text, warn.color);
      return;
    }

    const handler = commands[normalized];
    if (handler) {
      const result = handler();
      appendLine(result.text, result.color || '');
    } else {
      appendLine("Comando no encontrado. Prueba con 'help'.", '#ff5f56');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('[TecnoPresente] cargado');

  const desktopIcons = document.querySelectorAll('.desktop-icon');
  const windows = document.querySelectorAll('.mint-window');

  desktopIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      desktopIcons.forEach((item) => item.classList.remove('selected'));
      icon.classList.add('selected');
      openApp(icon.dataset.app);
    });
  });

  windows.forEach((win) => {
    win.addEventListener('mousedown', () => {
      bringToFront(win);
    });

    const closeBtn = win.querySelector('.win-btn-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeWindow(win));
    }

    const minBtn = win.querySelector('.win-btn-minimize');
    if (minBtn) {
      minBtn.addEventListener('click', () => minimizeWindow(win));
    }

    const maxBtn = win.querySelector('.win-btn-maximize');
    if (maxBtn) {
      maxBtn.addEventListener('click', () => {
        win.classList.toggle('maximized');
        const isMax = win.classList.contains('maximized');
        maxBtn.title = isMax ? 'Restaurar' : 'Maximizar';
        bringToFront(win);
      });
    }

    setupWindowDragging(win);
  });

  initStartMenuAndPanel();
  initTerminal();
});
