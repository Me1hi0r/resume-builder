//MY-FN
function byId(name) {
    return document.getElementById(name);
}

function create(tag) {
    return document.createElement(tag);
}

// function clear(name) {
//     name.hidden = true;
//     name.innerText = '';
// }

// function addOptions(name, opts) {
//     let select = document.getElementById(name);
//     let index = select.options.length;
//     for (let opt of opts) {
//         select.options[index] = new Option(opt, index++, false);
//     }
// };


//TABLE

function row(...elems) {
    let item = create('div');
    item.classList.add('row');
    for (let elem of elems) {
        item.appendChild(elem);
    }
    return item;
}

function col(...elems) {
    let item = create('div');
    item.classList.add('col-lg');
    for (let elem of elems) {
        item.appendChild(elem);
    }
    return item;
}


//ATOM ELEM
function labl(id, label, cls) {
    let l = create('div');
    l.id = `${id}_lab`;
    l.classList.add((cls) ? cls : 'labl')
    l.innerText = label;
    return l;
}

function err(id) {
    let err = create('div');
    err.classList.add('err')
    err.hidden = true;
    err.id = `${id}_err`;
    return err;
}

function arr(name, value, id) {
    let inp = create('textarea')
    inp.classList.add('form-control');
    inp.id = (id) ? id : name;
    inp.name = name;
    if (value) inp.value = value;
    return inp;
}

function inpt(id, name, value, valids) {
    let inp = create('input')
    inp.classList.add('form-control', 'custom-input');

    inp.id = name;
    inp.name = name;
    if (value) inp.value = value;

    inp.onfocus = () => {}

    inp.onchange = () => {
        let err = byId(`${name}_err`);
        err.hidden = true;
        err.innerText = '';

        for (let fun of valids) {
            console.log(fun)
            fun(inp);
        }

        inp.style.border = `2px solid ${(err.innerText == '') ? '#1A9382' : 'red'}`;
    }
    return inp;
}

function sel(name, id, options) {
    let sel = create('select')
    sel.classList.add('form-control');
    sel.classList.add('custom-select');

    sel.id = id;
    sel.name = name;
    let index = sel.options.length;
    // if (Array.isArray(options)) {
    //     for (let o of options) {
    //         sel.options[index] = new Option(o, index++, false);
    //     }
    // } else {
    for (let [k, v] of Object.entries(options)) {
        console.log(k, v)
        sel.options[index++] = new Option(v, k, false);
        // }
    }



    sel.onchange = () => {
        if (sel.id == 'select_role') {
            if (sel.value == '1') {
                byId('doctor').hidden = false;
                byId('ruc').hidden = true;
                byId('nurse').hidden = true;
            }
            if (sel.value == '2') {
                byId('nurse').hidden = false;
                byId('doctor').hidden = true;
                byId('ruc').hidden = true;
            }
            if (sel.value == '3') {
                byId('ruc').hidden = false;
                byId('doctor').hidden = true;
                byId('nurse').hidden = true;
            }
        }
    }

    return sel;
}

//ELEMENT

function line(text) {
    let item = create('h1');
    item.classList.add('text-left', 'line');
    item.innerText = text;
    return item;
}

function hidden_msg(text, id) {
    let item = create('h3');
    item.classList.add('text-left', 'msg');
    item.id = id;
    item.hidden = true;
    item.innerText = text;
    return item;
}



function photo(src) {
    let item = create('img');
    item.src = src;
    item.classList.add('photo', 'rounded', 'mx-auto', 'd-block', 'img-thumbnail');
    return item;
}




function input(opt) {
    let item = create('div');
    item.classList.add('input')
    item.appendChild(labl(opt.name, opt.label[0]));
    item.appendChild(inpt(opt.id, opt.name, opt.value, opt.validators));
    item.appendChild(err(opt.name));
    return item;
};



function area(opt) {
    let item = create('div');
    item.classList.add('input')
    item.appendChild(labl(opt.name, opt.label[0]));
    item.appendChild(arr(opt.name, opt.value));
    item.appendChild(err(opt.name));
    return item;
}



