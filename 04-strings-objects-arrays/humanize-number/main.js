function humanizeNumber(number)
{
    if(number === 11 || number === 12 || number === 13)
    {
        return number + "th";
    }
    var lastnumber = number % 10;
    switch (lastnumber) {
        case 1:
            return number + "st"; 
            break;
        case 2:
            return number + "nd";
            break;
        case 3:
            return number + "rd";
            break;
        default:
            return number + "th";
            break;
    }
}


