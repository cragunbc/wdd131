
// const leagues = [
//     {
//         city: "Syracuse",
//         club: "Syracuse Pickleball League",
//         location: "Founders Park",
//         cost: 25
//     },
//     {
//         city: "Farmington",
//         club: "Farmington Pickleball League",
//         location: "Farmington Gymnasium",
//         cost: 32
//     },
//     {
//         city: "Clinton",
//         club: "Heritage Days Pickleball Tournament",
//         location: "Meadows Park",
//         cost: 30
//     },
//     {
//         city: "Layton",
//         club: "Layton Pickleball League",
//         location: "Layton Parks and Rec",
//         cost: 35
//     },
//     {
//         city: "Clearfield",
//         club: "Clearfield Pickleball Tournament",
//         location: "Clearfield Parks and Rec",
//         cost: 20
//     },
//     {
//         city: "Kaysville",
//         club: "Kaysville Pickleball League",
//         location: "Barnes Park",
//         cost: 20
//     }
// ];

const url = "https://cragunbc.github.io/wdd131/project/scripts/leagues.json";
const leagueCard = document.querySelector("#league");

async function getLeagueData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.leagues);
    displayLeagues(data.leagues);
}

getLeagueData();

// console.log(getLeagueData());

// console.log(leagueCard);
const displayLeagues = (leagues) => {
    leagues.forEach((league) => {
        let newSection = document.createElement('section');
        let city = document.createElement('h3');
        let club = document.createElement('p');
        let location = document.createElement('p');
        let cost = document.createElement('p');
    
        city.textContent = league.city;
        club.textContent = `League Name: ${league.club}`;
        location.textContent = `Location: ${league.location}`;
        cost.textContent = `Cost: $${league.cost}`;

        newSection.appendChild(city);
        newSection.appendChild(club);
        newSection.appendChild(location);
        newSection.appendChild(cost);

        console.log(newSection);

        leagueCard.appendChild(newSection);
    });
}