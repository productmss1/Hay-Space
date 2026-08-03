import math
import os
import xml.etree.ElementTree as ET

def escape_xml(text):
    return (text
        .replace('&', '&amp;')
        .replace('<', '&lt;')
        .replace('>', '&gt;')
        .replace('"', '&quot;')
        .replace("'", '&apos;'))

flow_nodes = [
    # SECTION 1: ENTRY POINT (Register PIN)
    { 'id': 'n1-start', 'type': 'n-start', 'text': 'Start', 'x': 495, 'y': 430 },
    { 'id': 'n1-akun', 'type': 'n-gray', 'text': 'Halaman Akun<br>Mitra1000s', 'x': 640, 'y': 450 },
    { 'id': 'n1-click', 'type': 'n-purple', 'text': 'Klik "Kelola PIN<br>Mitra1000s"', 'x': 860, 'y': 450 },
    { 'id': 'n1-form1', 'type': 'n-gray', 'text': 'Tampilkan Form<br>PIN Langkah 1', 'x': 1080, 'y': 450 },
    { 'id': 'n1-input1', 'type': 'n-purple', 'text': 'Masukkan PIN Baru<br>(6-digit)', 'x': 1300, 'y': 450 },
    { 'id': 'n1-valid-format', 'type': 'n-decision', 'text': 'Validasi<br>Format PIN?', 'x': 1550, 'y': 420 },
    { 'id': 'n1-error-format', 'type': 'n-gray', 'text': 'Tampilkan Error Format<br>&amp; Reset Input', 'x': 1520, 'y': 620 },
    { 'id': 'n1-form2', 'type': 'n-gray', 'text': 'Tampilkan Form<br>PIN Langkah 2', 'x': 1780, 'y': 450 },
    { 'id': 'n1-input2', 'type': 'n-purple', 'text': 'Masukkan PIN Konfirmasi<br>(Re-input)', 'x': 2000, 'y': 450 },
    { 'id': 'n1-match', 'type': 'n-decision', 'text': 'Validasi<br>Kecocokan?', 'x': 2250, 'y': 420 },
    { 'id': 'n1-error-match', 'type': 'n-gray', 'text': 'Tampilkan Error Toast &amp;<br>Getarkan Kolom (Shake)', 'x': 2220, 'y': 620 },
    { 'id': 'n1-clear-match', 'type': 'n-gray', 'text': 'Hapus Input &amp; Reset<br>Temporer (1.5s)', 'x': 2000, 'y': 620 },
    { 'id': 'n1-save', 'type': 'n-gray', 'text': 'Hash PIN Baru &amp;<br>Simpan ke DB', 'x': 2480, 'y': 450 },
    { 'id': 'n1-success', 'type': 'n-gray', 'text': 'Tampilkan Layar<br>Registrasi Sukses', 'x': 2700, 'y': 450 },
    { 'id': 'n1-scanwin', 'type': 'n-purple', 'text': 'Klik "Masuk<br>ke sCanWin"', 'x': 2920, 'y': 450 },
    { 'id': 'n1-end', 'type': 'n-end', 'text': 'PIN Aktif &amp;<br>Dashboard sCanWin', 'x': 3110, 'y': 405 },

    # SECTION 2: ENTRY POINT (Ubah PIN)
    { 'id': 'n2-start', 'type': 'n-start', 'text': 'Start', 'x': 495, 'y': 1080 },
    { 'id': 'n2-akun', 'type': 'n-gray', 'text': 'Halaman Akun<br>Mitra1000s', 'x': 640, 'y': 1100 },
    { 'id': 'n2-click', 'type': 'n-purple', 'text': 'Klik "Ubah PIN<br>Mitra1000s"', 'x': 860, 'y': 1100 },
    { 'id': 'n2-old-pin', 'type': 'n-purple', 'text': 'Masukkan PIN Lama<br>(6-digit)', 'x': 1080, 'y': 1100 },
    { 'id': 'n2-valid-old', 'type': 'n-decision', 'text': 'Validasi<br>PIN Lama?', 'x': 1300, 'y': 1070 },
    { 'id': 'n2-old-error', 'type': 'n-gray', 'text': 'Tampilkan Error &amp;<br>Sisa Percobaan', 'x': 1080, 'y': 1300 },
    { 'id': 'n2-old-block', 'type': 'n-gray', 'text': 'Blokir Status PIN<br>(Blocked)', 'x': 1300, 'y': 1300 },
    { 'id': 'n2-otp-screen', 'type': 'n-gray', 'text': 'Auto-Redirect ke<br>Halaman OTP', 'x': 1520, 'y': 1300 },
    { 'id': 'n2-input1', 'type': 'n-purple', 'text': 'Masukkan PIN Baru<br>(6-digit)', 'x': 1550, 'y': 1100 },
    { 'id': 'n2-valid-format', 'type': 'n-decision', 'text': 'Validasi<br>Format PIN?', 'x': 1780, 'y': 1070 },
    { 'id': 'n2-error-format', 'type': 'n-gray', 'text': 'Tampilkan Error Format<br>&amp; Reset Input', 'x': 1780, 'y': 1300 },
    { 'id': 'n2-input2', 'type': 'n-purple', 'text': 'Masukkan PIN Konfirmasi<br>(Re-input)', 'x': 2000, 'y': 1100 },
    { 'id': 'n2-match', 'type': 'n-decision', 'text': 'Validasi<br>Kecocokan?', 'x': 2220, 'y': 1070 },
    { 'id': 'n2-error-match', 'type': 'n-gray', 'text': 'Tampilkan Error Toast &amp;<br>Getarkan Kolom (Shake)', 'x': 2220, 'y': 1300 },
    { 'id': 'n2-clear-match', 'type': 'n-gray', 'text': 'Hapus Input &amp; Reset<br>Temporer (1.5s)', 'x': 2000, 'y': 1300 },
    { 'id': 'n2-save', 'type': 'n-gray', 'text': 'Hash PIN Baru &amp;<br>Update ke DB', 'x': 2450, 'y': 1100 },
    { 'id': 'n2-success', 'type': 'n-gray', 'text': 'Tampilkan Layar<br>PIN Berhasil Diubah', 'x': 2670, 'y': 1100 },
    { 'id': 'n2-end', 'type': 'n-end', 'text': 'PIN Baru Aktif &amp;<br>Kembali ke Akun', 'x': 2890, 'y': 1055 },

    # SECTION 3: ENTRY POINT (Reset PIN Terblokir via WhatsApp OTP)
    { 'id': 'n3-start', 'type': 'n-start', 'text': 'Start', 'x': 495, 'y': 1730 },
    { 'id': 'n3-check-status', 'type': 'n-gray', 'text': 'Query Status PIN<br>(Blocked)', 'x': 640, 'y': 1750 },
    { 'id': 'n3-click-otp', 'type': 'n-purple', 'text': 'Klik "Minta OTP<br>via WhatsApp"', 'x': 860, 'y': 1750 },
    { 'id': 'n3-valid-limit', 'type': 'n-decision', 'text': 'Cek Cooldown 1m<br>&amp; Limit 3x/hari?', 'x': 1080, 'y': 1720 },
    { 'id': 'n3-error-limit', 'type': 'n-gray', 'text': 'Error Limit Habis &amp;<br>Blokir Request 24 Jam', 'x': 1080, 'y': 1950 },
    { 'id': 'n3-send-otp', 'type': 'n-gray', 'text': 'Generate OTP, Exp 5m<br>&amp; Kirim via WA', 'x': 1320, 'y': 1750 },
    { 'id': 'n3-input-otp', 'type': 'n-purple', 'text': 'Masukkan Kode OTP<br>(6-digit)', 'x': 1540, 'y': 1750 },
    { 'id': 'n3-valid-otp', 'type': 'n-decision', 'text': 'Validasi<br>Kode OTP?', 'x': 1760, 'y': 1720 },
    { 'id': 'n3-error-otp-sub3', 'type': 'n-gray', 'text': 'Error OTP Salah &amp;<br>Sisa Percobaan (<3x)', 'x': 1760, 'y': 1950 },
    { 'id': 'n3-error-otp-3', 'type': 'n-gray', 'text': 'Set Status OTP Expired<br>&amp; Minta Request Baru', 'x': 1540, 'y': 1950 },

    { 'id': 'n3-input1', 'type': 'n-purple', 'text': 'Masukkan PIN Baru<br>(Langkah 1)', 'x': 2000, 'y': 1750 },
    { 'id': 'n3-valid-format', 'type': 'n-decision', 'text': 'Validasi<br>Format PIN?', 'x': 2220, 'y': 1720 },
    { 'id': 'n3-error-format', 'type': 'n-gray', 'text': 'Tampilkan Error Format<br>&amp; Reset Input', 'x': 2220, 'y': 1950 },
    { 'id': 'n3-input2', 'type': 'n-purple', 'text': 'Masukkan PIN Konfirmasi<br>(Langkah 2)', 'x': 2440, 'y': 1750 },
    { 'id': 'n3-match', 'type': 'n-decision', 'text': 'Validasi<br>Kecocokan?', 'x': 2660, 'y': 1720 },
    { 'id': 'n3-error-match', 'type': 'n-gray', 'text': 'Tampilkan Error Toast &amp;<br>Getarkan Kolom', 'x': 2660, 'y': 1950 },
    { 'id': 'n3-clear-match', 'type': 'n-gray', 'text': 'Hapus Input &amp; Reset<br>ke Langkah 1', 'x': 2440, 'y': 1950 },
    { 'id': 'n3-save', 'type': 'n-gray', 'text': 'Hash PIN Baru, Status<br>PIN -> Aktif di DB', 'x': 2880, 'y': 1750 },
    { 'id': 'n3-success', 'type': 'n-gray', 'text': 'Tampilkan Layar<br>PIN Berhasil Dipulihkan', 'x': 3100, 'y': 1750 },
    { 'id': 'n3-end', 'type': 'n-end', 'text': 'PIN Aktif &amp;<br>Kembali ke Akun', 'x': 3320, 'y': 1705 }
]

