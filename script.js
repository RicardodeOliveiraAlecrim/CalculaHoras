
function sumDay() {

    let timeOut = document.querySelector(".out").value

    let timeIn = document.querySelector(".in").value

    let breakTime = document.querySelector(".break").value

    if (timeOut < timeIn) {

        let [h1, m1] = timeOut.split(':').map(Number);
        let [h2, m2] = timeIn.split(':').map(Number);
        let [h3, m3] = breakTime.split(':').map(Number);

        let minTotal = (24 - h2 - h3 + h1) * 60 + m1 - m2 - m3;
        let hourResults = Math.floor(minTotal / 60);
        let minResults = minTotal % 60;


        let result = document.querySelector(".result")

        result.innerHTML = `${hourResults.toString().padStart(2, '0')}: ${minResults.toString().padStart(2, '0')}`;

    } else if (timeOut === timeIn) {

        alert("O horário de entrada não pode ser igual ao de saída.")

    } else {

        let [h1, m1] = timeOut.split(':').map(Number);
        let [h2, m2] = timeIn.split(':').map(Number);
        let [h3, m3] = breakTime.split(':').map(Number);

        let minTotal = (h1 - h2 - h3) * 60 + m1 - m2 - m3;
        let hourResults = Math.floor(minTotal / 60);
        let minResults = minTotal % 60;

        let result = document.querySelector(".result")

        result.innerHTML = `${hourResults.toString().padStart(2, '0')}: ${minResults.toString().padStart(2, '0')}`;

    }
}

function clearDay() {

    document.querySelector(".out").value = '00:00';

    document.querySelector(".in").value = '00:00';

    document.querySelector(".break").value = '00:00';

    let result = document.querySelector(".result")

    result.innerHTML = '';

}

function sumWeek() {


   

    let monTime = document.querySelector(".monday").value
    let tueTime = document.querySelector(".tuesday").value
    let wedTime = document.querySelector(".wednesday").value
    let thuTime = document.querySelector(".thusday").value
    let friTime = document.querySelector(".friday").value
    let satTime = document.querySelector(".saturday").value
    let sunTime = document.querySelector(".sunday").value
 
      
    let [h1, m1] = monTime.split(':').map(Number);
    let [h2, m2] = tueTime.split(':').map(Number);
    let [h3, m3] = wedTime.split(':').map(Number);
    let [h4, m4] = thuTime.split(':').map(Number);
    let [h5, m5] = friTime.split(':').map(Number);
    let [h6, m6] = satTime.split(':').map(Number); 
    let [h7, m7] = sunTime.split(':').map(Number);

    if (monTime.value === '') {
        console.log("oi")
    }

   
    let minTotal = (h1 + h2 + h3 + h4 + h5 + h6 + h7) * 60 + m1 + m2 + m3 + m4 + m5 + m6 + m7;
    let hourResults = Math.floor(minTotal / 60);
    let minResults = minTotal % 60;


    let result = document.querySelector(".resultWeek")

    result.innerHTML = `${hourResults.toString().padStart(2, '0')}: ${minResults.toString().padStart(2, '0')}`;

}

function clearWeek() {

    document.querySelector(".monday").value = '00:00';

    document.querySelector(".tuesday").value = '00:00';

    document.querySelector(".wednesday").value = '00:00';

    document.querySelector(".thusday").value = '00:00';

    document.querySelector(".friday").value = '00:00';

    document.querySelector(".saturday").value = '00:00';

    document.querySelector(".sunday").value = '00:00';

    let result = document.querySelector(".resultWeek")

    result.innerHTML = '';

}

function sumMonth() {

    let one = document.querySelector(".one").value
    let two = document.querySelector(".two").value
    let three = document.querySelector(".three").value
    let four = document.querySelector(".four").value
    let five = document.querySelector(".five").value
    let six = document.querySelector(".six").value


    let [h1, m1] = one.split(':').map(Number);
    let [h2, m2] = two.split(':').map(Number);
    let [h3, m3] = three.split(':').map(Number);
    let [h4, m4] = four.split(':').map(Number);
    let [h5, m5] = five.split(':').map(Number);
    let [h6, m6] = six.split(':').map(Number);

    let minTotal = (h1 + h2 + h3 + h4 + h5 + h6) * 60 + m1 + m2 + m3 + m4 + m5 + m6;
    let hourResults = Math.floor(minTotal / 60);
    let minResults = minTotal % 60;


    let result = document.querySelector(".resultMonth")

    result.innerHTML = `${hourResults.toString().padStart(2, '0')}: ${minResults.toString().padStart(2, '0')}`;

}

function clearMonth() {

    document.querySelector(".one").value = '00:00';

    document.querySelector(".two").value = '00:00';

    document.querySelector(".three").value = '00:00';

    document.querySelector(".four").value = '00:00';

    document.querySelector(".five").value = '00:00';

    document.querySelector(".six").value = '00:00';

    let result = document.querySelector(".resultMonth")

    result.innerHTML = '';
}