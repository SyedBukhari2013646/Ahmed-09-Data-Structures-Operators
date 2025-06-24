

'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //New ES6 Object literals enhancement
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery({ time = '20:00', adress, mainIndex = 0, starterIndex }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${adress} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    `Here is your delecious pasta with ${ing1}, ${ing2} and ${ing3}`;
  },

  orderPizza(mainIngriedient, ...otherIngriedient) {
    console.log(mainIngriedient);
    console.log(otherIngriedient);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  adress: 'Mohalla Kucha Saadat Dhoke Fateh Attock Cantt',
  mainIndex: 2,
  starterIndex: 3,
});

restaurant.orderDelivery({
  adress: 'Mohalla Kucha Saadat Dhoke Fateh Attock Cantt',
  starterIndex: 2,
});

// // Destructuring Objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating Variables
// let a = 123;
// let b = 456;
// const obj = { a: 23, b: 6, c: 9 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested Object
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x);
// console.log(a);
// console.log(c);
// console.log(b);
// console.log(x, y, z);

// console.log(arr);

// // according to restaurants

// let [first, hi, second] = restaurant.categories;
// console.log(first, hi, second);

// [first, hi, second] = [second, first, hi];
// console.log(second, first, hi);

// // calling function order arrys
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // nested array
// const nested = [2, 3, [4, 5]];

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values

// const [p, q, r] = [8, 9];
// console.log(p, q, r);

// The spread operator (...)

// const arr = [7, 8, 9];

// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 3, 5, 2, 3);

// const newMenu = [...restaurant.mainMenu, 'Ginnoci'];
// console.log(newMenu);

// // Copy array
// const copyNewMenu = [...restaurant.mainMenu];
// console.log(copyNewMenu);

// // Join 2 array
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables are strings, maps, arrays, sets but NOT objects.
// const str = 'Syed Muhammad Ahmed Bukhari';
// const letters = [...str, ' ', 'Harris'];
// console.log(letters);
// console.log(str);

// // Real world Example
// const ingriedients = [
//   // prompt("Let's make pasta! Ingriedients 1?"),
//   // prompt('Ingriedients 2?'),
//   // prompt('Ingriedients 3'),
// ];
// console.log(ingriedients);
// restaurant.orderPasta(...ingriedients);

// //Objects
// const newRestaurant = {
//   FoundedIn: 1991,
//   ...restaurant,
//   FoundedBy: 'Imran Khan',
// };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Syed Bukhari';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// The spread operator (...)

// (...) The Rest Operator

// 1) Destructing Assignment

// const { a, b, ...others } = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // From The Restaurant arrays
// const [Pizza, , Risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(Pizza, Risotto, otherFood);

// // objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// // 2) Function

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 4, 4);
// add(2, 5, 3.5, 435, 3);

// const x = [23, 4, 6];
// add(...x);

// restaurant.orderPizza('Mushroom', 'Pasta', 'Onion', 'Spinach');

// The Short Circuting(&& , ||)

// || OR Operator

// console.log(3 || 'Ahmed');
// console.log('' || 'Ahmed');
// console.log(null || undefined);
// console.log(true || 0);

// console.log(undefined || null || 0 || 'Zainab' || 'Ahmed');

// // We can use the short circuting to prevent the terniary operator and more worst the if else statment

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// // instead of above we can simply use the short circuting
// const guests2 = restaurant.guests1 || 23;
// console.log(guests2);

// // && AND Operator

// console.log(undefined && 'Ahmed');
// console.log('ahmed' && 'Bukhari');

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Mushroom', 'Beef Tikka');
// }

// restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'Catchup');

// The nulish coaelsing operator (&&)

// IT WILL WORK FOR THE NULL OR UNDEFINED VALUES.

// New Assignment operator
// const rest1 = {
//   name: 'Toora baba',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'Lahori Channay',
//   owner: 'Upon',
// };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// //Thenew ES2021 data according to the OR operator with same
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// // ?? Nulsih assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // && AND Assignment operator
// // rest1.owner = rest1.owner && '<ANOMOYS';
// // rest2.owner = rest2.owner && '<ANOYNOMOUS';

// rest1.owner &&= '<ANOYNOMOUS';
// rest2.owner &&= '<ANOYNOMOUS';
// console.log(rest1);
// console.log(rest2);

//Looping arrays The for-of loop
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

//Looping over objects
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openstr = `We are open on ${properties.length} days : `;

// for (const day of properties) {
//   openstr += `${day},`;
// }
// console.log(openstr);

// //Properties values
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// //Entire Object
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// //Keys, Values
// for (const [keys, { open, close }] of entries) {
//   console.log(`On ${keys} we are open at ${open} and close at ${close}`);
// }

