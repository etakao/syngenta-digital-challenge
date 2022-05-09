const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const hotelsData = require("../hotels.json"); // get hotels data

function getWeekDays(chosenDays) {
    var stayDates = chosenDays.split(","); // splits chosen dates in an array
    var dayOfWeek = [];

    stayDates.forEach((date, index) => { // for each date, converts into its week day
        let day = new Date(date)
        dayOfWeek[index] = day.getDay(); // the dayOfWeek aux array receives date's day of week (0: sunday, 1: monday, etc.)
    });

    return dayOfWeek;
}

function getHotelsInfos(client, days, hotels) {
    var hotelsInfos = [];

    hotels.forEach((hotel, index) => { // for each hotel, gets its info based on the days
        let hotelInfos = {
            name: hotel.name,
            rating: hotel.rating,
            price: 0
        };

        days.forEach(day => { // for each day, gets its price on each hotel
            if (day === 0 || day >= 5) { // in case the day correspond to a weekend day
                hotelInfos.price += hotel.weekend[client];
            } else { // in case the day correspond to a week day
                hotelInfos.price += hotel.weekDay[client];
            }
        });

        hotelsInfos[index] = hotelInfos; // the hotelsInfo aux array receives hotel infos
    });

    return hotelsInfos;
}

function getCheapestHotel(input) { //DO NOT change the function's name.
    var [clientType, dates] = input.split(":"); // splits input on the ":" in client type and chosen dates
    var dayOfWeek = getWeekDays(dates);

    clientType = clientType.toLowerCase();

    const hotelsInfos = getHotelsInfos(clientType, dayOfWeek, hotelsData);

    var cheapest = hotelsInfos[0]; // the cheapest hotel receives the first hotel temporarily
    hotelsInfos.forEach(hotel => { // for each hotel in array, compares its value to the cheapest one
        if (hotel.price < cheapest.price) {
            cheapest = hotel;
        } else if (hotel.price === cheapest.price) { // if the hotel price were equals to the cheapest one, the cheapest is the better rated
            if (hotel.rating > cheapest.rating) {
                cheapest = hotel;
            }
        }
    });

    const cheapestHotel = cheapest.name;

    return cheapestHotel;
}

rl.question("Digite sua entrada: ", (answer) => {
    const cheapestHotel = getCheapestHotel(answer);
    console.log(`O hotel mais barato para a hospedagem é: ${cheapestHotel}`)
    rl.close();
});

exports.functions = { getWeekDays, getHotelsInfos, getCheapestHotel }
