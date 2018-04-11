function isBlank(str)
{
    if(str.length === 0 && (typeof str === 'string' || str instanceof String))
    {
        return true;
    }
     return false;
}


