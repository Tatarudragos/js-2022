var scores = [50, 65, 47, 20, 96, 35, 72, 69, 26]

document.write("Al doilea scor este :" + scores[1] + '<br>')
document.write("Ultimul scor este :" + scores[8]) + '<br>'
 var max = 0
for (let i = 0; i < scores.length; i++)  {
        if(scores[i]> max) {
            max = scores[i]
        }
    
    
}
document.write("Scorul maxim este:"  + max + '<br>')
// sort ordoneaza elementele din array in ordine ascendenta
scores.sort()
document.write(scores +'<br>') 

var fruits =['orange' ,'banana', 'apple', 'wasabi']
fruits[0] ='kiwi'
//push adauga la sfarsitul array-ului
fruits.push('pear')
// adauga la inceputul array-ului
fruits.unshift('strawberry')

fruits.sort()
document.write(fruits) + '<br>'

