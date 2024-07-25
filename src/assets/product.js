// src/products.js
import BlueLily from './images/BlueLily.jpeg';
import Lotus from './images/Lotus.jpeg';
import Nymphonel from './images/Nymphonel.jpeg';
import Nym from './images/Nym.jpeg';
import Rosiflora from './images/Rosiflora.jpeg';
import Passiflora from './images/Passiflora.jpeg';
import Rose from './images/pureRosa.jpeg';



export const products = [
    {
      id: 1,
      name: 'Pure Nymph',
      description: '100% Blue Lily',
      description2: " (100% Blue Lily): Experience the calming serenity of Blue Lily. Known for its potential relaxation properties, Pure Nymph offers a gentle and soothing experience.",
      price: 690,
      backgroundColor: 'purple',
      image: BlueLily
    },
    {
      id: 2,
      name: 'Pure Nelumbo',
      description: '100% Lotus',
      description2: ' Embrace the subtle sweetness of Lotus. Pure Nelumbo is believed to promote a sense of well-being and inner peace.',
      price: 635,
      image: Lotus
    },
    {
      id: 3,
      name: 'Pure Rosa',
      description: '100% Rose',
      description2: ' Indulge in the delicate aroma of Rose. Pure Rosa offers a calming and potentially mood-uplifting experience.',
      price: 975,
      image: Rose
    },
    {
      id: 4,
      name: 'Pure Passiflora',
      description: '100% Passion ',
      description2: 'Discover the calming properties of Passion Flower. Pure Passiflora is traditionally used to promote relaxation and ease occasional anxiety.',
      price: 795,
      image: Passiflora
    },
    {
      id: 5,
      name: 'Rosiflora blend',
      description: '50% Rose + 50% Passion ',
      description2: 'This delightful blend pairs the uplifting notes of Rose with the calming properties of Passion Flower, creating a balanced and potentially mood-enhancing experience.',
      price: 835,
      image: Rosiflora
    },
    {
      id: 6,
      name: 'Nymphonel blend',
      description: '50% Lotus + 50% Blue Lily',
      description2: 'This harmonious blend combines the calming properties of Lotus with the serene qualities of Blue Lily.',
      price: 665,
      image: Nymphonel
    },
    {
        id: 7,
        name: 'Nymprhosiflora blend',
        description: '25% Lotus + 25% Blue Lily + 25% Rose + 25% Passion',
        description2: 'Our most intricate blend, Nymphosiflora combines all four of our botanicals in equal measure. This unique blend offers a complex and potentially mood-balancing experience.',
        image: Nym
    },
  

  ];
  