const express = require('express');
const path = require('path');

const app = express();

// Servir archivos estáticos desde el directorio 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Manejar todas las demás rutas y servir 'index.html'
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // eslint-disable-line no-console
});
