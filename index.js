const express = require('express');
const axios = require('axios');
const app = express();

app.get('/price', async (req, res) => {
  try {
    const response = await axios.get('https://api.fingrid.fi/v1/variable/248/events/json', {
      headers: {
        'x-api-key': process.env.API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('❌ Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch data from Fingrid' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Fingrid proxy running on port ${PORT}`);
});
