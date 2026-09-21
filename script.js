function updateClock() {
    const now = new Date()
    const seconds = now.getSeconds().toString().padStart(2, "0")

    document.getElementById("hours").textContent = hours
    document.getElementById("minutes").textContent = minutes
    document.getElementById("seconds").textContent = seconds

    document.getElementById("date").textContent = `${
        days[now.getDay()]
    }, ${now.getDate()} ${months[nowMonth()]} ${now.getFullYear()}`

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
}

// Initial call to display clock immediately
updateClock()

// Update clock every second
setInterval(updateClock, 1000)