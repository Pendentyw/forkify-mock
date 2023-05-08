const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;

const generateRecipes = (query, index) => {
  return {
    id: 1 + index,
    recipeName: `${query} nr ${index + 1}`,
    publisher: `User ${index + 1}`,
  };
};

app.get('/api/v2/recipes', (request, response) => {
  let array = new Array(10).fill(null);

  array = array.map((value, index) =>
    generateRecipes(request.query.search, index)
  );
  response.status(200).send(array);
});

app.listen(3000, () => {
  console.log(`listen on ${port}`);
});
