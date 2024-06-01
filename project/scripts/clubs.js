
const leagues = [
    {
        city: "Syracuse",
        club: "Syracuse Pickleball League",
        location: "Founders Park",
        cost: 25
    },
    {
        city: "Farmington",
        club: "Farmington Pickleball League",
        location: "Farmington Gymnasium",
        cost: 32
    },
    {
        city: "Clinton",
        club: "Heritage Days Pickleball Tournament",
        location: "Meadows Park",
        cost: 30
    },
    {
        city: "Layton",
        club: "Layton Pickleball League",
        location: "Layton Parks and Rec",
        cost: 35
    },
    {
        city: "Clearfield",
        club: "Clearfield Pickleball Tournament",
        location: "Clearfield Parks and Rec",
        cost: 20
    },
    {
        city: "Kaysville",
        club: "Kaysville Pickleball League",
        location: "Barnes Park",
        cost: 20
    }
];

let leagueCard = document.querySelector("#league");

const displayLeagues = (leagues) => 
    leagues.forEach(league => {
    let newSection = document.createElement("section");
    let city = document.createElement("h3");
    let club = document.createElement("p");
    let location = document.createElement("p");
    let cost = document.createElement("p");
    
    city.textContent = league.city;
    club.textContent = league.club;
    location.textContent = league.location;
    cost.innerHTML = `$ ${league.cost}`;

    newSection.appendChild(city);
    newSection.appendChild(club);
    newSection.appendChild(location);
    newSection.appendChild(cost);

    leagueCard.appendChild(newSection);
});