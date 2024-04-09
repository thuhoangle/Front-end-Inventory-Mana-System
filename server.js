

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5173;

app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle form submissions
app.post('/saveSupplier', (req, res) => {
    const formData = req.body;

    // Read existing data from JSON file, if any
    let existingData = [];
    try {
        existingData = JSON.parse(fs.readFileSync('supplier_data.json'));
    } catch (err) {
        console.error('Error reading from JSON file:', err);
    }

    // Append new form data to existing data
    existingData.push(formData);

    // Write updated data back to JSON file
    fs.writeFile('/supplier_data.json', JSON.stringify(existingData, null, 2), (err) => {
        if (err) {
            console.error('Error writing to JSON file:', err);
            res.status(500).json({ error: 'Failed to save data' });
        } else {
            console.log('Data successfully saved to JSON file');
            res.status(200).json({ message: 'Data saved successfully' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
