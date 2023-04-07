function calculateTravel() {

    let origin = document.getElementById("origin");
    let originValue = origin.options[origin.selectedIndex].text;

    let destination = document.getElementById("destination");
    let destinationValue = destination.options[destination.selectedIndex].text;

    let transportation = document.getElementById("origin");
    let transportationValue = transportation.options[transportation.selectedIndex].text;

    let weather = document.getElementById("weather");
    let weatherValue = weather.options[weather.selectedIndex].text;

    let distance = speed * time;
    let speed = distance / time;
    let time = distance / speed;
    
    let timeDisplay = document.getElementById("travel-time");

    // Test
    

    if (originValue == 'Monforte' && destinationValue == 'Fosso Branco') {
        time = 22;
    } else if (originValue == 'Monforte' && destinationValue == 'Nogueira') {
        time = 8;
    } else if (originValue == 'Monforte' && destinationValue == 'Farteixo') {
        time = 4;
    } else {
        time = 1;
    }


    if (transportationValue == 'A pé') {
        time = 12;
    } else if (transportationValue == 'Monforte') {
        time = 8;
    } else if (transportationValue == 'Monforte') {
        time = 4;
    } else {
        time = 1;
    }


    if (weatherValue == 'Ensolarado') {
        time += 0;
    } else if (weatherValue == 'Chuvoso') {
        time += time * 0.2;
    } else if (weatherValue == 'Tempestuoso') {
        time += time * 0.3;
    } else if (weatherValue == 'Nevado') {
        time += time * 0.4;
    } else if (weatherValue == 'Nevasca') {
        time += time * 0.7;
    } else {
        time += 0;
    }

    let timeRounded = Math.floor(time);

    if (time < 24) {
        timeDisplay.innerText = `${timeRounded}h`;
    } else {

        let days = Math.floor(time / 24);
        let remainder = time % 24;
        let hours = Math.floor(remainder);

        timeDisplay.innerText = `${days}d ${hours}h`;

    }


};