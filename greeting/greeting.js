
var date =new Date()
var hour =date.getHours()

// daca e dimineata atunci scriu "Buna dimineata !"
//altfel daca este pranz scriu "Pofta buna !"
//daca este dupa-amiaza scriu "Buna ziua!"
//daca este noapte scriu "Noapte buna!"

if (hour <3) {
    document.write ("Noapte buna!")  
}
 else if (hour < 12) {
    document.write("Buna dimineata!")
}
    else if ( hour == 12) {
        document.write("Pofta buna")
        
    }
    else if ( hour  < 17) {
    document.write("Buna ziua!")
    
} else if ( hour < 22)  {
    
  
    document.write("Buna seara!")}
    
 else  {
    document.write ("Noapte buna")
}
