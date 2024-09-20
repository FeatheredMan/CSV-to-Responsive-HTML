const express = require('express');
const path = require('path');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const port = 3000;

// Set up the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the CSV data
app.get('/', (req, res) => {
    const results = [];
    const csvFilePath = path.join(__dirname, 'uploads', 'data.csv');
    
    // Use * as the custom delimiter
    fs.createReadStream(csvFilePath)
        .pipe(csv({ separator: '*' }))  // Updated to use * as the delimiter
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.render('index', { data: results });
        });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
