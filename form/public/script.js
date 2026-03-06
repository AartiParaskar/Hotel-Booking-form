const buttons = document.querySelectorAll(".book")

buttons.forEach(btn=>{

btn.addEventListener("click",()=>{

alert("Booking page coming soon!")

})

})
document.getElementById("searchForm").addEventListener("submit", function(e){

e.preventDefault();

// clear previous search history
localStorage.removeItem("searchData");

const destination = document.getElementById("destination").value;
const checkin = document.getElementById("checkin").value;
const checkout = document.getElementById("checkout").value;
const guests = document.getElementById("guests").value;

const searchData = {
destination,
checkin,
checkout,
guests
};

// store new search
localStorage.setItem("searchData", JSON.stringify(searchData));

// redirect to results page
window.location.href = "results.html";

});