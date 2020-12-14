const express = require('express');

const app = express();
const port = 3333;


app.get('/', (request, response) => {
    return response.json({ message: 'Hello Word'});
});

app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2'
    ]);
});

app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.put('/projects/:id', (request, response) => {

    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.listen(port, () => {
    console.log(`🙌 Server running ${port}`);
});