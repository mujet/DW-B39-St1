function submitData() {

    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    if (name == "") {
        return alert("nama wajib diisi")
    } else if (email == "") {
        return alert("email wajib diisi")
    } else if (phone == "") {
        return alert("phone number wajib diisi")
    } else if (subject == "") {
        return alert("subject wajib dipilih")
    } else if (message == "") {
        return alert("message wajib diisi")
    }

    let a = document.createElement('a')

    emailBody = `%0D%0Amy name is ${name}. ${message} %0D%0ASincerely, %0D%0A${name} %0D%0A${email} | ${phone}`

    a.href = `mailto:zain.murtafi@gmail.com?subject=${subject}&body=Greeting! ${emailBody}`
    a.click()
}


let dataProject = []

function inputProject(event) {
    event.preventDefault()

    let name = document.getElementById("input-project").value
    let startDate = document.getElementById("input-start").value
    let endDate = document.getElementById("input-end").value
    let desc = document.getElementById("input-desc").value
    let nodejs = document.getElementById("input-nodejs").checked
    let reactjs = document.getElementById("input-reactjs").checked
    let laravel = document.getElementById("input-laravel").checked
    let angular = document.getElementById("input-angular").checked
    let image = document.getElementById("input-image").files


    let projectDur = getTime(startDate, endDate)

    if (nodejs) {
        nodejs = '<i class="fa-brands fa-node-js"></i>&nbsp&nbsp'
    } else {
        nodejs = ''
    }

    if (reactjs) {
        reactjs = '<i class="fa-brands fa-react"></i>&nbsp&nbsp'
    } else {
        reactjs = ''
    }

    if (laravel) {
        laravel = '<i class="fa-brands fa-laravel"></i>&nbsp&nbsp'
    } else {
        laravel = ''
    }

    if (angular) {
        angular = '<i class="fa-brands fa-angular"></i>&nbsp&nbsp'
    } else {
        angular = ''
    }

    image = URL.createObjectURL(image[0])

    let project = {
        name,
        projectDur,
        desc,
        nodejs,
        reactjs,
        laravel,
        angular,
        image
    }

    dataProject.push(project)

    console.log(dataProject);

    updateProject()
}

function updateProject() {

    document.getElementById("projects").innerHTML = ''

    for (let index = 0; index < dataProject.length; index++) {

        document.getElementById("projects").innerHTML += `
            <div class="content-card">
                <div class="content-image">
                    <img src="${dataProject[index].image}" alt="Project photo">
                </div>

                <div class="content-title">
                    <p>${dataProject[index].name}</p>
                </div>

                <div class="content-date">
                    <p>durasi: ${dataProject[index].projectDur.durationMonths} bulan ${dataProject[index].projectDur.durationDays} hari</p>
                </div>

                <div class="content-text">
                    <p>${dataProject[index].desc}</p>
                </div>

                <div class="content-tech">
                    <p
                    ${dataProject[index].nodejs}
                    ${dataProject[index].reactjs}
                    ${dataProject[index].laravel}
                    ${dataProject[index].angular}
                    </p>
                </div>

                <div class="content-button">
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>
            `
    }
}


function getTime(start, end) {
    let timeEnd = new Date(end)
    let timeStart = new Date(start)

    let duration = timeEnd - timeStart

    let durationDays = Math.floor (duration/(1000 * 3600 * 24))
    let durationMonths = Math.floor (duration/(1000 * 3600 * 24 * 30))

    if (durationDays > 30) {
        durationDays = durationDays - (durationMonths * 30) 
    } else if (durationDays == 30) {
        durationDays = 0
    }

    let getDuration = {durationDays, durationMonths}

    return getDuration
}