function select(opt) {
    if (opt.id === "") opt.id = opt.name;
    let item = create('div');
    item.appendChild(labl(opt.id, opt.label[0]));
    console.log("OOOO: ", opt.options)
    item.appendChild(sel(opt.name, opt.id, opt.options));
    item.appendChild(err(opt.name));
    return item;
};



//BUTTONS - FORM
function btn_social(name) {
    let p = create('p');
    p.classList.add('btn');

    let a = create('a');
    a.innerText = '+  Добавить социальную сеть';
    a.onclick = (e) => {
        e.preventDefault();
        let parant = byId(name)
        let last = parant.removeChild(parant.lastChild);
        let i = parant.children.length;

        link = {
            label: ['Ссылка на профиль'],
            value: '',
            name: `link_${i-1}`,
            id: '',
            validators: []
        }

        select_social = {
            label: ['Социальная сеть'],
            name: `select_social${i-1}`,
            id: '',
            options: ['facebook', 'telegram', 'whatsapp']
        }


        parant.appendChild(create('div').appendChild(row(col(select(select_social)), col(input(link)))));
        parant.appendChild(last);
    }
    p.appendChild(a);
    return p;
}

function btn_exp(name) {
    let p = create('p');
    p.classList.add('btn');

    let a = create('a');
    a.innerText = '+  Добавить опыт работы';
    a.onclick = (e) => {
        e.preventDefault();
        let parant = byId(name)
        let last = parant.removeChild(parant.lastChild);
        let i = parant.children.length;

        let d = create('div');

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        let yyyy = today.getFullYear();
        dd = (dd < 10) ? '0' + dd : dd;
        mm = (mm < 10) ? '0' + mm : mm;
        today = yyyy + '-' + mm + '-' + dd;
        d1 = {
            label: ["Начало работы"],
            value: "2013-07",
            name: `start_${i-1}`,
            type: 'date',
            id: '',
            min: '',
            max: today,
        }
        d2 = {
            label: ["Конец работы"],
            value: "2013-07",
            name: `finish_${i-1}`,
            type: 'date',
            id: '',
            min: '',
            max: today,
        }

        d.appendChild(row(col(date(d1)), col(date(d2))));
        dolznost = {
            label: ['Должность'],
            value: '',
            name: `work_${i-1}`,
            id: '',
            validators: []
        }
        company = {
            label: ['Название компании'],
            value: '',
            name: `company_name_${i-1}`,
            id: '',
            validators: []
        }

        d.appendChild(row(col(input(dolznost)), col(input(company))))
        ob = {
            label: ['Обязанности'],
            value: '',
            name: `obyaz_${i-1}`,
            id: '',
            validators: []
        }

        d.appendChild(row(col(chec('still_work', 'Еще работаю', '', 'nostyle'))))

        d.appendChild(row(col(area(ob))))

        parant.appendChild(d);
        parant.appendChild(last);
    }
    p.appendChild(a);
    return p;
}

function btn_edu(name) {
    let p = create('p');
    p.classList.add('btn');
    let a = create('a');
    a.innerText = '+  Добавить образование';
    a.onclick = (e) => {
        e.preventDefault();
        let parant = byId(name);
        let last = parant.removeChild(parant.lastChild);
        let i = parant.children.length;
        let d = create('div');
        institut = {
            label: ['Название учебного заведения'],
            value: '',
            name: `institution_name_${i}`,
            id: '',
            validators: []
        }
        select_edu_lvl = {
            label: ['Уровень образования'],
            name: `education_level_${i}`,
            id: '',
            options: ["Высшее", "Среднеспециальное"]
        }


        d.appendChild(row(col(input(institut)), col(select(select_edu_lvl))))
        facult = {
            label: ['Факультет'],
            value: '',
            name: `facultet_${i}`,
            id: '',
            validators: []
        }

        year = {
            label: ['Год окончания'],
            value: '',
            name: `education_level_${i}`,
            id: '',
            validators: []
        }

        d.appendChild(row(col(input(facult)), col(input(year))))
        parant.appendChild(d);
        parant.appendChild(last);
    }
    p.appendChild(a);
    return p;
}

