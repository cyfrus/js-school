function padString(base, add, length)
{
    while(base.length < length)
    {
        base = add + base;
    }
    return base;
}
