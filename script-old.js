function byId(name) {
    return document.getElementById(name);
}

const ROLE = [
    'хочу быть...',
    'врач',
    'медицинская сестра',
    'руководитель'
];

const SKILL = [
    'уровень...',
    'элементарный',
    'средний',
    'средне-продвинутый',
    'продвинутый',
    'в совершенстве'
]

const TYPE = [
    'тип работы...',
    'полная занятость',
    'частичная занятость',
    'проектная работа',
    'стажировка'
]

const MOVE = [
    '...',
    'готов к переезду',
    'не готов к переезду'
]

const TRIP = [
    '...',
    'готов к командировкам',
    'не готов к командировкам'
]

const DOC_POS = [
    'врач...',
    'врач-стажер',
    'врач по авиационной и космической медицине',
    'врач-акушер-гинеколог',
    'врач-акушер-гинеколог цехового врачебного участка',
    'врач-аллерголог-иммунолог',
    'врач-анестезиолог-реаниматолог',
    'врач-бактериолог',
    'врач-вирусолог',
    'врач-гастроэнтеролог',
    'врач-гематолог',
    'врач-генетик',
    'врач-гериатр',
    'врач-дезинфектолог',
    'врач-дерматовенеролог',
    'врач-детский кардиолог',
    'врач-детский онколог',
    'врач-детский уролог-андролог',
    'врач-детский хирург',
    'врач-детский эндокринолог',
    'врач-диабетолог',
    'врач-диетолог',
    'врач здравпункта',
    'врач-инфекционист',
    'врач-кардиолог',
    'врач клинической лабораторной диагностики',
    'врач-клинический миколог',
    'врач-клинический фармаколог',
    'врач-колопроктолог',
    'врач-косметолог',
    'врач-лаборант;',
    'врач-лабораторный генетик',
    'врач-лабораторный миколог',
    'врач мануальной терапии',
    'врач-методист',
    'врач-невролог',
    'врач-нейрохирург',
    'врач-неонатолог',
    'врач-нефролог',
    'врач общей практики (семейный врач)',
    'врач-онколог',
    'врач-ортодонт',
    'врач-оториноларинголог',
    'врач-офтальмолог',
    'врач-офтальмолог-протезист',
    'врач-паразитолог',
    'врач-патологоанатом',
    'врач-педиатр',
    'врач-педиатр городской (районный)',
    'врач-педиатр участковый',
    'врач-пластический хирург',
    'врач по водолазной медицине',
    'врач по восстановительной медицине',
    'врач по гигиене детей и подростков',
    'врач по гигиене питания',
    'врач по гигиене труда',
    'врач по гигиеническому воспитанию',
    'врач по коммунальной гигиене',
    'врач по лечебной физкультуре',
    'врач по медико-социальной экспертизе',
    'врач по общей гигиене',
    'врач по радиационной гигиене',
    'врач по рентгенэндоваскулярным диагностике и лечению',
    'врач по санитарно-гигиеническим лабораторным исследованиям',
    'врач по спортивной медицине',
    'врач приемного отделения',
    'врач-профпатолог',
    'врач-психиатр',
    'врач-психиатр участковый',
    'врач-психиатр детский',
    'врач-психиатр детский участковый',
    'врач-психиатр подростковый',
    'врач-психиатр подростковый участковый',
    'врач-психиатр-нарколог',
    'врач-психиатр-нарколог участковый',
    'врач-психотерапевт',
    'врач-пульмонолог',
    'врач-радиолог',
    'врач-радиотерапевт',
    'врач-ревматолог',
    'врач-рентгенолог',
    'врач-рефлексотерапевт',
    'врач-сексолог',
    'врач-сердечно-сосудистый хирург',
    'врач скорой медицинской помощи',
    'врач-статистик',
    'врач-стоматолог',
    'врач-стоматолог детский',
    'врач-стоматолог-ортопед',
    'врач-стоматолог-терапевт',
    'врач-стоматолог-хирург',
    'врач-судебно-медицинский эксперт',
    'врач-судебно-психиатрический эксперт',
    'врач-сурдолог-оториноларинголог',
    'врач-сурдолог-протезист',
    'врач-терапевт',
    'врач-терапевт подростковый',
    'врач-терапевт участковый',
    'врач-терапевт участковый цехового врачебного участка',
    'врач-токсиколог',
    'врач-торакальный хирург',
    'врач-травматолог-ортопед',
    'врач-трансфузиолог',
    'врач ультразвуковой диагностики',
    'врач-уролог',
    'врач-физиотерапевт',
    'врач-фтизиатр',
    'врач-фтизиатр участковый',
    'врач функциональной диагностики',
    'врач-хирург',
    'врач-челюстно-лицевой хирург',
    'врач-эндокринолог',
    'врач-эндоскопист',
    'врач-эпидемиолог',
    'старший врач станции (отделения) скорой медицинской помощи',
    'старший врач станции (отделения) скорой медицинской помощи горноспасательных частей',
    'судовой врач',
];

