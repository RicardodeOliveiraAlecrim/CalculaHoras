



function sumDay() {

    let timeOut = document.querySelector(".out").value

    let timeIn = document.querySelector(".in").value

    let breakTime = document.querySelector(".break").value

    let [h1,m1] = timeOut.split(':').map(Number);
    let [h2,m2] = timeIn.split(':').map(Number);
    let [h3,m3] = breakTime.split(':').map(Number);

    let minTotal = (h1 - h2 - h3)* 60 + m1 - m2 - m3;
    let hourResults = Math.floor(minTotal/60);
    let minResults = minTotal%60;
    

    let result = document.querySelector(".result")

   result.innerHTML=`${hourResults.toString().padStart(2, '0')}: ${minResults.toString().padStart(2, '0')}`;
}
