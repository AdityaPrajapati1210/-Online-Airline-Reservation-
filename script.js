function searchFlight(event) {
    event.preventDefault(); 

    let a = Math.floor(Math.random() * 3000 + 999);
    let b = Math.floor(Math.random() * 5000 + 999);
    let c = Math.floor(Math.random() * 10000 + 999);

    const flights = [
        {
            flightNumber: "AI101",
            airline: "Air India",
            price: a
        },
        {
            flightNumber: "6E302",
            airline: "IndiGo",
            price: b
        },
        {
            flightNumber: "SG405",
            airline: "SpiceJet",
            price: c
        }
    ];

    const container = document.getElementById("searchFlight");
    container.innerHTML = ""; 

    flights.forEach(flight => {
        const from = document.getElementById("from1");
        const to = document.getElementById("to1");

        const flightDiv = document.createElement("div");
        flightDiv.style.cssText = "height: 100px; width: 80vw; border: 1px solid black; display: flex; justify-content: space-around; margin: 20px auto; border-radius: 5px; background-color: rgba(240, 248, 255, 0.748);";

        flightDiv.innerHTML = `
            <div style="padding-top: 8px;">
                <span>17:50</span>
                <span style="font-size: medium;">${from}</span>
            </div>
            <div style="padding-top: 35px;">>---------Non_stop------------></div>
            <div style="padding-top: 8px;">
                <span>22:50</span>
                <span style="font-size: medium;">${to}</span>
            </div>
            <div style="padding-top: 8px; color: green;">
                <span style="color: green; font-size: x-large;">₹ ${flight.price}</span>
                <span style="color: green;">${flight.airline}</span>
            </div>
            <button style="background-color: blue; margin: 0px; color: white;">
                <span>Book Now</span>
            </button>
        `;

        container.appendChild(flightDiv);
    });

    function getInputValue(){

    }
}