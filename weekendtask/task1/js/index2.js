// 
function Select_all()
{
	var items=document.getElementsByName('num')
	
		for( var i=0;i<items.length;i++)
		{
			if(items[i].type=='checkbox')
			{
				items[i].checked=true;
			}
		}
}
function Unselect_all()
{
	var items=document.getElementsByName('num')
	
		for( var i=0;i<items.length;i++)
		{
			if(items[i].type=='checkbox')
			{
				items[i].checked=false;
			}
		}
}
function result()
{
	var items=document.getElementsByName('num');
				var sum=0;
				for(var i=0; i<items.length; i++){
					if(items[i].type=='checkbox' && items[i].checked==true)
						sum=parseInt(items[i].value)+sum;
				}
				document.getElementById("demo").innerHTML="Total is = "+sum;
			}