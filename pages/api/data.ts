export type dataType = {
  id: string;
  index: number;
  title: string;
  text: string;
  color: string;
  image: string;
}

export const data: dataType[] = [
  {
    id: '01',
    index: 0,
    title: 'Amy movie',
    text: 'From celebrated documentarian Asif Kapadia, AMY is a powerful documentary exploring the triumphant career and tragic life of singer Amy Winehouse.',
    color: '#fee4ea',
    image: 'amy'
  },
  {
    id: '02',
    index: 1,
    title: 'Good Moods',
    text: 'Goodmoods is a unique interface that reinvents the concept of mood board to deliver decoration trends and curated design inspiration.',
    color: '#eaaf96',
    image: 'goodmoods'
  },
  {
    id: '03',
    index: 2,
    title: 'Trippeo',
    text: 'Smart, Simple Travel & Expense Management. Trippeo is an intuitive travel and expense tracking app that lets you get back to business.',
    color: '#0c7bf8',
    image: 'trippeo'
  },
  {
    id: '04',
    index: 3,
    title: 'Magic Mike',
    text: 'Three years after Mike bowed out of the stripper life at the top of his game, he and the remaining Kings of Tampa hit the road to Myrtle Beach to put on one last blow-out performance.',
    color: '#cab174',
    image: 'magicmike'
  },
  {
    id: '05',
    index: 4,
    title: 'Je suis Unicq',
    text: 'She is one that takes us into an enigmatic atmosphere where pop meets electro. elegance shifted, assertive personality, she saw her music as she leads her life, intense, passionate and intuitive.',
    color: '#f3002e',
    image: 'unicq'
  },
  {
    id: '06',
    index: 5,
    title: 'Mistress A.',
    text: "A lonely college freshman's life is turned upside down by her impetuous, adventurous soon-to-be stepsister. Official website of the movie.",
    color: '#b4aa91',
    image: 'mistressamerica'
  },
  {
    id: '07',
    index: 6,
    title: 'Vo2 Group',
    text: 'VO2 Group excels in networking and relationships. Driven by a very « business oriented » model, employees and partners are strongly encoraged to share their ambitions and to take an active part to the group’s growth strategy.',
    color: '#28b3ff',
    image: 'vo2group'
  },
  {
    id: '08',
    index: 7,
    title: 'Bulgari',
    text: 'Bulgari is an Italian jewelry and luxury goods brand that produces and markets several product lines including jewelry, watches, fragrances, accessories, and hotels. Redesign of the official website Bulgari.com',
    color: '#9a8b52',
    image: 'bulgari'
  },
  {
    id: '09',
    index: 8,
    title: 'Claudine',
    text: 'Le col de Claudine is a french vintage brand for women. Official branding and webdesign of the website.',
    color: '#ffc8f1',
    image: 'claudine'
  },
  {
    id: '10',
    index: 9,
    title: 'Andam',
    text: 'ANDAM was conceived from the beginning as a structure for recognizing and assisting young designers on the French and international fashion scene.',
    color: '#fff600',
    image: 'andam'
  },
  {
    id: '11',
    index: 10,
    title: 'Mobee',
    text: 'Mobee is an innovative carsharing system based on the free floating principle: « I can pick up and return a vehicle where I want»  Mobee was created with the aim to allow residents, companies and tourists.',
    color: '#e4002b',
    image: 'mobee'
  },
  {
    id: '12',
    index: 11,
    title: 'Sezane',
    text: 'Sezane is the first French fashion brand to function entirely online. With only original creations, an obsession with the perfect cut, and the quest for the most magnificent fabrics, it really offers a different kind of fashion.',
    color: '#d9c5b9',
    image: 'sezane'
  },
  {
    id: '13',
    index: 12,
    title: 'Pulse',
    text: 'A unique experience allowing to explore Pulse in different contexted and environments thanks to 3 different lifestyle videos based on emotion. It is possible to switch from one to an other at any time and master the story you want to see.',
    color: '#ffac29',
    image: 'takeyourpulse'
  },
  {
    id: '14',
    index: 13,
    title: 'Captain Train',
    text: 'Captain Train is a French online travel agency which provides a booking platform for purchasing train tickets in Europe. Design of the brand identity, desktop and iOS version',
    color: '#7ac178',
    image: 'capitainetrain'
  },
]
export default (req, res) => {
  res.statusCode = 200
  res.json(data)
}