connections = [
    # Register PIN
    { 'from': 'n1-start', 'to': 'n1-akun', 'f': 'right', 't': 'left' },
    { 'from': 'n1-akun', 'to': 'n1-click', 'f': 'right', 't': 'left' },
    { 'from': 'n1-click', 'to': 'n1-form1', 'f': 'right', 't': 'left' },
    { 'from': 'n1-form1', 'to': 'n1-input1', 'f': 'right', 't': 'left' },
    { 'from': 'n1-input1', 'to': 'n1-valid-format', 'f': 'right', 't': 'left' },
    { 'from': 'n1-valid-format', 'to': 'n1-form2', 'f': 'right', 't': 'left', 'label': 'Valid (Ya)', 'lClass': 'label-yes' },
    { 'from': 'n1-valid-format', 'to': 'n1-error-format', 'f': 'bottom', 't': 'top', 'label': 'Invalid (Tidak)', 'lClass': 'label-no' },
    { 'from': 'n1-error-format', 'to': 'n1-form1', 'f': 'bottom', 't': 'bottom' },
    { 'from': 'n1-form2', 'to': 'n1-input2', 'f': 'right', 't': 'left' },
    { 'from': 'n1-input2', 'to': 'n1-match', 'f': 'right', 't': 'left' },
    { 'from': 'n1-match', 'to': 'n1-save', 'f': 'right', 't': 'left', 'label': 'Cocok (Ya)', 'lClass': 'label-yes' },
    { 'from': 'n1-match', 'to': 'n1-error-match', 'f': 'bottom', 't': 'top', 'label': 'Salah (Tidak)', 'lClass': 'label-no' },
    { 'from': 'n1-error-match', 'to': 'n1-clear-match', 'f': 'left', 't': 'right' },
    { 'from': 'n1-clear-match', 'to': 'n1-form1', 'f': 'bottom', 't': 'bottom' },
    { 'from': 'n1-save', 'to': 'n1-success', 'f': 'right', 't': 'left' },
    { 'from': 'n1-success', 'to': 'n1-scanwin', 'f': 'right', 't': 'left' },
    { 'from': 'n1-scanwin', 'to': 'n1-end', 'f': 'right', 't': 'left' },

    # Ubah PIN
    { 'from': 'n2-start', 'to': 'n2-akun', 'f': 'right', 't': 'left' },
    { 'from': 'n2-akun', 'to': 'n2-click', 'f': 'right', 't': 'left' },
    { 'from': 'n2-click', 'to': 'n2-old-pin', 'f': 'right', 't': 'left' },
    { 'from': 'n2-old-pin', 'to': 'n2-valid-old', 'f': 'right', 't': 'left' },
    { 'from': 'n2-valid-old', 'to': 'n2-input1', 'f': 'right', 't': 'left', 'label': 'Benar (Ya)', 'lClass': 'label-yes' },
    { 'from': 'n2-valid-old', 'to': 'n2-old-error', 'f': 'left', 't': 'top', 'label': 'Salah (< 3x)', 'lClass': 'label-no' },
    { 'from': 'n2-old-error', 'to': 'n2-old-pin', 'f': 'top', 't': 'bottom' },
    { 'from': 'n2-valid-old', 'to': 'n2-old-block', 'f': 'bottom', 't': 'top', 'label': 'Salah (>= 3x)', 'lClass': 'label-no' },
    { 'from': 'n2-old-block', 'to': 'n2-otp-screen', 'f': 'right', 't': 'left' },
    { 'from': 'n2-input1', 'to': 'n2-valid-format', 'f': 'right', 't': 'left' },
    { 'from': 'n2-valid-format', 'to': 'n2-input2', 'f': 'right', 't': 'left', 'label': 'Valid (Ya)', 'lClass': 'label-yes' },
    { 'from': 'n2-valid-format', 'to': 'n2-error-format', 'f': 'bottom', 't': 'top', 'label': 'Invalid (Tidak)', 'lClass': 'label-no' },
    { 'from': 'n2-error-format', 'to': 'n2-input1', 'f': 'left', 't': 'bottom' },
    { 'from': 'n2-input2', 'to': 'n2-match', 'f': 'right', 't': 'left' },
    { 'from': 'n2-match', 'to': 'n2-save', 'f': 'right', 't': 'left', 'label': 'Cocok (Ya)', 'lClass': 'label-yes' },
    { 'from': 'n2-match', 'to': 'n2-error-match', 'f': 'bottom', 't': 'top', 'label': 'Salah (Tidak)', 'lClass': 'label-no' },
    { 'from': 'n2-error-match', 'to': 'n2-clear-match', 'f': 'left', 't': 'right' },
    { 'from': 'n2-clear-match', 'to': 'n2-input1', 'f': 'bottom', 't': 'bottom' },
    { 'from': 'n2-save', 'to': 'n2-success', 'f': 'right', 't': 'left' },
    { 'from': 'n2-success', 'to': 'n2-end', 'f': 'right', 't': 'left' },

    # Reset PIN Terblokir via WhatsApp OTP
    { 'from': 'n3-start', 'to': 'n3-check-status', 'f': 'right', 't': 'left' },
    { 'from': 'n3-check-status', 'to': 'n3-click-otp', 'f': 'right', 't': 'left' },
    { 'from': 'n3-click-otp', 'to': 'n3-valid-limit', 'f': 'right', 't': 'left' },
    { 'from': 'n3-valid-limit', 'to': 'n3-send-otp', 'f': 'right', 't': 'left', 'label': 'Lolos Limit & Cooldown', 'lClass': 'label-yes' },
    { 'from': 'n3-valid-limit', 'to': 'n3-error-limit', 'f': 'bottom', 't': 'top', 'label': 'Limit Habis (>3x/hari)', 'lClass': 'label-no' },
    { 'from': 'n3-send-otp', 'to': 'n3-input-otp', 'f': 'right', 't': 'left' },
    { 'from': 'n3-input-otp', 'to': 'n3-valid-otp', 'f': 'right', 't': 'left' },
    { 'from': 'n3-valid-otp', 'to': 'n3-input1', 'f': 'right', 't': 'left', 'label': 'OTP Valid', 'lClass': 'label-yes' },
    { 'from': 'n3-valid-otp', 'to': 'n3-error-otp-sub3', 'f': 'bottom', 't': 'top', 'label': 'OTP Salah (< 3x)', 'lClass': 'label-no' },
    { 'from': 'n3-error-otp-sub3', 'to': 'n3-input-otp', 'f': 'left', 't': 'bottom' },
    { 'from': 'n3-valid-otp', 'to': 'n3-error-otp-3', 'f': 'left', 't': 'right', 'label': 'OTP Salah (>= 3x)', 'lClass': 'label-no' },
    { 'from': 'n3-error-otp-3', 'to': 'n3-click-otp', 'f': 'top', 't': 'bottom' },
    { 'from': 'n3-input1', 'to': 'n3-valid-format', 'f': 'right', 't': 'left' },
    { 'from': 'n3-valid-format', 'to': 'n3-input2', 'f': 'right', 't': 'left', 'label': 'Valid (Ya)', 'lClass': 'label-yes' },
    { 'from': 'n3-valid-format', 'to': 'n3-error-format', 'f': 'bottom', 't': 'top', 'label': 'Invalid (Tidak)', 'lClass': 'label-no' },
    { 'from': 'n3-error-format', 'to': 'n3-input1', 'f': 'left', 't': 'bottom' },
    { 'from': 'n3-input2', 'to': 'n3-match', 'f': 'right', 't': 'left' },
    { 'from': 'n3-match', 'to': 'n3-save', 'f': 'right', 't': 'left', 'label': 'Cocok (Ya)', 'lClass': 'label-yes' },
    { 'from': 'n3-match', 'to': 'n3-error-match', 'f': 'bottom', 't': 'top', 'label': 'Salah (Tidak)', 'lClass': 'label-no' },
    { 'from': 'n3-error-match', 'to': 'n3-clear-match', 'f': 'left', 't': 'right' },
    { 'from': 'n3-clear-match', 'to': 'n3-input1', 'f': 'bottom', 't': 'bottom' },
    { 'from': 'n3-save', 'to': 'n3-success', 'f': 'right', 't': 'left' },
    { 'from': 'n3-success', 'to': 'n3-end', 'f': 'right', 't': 'left' }
]

