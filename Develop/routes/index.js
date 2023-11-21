const router = require('express').Router();
const apiRoutes = require('./api');

const actions = ["Add a Category", "View Categories", "Add a Product", "View Products", "Add A Product Tag",
 "View Product Tags", "Add a Tag", "View Tags"]

router.use('/api', apiRoutes);

function getAction () {
  inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'action',
      choices: 'actions'
    },

  ])
  .then (function(response) {
    if (response.action == "Add a Category")
    {
      categoryAdd()
    }
    else if (response.action == "View Categories")
    {
      categoryView()
    }
    else if (response.action == "Add a Product")
    {
      productAdd()
    }
    else if (response.action == "View Products")
    {
      productView()
    }
    else if (response.action == "Add a Product Tag")
    {
      addProductTag()
    }
    else if (response.action == "View Product Tags")
    {
      viewProductTag()
    }
    else if (response.action == "Add a Tag")
    {
      addTag()
    }
    else if (response.action == "View Tags")
    {
      viewTag()
    }
  })
}

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;