// Sets
const orderSets = new Set([
  'eggs',
  'chicken meat',
  'almond',
  'eggs',
  'chicken meat',
  'Protienshake',
]);

console.log(orderSets);
console.log(new Set('SyedBukhari'));

console.log(orderSets.size);
console.log(orderSets.has('eggs'));
console.log(orderSets.has('steroids'));
orderSets.add('Protien Bars');
orderSets.add('Protien bars');
orderSets.delete('Protien bars');

console.log(orderSets);

// Practicing Assignmets Questions

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// // 1: Destructing arrays (1.1)

// const [firstBook, secondBook] = books;

// console.log(firstBook, secondBook);

// // (1.2)

// const [, , , thirdBook] = books;
// console.log(thirdBook);

// // (1.3)

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const [[, rating], [, ratingsCount]] = ratings;

// console.log(rating, ratingsCount);

// // (1.4)

// const ratingStars = [63405, 1808];

// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// 2.1: Destructing objects (1.1)
// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// // 2.2:
// const { keywords: tags } = books[0];
// console.log(tags);

// // 2.3:
// const { language, programmingLanguage = 'Unknown' } = books[6];
// console.log(language, programmingLanguage);

// // 2.4:
// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';
// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookAuthor, bookTitle);
// location;

// // 2.5
// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];

// // 2.6
// function printBookInfo({ title, author, year }) {
//   console.log(`${title} by ${author}, ${year}`);
// }

// printBookInfo({
//   title: 'Algorithms',
//   author: 'Robert Sedgewick',
//   year: '2011',
// });

// The spread operator (...)

// // 3.1
// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

// // 3.2
// function spellWord(word) {
//   console.log(...word);
// }

// spellWord('Harris');

//(...) The Rest operator

// // 4.1
// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword);
// console.log(rest);

// // 4.2

// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher);
// console.log(restOfTheBook);

// // 4.3

// function printBookAuthorsCount(title, ...authors) {
//   console.log(`The book ${title} has ${authors.length} authors.`);
// }

// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

//( || and && ) Short circuting operators

// 5.1

// function hasExamplesInJava(books) {
//   return books.programmingLanguage === 'java' || 'no data available';
// }

// console.log(hasExamplesInJava(books[0]));

// // function hasExamplesInJava(books) {
// //   return books.programmingLanguage === 'Java' || 'no data available';
// // }

// // console.log(hasExamplesInJava(books[0]));
// // console.log(hasExamplesInJava(books[1]));

// // 5.2

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent &&
//     console.log(`${books[i].title} provides online contents`);
//}

//The logical operator

// 7.1
// for (let i = 0; i < books.length; i++) {
//   books[i].edition ||= 1;
// }

// console.log(books.edition);
// //7.2

// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// }

// console.log(books.highlighted);

// // 5.2

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent &&
//     console.log(`${books[i].title} provides online contents`);
//}

//The logical operator

// 7.1
// for (let i = 0; i < books.length; i++) {
//   books[i].edition ||= 1;
// }

// console.log(books.edition);
// //7.2

// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// }

// console.log(books.highlighted);

// // 5.2

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent &&
//     console.log(`${books[i].title} provides online contents`);
//}

//The logical operator

// 7.1
// for (let i = 0; i < books.length; i++) {
//   books[i].edition ||= 1;
// }

// console.log(books.edition);
// //7.2

// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// }

// console.log(books.highlighted);

// // 5.2

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent &&
//     console.log(`${books[i].title} provides online contents`);
//}

//The logical operator

// 7.1
// for (let i = 0; i < books.length; i++) {
//   books[i].edition ||= 1;
// }

// console.log(books.edition);
// //7.2

// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// }

// console.log(books.highlighted);

///////////////////////////////////////
// Coding Challenge #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* 

CHALLENGE 1

We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// //1
// const [player1, player2] = [game.players[0], game.players[1]];
// console.log(player1);
// console.log(player2);

// //2
// const [gk1, ...fieldPlayers1] = player1;
// const [gk2, ...fieldPlayers2] = player2;

// console.log(gk1, fieldPlayers1);
// console.log(gk2, fieldPlayers2);

// //3
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// //4
// const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...player1];
// console.log(players1Final);

// //5
// const {
//   odds: { team1: team1, x: draw, team2: team2 },
// } = game;
// console.log(team1, draw, team2);

// //6
// const printGoals = function (players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals(...game.scored);

// //7
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

//CHALLENGE 2
//1.
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// //2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// //3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }







hi this is to make u chuutiya @GITHUB