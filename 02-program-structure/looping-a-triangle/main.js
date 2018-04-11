var hash = "#";
function repeatString(number)
{
	if(!number)
	{
		return;
	}
	hash = hash + "#";
}

for(var i = 0; i < 7; i++)
{
	repeatString(i);
	console.log(hash);
}