function btn_dopedu(value) {
    let p = create('p');
    p.classList.add('btn');
    let a = create('a');
    a.innerText = '+  Добавить дополнительное образование';
    a.onclick = (e) => {
        e.preventDefault();
        let parant = byId('dopedu')
        let last = parant.removeChild(parant.lastChild);
        let i = parant.children.length;
        let d = create('div');
        institut = {
            label: ['Название курса'],
            value: '',
            name: `inst_${i}`,
            id: '',
            validators: []
        }

        d.appendChild(row(col(input(institut))))
        facult = {
            label: ['Проводившая организация'],
            value: '',
            name: `fac_${i}`,
            id: '',
            validators: []
        }

        year = {
            label: ['Год окончания'],
            value: '',
            name: `inst_finish_year_${i}`,
            id: '',
            validators: []
        }

        d.appendChild(row(col(input(facult)), col(input(year))))
        parant.appendChild(d);
        parant.appendChild(last);
    }
    p.appendChild(a);
    return p;
}


function btn_lang(name) {
    let p = create('p');
    p.classList.add('btn');
    let a = create('a');
    a.innerText = '+  Добавить язык';
    a.onclick = (e) => {
        e.preventDefault();
        let parant = byId(name)
        let last = parant.removeChild(parant.lastChild);
        let i = parant.children.length;
        let d = create('div');
        select_lang = {
            label: ['Выберите язык'],
            name: `edu_lvl_${i}`,
            id: '',
            options: [" 🇷🇺 Русcкий", " 🇺🇸 Англисcкий", ]
        }
        select_lang_lvl = {
            label: ['Уровень владения'],
            name: `edu_lvl_${i}`,
            id: '',
            options: ["A1 - Начальный", "А2 - Продвинутый"]
        }

        d.appendChild(row(col(select(select_lang)), col(select(select_lang_lvl))))
        parant.appendChild(d);
        parant.appendChild(last);
    }
    p.appendChild(a);
    return p;
}


function btn_prof(name) {
    let p = create('p');
    p.classList.add('btn');
    let a = create('a');
    a.innerText = '+  Добавить профессиональный навык';
    a.onclick = (e) => {
        e.preventDefault();
        let parant = byId(name)
        let last = parant.removeChild(parant.lastChild);
        let i = parant.children.length;
        let d = create('div');
        facult = {
            label: ['Описание навыка'],
            value: '',
            name: `nav_${i}`,
            id: '',
            validators: []
        }
        select_prof_lvl = {
            label: ['Уровень владения'],
            name: `nav_lvl_${i}`,
            id: '',
            options: ["Начальный", "Продвинутый"]
        }


        d.appendChild(row(col(input(facult)), col(select(select_prof_lvl))))
        parant.appendChild(d);
        parant.appendChild(last);
    }
    p.appendChild(a);
    return p;
}

function job_money(opt) {
    let item = create('div');
    item.appendChild(labl(`${opt.name}_lab`, opt.label[0]));
    let d = create('div');
    d.classList.add('flex');

    moneys = {
        label: [''],
        name: opt.name,
        id: '',
        name_val: 'money_val',
        options: ["₽ ", "$ "],
        validators: [is_str]
    }

    console.log(opt.value)
    d.appendChild(inpt(opt.name, opt.name, opt.value_sum, opt.validators))

    d.appendChild(sel(opt.name_val, opt.name_val, opt.options));
    // d.appendChild(select(opt))



    item.appendChild(d);
    item.appendChild(err('need_money'));

    return item;
}


function chec(name, val, ind, cls) {
    let d = create('div');
    d.classList.add('form-check', (cls) ? cls : 'my-check');
    d.innerHTML = `<input type="checkbox" class="form-check-input success" name="${name}${ind}" value="true"></input>`;
    d.appendChild(labl('', val, 'nostyle'));
    return d;
}


function check_boxes(opt) {
    if (opt.id === "") opt.id = opt.name;
    let div = create('div');
    div.classList.add('check');

    let index = div.childNodes.length;
    for (let ch of opt.checks) {
        div.appendChild(chec(opt.name, ch, index++));
        // check.appendChild(div);
    }

    div.appendChild(err(opt.id));
    return div;
}



