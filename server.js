require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const RESET_MINUTES = parseInt(process.env.RESET_MINUTES, 10) || 15;

const layoutPaths = {
  '1': path.join(__dirname, 'index.html'),
  '2': path.join(__dirname, 'layout2.html')
};

function renderLayout(layout) {
  const selectedLayout = layoutPaths[layout] ? layout : '1';
  const htmlPath = layoutPaths[selectedLayout];
  let html = fs.readFileSync(htmlPath, 'utf-8');

  html = html.replace(/{{CAM1}}/g, process.env.CAM1 || 'https://go2rtc.t7h.com.br/api/stream.mp4?src=cam1_sub');
  html = html.replace(/{{CAM2}}/g, process.env.CAM2 || 'https://go2rtc.t7h.com.br/api/stream.mp4?src=cam2_sub');
  html = html.replace(/{{CAM3}}/g, process.env.CAM3 || 'https://go2rtc.t7h.com.br/api/stream.mp4?src=cam5_sub');
  html = html.replace(/{{CAM4}}/g, process.env.CAM4 || 'https://go2rtc.t7h.com.br/api/stream.mp4?src=mae_cam1_sub');
  html = html.replace(/{{CAM5}}/g, process.env.CAM5 || 'https://go2rtc.t7h.com.br/api/stream.mp4?src=mae_cam5_sub');
  html = html.replace(/{{CAM6}}/g, process.env.CAM6 || 'https://go2rtc.t7h.com.br/api/stream.mp4?src=cam7_sub');
  html = html.replace(/{{CAM7}}/g, process.env.CAM7 || 'https://go2rtc.t7h.com.br/api/stream.mp4?src=cam9_sub');
  html = html.replace(/{{CURRENT_LAYOUT}}/g, selectedLayout);
  html = html.replace(/{{RESET_MINUTES}}/g, String(RESET_MINUTES));

  return html;
}

app.get('/', (req, res) => {
  const selectedLayout = req.query.layout === '2' ? '2' : '1';
  const html = renderLayout(selectedLayout);

  res.set('Content-Type', 'text/html; charset=utf-8');
  res.send(html);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✓ Servidor iniciado em http://0.0.0.0:${PORT}`);
  console.log(`✓ Câmeras carregadas do arquivo .env`);
  console.log(`✓ Timer de reset configurado para ${RESET_MINUTES} minuto(s)`);
});
