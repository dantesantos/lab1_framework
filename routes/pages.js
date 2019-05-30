const router = require('express').Router();

router.get('/', (request, response) => {
    response.send(`Welcome to our very plain site.`);
});

router.get('/about', (request, response) => {
    response.send(`This is the about page.`);
});

router.get('/contact', (request, response) => {
    response.send(`This is the contact page.`);
});

module.exports = router;