var DAYS = 0;
var DD = [];

function daysBetween(st, fi) {
    return (Date.parse(fi) - Date.parse(st)) / (24 * 3600 * 1000);
}

function date(opt) {
    console.log(opt)
    let item = create('div');

    let lab = labl(opt.id, opt.label[0]);
    item.appendChild(lab);

    let input = create('input');
    input.classList.add('date')
    input.type = opt.type;
    input.name = opt.name;
    input.value = opt.value;

    console.log(input.value)
    input.min = opt.min;
    input.max = opt.max;


    input.onchange = () => {
        if (input.name.includes('start')) {
            [_, n] = input.name.split('_');
            if (n == 1) {
                let f = document.getElementsByName(`finish_${n}`)[0]
                f.min = input.value;
                console.log(f.min)
            }
            if (n > 1) {
                console.log('more')
                let current_finish = document.getElementsByName(`finish_${n}`)[0]
                let previos_start = document.getElementsByName(`start_${n-1}`)[0]
                let previos_finish = document.getElementsByName(`finish_${n-1}`)[0]
                console.log(current_finish, previos_start, previos_finish)
                input.min = previos_finish.value;
                current_finish.min = input.value;
            }
        } else
            console.log('bee')
        if (input.name.includes('finish')) {
            [_, n] = input.name.split('_');
            console.log(_, n)
            let f = document.getElementsByName(`finish_${n}`)[0]
            let s = document.getElementsByName(`start_${n}`)[0]
            let db = (Date.parse(f.value) - Date.parse(s.value)) / (24 * 3600 * 1000)
            console.log(db)
            DD[n - 1] = db;
            let sum = DD.reduce((a, v) => a + v);
            console.log("дни", sum)
            byId('stazh').hidden = false;
            byId('stazh').innerText = `Общий стаж работы ${sum} дней`;

            if (n == 1) {
                f.min = input.value;
                console.log(f.min)
            }
            if (n > 1) {
                let current_finish = document.getElementsByName(`finish_${n}`)[0]
                let previos_start = document.getElementsByName(`start_${n-1}`)[0]
                let previos_finish = document.getElementsByName(`finish_${n-1}`)[0]
                input.min = previos_finish.value;
                current_finish.min = input.value;
            }
        } else
            console.log('bee')
    }
    input.onclick = () => {
        if (input.name.includes('start')) {
            [_, n] = input.name.split('_');
            console.log(_, n)
            if (n == 1) {
                let f = document.getElementsByName(`finish_${n}`)[0]

                f.min = input.value;
                console.log(f.min)
            }
            if (n > 1) {
                console.log('more')
                let current_finish = document.getElementsByName(`finish_${n}`)[0]
                let previos_start = document.getElementsByName(`start_${n-1}`)[0]
                let previos_finish = document.getElementsByName(`finish_${n-1}`)[0]
                console.log(current_finish, previos_start, previos_finish)
                input.min = previos_finish.value;
                current_finish.min = input.value;
            }
        } else

            console.log('bee')
    }
    item.appendChild(input);
    return item;
}

