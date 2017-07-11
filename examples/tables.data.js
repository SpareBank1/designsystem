import React from "react";

export const SIMPLE_TABLE = {
    columns: [
        {key: 'name', header: 'Navn'},
        {key: 'address', header: 'Adresse'},
        {key: 'age', header: 'Alder', alignRight: true},
        {key: 'phone', header: 'Telefon'},
        {key: 'email', header: 'E-post'},
        {key: 'button', header: ''},
    ],
    dataObject: [
        {
            name: 'Ola Normann',
            address: 'Gateveien 2',
            age: 23,
            phone: '912 34 567',
            email: 'ola@normann.no',
            username: 'olli22',
            button: <button>poke</button>
        },
        {
            name: 'Sivert Svenska',
            address: 'Gatuveio 7',
            age: 45,
            phone: '+46 123 456 789',
            email: 'sivert@svenska.se',
            username: 'zlatan_2000',
            button: <button>poke</button>
        },
        {
            name: 'Daniel Dansk',
            address: 'Kartoffel Fjers',
            age: 67,
            phone: '+45 018 456 789',
            email: 'daniel@dansk.dk',
            username: 'kartoffel88',
            button: <button>poke</button>
        },
        {
            name: 'Anders Amerikaner',
            address: 'Road Street 52',
            age: 78,
            phone: '+1 555 555 5555',
            email: 'anders@amerikaner.biz',
            username: 'andy-mandy',
            button: <button>poke</button>
        },
    ],
};

export const SIMPLE_TABLE_WITH_FOOTER = {
    columns: [
        {key: 'name', header: 'Vare', footer: 'Sum'},
        {key: 'price', header: 'Pris', footer: '40,50', alignRight: true},
    ],
    dataObject: [
        {
            name: 'Melk lett, 1 liter',
            price: '18,50',
        },
        {
            name: 'Pepper hel',
            price: '22,00',
        },
    ],
};

export const SIMPLE_TABLE_HIDE_ON_TABLET = {
    columns: [
        {key: 'col1', header: 'Synlig kolonne', footer: 'Synlig'},
        {key: 'col2', header: 'Skjult på tablet', footer: 'Skjult', hideOnTablet: true},
        {key: 'col3', header: 'Synlig kolonne', footer: 'Synlig'},
        {key: 'col4', header: 'Skjult på tablet', footer: 'Skjult', hideOnTablet: true}
    ],
    dataObject: [
        {
            col1: 'lorem ipsum',
            col2: 'dolor sit amet',
            col3: 'consectetur',
            col4: 'adipiscing elit'
        },
        {
            col1: 'cras sodales',
            col2: 'iaculis',
            col3: 'quam id',
            col4: 'posuere'
        },
        {
            col1: 'sed lacinia',
            col2: 'nec dolor',
            col3: 'sit amet porta',
            col4: 'praesent'
        },
        {
            col1: 'nunc sem',
            col2: 'laoreet',
            col3: 'sed lacus',
            col4: 'lobortis faucibus'
        },
    ],
};

export const SIMPLE_TABLE_HIDE_ON_MOBILE = {
    columns: [
        {key: 'col1', header: 'Synlig kolonne', footer: 'Synlig'},
        {key: 'col2', header: 'Skjult på mobil', footer: 'Skjult', hideOnMobile: true},
        {key: 'col3', header: 'Synlig kolonne', footer: 'Synlig'},
        {key: 'col4', header: 'Skjult på mobil', footer: 'Skjult', hideOnMobile: true}
    ],
    dataObject: [
        {
            col1: 'lorem ipsum',
            col2: 'dolor sit amet',
            col3: 'consectetur',
            col4: 'adipiscing elit'
        },
        {
            col1: 'cras sodales',
            col2: 'iaculis',
            col3: 'quam id',
            col4: 'posuere'
        },
        {
            col1: 'sed lacinia',
            col2: 'nec dolor',
            col3: 'sit amet porta',
            col4: 'praesent'
        },
        {
            col1: 'nunc sem',
            col2: 'laoreet',
            col3: 'sed lacus',
            col4: 'lobortis faucibus'
        },
    ],
};

export const SIMPLE_TABLE_COLUMNS_ON_MOBILE = {
    columns: [
        {key: 'col1', header: 'Lorem'},
        {key: 'col2', header: 'Ipsum'},
        {key: 'col3', header: 'Dolor'}
    ],
    dataObject: [
        {
            col1: 'lorem ipsum',
            col2: 'dolor sit amet',
            col3: 'consectetur'
        },
        {
            col1: 'cras sodales',
            col2: 'iaculis',
            col3: 'quam id'
        },
        {
            col1: 'sed lacinia',
            col2: 'nec dolor',
            col3: 'sit amet porta'
        },
        {
            col1: 'nunc sem',
            col2: 'laoreet',
            col3: 'sed lacus'
        },
    ],
};

