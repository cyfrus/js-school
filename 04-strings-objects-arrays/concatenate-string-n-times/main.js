function concatenateString(str, n)
{
    if(arguments.length === 1)
    {
        return arguments[0];
    }
    else if(!n)
    {
        return '';
    }
    var base = str;
    while(n != 1)
    {
        str = str + base;
        n--;
    }
    return str;
}



