const express = require('express');

const app = express();


app.use(
    express.static( path.join(__dirname, 'public') )
)

app.use('*', (req,res) => {
    const pathPages = path.join(__dirname,'public', 'index.html')
    res.sendFile( pathPages );
})

app.listen(process.env.PORT);