const form1 = {
    count: 0,
    tab_name: 'Основная информация о земельном участке',
    group_properties: [
        {
            id: '1',
            name: 'Общая сведение',
            position: 0,
            properties: [
                {
                    id: '1',
                    is_required: true,
                    label: 'Кадастровый номер',
                    name: 'name1',
                    placeholder: 'Виберите кадастровый номер',
                    property_options: [
                        {
                            name: 'Option 1',
                            value: 'option_1',
                        },
                        {
                            name: 'Option 9',
                            value: 'option_9',
                        },
                    ],
                    type: 'select',
                },
            ],
        },
        {
            id: '2',
            name: 'Адрес',
            position: 0,
            properties: [
                {
                    id: '1',
                    is_required: true,
                    label: 'Область',
                    name: 'name2',
                    placeholder: 'Виберите область',
                    property_options: [
                        {
                            name: 'Option 1',
                            value: 'option_1',
                        },
                        {
                            name: 'Option 9',
                            value: 'option_9',
                        },
                    ],
                    type: 'select',
                },
                {
                    id: '2',
                    is_required: true,
                    label: 'Регион',
                    name: 'name3',
                    placeholder: 'Виберите регион',
                    property_options: [
                        {
                            name: 'Option 1',
                            value: 'option_1',
                        },
                        {
                            name: 'Option 4',
                            value: 'option_4',
                        },
                        {
                            name: 'Option 5',
                            value: 'option_5',
                        },
                    ],
                    type: 'select',
                },
                {
                    id: '3',
                    is_required: true,
                    label: 'Махалля',
                    name: 'name4',
                    placeholder: 'Виберите махалля',
                    property_options: [],
                    type: 'text',
                },
                {
                    id: '4',
                    is_required: true,
                    label: 'Полный адрес',
                    name: 'name5',
                    placeholder: 'Виберите полный адрес',
                    property_options: [],
                    type: 'text',
                },
                {
                    id: '5',
                    is_required: true,
                    label: 'Локация',
                    name: 'name6',
                    placeholder: 'Выбрать на карте',
                    property_options: [],
                    type: 'map',
                },
                {
                    id: '6',
                    is_required: true,
                    label: 'Ориентир',
                    name: 'name7',
                    placeholder: 'Виберите ориентир',
                    property_options: [],
                    type: 'text',
                },
            ],
        },
        {
            id: '3',
            name: 'Площади земельных участков',
            position: 0,
            properties: [
                {
                    id: '7',
                    is_required: true,
                    label: 'Карта',
                    name: 'name8',
                    placeholder: 'Нарисуйте место на карте',
                    property_options: [],
                    type: 'map',
                },
                {
                    id: '8',
                    is_required: true,
                    label: 'Га/Сотик',
                    name: 'name9',
                    placeholder: 'Виберите Га/Сотик',
                    property_options: [],
                    type: 'text',
                },
            ],
        },
    ],
}

const form2 = {
    count: 0,
    tab_name: 'Вторичные данные земельного участка',
    group_properties: [
        {
            id: '1',
            name: '',
            position: 0,
            properties: [
                {
                    id: '1',
                    is_required: true,
                    label: 'Тип',
                    name: 'name10',
                    placeholder: 'ЕР-ФОНДИ',
                    property_options: [
                        {
                            name: 'Option 1',
                            value: 'option_1',
                        },
                        {
                            name: 'Option 4',
                            value: 'option_4',
                        },
                    ],
                    type: 'select',
                },
                {
                    id: '2',
                    is_required: true,
                    label: 'Тип обьекта',
                    name: 'name11',
                    placeholder: 'Виберите обьекта',
                    property_options: [
                        {
                            name: 'Option 1',
                            value: 'option_1',
                        },
                        {
                            name: 'Option 4',
                            value: 'option_4',
                        },
                    ],
                    type: 'select',
                },
                {
                    id: '2',
                    is_required: true,
                    label: 'Срок строительства',
                    name: 'name12',
                    placeholder: 'Введите срок строительства',
                    property_options: [],
                    type: 'text',
                },
                {
                    id: '3',
                    is_required: true,
                    label: 'Тип обьекта',
                    name: 'name13',
                    placeholder: 'Виберите обьекта',
                    property_options: [
                        {
                            name: 'Option 1',
                            value: 'option_1',
                        },
                        {
                            name: 'Option 3',
                            value: 'option_3',
                        },
                        {
                            name: 'Option 4',
                            value: 'option_4',
                        },
                    ],
                    type: 'select',
                },
                {
                    id: '4',
                    is_required: true,
                    label: 'Расстояние до дороги',
                    name: 'name14',
                    placeholder: 'Введите расстояние до дороги',
                    property_options: [],
                    type: 'text',
                },
            ],
        },
    ],
}

const form3 = {
    count: 0,
    tab_name: 'Информация об инвестировании',
    group_properties: [
        {
            id: '1',
            name: '',
            position: 0,
            centered: true,
            properties: [
                {
                    id: '1',
                    is_required: true,
                    label: 'Тип',
                    name: 'name15',
                    placeholder: 'ЕР-ФОНДИ',
                    property_options: [
                        {
                            name: 'Option 1',
                            value: 'option_1',
                        },
                    ],
                    type: 'select',
                },
                {
                    id: '2',
                    is_required: true,
                    label: 'Тип обьекта',
                    name: 'name16',
                    placeholder: 'Виберите обьекта',
                    property_options: [
                        {
                            name: 'Option 1',
                            value: 'option_1',
                        },
                        {
                            name: 'Option 2',
                            value: 'option_2',
                        },
                        {
                            name: 'Option 3',
                            value: 'option_3',
                        },
                    ],
                    type: 'select',
                },
                {
                    id: '2',
                    is_required: true,
                    label: 'Срок строительства',
                    name: 'name17',
                    placeholder: 'Введите срок строительства',
                    property_options: [],
                    type: 'text',
                },
                {
                    id: '3',
                    is_required: true,
                    label: 'Тип обьекта',
                    name: 'name18',
                    placeholder: 'Виберите обьекта',
                    property_options: [
                        {
                            name: 'Option 1',
                            value: 'option_1',
                        },
                        {
                            name: 'Option 3',
                            value: 'option_3',
                        },
                    ],
                    type: 'select',
                },
                {
                    id: '4',
                    is_required: true,
                    label: 'Расстояние до дороги',
                    name: 'name19',
                    placeholder: 'Введите расстояние до дороги',
                    property_options: [],
                    type: 'text',
                },
            ],
        },
    ],
}

export default [form1, form2, form3]
