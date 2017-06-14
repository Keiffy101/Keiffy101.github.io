var html = '', rgbColor;

for(var i=0; i < 10; i++){
  rgbColor = 'rgb(' + randomizer() + ',' + randomizer() + ',' + randomizer() + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
    }

function randomizer(){
  return Math.floor(Math.random()*256);
}

document.write(html);