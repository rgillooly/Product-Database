const express = require('express');
const routes = require('./routes');
const parsing = require("./routes/index")
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.get("/" ,(req, res) => {
res.send('Welcome to the Product Database. Would You Like To Begin? (Y/N)')
if (res == Y) {
  getAction()
} else {app.quit}
})

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
