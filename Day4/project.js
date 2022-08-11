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

    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(subject)
    console.log(message)

    let a = document.createElement('a')

    emailBody = `\r\nmy name is ${name}. ${message} \r\n\r\nSincerely, \r\n${name} \r\n${email} | ${phone}`
    emailBody = encodeURIComponent(emailBody)

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
    let nodejs = document.getElementById("input-nodejs").value
    let reactjs = document.getElementById("input-reactjs").value
    let nextjs = document.getElementById("input-nextjs").value
    let typescript = document.getElementById("input-typescript").value
    let image = document.getElementById("input-image").files

    image = URL.createObjectURL(image[0])

    console.log(nodejs)
    if (nodejs == 1) {
        nodejs = '<a href="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>'
    } else {
        nodejs = ''
    }
    console.log(nodejs)

    let project = {
        name,
        startDate,
        endDate,
        desc,
        nodejs,
        reactjs,
        nextjs,
        typescript,
        image
    }

    dataProject.push(project)

    updateProject()
}

function updateProject() {

    document.getElementById("projects").innerHTML = ''

    console.log(dataProject)

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
                    <p>date: ${dataProject[index].startDate} - ${dataProject[index].endDate}</p>
                </div>

                <div class="content-text">
                    <p>${dataProject[index].desc}</p>
                </div>

                <div class="content-tech">
                    <p
                    <i class="fa-brands fa-google-play"></i>&nbsp&nbsp
                    <i class="fa-brands fa-android"></i>&nbsp&nbsp
                    <i class="fa-brands fa-java"></i>
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