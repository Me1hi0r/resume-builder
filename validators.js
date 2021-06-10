function is_lenLess4(elem) {
    console.log(`${elem.id}_err`)
    if (elem.value.length < 4) {
        byId(`${elem.id}_err`).hidden = false;
        byId(`${elem.id}_err`).innerText = 'имя слишком короткое';
    }
}


[/[0-9]/, "ddffff"]

function is_space(elem) {
    if (/ /.test(elem.value)) {
        byId(`${elem.id}_err`).hidden = false;
        byId(`${elem.id}_err`).innerText = "В имени не должно быть пробелов";
    }
}

function is_numb(elem) {
    if (/[0-9]/.test(elem.value)) {
        byId(`${elem.id}_err`).hidden = false;
        byId(`${elem.id}_err`).innerText = "В имени не должно быть цифр.";
    }
}

function is_str(elem) {
    if (/[a-z]/.test(elem.value)) {
        byId(`${elem.id}_err`).hidden = false;
        byId(`${elem.id}_err`).innerText = "ошибка в желаемой заработной плате";
    }
}