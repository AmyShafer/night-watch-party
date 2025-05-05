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
      isActive: true,
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
      isActive: false,
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
      isActive: false,
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
      isActive: true,
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
      username: 'DianaD\'Orazio',
      birthday: null,
      isActive: true,
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
      isActive: true,
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
      isActive: false,
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
      isActive: false,
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
      isActive: false,
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
      isActive: false,
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
      isActive: false,
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
      isActive: false,
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
      isActive: false,
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
      isActive: false,
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
      isActive: false,
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
      isActive: true,
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
      isActive: true,
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
    {
     movieTitle: 'The Swimmer',
     movieReleaseYear: 1968,
     genre: 'Drama',
     viewingNumber: 1,
     dateViewed: new Date(10/01/2020),
     picker: 'JohnCecilPrice',
     memberRating: null,
     currentlyStreaming: null,
     season: "Season 1"
    },
     {
      movieTitle: 'World\'s Greatest Dad',
      movieReleaseYear: 2009,
      genre: ['Comedy', 'Drama', 'Dark Comedy' ],
      viewingNumber: 2,
      dateViewed: new Date(10/08/2020),
      picker: 'AmyUnoShafer',
      memberRating: null,
      currentlyStreaming: null,
      season: "Season 1"
     },
     {
      movieTitle: 'What Ever Happened to Baby Jane?',
      movieReleaseYear: 1962,
      genre: ['Drama', 'Melodrama', 'Thriller', 'Camp-tastic', 'Cult Classics', 'Horror', 'Psychological Thriller', 'Gay Cinema', 'Iconic'],
      viewingNumber: 3,
      dateViewed: new Date(10/15/2020),
      picker: 'DianaD\'Orazio',
      memberRating: null,
      currentlyStreaming: null,
      season: "Season 1"
     },
     {
      movieTitle: 'THX 1138',
      movieReleaseYear: 1971,
      genre: ['Sci-fi'],
      viewingNumber: 4,
      dateViewed: new Date(10/23/2020),
      picker: 'JohnCecilPrice',
      memberRating: null,
      currentlyStreaming: null,
      season: "Season 1"
     },
     {
      movieTitle: 'American Werewolf in London',
      movieReleaseYear: 1981,
      genre: ['Sci-fi'],
      viewingNumber: 5,
      dateViewed: new Date(10/29/2020),
      picker: 'DianaD\'Orazio',
      memberRating: null,
      currentlyStreaming: null,
      season: "Season 1"
     },
     {
      movieTitle: 'Housebound',
      movieReleaseYear: 2014,
      genre: ['Horror', 'Comedy', 'Horror-Comedy', 'Dark Comedy'],
      viewingNumber: 6,
      dateViewed: new Date(11/5/2020),
      picker: 'AmyUnoShafer',
      memberRating: null,
      currentlyStreaming: null,
      season: "Season 1"
     },
     {
      movieTitle: 'Drugstore Cowboy',
      movieReleaseYear: 1989,
      genre: ['Drama'],
      viewingNumber: 7,
      dateViewed: new Date(11/5/2020),
      picker: 'ReynaHowkins',
      memberRating: null,
      currentlyStreaming: null,
      season: "Season 1"
     },
     {
      movieTitle: 'Animal House',
      movieReleaseYear: 1978,
      genre: ['Comedy'],
      viewingNumber: 8,
      dateViewed: new Date(11/19/2020),
      picker: 'JohnCecilPrice',
      memberRating: null,
      currentlyStreaming: null,
      season: "Season 1"
     },
     {
      movieTitle: 'Endless Love',
      movieReleaseYear: 1981,
      genre: ['Drama'],
      viewingNumber: 8,
      dateViewed: new Date(11/25/2020),
      picker: 'DianaD\'Orazio',
      memberRating: null,
      currentlyStreaming: null,
      season: "Season 1"
     },
     {
      movieTitle: 'The Great Dictator',
      movieReleaseYear: 1940,
      genre: ['Drama'],
      viewingNumber: 10,
      dateViewed: new Date(12/01/2020),
      picker: 'AmyUnoShafer',
      memberRating: null,
      currentlyStreaming: null,
      season: "Season 1"
     },
     {
      movieTitle: 'Moonstruck',
      movieReleaseYear: 1987,
      genre: ['Comedy', 'Romance'],
      viewingNumber: 11,
      dateViewed: new Date(12/10/2020),
      picker: 'ReynaHowkins',
      memberRating: null,
      currentlyStreaming: null,
      season: "Season 1"
     },
     {
      movieTitle: 'The Shop Around the Corner',
      movieReleaseYear: 1940,
      genre: ['Comedy', 'Romance', 'Classics'],
      viewingNumber: 12,
      dateViewed: new Date(12/17/2020),
      picker: 'DianaD\'Orazio',
      memberRating: null,
      currentlyStreaming: null,
      season: "Season 1"
     },
     {
      movieTitle: 'Trading Places',
      movieReleaseYear: 1983,
      genre: ['Comedy'],
      viewingNumber: 13,
      dateViewed: new Date(12/23/2020),
      picker: 'JohnCecilPrice',
      memberRating: null,
      currentlyStreaming: null,
      season: "Season 1"
     },
     {
      movieTitle: 'Grey Gardens',
      movieReleaseYear: 1975,
      genre: ['Documentary', 'Comedy', 'Camp-tastic', 'Cult Classics', 'Gay Cinema' ] ,
      viewingNumber: 14,
      dateViewed: new Date(12/30/2020),
      picker: 'AmyUnoShafer',
      memberRating: null,
      currentlyStreaming: null,
      season: "Season 1"
     },
  ]);

  const merch = await db.merch.insertMany([
    // add your merch data here
  ]);

  console.log('Seeding completed!');
}
