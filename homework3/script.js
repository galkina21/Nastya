function inputString() {
    let name = prompt('Ім`я користувача');
    let big = name.charAt(0).toUpperCase();
    let lettle = name.slice(1);
    alert(` Hello, ${big}${lettle}! How are you?`)}
 inputString()


 let number = prompt("Введіть тризначне число:");
if (number.length === 3 && !isNaN(number)) {
    let first = parseInt(number.charAt(0));
    let second = parseInt(number.charAt(1));
    let third = parseInt(number.charAt(2));
    
    if (first === second && second === third) {
        alert(`Всі цифри однакові.`);
    } else if (first === second || first === third || second === third) {
        alert(`Серед цифр є однакові.`);
    } 
} 


let birthday = prompt("Введіть свій рік народження:");
if (birthday === null) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else {
    let city = prompt("Введіть місто, де ви живете:");
    if (city === null) {
        alert("Шкода, що Ви не захотіли ввести своє місто.");
    } else {
        let sport = prompt("Введіть ваш улюблений вид спорту:");
        if (sport === null) {
            alert("Шкода, що Ви не захотіли ввести ваш улюблений вид спорту.");
        } else {
            let now = new Date().getFullYear();
            let age = now - parseInt(birthday);


if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
    let country;
    switch (city) {
        case "Київ":
            country = "України";
            break;
        case "Вашингтон":
            country = "США";
            break;
        case "Лондон":
            country = "Великої Британії";
            break;
    }
    alert(`Ти живеш у столиці ${country}. Твій вік: ${age} років.`);
} else {
    alert(`Ти живеш у місті ${city}. Твій вік: ${age} років.`);
}
        }
    }
}



