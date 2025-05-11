const express = require("express");
const app = express();
const PORT = 3000;

app.get("/frontend", (req, res) => {
  res.set("Content-Type", "text/html; charset=UTF-8");
  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Test Frontend Server</title>
    </head>
    <body>
      <h1>Bienvenue sur le serveur frontend Express !</h1>
      <p>Votre serveur fonctionne correctement.</p>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Frontend server running at http://localhost:${PORT}`);
});
