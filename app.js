import express from "express";
import { validateForm } from "./services/validation.js";

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
        bookTitle: req.body.bookTitle,
        bookComments: req.body.bookComments,
        bookRating: req.body.bookRating
    };

    const result  = validateForm(book);
    if(!result.isValid) {
        console.log(result.errors);
        res.send(result.errors);
        return;
    }

    wishlist.push(book);
    res.render('summary', {wishlist});
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
