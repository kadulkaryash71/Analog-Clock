setInterval(() => {
    t = new Date()
    hrs = t.getHours()
    min = t.getMinutes()
    sec = t.getSeconds()

    hour.style.transform = `rotate(${30*hrs + min/2}deg)`;
    minute.style.transform = `rotate(${6*min}deg)`;
    second.style.transform = `rotate(${6*sec}deg)`;


}, 1000);
