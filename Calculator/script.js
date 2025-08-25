let input = document.getElementById('inputBox');  //access by tag name, classes etc
let buttons = document.querySelectorAll('button');  // sare buttons ko class name se na leke querry selector se le rahe hain ye sare buttons de dega variable variables ke andar


let string = "";  // empty string ismain hum result store karenge....
let arr = Array.from(buttons);  // Array class hai .from func use karte hain ismain hum buttons variable pass kar denge ye ek array bana ke de dega humein ek buttons ka jiska naam humne rakha hau arr aur ab iss array pe hum loop chala sakte hain..........(for each loop buttons pe nahi chalti wo humare array pe lagengi..... 
arr.forEach(button => {     // sare buttons chahiye to uske liye array bana lete hain
    console.log("render ");
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            input.value = string;
        }

        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        else {
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})




