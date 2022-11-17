const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const mainPage = {
  title: 'Страница Продуктов',
  message: 'Выберите продукты для корзины',
  products: [
    {
      name: 'Хлеб',
      price: 30,
      id: 0,
      image: 'http://localhost:3000/bread.jpeg',
    },
    {
      name: 'Колбаса',
      price: 150,
      id: 1,
      image: 'http://localhost:3000/kolbasa.jpg',
    },
    {
      name: 'Сыр',
      price: 200,
      id: 2,
      image: 'http://localhost:3000/cheese.jpeg',
    },
  ],
};

const products = {
  title: 'Корзина',
  message: 'Ваша корзина',
  products: [],
};
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'images')));
app.get('/', (req, res) => {
  res.render('index', mainPage);
});
app.get('/products', (req, res) => {
  res.render('productBag');
});

app.post('/products', (req, res) => {
  console.log(req.body);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