const NURSE_POSE = [
    'медицинская сестра...',
    'медицинская сестра-анестезист',
    'медицинская сестра врача общей практики (семейного врача)',
    'медицинская сестра диетическая',
    'медицинская сестра медико-социальной помощи',
    'медицинская сестра палатная (постовая)',
    'медицинская сестра патронажная',
    'медицинская сестра перевязочной',
    'медицинская сестра по косметологии',
    'медицинская сестра по массажу',
    'медицинская сестра по приему вызовов скорой медицинской помощи и передаче их выездным бригадам скорой медицинской помощи',
    'медицинская сестра по физиотерапии',
    'медицинская сестра по реабилитации',
    'медицинская сестра приемного отделения',
    'медицинская сестра процедурной',
    'медицинская сестра стерилизационной',
    'медицинская сестра участковая',
];

const NURSE_COMP = {
    'Терапевтический профиль': [
        'помощь врачу на приеме',
        'заполнение медицинской документации (в том числе выписка рецептов)',
        'сопровождение пациентов на исследования, помощь в подготовке к исследованиям и сдаче анализов',
        'проведение мероприятий по санитарно-эпидемиологическому режиму (СЭР)'
    ],
    'Хирургический профиль': [
        'помощь врачу при проведении манипуляций и амбулаторных операций',
        'заполнение медицинской документации (журналы по учету препаратов, расходных материалов, учет часов обеззараживающих ламп и т.д.)',
        'сопровождение пациентов на исследования, помощь в подготовке к исследованиям и сдаче анализов',
        'проведение мероприятий по санитарно-эпидемиологическому режиму (СЭР)'
    ],
    'Педиатрический профиль': [
        'помощь врачу-педиатру на приеме',
        'информационная помощь в подготовке к сдаче анализов и исследованиям',
        'сбор биологического материала на анализы',
        'выполнение перечня манипуляций, осуществляемых самостоятельно в рамках своей компетенции (достаточно широк)',
        'заполнение медицинской документации (отчетные журналы и т.д.)',
        'проведение мероприятий по санитарно-эпидемиологическому режиму (СЭР)'
    ],
    'Узкоспециализированный профиль': [
        'подготовка рабочего места к приему пациентов',
        'выполнение перечня манипуляций, осуществляемых самостоятельно, в рамках своей специализации (например, м/с по ФД – снятие ЭКГ, постановка Холтэр/СМАД, проведение велэлгометрии и т.д.) (медсестра по массажу – выполнение классического, лечебного, спортивного массажа и т.д.)',
        'заполнение медицинской документации ( в т.ч. отметка о проведенных процедурах в истории болезни и фиксация статуса пациента после проведенной процедуры)',
        'проведение мероприятий по санитарно-эпидемиологическому режиму (СЭР)'
    ],
    'Процедурная медицинская сестра': [
        'подготовка рабочего места к приему пациентов',
        'проведение в/м, п/к, в/к инъекций',
        'проведение в/в инъекций',
        'забор крови (с использованием вакуумных систем)',
        'забор мазков (биоматериала на исследования)',
        'заполнение медицинской документации (отчетные журналы и т.д.)',
        'проведение мероприятий по санитарно-эпидемиологическому режиму (СЭР)'
    ]
};

