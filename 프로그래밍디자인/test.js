function getFirstNum()
{
	var firstNum = prompt("첫번째 수를 입력하세요")
	return firstNum
}

function getSecondNum()
{
	var secondNum = prompt("두번째 수를 입력하세요")
	return secondNum
}

function Cal() 
{

	var firstNum = getFirstNum();
	var secondNum = getSecondNum();

	var hap = parseInt(firstNum) + parseInt(secondNum);
	var cha = parseInt(firstNum) - parseInt(secondNum);
	var gop = parseInt(firstNum) * parseInt(secondNum);
	var bun = parseInt(firstNum) / parseInt(secondNum);

	document.getElementById("result").innerHTML = "두 수의 합은"+hap+"입니다"+"<br>";

	document.getElementById("result").innerHTML += "두 수의 차는"+cha+"입니다"+"<br>";

	document.getElementById("result").innerHTML += "두 수의 곱은"+gop+"입니다"+"<br>";

	document.getElementById("result").innerHTML += "두 수의 나누기는"+bun+"입니다"+"<br>";
		
}

	

function Cal2()
{
	var firstNum = document.getElementById("firstNum").value;
	var secondNum = document.getElementById("secondNum").value;
	var operand = document.getElementById("operand")
	operand = operand.options[operand.selectedIndex].value;

	if(operand=="hap")
	{
		var hap = parseInt(firstNum) + parseInt(secondNum);
		document.getElementById("resultNum").value = hap;
	}

	else if(operand=="cha")
	{
		var cha = parseInt(firstNum) - parseInt(secondNum);
		document.getElementById("resultNum").value = cha;	
	}

	else if(operand=="gop")
	{
		var gop = parseInt(firstNum) * parseInt(secondNum);
		document.getElementById("resultNum").value = gop;	
	}

	else if(operand=="bun")
	{
		var bun = parseInt(firstNum) / parseInt(secondNum);
		document.getElementById("resultNum").value = bun;	
	}

	else
	{
		alert("다시입력해주세요")
	}

				
}

	
function GuGuDan()
{
	document.getElementById("result4").innerHTML =""
	var val=0;
	for (var dan=2; dan<10; dan++)
	{
		document.getElementById("result4").innerHTML += "=="+dan+"단=="+"<br>"	
		for (var num=1; num<10; num++)
		{
			val = dan*num
			document.getElementById("result4").innerHTML += dan+"*"+num+"="+val+"<br>"
		}
	}	
}	

function doGuGuDan(dan)
{

	document.getElementById("result5").innerHTML =""
	var val=0;

	for (var num=1; num<10; num++)
	{
		val = dan*num
		document.getElementById("result5").innerHTML += dan+"*"+num+"="+val+"<br>"
	}
			
}

function GuGuDan2()
{
	
	document.getElementById("result5").innerHTML =""
	var gugudan = document.getElementById("gugudan")
	gugudan = gugudan.options[gugudan.selectedIndex].value;
			

	if(gugudan=="2")
	{
		doGuGuDan(parseInt(gugudan));
	}

	else if(gugudan=="3")
	{
		doGuGuDan(parseInt(gugudan));	
	}

	else if(gugudan=="4")
	{
		doGuGuDan(parseInt(gugudan));	
	}

	else if(gugudan=="5")
	{
		doGuGuDan(parseInt(gugudan));	
	}
	else if(gugudan=="6")
	{
		doGuGuDan(parseInt(gugudan));	
	}
	else if(gugudan=="7")
	{
		doGuGuDan(parseInt(gugudan));	
	}
	else if(gugudan=="8")
	{
		doGuGuDan(parseInt(gugudan));	
	}
	else if(gugudan=="9")
	{
		doGuGuDan(parseInt(gugudan));	
	}

}

function LeftStar(StarNum)
{

	document.getElementById("result6").innerHTML =""
	var output=""
	for (var i=0; i<StarNum; i++)
	{
		for (var j=0; j<i+1;j++)
		{
			output +="*"
		}
		output += "<br>"
	}

	document.getElementById("result6").innerHTML += output
			
}


function RightStar(StarNum)
{
	document.getElementById("result6").innerHTML =""
			
	var output=""
	for (var i=0; i<StarNum; i++)
	{
		for (var j=0; j<StarNum-i;j++)
		{
			output += "&nbsp"

		}

		for (var j=0; j<i+1;j++)
		{
			output +="*"

		}

		output += "<br>"
				
	}

	document.getElementById("result6").innerHTML += output
			
}


function Star()
{

	var star = document.getElementById("star")
	star = star.options[star.selectedIndex].value;
			
	if(star=="left")
	{
		var StarNum = document.getElementById("StarNum").value;
		LeftStar(StarNum);
	}

	else if(star=="right")
	{
		var StarNum = document.getElementById("StarNum").value;
		RightStar(StarNum);	
	}

}