const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 8000;

const apiKey = '';
const baseUrl = `htto://api.com`

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Amazon Scrapper API.');
});

//GET product detail
app.get('/products/:productId', async(req, res) =>
{
    const { productId } = req.params;

    try{
        const response = await request(`${baseUrl}&url=https//www.amazon.com/dp/${productId}`);
        res.json(response);
    }catch(error){
        res.json(error);
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
