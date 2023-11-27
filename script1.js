let usernames = [];

for(let  a = 0; a<5; a++){

    let user = prompt("Create a username ")

    if(user !="admin" && user !='Admin' && user !="ADMIN") {

        if(usernames.includes(user)){
            alert("User name not available")
            
        }else{
            if(user.length>=5 && user.length<=20){
                usernames.push(user)
                alert("Username created")
            }else{
                alert("Invalid username")
                console.log("Invalid username")
            }
        }
    }  
    else{
        alert("Invalid username")
        console.log("Invalid username")
    }    
    }

// let arr = ["A", "B", "C", "D", "E"];
// let char = prompt("Enter a char ")?.toUpperCase()
// if(arr.includes(char)){
//     console.log("Already a member")
// }else{
//     arr.push(char)
//     console.log(arr)
// }