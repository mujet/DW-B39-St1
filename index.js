const express = require('express')

const app = express()
const port = 8000

app.set('view engine', 'hbs')
app.use(express.urlencoded({extended: true}))
app.use('/assets', express.static(__dirname + '/assets'))


let dataProject = []

app.get('/', function (request, response) {
    response.render('index', {dataProject} )
})

app.get('/contact', function (request, response) {
    response.render('contact')
})

app.get('/add-project', function (request, response) {
    console.log(dataProject);
    response.render('add-project')
})

app.post('/add-project', function (request, response) {
    let title = request.body.inputProject
    let start = request.body.inputStartDate
    let end = request.body.inputEndDate
    let description = request.body.inputDesc
    let nodejs = request.body.inputNodejs
    let laravel = request.body.inputLaravel
    let reactjs = request.body.inputReactjs
    let angular = request.body.inputAngular
    let pict = request.body.inputImage

    let duration = getTime(start, end)

    let project = { 
        title,
        duration,
        description,
        start,
        end,
        duration,
        nodejs,
        laravel,
        reactjs,
        angular,
        pict
    }

    dataProject.push(project)

    response.redirect('add-project')
})

app.get('/project-detail/:indeks', function (request, response) {
    let index = request.params.indeks
    let detailProject = dataProject[index]
    response.render('project-detail', {detailProject})
})

app.get('/edit-project/:indeks', function (request, response) {
    let index = request.params.indeks
    let detailProject = dataProject[index]
    response.render('edit-project', {detailProject, index} )
})

app.post('/edit-project/:indeks', function (request, response) {
    
    let index = request.params.indeks

    dataProject[index].title = request.body.inputProject
    dataProject[index].start = request.body.inputStartDate
    dataProject[index].end = request.body.inputEndDate
    dataProject[index].description = request.body.inputDesc
    dataProject[index].nodejs = request.body.inputNodejs
    dataProject[index].laravel = request.body.inputLaravel
    dataProject[index].reactjs = request.body.inputReactjs
    dataProject[index].angular = request.body.inputAngular
    dataProject[index].pict = request.body.inputImage

    dataProject[index].duration = getTime(dataProject[index].start, dataProject[index].end)

    response.redirect('/')
})

app.get('/delete-project/:indeks', function (request, response) {
    
    let index = request.params.indeks

    dataProject.splice(index,1)
    response.redirect('/')
})

app.listen(port, function () {
    console.log(`server running on port ${port}`);    
})

function getTime(start, end) {
    let timeEnd = new Date(end)
    let timeStart = new Date(start)

    let dur = timeEnd - timeStart

    let days = Math.floor (dur/(1000 * 3600 * 24))
    let months = Math.floor (dur/(1000 * 3600 * 24 * 30))

    if (days > 30) {
        days = days - (months * 30) 
    } else if (days == 30) {
        days = 0
    }

    let getDuration = {days, months}
    return getDuration
}