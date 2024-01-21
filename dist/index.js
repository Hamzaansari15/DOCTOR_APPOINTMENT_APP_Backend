import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.send(req.originalUrl);
});
app.listen('3000', () => console.log('Server Started!'));
