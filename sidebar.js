// sidebar.js — Centralized Master Sidebar for Scanwin FDE Prototype Portal
(function() {
  function injectStyles() {
    if (document.getElementById('portal-sidebar-styles')) return;
    const style = document.createElement('style');
    style.id = 'portal-sidebar-styles';
    style.textContent = `
      :root {
        --portal-sidebar-bg: #0f172a;
        --portal-sidebar-border: #1e293b;
        --primary-blue: #0b57d0;
      }
      .portal-sidebar {
        width: 290px;
        background: var(--portal-sidebar-bg, #0f172a) !important;
        border-right: 1px solid var(--portal-sidebar-border, #1e293b) !important;
        display: flex !important;
        flex-direction: column !important;
        padding: 28px 20px !important;
        color: #f8fafc !important;
        flex-shrink: 0 !important;
        min-height: 100vh;
        box-sizing: border-box !important;
        z-index: 100;
      }
      .portal-header {
        margin-bottom: 24px;
        padding-bottom: 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      }
      .portal-header h2 {
        font-size: 20px;
        font-weight: 800;
        color: #fff;
        letter-spacing: -0.5px;
        margin: 0;
      }
      .portal-header .portal-badge {
        display: inline-block;
        background: rgba(59,130,246,0.15);
        border: 1px solid rgba(59,130,246,0.3);
        color: #93c5fd;
        font-size: 10px;
        font-weight: 700;
        padding: 3px 8px;
        border-radius: 20px;
        margin-top: 6px;
      }
      .portal-menu-title {
        font-size: 11px;
        font-weight: 700;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 12px;
        padding-left: 8px;
      }
      .portal-menu-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .portal-menu-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        border-radius: 10px;
        font-size: 13.5px;
        font-weight: 600;
        color: #94a3b8;
        cursor: pointer;
        transition: all 0.2s ease;
        text-decoration: none;
      }
      .portal-menu-item:hover {
        background: rgba(255,255,255,0.04);
        color: #f1f5f9;
      }
      .portal-menu-item.active {
        background: var(--primary-blue, #0b57d0);
        color: #fff;
        box-shadow: 0 4px 12px rgba(11,87,208,0.2);
      }
      .portal-menu-icon {
        width: 18px;
        height: 18px;
        fill: currentColor;
        flex-shrink: 0;
      }
      .user-flow-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
        color: #fff;
        border: none;
        border-radius: 12px;
        padding: 14px 18px;
        font-size: 13.5px;
        font-weight: 700;
        text-decoration: none;
        cursor: pointer;
        box-shadow: 0 4px 14px rgba(109,40,217,0.3);
        transition: all 0.2s ease;
        margin-bottom: 20px;
        text-align: center;
        width: 100%;
        box-sizing: border-box;
      }
      .user-flow-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 16px rgba(109,40,217,0.4);
        color: #fff;
      }
      .btn-icon {
        width: 16px;
        height: 16px;
        fill: currentColor;
        flex-shrink: 0;
      }
    `;
    document.head.appendChild(style);
  }

  function renderSidebar() {
    const container = document.getElementById('portal-sidebar-container') || document.querySelector('.portal-sidebar');
    if (!container) return false;

    injectStyles();

    // Detect active page from filename or path (handles GitHub Pages subpaths & case variations)
    const path = (window.location.pathname || '').toLowerCase();
    let activeKey = 'hub';
    if (path.includes('registrasi-pin')) activeKey = 'registrasi';
    else if (path.includes('ubah-pin')) activeKey = 'ubah';
    else if (path.includes('reset-pin')) activeKey = 'reset';
    else if (path.includes('direct-scan')) activeKey = 'direct';
    else if (path.includes('flowchart')) activeKey = 'flowchart';

    const isHub = (activeKey === 'hub');

    container.className = 'portal-sidebar';
    container.innerHTML = `
      <div class="portal-header">
        <h2>sCanWin FDE</h2>
        <span class="portal-badge">${isHub ? 'PROTOTYPE HUB' : 'PROTOTYPE INTERAKTIF'}</span>
      </div>

      <a href="scanwin-fde-flowchart.html" class="user-flow-btn">
        <svg class="btn-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>
        <span>Lihat User Flow</span>
      </a>

      <div class="portal-menu-title">DAFTAR MODUL PIN & FDE</div>
      <div class="portal-menu-list">
        <a href="scanwin-fde.html" class="portal-menu-item ${activeKey === 'hub' ? 'active' : ''}">
          <svg class="portal-menu-icon" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
          <span>Hub Prototype</span>
        </a>
        <a href="scanwin-fde-registrasi-pin.html" class="portal-menu-item ${activeKey === 'registrasi' ? 'active' : ''}">
          <svg class="portal-menu-icon" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
          <span>1. Registrasi PIN Baru</span>
        </a>
        <a href="scanwin-fde-ubah-pin.html" class="portal-menu-item ${activeKey === 'ubah' ? 'active' : ''}">
          <svg class="portal-menu-icon" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6-3.6z"/></svg>
          <span>2. Ubah PIN Transaksi</span>
        </a>
        <a href="scanwin-fde-reset-pin.html" class="portal-menu-item ${activeKey === 'reset' ? 'active' : ''}">
          <svg class="portal-menu-icon" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
          <span>3. Reset PIN Terblokir</span>
        </a>
        <a href="scanwin-fde-direct-scan.html" class="portal-menu-item ${activeKey === 'direct' ? 'active' : ''}">
          <svg class="portal-menu-icon" viewBox="0 0 24 24"><path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 3h2v3h-2v-3zm0-3h3v2h-3v-2zm3 3h3v3h-3v-3z"/></svg>
          <span>5. Alur Direct Scan & FDE</span>
        </a>
      </div>

      ${!isHub ? `
        <div style="margin-top: auto; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.06);">
          <a href="scanwin-fde.html" class="portal-menu-item" style="color: #64748b;">
            <svg class="portal-menu-icon" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            <span>Kembali ke Hub</span>
          </a>
        </div>
      ` : ''}
    `;
    return true;
  }

  // Polling fallback to guarantee rendering even if DOM parsing takes longer on large files
  function init() {
    if (renderSidebar()) return;

    let attempts = 0;
    const interval = setInterval(function() {
      attempts++;
      if (renderSidebar() || attempts > 60) {
        clearInterval(interval);
      }
    }, 50);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  window.addEventListener('load', init);
})();
