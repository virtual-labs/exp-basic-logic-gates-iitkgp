//Your JavaScript goes in here
function  showDiv(str)
{
	if(str == '1')
	{
		document.getElementById("part1Div").style.display = '';
		document.getElementById("part2Div").style.display = 'none';
	}
	else
	{
		document.getElementById("part2Div").style.display = '';
		document.getElementById("part1Div").style.display = 'none';
	}
	
}