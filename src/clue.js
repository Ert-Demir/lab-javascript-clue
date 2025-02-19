// ITERATION 1

// Suspects Array
const suspectsArray = [
    {
      firstName: 'Jacob',
      lastName: 'Green',
      occupation: 'Entrepreneur',
      age: 45,
      description: 'A man with a green suit and a sharp look.',
      image: 'https://path/to/green.jpg',
      color: 'Green'
    },
    {
      firstName: 'Doctor',
      lastName: 'Orchid',
      occupation: 'Scientist',
      age: 26,
      description: 'A young woman with a passion for botany.',
      image: 'https://path/to/orchid.jpg',
      color: 'Orchid'
    },
    {
      firstName: 'Victor',
      lastName: 'Plum',
      occupation: 'Designer',
      age: 22,
      description: 'Billionaire video game designer',
      image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
      color: 'purple'
    },
    {
      firstName: 'Kasandra',
      lastName: 'Scarlet',
      occupation: 'Actor',
      age: 31,
      description: 'She is an A-list movie star with a dark past',
      image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
      color: 'red'
    },
{
  firstName: 'Eleanor',
  lastName: 'Peacock',
  occupation: 'Socialité',
  age: 36,
  description: 'She is from a wealthy family and uses her status and money to earn popularity',
  image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  color: 'blue'
},
{
  firstName: 'Jack',
  lastName: 'Mustard',
  occupation: 'Retired Football player',
  age: 62,
  description: 'He is a former football player who tries to get by on his former glory',
  image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
  color: 'yellow'
},
  ];
  

// Rooms Array
const roomsArray = [
    {
      name: 'Kitchen'
    },
    {
      name: 'Dining Room'
    },
    {
      name: 'Conservatory'
    },
    {
      name: 'Study'
    },
    {
      name: 'Library'
    },
    {
      name: 'Billiard Room'
    },
    {
      name: 'Lounge'
    },
    {
      name: 'Ballroom'
    },
    {
      name: 'Hall'
    },
    {
      name: 'Spa'
    },
    {
      name: 'Living Room'
    },
    {
      name: 'Observatory'
    },
    {
    name: 'Theater'
    },
    {
      name: 'Guest House'
    },
    {
      name:'Patio'
    }
  ];

// Weapons Array
const weaponsArray = [
    {
      name: 'Wrench',
      weight: 10
    },
    {
      name: 'Candlestick',
      weight: 2
    },
    {
      name: 'Rope'
      weight: 10
    },
    {
      name: 'Knife',
      weight: 8
    },
    {
      name: 'Dumbell',
      weight: 30
    },
    {
      name: 'Poison'
      weight: 2
    },
    {
      name: 'Axe'
      weight: 15
    },
    {
      name: 'Bat',
      weight: 13
    },
    {
      name: 'Trophy',
      weight: 25
    },
    {
      name: 'Pistol'
      weight: 20
    },
  ];
  

// ITERATION 2

function selectRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}


 // create mystery
  function pickMystery() {
    return {
      suspect: selectRandom(suspectsArray),
      weapon: selectRandom(weaponsArray),
      room: selectRandom(roomsArray)
    };
  }


// ITERATION 3

function revealMystery() {
  const envelope = pickMystery();
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}

console.log(revealMystery());

