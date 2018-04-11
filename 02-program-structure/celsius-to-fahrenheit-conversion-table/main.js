var fahrenhit = 0;
var table = "";
var row_counter = 0;
for(var i = -50; i < 51; i= i+5)
{
    row_counter++;
    fahrenhit = (9/5) * i + 32;
    table += fahrenhit + "\t";
    if(row_counter === 5)
    {
        row_counter = 0;
        table += "\n";
    }
}
console.log(table);

