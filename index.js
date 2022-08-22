const express = require('express')

const app = express()
const port = 8000

app.set('view engine', 'html')
app.engine('html', require('hbs').__express)
app.use(express.urlencoded({extended: true}))
app.use('/assets', express.static(__dirname + '/assets'))



app.get('/', function (request, response) {
    response.render('index')
})

app.get('/contact', function (request, response) {
    response.render('contact')
})

app.get('/add-project', function (request, response) {
    response.render('add-project')
})

app.post('/add-project', function (request, response) {
    console.log(request.body)
    
    response.redirect('add-project')
})

app.get('/project/:id', function (request, response) {
    let id = request.params.id
    console.log(id)
    response.render('project-detail',{
        id,
        title: 'This is title'
    })
})

app.listen(port, function () {
    console.log(`server running on port ${port}`);    
})