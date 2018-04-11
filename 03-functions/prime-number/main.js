//Write a JavaScript function that accepts a number as a parameter and checks if the number is prime or not.
//A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrimeNumber(number)
{
    if(number > 1)
    {
        for(var i = number-1; i > 1; i--)
        {
            if(number % i === 0)
            {
                return false;
            }
        }
        return true;
    }
    else
    {
        return false;
    }
    
}