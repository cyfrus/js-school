var chessBoard = "";
var next = " ";
var size = prompt('Enter size: ');
for(var i = 0; i < size; i++)
{
    for(var j = 0; j < size; j++)
    {
        chessBoard += next;
        next = next === " " ? "#" : " ";
    }
    next = next === " " ? "#" : " ";
    chessBoard  += "\n";
}
console.log(chessBoard);