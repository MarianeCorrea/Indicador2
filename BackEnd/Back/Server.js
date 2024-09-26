const express = require('express');
const app = express();

app.get('/api/usuarios', (req, res) => {
  res.json([
    { nome: 'Usuário 1' },
    { nome: 'Usuário 2' },
    { nome: 'Usuário 3' }
  ]);
});

app.listen(5000, () => {
  console.log('Servidor Express rodando na porta 5000');
});