const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended:false }));
app.use(express.json());
app.use(routes);

// Serve us static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Start
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is listening.`);
    });
});


