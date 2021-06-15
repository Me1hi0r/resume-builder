var data;
var OUT;
var LN;
document.addEventListener("DOMContentLoaded", (e) => {
    data = JSON.parse(TEST);
    console.log(data)
    LN = data['language']

    resume_name = {
        name: 'title',
        value: data['title'],
        id: '',
        label: ['Название резюме'],
        validators: [
            [() => {}, "ddffff"], is_space, is_numb
        ]
    }

    let x = [(s) => {
        s < 9
    }]
    x[0](3)

    lang_select = {
        label: ['Языкdd резюме'],
        name: 'language',
        value: data['language'],
        id: '',
        // options: ["Руский", "Англиский"]
        options: {
            ru: "Русский",
            en: "Англиский"
        }
    }

    user_fname = {
        label: ['Имя'],
        name: 'nyame',
        value: data['name'],
        id: '',
        validators: [is_lenLess4, is_space, is_numb]
    }

    user_lname = {
        label: ['Фамилия', 'Name'],
        name: 'surname',
        value: data['surname'],
        id: '',
        validators: [is_lenLess4, is_space, is_numb]
    }

    user_fathername = {
        label: ['Отчество'],
        name: 'last_name',
        value: data['last_name'],
        id: '',
        validators: [is_lenLess4, is_space, is_numb]
    }

    d = {
        label: ["Дата рождения"],
        // value: data['dateofbirth'].split(".").reverse().join("-"),
        value: data['dateofbirth'],
        name: 'dateofbirth',
        type: 'date',
        id: '',
        min: '',
        max: '',
    }


    user_vacance = {
        label: ['Должность'],
        name: 'desired_position',
        value: data['desired_position'],
        id: '',
        validators: [is_lenLess4, is_space, is_numb]
    }

    metro = {
        label: ['Ближайшая станция метро'],
        name: 'metro_station',
        value: data['metro_station'],
        id: '',
        validators: [is_lenLess4, is_space, is_numb]
    }

    lang_select = {
        label: ['Язык резюме'],
        name: 'language',
        value: data['language'],
        id: '',
        // options: [" 🇷🇺 Русcкий", " 🇺🇸 Англисcкий", ]
        options: {
            ru: " 🇷🇺 Русский",
            en: " 🇺🇸 Англиский"
        }
    }

    city = {
        label: ['Город проживания'],
        name: 'city',
        value: data['city'],
        id: '',
        validators: [is_lenLess4, is_space, is_numb]
    }
    money = {
        label: ['Желаемая зарплата'],
        id: '',
        name: 'desired_salary.sum',
        name_val: 'desired_salary.currency',
        value: data['desired_salary']['currency'],
        value_sum: data['desired_salary']['sum'],
        options: ["₽", "$"],
        validators: [is_str]
    }

    role = {
        label: ['Хочу быть'],
        name: 'resume_name',
        value: data[''],
        id: '',
        validators: [is_lenLess4, is_space, is_numb]
    }

    role_select = {
        label: ['Хочу быть'],
        name: 'select_role',
        value: data[''],
        id: '',
        options: ROLE
    }

    pereezd_select = {
        label: ['Переезд'],
        name: 'select_pereezd',
        value: data[''],
        id: '',
        options: ['Возможен', 'Невозможен']
    }

    zanatost_select = {
        label: ['Занятость'],
        name: 'select_zanatost',
        value: data[''],
        id: '',
        options: ['...', 'Полная', 'Частичная']
    }

    graphic_select = {
        label: ['График работы'],
        name: 'select_graphic',
        value: data[''],
        id: '',
        options: ['...', 'Полный', 'Сменный', 'Удаленная работа']
    }

    country_select = {
        label: ['Гражданство'],
        name: 'select_country',
        value: data[''],
        id: '',
        options: ['...', 'РФ']
    }

    select_doc = {
        label: ['Желаемая должность'],
        name: 'select_doc',
        value: data[''],

        name: 'desired_salary',
        value: data['desired_salary'],
        id: '',
        options: DOC_POS,
    }
    select_nurse = {
        label: ['Желаемая должность'],
        name: 'select_nurse',
        value: data[''],
        id: '',
        options: NURSE_POSE,
    }

    prava = {
        label: ['Права'],
        name: 'driver_license',
        value: data['driver_license'],
        id: '',
        validators: [is_lenLess4, is_space, is_numb]
    }

    famely = {
        label: ['Семейное положение'],
        name: 'family_status',
        value: data['family_status'],
        id: '',
        validators: [is_lenLess4, is_space, is_numb]
    }

    check_boxes_one = {
        checks: ['Готовность к переезду', 'Готовность к командировкам'],
        name: 'check_boxes_one',
        value: data[''],
        id: '',
    }

    email = {
        label: ['Электронная почта'],
        name: 'email',
        value: data['email'],
        id: '',
        validators: [is_lenLess4, is_space, is_numb]
    }

    license = {
        label: ['Специализация по удостовирению сестринское дело'],
        name: 'email',
        value: data[''],
        id: '',
        validators: [is_lenLess4, is_space, is_numb]
    }
    ruccc = {
        label: ['Наименование должности'],
        name: 'email',
        value: data[''],
        id: '',
        validators: [is_lenLess4, is_space, is_numb]
    }
    telephone = {
        label: ['Телефон'],
        value: ' 🇷🇺 +7',
        value: data[''],
        name: 'telephone',
        id: '',
        validators: [is_str]
    }
    danures = {
        label: ["Дата выдачи удостоверения"],
        value: "2013-07-23",
        value: data[''],
        name: 'birth',
        type: 'date',
        id: '',
        min: '',
        max: '',
    }
    let ucer_vac = col(input(user_vacance));



    byId('main').appendChild(row(col(input(resume_name)), col(select(lang_select))));
    byId('main').appendChild(line('ОСНОВНАЯ ИНФОРМАЦИЯ'));

    byId('main').appendChild(row(
        col(photo('./img/add.jpg')),
        col(row(col(input(user_fname))),
            row(col(input(user_lname))))));
    byId('main').appendChild(row(col(input(user_vacance)), col(input(user_fathername))))

    byId('main').appendChild(row(col(date(d)), col(input(city))))
    byId('main').appendChild(row(col(input(metro)), col(job_money(money))))
    byId('main').appendChild(row(col(select(role_select)), col(
        row(col(select(zanatost_select)), col(select(graphic_select))))))

    byId('main').appendChild(row(col(select(graphic_select)), col(select(pereezd_select))))

    byId('main').appendChild(row(
        col(row(col(input(prava))),
            row(col(input(famely)))),
        col(check_boxes(check_boxes_one))
    ));

    byId('doctor').appendChild(row(col(line('ЖЕЛАЕМАЯ ДОЛЖНОСТЬ'))));
    byId('doctor').appendChild(row(col(select(select_doc))));

    byId('nurse').appendChild(row(col(line('ЖЕЛАЕМАЯ ДОЛЖНОСТЬ'))));
    byId('nurse').appendChild(row(col(select(select_nurse))));
    byId('nurse').appendChild(row(col(input(license)), col(date(danures))));

    byId('ruc').appendChild(row(col(line('ЖЕЛАЕМАЯ ДОЛЖНОСТЬ'))));
    byId('ruc').appendChild(row(col(input(ruccc))));

    byId('kont').appendChild(row(col(line('КОНТАКТЫ'))));
    byId('kont').appendChild(row(col(input(email)), col(input(telephone))));
    byId('kont').appendChild(row(col(btn_social('kont'))));

    byId('exp').appendChild(row(col(line('ОПЫТ РАБОТЫ'))));
    byId('exp').appendChild(row(col(hidden_msg('Стаж работы:', 'stazh'))));
    byId('exp').appendChild(row(col(btn_exp('exp'))));

    byId('edu').appendChild(row(col(line('ОСНОВНОЕ ОБРАЗОВАНИЕ'))));
    byId('edu').appendChild(row(col(btn_edu('edu'))))

    byId('dopedu').appendChild(row(col(line('ДОПОЛНИТЕЛЬНОЕ ОБРАЗОВАНИЕ'))));
    byId('dopedu').appendChild(row(col(btn_dopedu('dopedu'))))

    byId('lang').appendChild(row(col(line('ВЛАДЕНИЕ ЯЗЫКАМИ'))));
    byId('lang').appendChild(row(col(btn_lang('lang'))))

    byId('prof').appendChild(row(col(line('ПРОФЕССИОНАЛЬНЫЕ НАВЫКИ'))));
    byId('prof').appendChild(row(col(btn_prof('prof'))))

    byId('dop').appendChild(line('ДОПОЛНИТЕЛЬНЫЕ ДОСТИЖЕНИЯ'));
    dop_1 = {
        label: 'Личные качества',
        name: 'dop_1'
    };
    dop_2 = {
        label: 'Рекомендации',
        name: 'dop_2'
    };
    dop_3 = {
        label: 'Дополнительная информация',
        name: 'dop_3'
    };
    dop_4 = {
        label: 'Хобби',
        name: 'dop_4'
    };
    dop_5 = {
        label: 'Публикации',
        name: 'dop_5'
    };
    byId('dop').appendChild(row(col(row(btn(dop_1)), row(btn(dop_2)), row(btn(dop_3))), col(row(btn(dop_4)), row(btn(dop_5)))))

    // byId('previw').appendChild(row(col(line('ВАШЕ РЕЗЮМЕ'))));


    // let div = create('div');
    // div.classList.add('prev');

    // let b1 = create('div');
    // let l1 = labl('', 'Скачать')
    // b1.appendChild(l1)



    // byId('previw').appendChild(row(col(div)));
    // byId('previw').appendChild(row(col(b1), col(), col()));

    function handleFormSubmit(event) {
        event.preventDefault();

        const data = new FormData(event.target);
        const formJSON = Object.fromEntries(data.entries());

        console.log("//////")

        OUT = formJSON;

        // for multi-selects, we need special handling
        formJSON.snacks = data.getAll('snacks');
        OUT['sec'] = {
            0: OUT['name']
        }
        console.log("key values");
        for (let [k, v] of Object.entries(formJSON)) {
            if (k.includes(".")) {
                let [topic, param] = k.split(".");
                delete OUT[k];
                console.log(topic, param)
                console.log(OUT[topic])
                if (OUT[topic] == 0) {
                    console.log('UUUUUUUUUUUUUUUUUUUUU')
                    OUT[topic] = {
                        [param]: v
                    }
                } else {
                    OUT[topic][param] = v
                }
                // OUT[topic][param] = v;
            }
            console.log(k, v);
        }

        const results = document.querySelector('.results pre');
        results.innerText = JSON.stringify(formJSON, null, 2);
    }

    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', handleFormSubmit);
})