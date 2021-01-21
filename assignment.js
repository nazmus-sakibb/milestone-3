// Kilometer to Meter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}


// watchPrice = 50, phonePrice = 100, laptopPrice = 500
function budgetCalculator(watchCount, phoneCount, laptopCount) {
    var watchPrice = watchCount * 50;
    var phonePrice = phoneCount * 100;
    var laptopPrice = laptopCount * 500;
    var total = watchPrice + phonePrice + laptopPrice;
    return total;
}


// 1-10 days = 100, 11-20 days = 80, 21-continue = 50
function hotelCost(days) {
    var totalCost = 0;
    if (days <= 10) {
        totalCost = days * 100;
    } else if (days <= 20) {
        var firstPart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        totalCost = firstPart + secondPart;
    } else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = days - 20;
        var thirdPart = remaining * 50;
        totalCost = firstPart + secondPart + thirdPart;
    }
    return totalCost;
}


// Largest Name from an Array
function megaFriend(friendsName) {
    var longestElement = 0;
    var largestName;
    for (var i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length > longestElement) {
            longestElement = friendsName[i].length;
            largestName = friendsName[i];
        }
    }
    return largestName;
}
// var friendsName = ['Rahim', 'Jabbar', 'Joy', 'Karim', 'Mushfique', 'Yash', 'LionelMessi'];
