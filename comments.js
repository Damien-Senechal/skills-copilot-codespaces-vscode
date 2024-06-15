// Create web server

    // Require modules
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Comments route
router.get('/', (req, res) => {
    // Read comments.json file
    fs.readFile(path.join(__dirname, '../data/comments.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading comments.json');
        } else {
            // Parse JSON data
            const comments = JSON.parse(data);
            // Send comments data
            res.json(comments);
        }
    });
});

// Export router
module.exports = router;