const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/UserRoute');


const app = express()
app.get('/', (req, res) => {
    res.status(200).send("Welcome ") 
    })
    
app.use(express.json());


app.use(bodyParser.json())

app.use(cors())

// Mount user routes
app.use('/api/users', userRoutes);

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

module.exports = app
