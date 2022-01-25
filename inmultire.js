
var i = 1;
var j = 1;
var max = 10;

while (j <= max) {
    // string cu concatenare
    var message = j + "*" +i + '=' + i * j +  '<br>' 
    // string cu interpolare
    message = `${j} * ${i} =${j*i} <br>` 
   document.write (message) 
   j++
}
document.write('<br>')

for(i = 1; i <= max; i++){

    for ( j =1; j <= max ; j++){
    message = `${j} * ${i} =${j*i} <br>`
    document.write (message)
    }
    document.write('<br>')
}