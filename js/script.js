function init(){
  var button = document.getElementById('entrybutton');
  var entry = document.getElementById('entryinput');
  var text = document.getElementById('entryoutput');
  var name = document.getElementById('center');
  
  button.addEventListener('click', function(){
  alert(name.textContent + ": " + entry.value);
  text.innerHTML = entry.value;)

}


window.addEventListener('load', init);