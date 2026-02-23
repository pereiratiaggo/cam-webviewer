require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Ler o arquivo HTML
const htmlPath = path.join(__dirname, 'index.html');

app.get('/', (req, res) => {
  let html = fs.readFileSync(htmlPath, 'utf-8');

  // Injetar variáveis de ambiente no HTML
  html = html.replace('{{CAM1}}', process.env.CAM1 || 'https://go2rtc.t7h.com.br/api/stream.mp4?src=cam1_sub');
  html = html.replace('{{CAM2}}', process.env.CAM2 || 'https://go2rtc.t7h.com.br/api/stream.mp4?src=cam2_sub');
  html = html.replace('{{CAM3}}', process.env.CAM3 || 'https://go2rtc.t7h.com.br/api/stream.mp4?src=cam5_sub');
  html = html.replace('{{CAM4}}', process.env.CAM4 || 'https://go2rtc.t7h.com.br/api/stream.mp4?src=mae_cam1_sub');
  html = html.replace('{{CAM5}}', process.env.CAM5 || 'https://go2rtc.t7h.com.br/api/stream.mp4?src=mae_cam5_sub');
  html = html.replace('{{CAM6}}', process.env.CAM6 || 'https://go2rtc.t7h.com.br/api/stream.mp4?src=cam7_sub');
  html = html.replace('{{CAM7}}', process.env.CAM7 || 'https://go2rtc.t7h.com.br/api/stream.mp4?src=cam9_sub');

  res.set('Content-Type', 'text/html; charset=utf-8');
  res.send(html);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✓ Servidor iniciado em http://0.0.0.0:${PORT}`);
  console.log(`✓ Câmeras carregadas do arquivo .env`);
});
