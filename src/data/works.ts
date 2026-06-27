import sdraiatiAsset from '@/assets/work-sdraiati.jpeg.asset.json';

import leBracciaDiMilo from '@/assets/leBracciaDiMilo.jpg';
import sdraiati from '@/assets/sdraiati.jpg';
import sdraiati1 from '@/assets/sdraiati1.jpg';
import sdraiati2 from '@/assets/sdraiati2.jpg';
import sdraiati3 from '@/assets/sdraiati3.jpg';

import contenere from '@/assets/contenere.jpg';

import trivia from '@/assets/trivia.jpg';
import trivia1 from '@/assets/trivia1.jpg';
import trivia2 from '@/assets/trivia2.jpg';
import trivia3 from '@/assets/trivia3.jpg';

import how from '@/assets/how.jpg';

import who from '@/assets/who.jpg';

export interface Work {
  slug: string;
  title: string;
  year: string;
  medium: string;
  themes: string[];
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  orientation: 'vertical' | 'horizontal';
  featured: boolean;
}

export const works: Work[] = [
  {
    slug: 'le-braccia-di-milo',
    title: 'Le braccia di Milo',
    year: '2026',
    medium: 'White ceramic',
    themes: ['body', 'ritual', 'fragility', 'stillness'],
    description: '',
    longDescription: '',
    image: leBracciaDiMilo,
    images: [],
    orientation: 'vertical',
    featured: true,
  },
  {
    slug: 'sdraiati',
    title: 'Sdraiati',
    year: '2020/2022',
    medium: 'Ceramics, Installation',
    themes: ['body', 'ritual', 'fragility', 'stillness'],
    description:
      'A year-long ritual of making. Three hundred and sixty-five ceramic figures lying down like an intimate diary of suspended time, vulnerability, exhaustion, tenderness, and persistence.',
    longDescription:
      'Sdraiati is a durational work spanning an entire year 365 days, 365 ceramic figures, each one shaped by hand in the intimacy of a daily ritual. The figures lie down, embodying states of rest, vulnerability, exhaustion, tenderness, and quiet persistence. Together they form a tactile diary of time passing, a meditation on the body as vessel of accumulated experience. The repetition becomes both discipline and surrender, each small figure a fragment of presence reclaimed from the flux of days.',
    image: sdraiati,
    images: [sdraiati, sdraiati1, sdraiati2, sdraiati3],
    orientation: 'vertical',
    featured: true,
  },
  {
    slug: 'contenere',
    title: 'Contenere',
    year: '2025',
    medium: 'Ceramic',
    themes: ['body', 'memory', 'absence', 'transformation'],
    description:
      'A vessel-body, holding memory, presence and absence. A form that shelters what continuously changes.',
    longDescription: '',
    image: contenere,
    images: [],
    orientation: 'vertical',
    featured: true,
  },
  {
    slug: 'the-void-that-fills',
    title: 'Trivia',
    year: '2024',
    medium: 'Plaster sculpture',
    themes: ['body', 'absence', 'memory', 'trace'],
    description: 'The void that fills',
    longDescription:
      'Plaster sculpture resulting from the empty space created by the embrace of three women.\nFrom the womb to the heart an irregular pyramid where each face bears the imprint of each one.',
    image: trivia,
    images: [trivia3, trivia1, trivia, trivia2],
    orientation: 'vertical',
    featured: true,
  },
  {
    slug: 'how-much-can-a-feeling-weigh',
    title: 'How much can a feeling weigh?',
    year: '2019',
    medium: 'Ceramic',
    themes: ['body', 'trace', 'transformation', 'fragility'],
    description:
      'A negative of a human heart in ceramic, weighing 250 grams, where emotion acquires weight, surface and permanence.',
    longDescription: '',
    image: how,
    images: [],
    orientation: 'vertical',
    featured: true,
  },
  {
    slug: 'who-you-are',
    title: 'Who you are',
    year: '2019',
    medium: 'Installation',
    themes: ['unconscious', 'trace', 'body', 'ritual'],
    description:
      'Automatic writing and portraiture converge in an installation that reveals the unstable threshold between self-description and the unconscious.',
    longDescription:
      'People spark an endless curiosity. Participants were asked to write down who they were. Reactions varied: some self-assured, others pausing to explain themselves. Together, the aim was to reshape these fragments of automatic writing, revealing the surreal in something concrete. Each line traced a stream of thought slowly drifting from reason, where the first and last words seemed to contain parts unknown, or perhaps willingly unseen.',
    image: who,
    images: [who],
    orientation: 'vertical',
    featured: true,
  },
];