sections = [
    { 'x': 450, 'y': 250, 'w': 2830, 'h': 600, 'label': 'Register PIN Mitra1000s', 'color': '#8b5cf6' },
    { 'x': 450, 'y': 950, 'w': 2830, 'h': 600, 'label': 'Ubah PIN Mitra1000s', 'color': '#0b57d0' },
    { 'x': 450, 'y': 1600, 'w': 3050, 'h': 650, 'label': 'Reset PIN Terblokir (WhatsApp OTP)', 'color': '#ef4444' }
]

node_dict = {n['id']: n for n in flow_nodes}

def get_dimensions(n):
    ntype = n['type']
    if ntype == 'n-start':
        return 90, 90
    elif ntype == 'n-end':
        return 140, 140
    elif ntype == 'n-decision':
        return 110, 110
    else:
        return 170, 50

def get_edge_point(n, edge):
    w, h = get_dimensions(n)
    cx = n['x'] + w / 2.0
    cy = n['y'] + h / 2.0
    ntype = n['type']
    if ntype == 'n-decision':
        offset = (w / 2.0) * math.sqrt(2)
        if edge == 'top': return cx, cy - offset
        if edge == 'bottom': return cx, cy + offset
        if edge == 'left': return cx - offset, cy
        if edge == 'right': return cx + offset, cy
    elif ntype in ('n-start', 'n-end'):
        r = w / 2.0
        if edge == 'top': return cx, cy - r
        if edge == 'bottom': return cx, cy + r
        if edge == 'left': return cx - r, cy
        if edge == 'right': return cx + r, cy
    else:
        if edge == 'top': return cx, n['y']
        if edge == 'bottom': return cx, n['y'] + h
        if edge == 'left': return n['x'], cy
        if edge == 'right': return n['x'] + w, cy
    return cx, cy

