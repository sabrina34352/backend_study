const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const mainPage = {
  title: 'Страница Продуктов',
  message: 'Выберите продукты для корзины',
  products: [
    {
      name: 'Хлеб',
      count: 1,
      price: 30,
      id: 0,
      image: 'http://localhost:3000/bread.jpeg',
    },
    {
      name: 'Колбаса',
      count: 1,
      price: 150,
      id: 1,
      image: 'http://localhost:3000/kolbasa.jpg',
    },
    {
      name: 'Сыр',
      count: 1,
      price: 200,
      id: 2,
      image: 'http://localhost:3000/cheese.jpeg',
    },
  ],
};

const productBag = {
  title: 'Корзина',
  message: 'Ваша корзина',
  chosenProducts: [],
};
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'images')));
app.get('/', (req, res) => {
  res.render('index', mainPage);
});
app.get('/products', (req, res) => {
  res.render('productBag', productBag);
});

app.post('/', (req, res) => {
  if (productBag.chosenProducts.includes(mainPage.products[req.body.id])) {
    productBag.chosenProducts.forEach((item) => {
      item.id.toString() === req.body.id && item.count++;
    });
  } else {
    productBag.chosenProducts.push(mainPage.products[req.body.id]);
  }
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
