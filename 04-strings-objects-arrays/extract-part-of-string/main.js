function extractString(str, removecnt)
{
    return str.slice(0, removecnt);
}


console.log(extractString('Lorem ipsum dolor sit.', 5));