# Calculate canvas bounds including sections
min_x, min_y, max_x, max_y = 99999, 99999, -99999, -99999
for n in flow_nodes:
    w, h = get_dimensions(n)
    min_x = min(min_x, n['x'])
    min_y = min(min_y, n['y'])
    max_x = max(max_x, n['x'] + w)
    max_y = max(max_y, n['y'] + h)

for sec in sections:
    min_x = min(min_x, sec['x'])
    min_y = min(min_y, sec['y'])
    max_x = max(max_x, sec['x'] + sec['w'])
    max_y = max(max_y, sec['y'] + sec['h'])

min_x = max(0, min_x - 100)
min_y = max(0, min_y - 100)
max_x += 100
max_y += 100
width = max_x - min_x
height = max_y - min_y

svg = []
svg.append(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{min_x} {min_y} {width} {height}" width="{width}" height="{height}">')
svg.append('''<defs>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&amp;display=swap');
        text {
            font-family: 'Inter', sans-serif;
            font-size: 11px;
            font-weight: 700;
            fill: #1e293b;
        }
        .sec-label-txt {
            font-size: 11px;
            font-weight: 800;
            fill: #ffffff;
        }
        .conn-path {
            fill: none;
            stroke: #94a3b8;
            stroke-width: 2.5;
        }
        .conn-lbl-txt {
            font-size: 10px;
            font-weight: 800;
        }
        .lbl-yes { fill: #059669; }
        .lbl-no { fill: #dc2626; }
    </style>
    <marker id="arrow" viewBox="0 -5 10 10" refX="8" refY="0" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 -5 L 10 0 L 0 5 Z" fill="#94a3b8" />
    </marker>
</defs>''')

# 1. Sections
for sec in sections:
    lbl_w = len(sec['label']) * 7 + 24
    escaped_lbl = escape_xml(sec['label'])
    svg.append(f'<!-- Section: {escaped_lbl} -->')
    svg.append(f'<rect x="{sec["x"]}" y="{sec["y"]}" width="{sec["w"]}" height="{sec["h"]}" rx="20" ry="20" fill="rgba(241, 245, 249, 0.4)" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5,5" />')
    svg.append(f'<rect x="{sec["x"] + 20}" y="{sec["y"] - 12}" width="{lbl_w}" height="24" rx="8" fill="{sec["color"]}" />')
    svg.append(f'<text x="{sec["x"] + 32}" y="{sec["y"] + 4}" class="sec-label-txt" dominant-baseline="middle">{escaped_lbl}</text>')

# 2. Connections
for conn in connections:
    fn = node_dict[conn['from']]
    tn = node_dict[conn['to']]
    sx, sy = get_edge_point(fn, conn['f'])
    ex, ey = get_edge_point(tn, conn['t'])

    if conn['f'] == 'right' and conn['t'] == 'left' and abs(sy - ey) < 15:
        ey = sy
    if conn['f'] == 'bottom' and conn['t'] == 'top' and abs(sx - ex) < 20:
        ex = sx

    points = [{'x': sx, 'y': sy}]
    
    if conn['from'] == 'n1-clear-match' and conn['to'] == 'n1-form1':
        bottomY = 790
        destX = 1080 + 40
        d_str = f"M {sx} {sy} L {sx} {bottomY} L {destX} {bottomY} L {destX} {ey}"
        lbl_x, lbl_y = 1550, 790
    elif conn['from'] == 'n2-clear-match' and conn['to'] == 'n2-input1':
        bottomY = 1450
        destX = 1550 + 40
        d_str = f"M {sx} {sy} L {sx} {bottomY} L {destX} {bottomY} L {destX} {ey}"
        lbl_x, lbl_y = 1775, 1450
    elif conn['from'] == 'n3-clear-match' and conn['to'] == 'n3-input1':
        bottomY = 2100
        destX = 2000 + 40
        d_str = f"M {sx} {sy} L {sx} {bottomY} L {destX} {bottomY} L {destX} {ey}"
        lbl_x, lbl_y = 2220, 2100
    elif conn['from'] == 'n1-error-format' and conn['to'] == 'n1-form1':
        bottomY = 720
        destX = 1080 + 85
        d_str = f"M {sx} {sy} L {sx} {bottomY} L {destX} {bottomY} L {destX} {ey}"
        lbl_x, lbl_y = sx - 60, sy
    elif conn['from'] == 'n2-error-format' and conn['to'] == 'n2-input1':
        bottomY = 1410
        destX = 1550 + 85
        d_str = f"M {sx} {sy} L {sx} {bottomY} L {destX} {bottomY} L {destX} {ey}"
        lbl_x, lbl_y = sx - 60, sy
    elif conn['from'] == 'n3-error-format' and conn['to'] == 'n3-input1':
        bottomY = 2060
        destX = 2000 + 85
        d_str = f"M {sx} {sy} L {sx} {bottomY} L {destX} {bottomY} L {destX} {ey}"
        lbl_x, lbl_y = sx - 60, sy
    else:
        offset = 25
        p1 = {'x': sx, 'y': sy}
        if conn['f'] == 'top': p1['y'] -= offset
        elif conn['f'] == 'bottom': p1['y'] += offset
        elif conn['f'] == 'left': p1['x'] -= offset
        elif conn['f'] == 'right': p1['x'] += offset
        points.append(p1)

        p2 = {'x': ex, 'y': ey}
        if conn['t'] == 'top': p2['y'] -= offset
        elif conn['t'] == 'bottom': p2['y'] += offset
        elif conn['t'] == 'left': p2['x'] -= offset
        elif conn['t'] == 'right': p2['x'] += offset

        if conn['f'] in ('left', 'right'):
            if conn['t'] in ('top', 'bottom'):
                points.append({'x': p2['x'], 'y': p1['y']})
            else:
                midX = (p1['x'] + p2['x']) / 2.0
                points.append({'x': midX, 'y': p1['y']})
                points.append({'x': midX, 'y': p2['y']})
        else:
            if conn['t'] in ('left', 'right'):
                points.append({'x': p1['x'], 'y': p2['y']})
            else:
                midY = (p1['y'] + p2['y']) / 2.0
                points.append({'x': p1['x'], 'y': midY})
                points.append({'x': p2['x'], 'y': midY})

        points.append(p2)
        points.append({'x': ex, 'y': ey})

        d_str = f"M {points[0]['x']} {points[0]['y']}"
        for p in points[1:]:
            d_str += f" L {p['x']} {p['y']}"

        if len(points) == 2:
            lbl_x = (points[0]['x'] + points[1]['x']) / 2.0
            lbl_y = (points[0]['y'] + points[1]['y']) / 2.0
        elif len(points) == 6:
            lbl_x = (points[2]['x'] + points[3]['x']) / 2.0
            lbl_y = (points[2]['y'] + points[3]['y']) / 2.0
        else:
            mid = len(points) // 2
            lbl_x = points[mid]['x']
            lbl_y = points[mid]['y']

        if sx == ex and len(points) <= 2:
            lbl_x += 65

    # Append chevron arrow to path for native vector arrow in Figma
    chevron = ""
    if conn['t'] == 'left':
        chevron = f" M {ex - 10} {ey - 6} L {ex} {ey} L {ex - 10} {ey + 6}"
    elif conn['t'] == 'right':
        chevron = f" M {ex + 10} {ey - 6} L {ex} {ey} L {ex + 10} {ey + 6}"
    elif conn['t'] == 'top':
        chevron = f" M {ex - 6} {ey - 10} L {ex} {ey} L {ex + 6} {ey - 10}"
    elif conn['t'] == 'bottom':
        chevron = f" M {ex - 6} {ey + 10} L {ex} {ey} L {ex + 6} {ey + 10}"

    full_d = d_str + chevron

    svg.append(f'<!-- Connection: {conn["from"]} -> {conn["to"]} -->')
    svg.append(f'<g id="conn-{conn["from"]}-{conn["to"]}">')
    svg.append(f'  <path d="{full_d}" class="conn-path" />')

    if 'label' in conn:
        label = conn['label']
        is_yes = conn.get('lClass') == 'label-yes'
        stroke_c = '#10b981' if is_yes else '#ef4444'
        txt_class = 'lbl-yes' if is_yes else 'lbl-no'
        rect_w = len(label) * 6 + 18
        escaped_lbl = escape_xml(label)
        svg.append(f'  <rect x="{lbl_x - rect_w/2.0}" y="{lbl_y - 10}" width="{rect_w}" height="20" rx="6" fill="#ffffff" stroke="{stroke_c}" stroke-width="1" />')
        svg.append(f'  <text x="{lbl_x}" y="{lbl_y + 1}" text-anchor="middle" dominant-baseline="middle" class="conn-lbl-txt {txt_class}">{escaped_lbl}</text>')
    
    svg.append('</g>')

# 3. Nodes
for n in flow_nodes:
    w, h = get_dimensions(n)
    cx = n['x'] + w / 2.0
    cy = n['y'] + h / 2.0
    raw_lines = n['text'].split('<br>')
    lines = [escape_xml(l) for l in raw_lines]
    
    svg.append(f'<!-- Node: {n["id"]} -->')
    svg.append(f'<g id="{n["id"]}-group">')

    ntype = n['type']
    if ntype == 'n-decision':
        offset = (w / 2.0) * math.sqrt(2)
        pts = f"{cx},{cy - offset} {cx + offset},{cy} {cx},{cy + offset} {cx - offset},{cy}"
        svg.append(f'  <polygon points="{pts}" fill="#ffedd5" stroke="#fdba74" stroke-width="2" />')
        textColor = '#9a3412'
    elif ntype in ('n-start', 'n-end'):
        r = w / 2.0
        fill = '#dcfce7' if ntype == 'n-start' else '#fee2e2'
        stroke = '#22c55e' if ntype == 'n-start' else '#ef4444'
        textColor = '#166534' if ntype == 'n-start' else '#991b1b'
        svg.append(f'  <circle cx="{cx}" cy="{cy}" r="{r}" fill="{fill}" stroke="{stroke}" stroke-width="2" />')
    else:
        is_purple = ntype == 'n-purple'
        fill = '#f3e8ff' if is_purple else '#f1f5f9'
        stroke = '#d8b4fe' if is_purple else '#cbd5e1'
        textColor = '#6b21a8' if is_purple else '#334155'
        svg.append(f'  <rect x="{n["x"]}" y="{n["y"]}" width="{w}" height="{h}" rx="12" fill="{fill}" stroke="{stroke}" stroke-width="2" />')

    if len(lines) == 1:
        svg.append(f'  <text x="{cx}" y="{cy}" text-anchor="middle" dominant-baseline="middle" fill="{textColor}">{lines[0]}</text>')
    else:
        svg.append(f'  <text x="{cx}" y="{cy}" text-anchor="middle" dominant-baseline="middle" fill="{textColor}">')
        for idx, line in enumerate(lines):
            dy = -((len(lines) - 1) * 7) if idx == 0 else 14
            svg.append(f'    <tspan x="{cx}" dy="{dy}">{line}</tspan>')
        svg.append('  </text>')

    svg.append('</g>')

svg.append('</svg>')

output_path = "/Users/admin/Documents/Office/Product Manager Space/Product Management/Scanwin1000s/Prototype/scanwin-fraud -detection-engine/scanwin-fde-flowchart.svg"
with open(output_path, "w", encoding="utf-8") as f:
    f.write("\n".join(svg))

print("SVG generated successfully at:", output_path)
