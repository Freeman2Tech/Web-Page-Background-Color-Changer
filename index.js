const btn = document.querySelector("button")
const body = document.getElementsByTagName("body")

btn.addEventListener("click", (e) => {
    if (body[0].style.backgroundColor === "white") {
        body[0].style.backgroundColor = "black"
        body[0].style.color = "white"


    } else {
        body[0].style.backgroundColor = "white"
        body[0].style.color = "black"


    }
    localStorage.setItem("bgColor", body[0].style.backgroundColor)
    localStorage.setItem("textColor", body[0].style.color)
})
body[0].style.backgroundColor = localStorage.getItem("bgColor")
body[0].style.color = localStorage.getItem("textColor")