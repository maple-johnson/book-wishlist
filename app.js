import express from "express";
// Import Validation

const app = express();
const PORT = 3000;
const wishlist = [];

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/summary', (req, res) => {
    const book = {
        //
    };

    //  Validation

    wishlist.push(book);
    res.render('summary', {wishlist});
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
