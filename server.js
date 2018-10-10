/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.listen(port, () => console.log(`Listening on port ${port}`));

