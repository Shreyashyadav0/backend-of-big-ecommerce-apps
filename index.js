const  express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('content')); 


const PORT =1338;

app.listen(PORT, () => {
    console.log('Server is running at port 1338');
})