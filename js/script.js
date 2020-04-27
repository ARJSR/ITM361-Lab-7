function init(){
	var button = document.getElementById("entrybutton");
	var input = document.getElementById("entryinput");
	var output = document.getElementById("textoutput");
	var name = document.getElementById("center");
  
	button.addEventListener("click", function(){
		output.innerHTML = input.value;
		alert(name.textContent + ': ' + input.value);
  });

}


window.addEventListener('load', init);