function btn(opt) {
    let parant = byId('dop');
    let p = create('p');
    p.classList.add('last-btn');
    let a = create('a');
    a.onclick = (e) => {
        e.preventDefault();
        let div = create('div');
        div.appendChild(line(opt.label.toUpperCase()));
        let counter = 1;

        if (opt.name == 'dop_1') {
            character = {
                label: ['Качество'],
                name: `haracter_${counter}`,
                id: '',
                validators: [is_lenLess4, is_space, is_numb]
            }
            div.appendChild(row(col(input(character))));

            let p = create('p');
            p.classList.add('btn');
            let a = create('a');
            a.innerText = `+  Добавить ${opt.label}`;

            a.onclick = (e) => {
                e.preventDefault();
                counter++;
                character.name = `haracter_${counter}`;
                div.insertBefore(row(col(input(character))), div.lastChild);
            }
            p.appendChild(a);
            div.appendChild(row(col(p)));



            parant.insertBefore(div, parant.firstChild);
            console.log('eee')
        }

        if (opt.name == 'dop_3') {
            ins = {
                label: ['Информация'],
                name: `info_${counter}`,
                id: '',
                validators: [is_lenLess4, is_space, is_numb]
            }
            div.appendChild(row(col(area(ins))));

            let p = create('p');
            p.classList.add('btn');
            let a = create('a');
            a.innerText = `+  Добавить ${opt.label}`;

            a.onclick = (e) => {
                e.preventDefault();
                counter++;
                ins.name = `haracter_${counter}`;
                div.insertBefore(row(col(area(ins))), div.lastChild);
            }
            p.appendChild(a);
            div.appendChild(row(col(p)));


            parant.insertBefore(div, parant.firstChild);
            console.log('eee')
        }

        if (opt.name == 'dop_4') {
            ins = {
                label: ['Хобби'],
                name: `hobby_${counter}`,
                id: '',
                validators: [is_lenLess4, is_space, is_numb]
            }
            div.appendChild(row(col(area(ins))));

            let p = create('p');
            p.classList.add('btn');
            let a = create('a');
            a.innerText = `+  Добавить ${opt.label}`;

            a.onclick = (e) => {
                e.preventDefault();
                counter++;
                ins.name = `haracter_${counter}`;
                div.insertBefore(row(col(area(ins))), div.lastChild);
            }
            p.appendChild(a);
            div.appendChild(row(col(p)));


            parant.insertBefore(div, parant.firstChild);
            console.log('eee')
        }

        if (opt.name == 'dop_5') {
            ins = {
                label: ['Название или ссылка'],
                name: `name_or_link_${counter}`,
                id: '',
                validators: [is_lenLess4, is_space, is_numb]
            }

            d = {
                label: ["Дата публикации"],
                name: 'date_pub',
                type: 'date',
            }
            div.appendChild(row(col(input(ins)), col(date(d))));

            let p = create('p');
            p.classList.add('btn');
            let a = create('a');
            a.innerText = `+  Добавить ${opt.label}`;

            a.onclick = (e) => {
                e.preventDefault();
                counter++;
                div.insertBefore(row(col(input(ins)), col(date(d))), div.lastChild);
            }
            p.appendChild(a);
            div.appendChild(row(col(p)));



            parant.insertBefore(div, parant.firstChild);
            console.log('eee')
        }

        if (opt.name == 'dop_2') {
            ins1 = {
                label: ['ФИО рекомендующего'],
                name: `fio_${counter}`,
                id: '',
                validators: [is_lenLess4]
            }
            ins2 = {
                label: ['Компания, должность'],
                name: `company_${counter}`,
                id: '',
                validators: [is_lenLess4]
            }
            div.appendChild(row(col(input(ins1)), col(input(ins2))));
            ins3 = {
                label: ['Электронная почта'],
                name: `fio_${counter}`,
                id: '',
                validators: [is_lenLess4]
            }
            ins4 = {
                label: ['Телефон'],
                name: `company_${counter}`,
                id: '',
                validators: [is_lenLess4]
            }
            div.appendChild(row(col(input(ins3)), col(input(ins4))));
            let p = create('p');
            p.classList.add('btn');
            let a = create('a');
            a.innerText = `+  Добавить ${opt.label}`;

            a.onclick = (e) => {
                e.preventDefault();
                counter++;
                ins1.name = `fio_${counter}`;
                ins2.name = `company_${counter}`;
                ins3.name = `fio_${counter}`;
                ins4.name = `company_${counter}`;
                div.insertBefore(row(col(input(ins1)), col(input(ins2))), div.lastChild);
                div.insertBefore(row(col(input(ins3)), col(input(ins4))), div.lastChild);
            }
            p.appendChild(a);
            div.appendChild(row(col(p)));



            parant.insertBefore(div, parant.firstChild);
            console.log('eee')
        }


        console.log('ddd');
    }
    a.innerText = opt.label;
    p.appendChild(a);
    return p;
}