export const exhibitions = [
  {
    year: '2024–25',
    items: [
      {
        title: 'Prima materia',
        venue: 'Palazzo Sforza-Cesarini',
        location: 'Genzano di Roma, Italy',
      },
    ],
  },
  {
    year: '2023',
    items: [
      {
        title: 'Sdraiati (solo exhibition)',
        venue: 'Frauenkirche',
        location: 'Munich, Germany',
      },
    ],
  },
  {
    year: '2022',

    
    items: [
      {
        title: 'Debütant*innen Ausstellung',
        venue: 'Museum Villa Stuck',
        location: 'Munich, Germany',
      },
       {
        title: 'Rette mich! Menschlichkeit als Motor',
        venue: 'Museum Penzberg',
        location: 'Pensberg, Germany',
      },
       {
        title: 'Young Rebel',
        venue: 'A.K.T',
        location: 'Pforzheim, Germany',
      },
         {
        title: 'Lassitude',
        venue: 'Goethe-Institut',
        location: 'Paris, France',
      },
         {
        title: 'Sdraiati (solo exhibition)',
        venue: 'AdBK',
        location: 'Munich, Germany',
      },
    ],
  },
  {
    year: '2021',
    items: [
      {
        title: 'Body without organs',
        venue: 'Sugar Mountain',
        location: 'Munich, Germay',
      },
     
    ],
  },
  {
    year: '2019',
    items: [
      {
        title: 'Strata',
        venue: 'Biberach an der Riß',
        location: 'Biberach an der Riß, Germay',
      },
       {
        title: 'Strata',
        venue: 'AdBK',
        location: 'Munich, Germay',
      },
    ],
  },
  {
    year: '2018',
    items: [
      {
        title: 'Materia Umana',
        venue: 'Il Cantinone',
        location: 'Atina, Italy',
      },
       {
        title: 'Super8',
        venue: 'AdBK',
        location: 'Munich, Germany',
      },
    ],
  },
{
    year: '2017',
    items: [
      {
        title: 'Collab',
        venue: 'ArtRockCafè',
        location: 'Casalvieri, Italy',
      },
       {
        title: 'Panorama 2',
        venue: 'AdBK',
        location: 'Munich, Germany',
      },
       {
        title: 'Billboard',
        venue: 'AkademieGalerie',
        location: 'Munich, Germany',
      },
    ],
  },

    {
    year: '2016',
    items: [
      {
        title: 'Panorama',
        venue: 'AdBK',
        location: 'Munich, Germany',
      },
       {
        title: 'Contatto',
        venue: 'Spazio espositivo',
        location: 'Rome, Italy',
      },
    ],
  },

      {
    year: '2015',
    items: [
      {
        title: 'EssereApparire (solo exhibition)',
        venue: 'ABA',
        location: 'Frosinone, Italy',
      }
    ],
  },

     {
    year: '2014',
    items: [
      {
        title: 'Boîte',
        venue: 'École des beaux-arts',
        location: 'Angers, France',
      },
       
    ],
  },
];
export const awards = [
  {
    year: '2022',
    items: [
      {
        title: 'Preis des Akademievereins zum Diplom',
        institution: ''
      },
      {
        title: 'Stipendienprogramms des Freistaats Bayern – Junge Kunst und neue Wege unterstützt',
        institution: ''
      }
    ]
  },
  {
    year: '2019',
    items: [
      {
        title: 'Ausländerstipendium',
        institution: ''
      }
    ]
  }
];

export const themes = ['body', 'unconscious', 'ritual', 'memory', 'absence', 'trace', 'fragility', 'stillness', 'transformation'] as const;
export const mediums = ['Ceramics', 'Plaster', 'Plaster, Sculpture', 'Plaster, Installation', 'Installation', 'Installation, Photography', 'Video'] as const;
