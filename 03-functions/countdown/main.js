function countDown(number)
{
    if(number === 0)
    return;

    console.log(number);
    countDown(--number);
} 

function countUp(number)
{
    var cnt;
    if(arguments[1] === undefined)
    {
        var cnt = 1;
    }
    else
    {
        cnt = arguments[1];
    }
    console.log(cnt);
    if(cnt === number)
    {
        return;
    }
    countUp(number, ++cnt);
} 

