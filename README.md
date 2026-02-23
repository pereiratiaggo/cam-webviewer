# Cam WebViewer

Visualizador de múltiplas câmeras com layout responsivo, timer de auto-refresh e suporte a Docker.

## 🚀 Quick Start

### 1. Clone o repositório
```bash
git clone <seu-repo>
cd cam-webviewer
```

### 2. Copie o arquivo de exemplo
```bash
cp .env.example .env
```

### 3. Configure as URLs das câmeras no `.env`
```env
CAM1=https://seu-servidor.com/api/stream.mp4?src=cam1
CAM2=https://seu-servidor.com/api/stream.mp4?src=cam2
# ... adicione suas URLs
```

### 4. Execute com Docker Compose

```bash
docker-compose up -d
```

Acesse em `http://localhost:3000`

## 📋 Configuração

### Variáveis de Ambiente (.env)

```env
PORT=3000                  # Porta do servidor (padrão: 3000)
CAM1=<URL_DA_CAMERA_1>    # URL do stream da câmera 1
CAM2=<URL_DA_CAMERA_2>    # URL do stream da câmera 2
# ... até CAM7
```

## 🎨 Features

- ✅ Layout responsivo 3x3 com suporte a tablets
- ✅ Câmeras com resolução 1x2 (ocupam duplo espaço)
- ✅ Timer de auto-refresh configurável (padrão: 15 minutos)
- ✅ Botão para resetar manualmente
- ✅ Vídeos preenchem os quadros sem barras pretas
- ✅ Variáveis de ambiente (seguro para GitHub)
- ✅ Containerizado com Docker

## 🐳 Docker

### Build
```bash
docker build -t cam-webviewer .
```

### Run
```bash
docker run -p 3000:3000 --env-file .env cam-webviewer
```

### Docker Compose
```bash
docker-compose up
```

## 📁 Estrutura do Projeto

```
.
├── index.html           # Interface HTML
├── server.js            # Servidor Node.js
├── package.json         # Dependências
├── Dockerfile           # Configuração Docker
├── docker-compose.yml   # Compose para simplificar deploy
├── .env.example         # Template de variáveis
├── .gitignore          # Arquivos a ignorar no Git
└── README.md           # Este arquivo
```

## 🔒 Segurança

- O arquivo `.env` é ignorado pelo Git (veja `.gitignore`)
- URLs das câmeras não ficam visíveis no repositório
- Apenas `.env.example` é commitado com valores de exemplo

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar servidor
npm start
```

## 📝 Layout

| Câm 1 (1x2) | Câm 2 | Câm 3 (1x2) |
|---|---|---|
| Câm 1 (1x2) | Câm 4 | Câm 3 (1x2) |
| Câm 5 | Câm 6 | Câm 7 |

- Câmeras 1 e 3: ocupam 2 linhas com `object-fit: cover`
- Câmeras 6 e 7: preenchem o quadro com `object-fit: fill`
- Demais câmeras: `object-fit: cover`
