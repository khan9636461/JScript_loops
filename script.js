let guest = ["Fakhar", "Alaam", "Khan", "Sahib", "Zafar", "Ali","ahmad", "Imran", "Asad", "Abid", "Naeem", "Sheer", "Babar"]
for(let a = 0; a<guest.length; a++){
    if(guest[a].startsWith('A') || guest[a].startsWith('a')){
        console.log(`MR. ${guest[a]} you are invited to my wedding cermony`)
}else{
    console.log(`MR. ${guest[a]} you  are not invited to my wedding cermony`)
}
}  
var text = prompt("Enter you text here ");

for(let a= 0; a < text.length; a++){
    let text
if(text[a]==' '){
console.log(`The number of characters in your text ${text.length}`)
console.log(`The number of words in your text ${text.split(" ").length}`)
}

} 