export const SIMPLE_TABLE_EXPANDABLE = {
    columns: [
        {key: 'name', header: 'Navn'},
        {key: 'username', header: 'Brukernavn'}
    ],
    dataObject: [
        {
            name: 'Ola Normann',
            address: 'Gateveien 2',
            age: 23,
            phone: '912 34 567',
            email: 'ola@normann.no',
            username: 'olli22',
        },
        {
            name: 'Sivert Svenska',
            address: 'Gatuveio 7',
            age: 45,
            phone: '+46 123 456 789',
            email: 'sivert@svenska.se',
            username: 'zlatan_2000',
        },
        {
            name: 'Daniel Dansk',
            address: 'Kartoffel Fjers',
            age: 67,
            // With no phone number, this guy won't be expandable
            email: 'daniel@dansk.dk',
            username: 'kartoffel88'
        },
        {
            name: 'Anders Amerikaner',
            address: 'Road Street 52',
            age: 78,
            phone: '+1 555 555 5555',
            email: 'anders@amerikaner.biz',
            username: 'andy-mandy',
        },
    ],
};

const norwegianCurrencyCompare = (a, b) => {
    const aNum = Number(a.replace(/\s/g, '').replace(/,/g, '.'));
    const bNum = Number(b.replace(/\s/g, '').replace(/,/g, '.'));
    return aNum - bNum;
};

export const SIMPLE_TABLE_SORTABLE_EXPANDABLE = {
    columns: [
        {key: 'name', header: 'Navn', footer: 'Snittalder'},
        {key: 'networth', header: 'Formue'},
        {key: 'networthProperSort', header: 'Formue (custom compare)', compare: norwegianCurrencyCompare},
        {key: 'age', header: 'Alder', alignRight: true, footer: '53.25'},
        {key: 'button', header: 'Poke', notSortable: true}
    ],
    dataObject: [
        {
            name: 'Ola Normann',
            address: 'Gateveien 2',
            networth: '12 693 005,93',
            networthProperSort: '12 693 005,93',
            age: 23,
            phone: '912 34 567',
            email: 'ola@normann.no',
            username: 'olli22',
            button: <button onClick={e => e.stopPropagation()}>poke</button>
        },
        {
            name: 'Sivert Svenska',
            address: 'Gatuveio 7',
            networth: '8 693 005,93',
            networthProperSort: '8 693 005,93',
            age: 45,
            phone: '+46 123 456 789',
            email: 'sivert@svenska.se',
            username: 'zlatan_2000',
            button: <button onClick={e => e.stopPropagation()}>poke</button>
        },
        {
            name: 'Daniel Dansk',
            address: 'Kartoffel Fjers',
            networth: '9 005,93',
            networthProperSort: '9 005,93',
            age: 67,
            // With no phone number, this guy won't be expandable
            email: 'daniel@dansk.dk',
            username: 'kartoffel88',
            button: <button onClick={e => e.stopPropagation()}>poke</button>
        },
        {
            name: 'Anders Amerikaner',
            address: 'Road Street 52',
            networth: '693 005,93',
            networthProperSort: '693 005,93',
            age: 78,
            phone: '+1 555 555 5555',
            email: 'anders@amerikaner.biz',
            username: 'andy-mandy',
            button: <button onClick={e => e.stopPropagation()}>poke</button>
        },
    ],
};

export const SIMPLE_TABLE_SORTABLE_PAGINATED = {
    columns: [
        {key: 'name', header: 'Navn'},
        {key: 'hex', header: 'Heksadesimal'},
        {key: 'r', header: 'Rødt'},
        {key: 'g', header: 'Grønt'},
        {key: 'b', header: 'Blått'}
    ],
    dataObject: [
        { name: 'ffe-blue-royal', hex: '#002776' },
        { name: 'ffe-blue-cobalt', hex: '#005AA4' },
        { name: 'ffe-blue-azure', hex: '#0071CD' },
        { name: 'ffe-blue-deep-sky', hex: '#008ED2' },
        { name: 'ffe-blue-sky', hex: '#7FC6E8' },
        { name: 'ffe-blue-pale', hex: '#DFF1F9' },
        { name: 'ffe-blue-ice', hex: '#EFF8FC' },
        { name: 'ffe-green', hex: '#37B441' },
        { name: 'ffe-green-shamrock', hex: '#008A00' },
        { name: 'ffe-green-emerald', hex: '#007B00' },
        { name: 'ffe-green-mint', hex: '#E1F4E3' },
        { name: 'ffe-orange', hex: '#FF9100' },
        { name: 'ffe-orange-fire', hex: '#DA3D00' },
        { name: 'ffe-orange-salmon', hex: '#F3BBAA' },
        { name: 'ffe-red', hex: '#E60000' },
        { name: 'ffe-purple', hex: '#C94096' },
        { name: 'ffe-purple-magenta', hex: '#A20076' },
        { name: 'ffe-sand', hex: '#F8F5EB' },
        { name: 'ffe-sand-ivory', hex: '#FBFAF5' },
        { name: 'ffe-white', hex: '#FFFFFF' },
        { name: 'ffe-grey', hex: '#ADADAD' },
        { name: 'ffe-grey-cloud', hex: '#F4F4F4' },
        { name: 'ffe-grey-silver', hex: '#CCCCCC' },
        { name: 'ffe-grey-charcoal', hex: '#676767' },
        { name: 'ffe-black', hex: '#262626' }
    ].map( c => ({
        ...c,
        r: parseInt(c.hex.substr(1, 2), 16),
        g: parseInt(c.hex.substr(3, 2), 16),
        b: parseInt(c.hex.substr(5, 2), 16)
    }))
};
