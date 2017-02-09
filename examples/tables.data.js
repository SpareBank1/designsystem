export const SIMPLE_TABLE = {
  headers: [
    { key: 'name', content: 'Navn' },
    { key: 'address', content: 'Adresse' },
    { key: 'age', content: 'Alder', alignRight: true },
    { key: 'phone', content: 'Telefon' },
    { key: 'email', content: 'E-post'},
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
      phone: '+45 018 456 789',
      email: 'daniel@dansk.dk',
      username: 'kartoffel88',
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

export const SIMPLE_TABLE_WITH_FOOTER = {
  headers: [
    { key: 'name', content: 'Vare', footerContent: 'Sum' },
    { key: 'price', content: 'Pris', footerContent: '40,50', alignRight: true },
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

export const SIMPLE_TABLE_EXPANDABLE = {
  headers: [
    { key: 'name', content: 'Navn' },
    { key: 'username', content: 'Brukernavn' }
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
      phone: '+45 018 456 789',
      email: 'daniel@dansk.dk',
      username: 'kartoffel88',
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
