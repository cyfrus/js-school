function maxNumber(a, b, c)
{
    if(arguments.length === 0)
    {
        return -Infinity;
    }

    for (var i = 0; i < arguments.length; i++) {
        if(Number.isNaN(Number(arguments[i])))
        {
            return NaN;
        }
        arguments[i] = Number(arguments[i]);
    }
    if(arguments.length === 1)
    {
        return arguments[0];
    }
    var max = a > b ? a : b;
    if(c > max)
    {
        max = c;
    }
    return max;
}
              
