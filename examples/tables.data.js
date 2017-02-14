import React from 'react';

export const SIMPLE_TABLE = {
  columns: [
    { key: 'name', header: 'Navn' },
    { key: 'address', header: 'Adresse' },
    { key: 'age', header: 'Alder', alignRight: true },
    { key: 'phone', header: 'Telefon' },
    { key: 'email', header: 'E-post'},
    { key: 'button', header: ''},
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
    { key: 'name', header: 'Vare', footer: 'Sum' },
    { key: 'price', header: 'Pris', footer: '40,50', alignRight: true },
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
  columns: [
    { key: 'name', header: 'Navn' },
    { key: 'username', header: 'Brukernavn' }
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
