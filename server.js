const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const TextAnalyzer = require('./services/textAnalyzer');
const textAnalyzerRoutes = require('./routes/textAnalyzerRoutes');

const app = express();
const PORT = 3000;

// Set up logging using Morgan and Winston
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

// Use the textAnalyzerRoutes
app.use('/analyze', textAnalyzerRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
