const initialize = () => {
    const about = document.getElementById("about")
    const contact = document.getElementById("contact")
    const newCars = document.getElementById("newCars")
    const used = document.getElementById("used")
    const cars = document.getElementById("cars")
    const trucks = document.getElementById("trucks")
    const suv = document.getElementById("suv")

    about.addEventListener("click", () => {
        window.location.href = "https://www.shopify.com/blog/how-to-write-an-about-us-page"
    })
    contact.addEventListener("click", () => {
        window.location.href = "https://blog.hubspot.com/service/best-contact-us-pages"
    })
    newCars.addEventListener("click", () => {
        window.location.href = "https://www.newcars.com/"
    })
    used.addEventListener("click", () => {
        window.location.href = "https://www.usedcars.com/"
    })
    cars.addEventListener("click", () => {
        window.location.href = "https://www.cars.com/"
    })
    trucks.addEventListener("click", () => {
        window.location.href = "https://www.trucks.com/"
    })
    suv.addEventListener("click", () => {
        window.location.href = "https://www.cargurus.com"
    })
}

initialize();