function submitData() {

    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    if (name == ""){
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
