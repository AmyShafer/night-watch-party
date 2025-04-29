const db = require('./connection');
const { Member, Movies, Merch } = require('../models');

db.once('open', async () => {
  await seed();
});

async function seed() {
  const members = await db.members.insertMany([
    {
      username: 'AlisonDilfer',
      birthday: null,
      status: 'active',
      roles: ['member'],
      memberSince: new Date('03/02/2021'),
      leftIn: null,
      firstPickedMovie: 'House of Gucci',
      lastPickedMovie: 'The Hunger',
      favoriteMovies: [],
      memberStats: ['Cat Person', '5-time Picker+'],
      currentRSVP: '',
      socials: ['Facebook', 'BlueSky', 'LetterBoxd']
    },
    {
      username: 'AmyUnoShafer',
      birthday: new Date('12/05/1986'),
      status: 'active',
      roles: ['admin', 'member'],
      memberSince: new Date('10/01/2020'),
      leftIn: null,
      firstPickedMovie: "World's Greatest Dad",
      lastPickedMovie: 'Jawbreaker',
      favoriteMovies: ['Ed Wood', 'The Birdcage', 'The Producers(1967)', 'Eighth Grade', "Wayne's World", 'The Rocky Horror Picture Show', 'American Movie'],
      memberStats: ['Founding Member', 'Admin', 'Cat Person', '10-time Picker+'],
      currentRSVP: 'Coming!',
      socials: ['BlueSky', 'Facebook', 'Instagram', 'LetterBoxd', 'TikTok']
    },
    {
      username: 'DaveMcManus',
      birthday: null,
      status: 'active',
      roles: ['member'],
      memberSince: new Date('08/17/2022'),
      leftIn: null,
      firstPickedMovie: null,
      lastPickedMovie: null,
      favoriteMovies: [],
      memberStats: [],
      currentRSVP: '',
      socials: ['Facebook', 'YouTube', 'X']
    },
    {
      username: 'DawnFallik',
      birthday: null,
      status: 'inactive',
      roles: ['member'],
      memberSince: new Date('06/10/2021'),
      leftIn: new Date('07/01/2022'),
      firstPickedMovie: 'The House Bunny',
      lastPickedMovie: 'FYRE: The Greatest Party That Never Happened',
      favoriteMovies: [],
      memberStats: ['5-time Picker+', 'Cat Person'],
      currentRSVP: '',
      socials: []
    },
    {
      username: 'DianaDOrazio',
      birthday: null,
      status: 'active',
      roles: ['member'],
      memberSince: new Date('10/01/2020'),
      leftIn: null,
      firstPickedMovie: 'What Ever Happened to Baby Jane?',
      lastPickedMovie: 'The Pianist',
      favoriteMovies: [],
      memberStats: ['Founding Member', '20-time Picker', 'Bird Person'],
      currentRSVP: 'Coming!',
      socials: ['Facebook']
    },
    {
      username: 'DougReinford',
      birthday: null,
      status: 'active',
      roles: ['member'],
      memberSince: new Date('04/07/2025'),
      leftIn: null,
      firstPickedMovie: 'Tsotsi',
      lastPickedMovie: null,
      favoriteMovies: [],
      memberStats: ['New Member'],
      currentRSVP: 'Coming',
      socials: ['Facebook', 'Flickr']
    },
    {
      username: 'ErikLastname',
      birthday: null,
      status: 'active',
      roles: ['member'],
      memberSince: new Date('05/06/2021'),
      leftIn: null,
      firstPickedMovie: 'City Slickers',
      lastPickedMovie: 'American Graffiti',
      favoriteMovies: [],
      memberStats: ['Cat Person', 'Dog Person'],
      currentRSVP: null,
      socials: []
    },
    {
      username: 'JaredLenin',
      birthday: null,
      status: 'active',
      roles: ['member'],
      memberSince: new Date('04/22/2025'),
      leftIn: null,
      firstPickedMovie: null,
      lastPickedMovie: null,
      favoriteMovies: [],
      memberStats: ['New Member'],
      currentRSVP: 'Not Coming.',
      socials: ['Facebook', 'Instagram', 'LetterBoxd']
    },
    {
      username: 'JenniferLastname',
      birthday: null,
      status: 'inactive',
      roles: ['member'],
      memberSince: new Date('01/05/2022'),
      leftIn: new Date('01/26/2022'),
      firstPickedMovie: 'Waking Ned Devine',
      lastPickedMovie: 'Waking Ned Devine',
      favoriteMovies: [],
      memberStats: [],
      currentRSVP: '',
      socials: ['Facebook', 'TikTok']
    },
    {
      username: 'JohannaWainscott',
      birthday: null,
      status: 'inactive',
      roles: ['member'],
      memberSince: new Date('06/10/2021'),
      leftIn: new Date('07/01/2022'),
      firstPickedMovie: 'The Adventures of Walter Mitty',
      lastPickedMovie: 'The Adventures of Walter Mitty',
      favoriteMovies: [],
      memberStats: ['Cat Person'],
      currentRSVP: '',
      socials: ['Facebook']
    },
    {
      username: 'JohnCecilPrice',
      birthday: null,
      status: 'goneButNotForgotten',
      roles: ['member'],
      memberSince: new Date('10/01/2020'),
      leftIn: new Date('07/10/2021'),
      firstPickedMovie: 'The Swimmer',
      lastPickedMovie: 'Desperately Seeking Susan',
      favoriteMovies: [],
      memberStats: ['Founding Member', 'Cat Person', '5-time Picker'],
      currentRSVP: null,
      socials: ['Facebook', 'Twitter']
    },
    {
      username: 'JoshLastname',
      birthday: null,
      status: 'active',
      roles: ['member'],
      memberSince: new Date('05/29/2024'),
      leftIn: null,
      firstPickedMovie: 'The Man Who Fell To Earth',
      lastPickedMovie: 'The Man Who Fell To Earth',
      favoriteMovies: [],
      memberStats: [],
      currentRSVP: '',
      socials: ['Facebook']
    },
    {
      username: 'JuliaLastname',
      birthday: null,
      status: 'inactive',
      roles: ['member'],
      memberSince: new Date('01/15/2021'),
      leftIn: new Date('04/29/2021'),
      firstPickedMovie: 'Best in Show',
      lastPickedMovie: "Romy and Michele's High School Union",
      favoriteMovies: [],
      memberStats: ['Plant Person'],
      currentRSVP: '',
      socials: ['Facebook']
    },
    {
      username: 'KellyKinzey',
      birthday: null,
      status: 'inactive',
      roles: ['member'],
      memberSince: new Date('01/26/2022'),
      leftIn: new Date('01/11/2023'),
      firstPickedMovie: 'To Wong Foo, Thanks for Everything! Julie Newman',
      lastPickedMovie: 'My Policeman',
      favoriteMovies: [],
      memberStats: ['Cat Person', 'Parent'],
      currentRSVP: '',
      socials: ['Facebook']
    },
    {
      username: 'LaurenGervasio',
      birthday: null,
      status: 'inactive',
      roles: ['member'],
      memberSince: new Date('06/10/2021'),
      leftIn: new Date('11/24/2021'),
      firstPickedMovie: 'The Greatest Showman',
      lastPickedMovie: 'The Princess Bride',
      favoriteMovies: [],
      memberStats: [],
      currentRSVP: '',
      socials: ['Facebook']
    },
    {
      username: 'ReynaHowkins',
      birthday: null,
      status: 'active',
      roles: ['member'],
      memberSince: new Date('10/01/2020'),
      leftIn: null,
      firstPickedMovie: 'Drugstore Cowboy',
      lastPickedMovie: 'The Ice Storm',
      favoriteMovies: [],
      memberStats: ['Founding Member', '10-time Picker+', 'Dog Person'],
      currentRSVP: 'Not Coming.',
      socials: ['Facebook', 'Instagram', 'Website']
    },
    {
      username: 'RuthSchanbacher',
      birthday: null,
      status: 'active',
      roles: ['member'],
      memberSince: new Date('10/06/2021'),
      leftIn: null,
      firstPickedMovie: 'The Adventures of Baron Munchausen',
      lastPickedMovie: 'Repo Man',
      favoriteMovies: [],
      memberStats: ['Founding Member', '5-time Picker+', 'Bird Person', 'Parent'],
      currentRSVP: 'Not Coming.',
      socials: ['Facebook', 'Instagram', 'Website']
    }
  ]);

  const movies = await db.movies.insertMany([
    // add your movie data here
  ]);

  const merch = await db.merch.insertMany([
    // add your merch data here
  ]);

  console.log('Seeding completed!');
}