byId('selectRole').addEventListener('change', (e) => {
    e.preventDefault();
    if (byId('selectRole').selectedIndex == '1') {
        byId('selectDocPos').hidden = false;
        byId('nurseGroup').hidden = true;
        byId('leaderBlock').hidden = true;
    }
    if (byId('selectRole').selectedIndex == '2') {
        byId('selectDocPos').hidden = true;
        byId('nurseGroup').hidden = false;
        byId('leaderBlock').hidden = true;
    }
    if (byId('selectRole').selectedIndex == '3') {
        byId('selectDocPos').hidden = true;
        byId('nurseGroup').hidden = true;
        byId('leaderBlock').hidden = false;
    }
});


function addOptions(name, opts) {
    let select = document.getElementById(name);
    let index = select.options.length;
    for (let opt of opts) {
        select.options[index] = new Option(opt, index++, false);
    }
};



function addCheck(name, checks) {
    let check = document.getElementById(name);
    let index = check.childNodes.length;
    for (let ch of checks) {
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="form-check">
            <input type="checkbox" class="form-check-input" name="${name}${index++}" value="true">
            <label class="form-check-label">${ch}</label>
        </div>`;
        check.appendChild(div);
    }
};



byId('addJob').addEventListener("click", (e) => {
    e.preventDefault();
    addJobExp();
});

function addJobExp() {
    let exp = byId('exp');
    let index = exp.childNodes.length;
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="input-group mb-3">
        <div class="col-2">
            <input class="form-control" id="date" name="date" placeholder="MM/DD/YYYY" type="text"/>
            <small class="text-muted sm-exp">начало работы</small>
        </div>
        <div class="col-2">
            <input class="form-control" id="date" name="date" placeholder="MM/DD/YYYY" type="text"/>
            <small class="text-muted sm-exp">окончание работы</small>
        </div>
        <div class="col-2">
            <input type="text" class="form-control" id="firstName" required>
            <small class="text-muted sm-exp">Название организации</small>
        </div>
        <div class="col-6">
            <input type="text" class="form-control" id="firstName" required>
            <small class="text-muted sm-exp">Занимаемая должность</small>
        </div>
    </div>`
    if (exp.childNodes.length > 3) {
        document.getElementsByClassName('sm-exp').remove();
    }
    exp.appendChild(div);
    exp.childNodes[index - 2].before(exp.childNodes[index]);
}

byId('addEdu').addEventListener("click", (e) => {
    e.preventDefault();
    addEdu('edu');
});

function addEdu(name) {
    let edu = byId(name);
    let index = edu.childNodes.length;
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="input-group mb-3">
        <div class="col-2">
            <input class="form-control" id="date" name="date" placeholder="MM/DD/YYYY" type="text"/>
            <small class="text-muted sm-${name}">год окончания</small>
        </div>
        <div class="col-2">
            <input type="text" class="form-control" id="firstName" required>
            <small class="text-muted sm-${name}">вуз</small>
        </div>
        <div class="col-2">
            <input type="text" class="form-control" id="firstName" required>
            <small class="text-muted sm-${name}">факультет</small>
        </div>
        <div class="col-6">
            <input type="text" class="form-control" id="firstName" required>
            <small class="text-muted sm-${name}">специальность</small>
        </div>
    </div>`
    if (edu.childNodes.length > 3) {
        document.getElementsByClassName(`sm-${name}`).remove();
    }
    edu.appendChild(div);
    edu.childNodes[index - 2].before(edu.childNodes[index]);
}



byId('addEduPlus').addEventListener("click", (e) => {
    e.preventDefault();
    addEduPlus('eduPlus');
});

function addEduPlus(name) {
    let edu = byId(name);
    let index = edu.childNodes.length;
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="input-group mb-3">
        <div class="col-2">
            <input class="form-control" id="date" name="date" placeholder="MM/DD/YYYY" type="text"/>
            <small class="text-muted sm-${name}">дата окончания</small>
        </div>
        <div class="col-2">
            <input type="text" class="form-control" id="firstName" required>
            <small class="text-muted sm-${name}">Наименование УЗ</small>
        </div>
        <div class="col-8">
            <input type="text" class="form-control" id="firstName" required>
            <small class="text-muted sm-${name}">Специальность/тема/подтверждающий документ</small>
        </div>
    </div>`
    if (edu.childNodes.length > 3) {
        document.getElementsByClassName(`sm-${name}`).remove();
    }
    edu.appendChild(div);
    edu.childNodes[index - 2].before(edu.childNodes[index]);
}


byId('addLang').addEventListener("click", (e) => {
    e.preventDefault();
    addLang('eduLang');
});

function addLang(name) {
    let edu = byId(name);
    let index = edu.childNodes.length;
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="input-group mb-3">
        <div class="col-2">
            <input type="text" class="form-control" id="firstName" required>
            <small class="text-muted sm-${name}">Иностранный язык</small>
        </div>

        <div class="col-10">
            <div class="input-group">
                <select class="custom-select" id="selectLang${index}">
                </select>
            </div>
            <small class="text-muted sm-${name}">Уровень владения языком</small>
        </div>
    </div>`
    if (edu.childNodes.length > 3) {
        document.getElementsByClassName(`sm-${name}`).remove();
    };
    edu.appendChild(div);
    addOptions(`selectLang${index}`, SKILL);
    edu.childNodes[index - 2].before(edu.childNodes[index]);
}

byId('btnSave').addEventListener("click", (e) => {
    // e.preventDefault();
    // console.log("ggg")
});

byId('firstName').addEventListener('mouseout', (e) => {
    e.preventDefault();
    byId('firstNameSm').innerText = "";
    if (val(e.target).length < 3) {
        byId('firstNameSm').innerText = byId('firstNameSm').innerText + "Имя слишком короткое.";
    }
    if (/ /.test(val(e.target))) {
        byId('firstNameSm').innerText = byId('firstNameSm').innerText + "В имени не должно быть пробелов.";
    }
    if (/[0-9]/.test(val(e.target))) {
        byId('firstNameSm').innerText = byId('firstNameSm').innerText + "В имени не должно быть цифр.";
    }

    // fetch('auth', {
    //     method: 'post',
    //     headers: { 'Content-Type': 'application/json'},
    //     referrerPolicy: 'no-referrer',
    //     body: JSON.stringify({
    //         firstName: byId('firstName').value,
    //     })
    // }).then((response) => {
    //     return response.json();
    // }).then((data) => {
    //     console.log(data);
    //     if (data['answ'] == 'exist') {
    //         byId('firstNameSm').innerText = 'User exist';
    //     }
    // });
});

function val(name) {
    return name.value;
}


(function patch() {
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
        for (var i = this.length - 1; i >= 0; i--) {
            if (this[i] && this[i].parentElement) {
                this[i].parentElement.removeChild(this[i]);
            }
        }
    }
})();


(function createFormContent() {
    addOptions('selectRole', ROLE);
    addOptions('selectDocPos', DOC_POS);
    addOptions('selectNursePos', NURSE_POSE);
    addCheck('nurseCheck', NURSE_COMP['Терапевтический профиль']);
    // addJobExp()
    addOptions('selectType', TYPE);
    addOptions('selectTrip', TRIP);
    addOptions('selectMove', MOVE);
    // addEdu('edu');
    // addEduPlus('eduPlus');
    // addLang('eduLang');
})();