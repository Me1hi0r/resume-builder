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

const PEREEZD = ['возможен', 'невозможен']
const EMPLOYMENT = ['...', 'полная', 'частичная']
const JOB_TIME = ['...', 'полный', 'сменный', 'частичный']
const TEST = `{
  "language": "en",
  "title": "Название резюме",
  "name": "Александр",
  "surname": "Иванов",
  "last_name": "Петрович",
  "dateofbirth": "1982-05-22",
  "email": "test@gmail.com",
  "phone": {
    "0": "+799912345667",
    "1": "89111239856"
  },
  "regionlist": "ru-sam",
  "city": "Самара",
  "desired_position": "Онколог",
  "metro_station": "Ленинский проспект",
  "desired_salary": {
    "sum": "170000",
    "currency": "dol"
  },
  "want_to_be": "медицинская сестра",
  "doc_wanted_position": "врач-акушер-гинеколог",
  "nurse_wanted_position": "медицинская сестра патронажная",
  "nurse_lisence":"34445335234",
  "nurse_lisence_date":"2012-05-22",
  "manager_wanted_position": "супер босс",


  "employment": "полная",
  "job_time": "полный",
  "citizenship": "Россия",
  "movement": "возможен",
  "driver_license": "A,B",
  "family_status": "Холост",
  "is_ready_to_move": true,
  "is_ready_to_business_trip": false,



  "social": {
    "facebook": "url.facebook.org",
    "telegram": "telegramnickname",
    "whatsapp": "89106554345"
  },
  "job_expierence": [
    {
      "start_date": "2012-02-09",
      "is_working_now": false,
      "end_date": "09.2015",
      "company_name": "ООО Больжедор",
      "position": "Врач-онколог",
      "duties": "Ведение пациентов с онкологическими заболеваниями"
    },
    {
      "start_date": "10.2015",
      "is_working_now": true,
      "company_name": "ООО Больжедор",
      "position": "Врач-онколог",
      "duties": "Ведение пациентов с онкологическими заболеваниями"
    }
  ],
  "main_education": [
    {
      "institution_name": "РАУ им. Бабаджаняна",
      "education_level": "Бакалавр",
      "end_year": "2010"
    }
  ],
  "addition_education": [
    {
      "course_name": "Курсы по учебе",
      "company_name": "ООО ПЭТ Технолоджи",
      "end_year": "2012"
    },
    {
      "course_name": "Курсы по учебе",
      "company_name": "ООО ПЭТ Технолоджи",
      "end_year": "2014"
    }
  ],
  "language_skills": [
    {
      "language": "Английский",
      "level": "А1-начальный"
    },
    {
      "language": "Немецкий",
      "level": "B2-средне-продвинутый"
    }
  ],
  "professional_skills": [
    {
      "skill": "Управление персоналом",
      "skill_level": "Начальный"
    },
    {
      "skill": "Вождение катера",
      "skill_level": "Профессиональный"
    }
  ],
  "hobbies": "Люблю рисовать и кататься на самокате в пасмурную погоду",
  "publications": [
    {
      "title": "Название публикации",
      "date": "04.2010"
    },
    {
      "title": "Название другой публикации",
      "date": "06.2016"
    }
  ],
  "personal_skills": {
    "0": "Лидерство",
    "1": "Стрессоустойчивость",
    "2": "Коммуникабельность"
  },
  "recomendations": [
    {
      "recomendator_name": "Иванов Петр Сергеевич",
      "company_name": "ООО Компания и Ко",
      "email": "email@companyand.co",
      "phone": "88005553535"
    },
    {
      "recomendator_name": "Иванов Алексей Сергеевич",
      "company_name": "ООО Компания и Жо",
      "email": "email@companyand.jo",
      "phone": "88005532315"
    }
  ],
  "additional info": "Это блок с дополнительной информацией, он может быть на несколько строк и абзацев. форматирование будет сохранено"
}
`