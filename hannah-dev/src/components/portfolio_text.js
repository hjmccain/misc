import moodooImg from '../../public/moodoo-mockup.png';
import edsterImg from '../../public/edster-mockup.png';
import localizeImg from '../../public/localize-mockup.png';
import moodooTitle from '../../public/moodoo-2.png';
import edsterTitle from '../../public/edster-2.png';
import localizeTitle from '../../public/localize.png';

export default {
  one: {
    img: {
      className: 'moodoo-img mockup',
      src: moodooImg,
      alt: 'Screenshot of Moodoo app'
    },
    titleImg: {
      className: 'moodoo-title title-img',
      src: moodooTitle,
      alt: 'Moodoo'
    },
    header: {
      title: 'Moodoo',
      subtitle: 'A journaling app for mood tracking'
    },
    description: 'Whether you\'re looking to identify unhealthy triggers in your life, trying to make sense of hormonal cycles, or simply looking for a unique way to journal, the color-coded visuals of MOODOO help users see trends in their moods over time.',
    stack: {
      front: ['React', 'Redux'],
      back: ['Node.js', 'Express'],
      db: ['PostgreSQL']
    },
    demo: {
      url: 'https://moodoo.herokuapp.com/#/',
      text: 'moodoo demo'
    },
    code: {
      url: 'https://github.com/hjmccain/mood_calendar/blob/master/README.md',
      text: 'code'
    },
    role: 'I built MOODOO myself, from scratch, in order to practice using React & Redux as well as NodeJS, Express, and PostgreSQL. A minimal amount of back-end code was recycled from an earlier pair project.',
    whatILearned: ''
  },
  two: {
    img: {
      className: 'edster-img mockup',
      src: edsterImg,
      alt: 'Screenshot of Edster app'
    },
    titleImg: {
      className: 'edster-title title-img',
      src: edsterTitle,
      alt: 'Edster'
    },
    header: {
      title: 'Edster',
      subtitle: 'A spaced-repetition learning app'
    },
    description: 'EDSTER is about making learning a new language an engaging experience by allowing users to track their progress over time and practice on unmastered words.',
    stack: {
      front: ['React', 'Redux'],
      back: ['Node.js', 'Express'],
      db: ['MongoDB']
    },
    demo: {
      url: 'https://edster.herokuapp.com/#/welcome',
      text: 'edster demo'
    },
    code: {
      url: 'https://github.com/megelismi/flashcard-app/blob/master/README.md',
      text: 'code'
    },
    role: 'EDSTER was a collaborative project with Megan Smith. My primary responsibilities were React & Redux. Megan & I worked collaboratively on project design & management, as well as on implementing Google authentication.',
    whatILearned: ''
  },
  three: {
    img: {
      className: 'localize-img mockup',
      src: localizeImg,
      alt: 'Screenshot of Localize app'
    },
    titleImg: {
      className: 'localize-title title-img',
      src: localizeTitle,
      alt: 'Localize'
    },
    header: {
      title: 'Localize',
      subtitle: 'A map app for authentic travel'
    },
    description: 'LOCALIZE springs from my own frustration with the lack of a go-to app for authentic, live-like-a-local travel. LOCALIZE seeks to capture the experience of getting personalized recommendations from a local friend — the person who has lived in a city for years and knows the romantic tucked-away parks, the best days to go to the local independent movie theater, and that hole-in-the-wall with great ramen.',
    stack: {
      front: ['React', 'Redux'],
      back: ['Node.js', 'Express'],
      db: ['PostgreSQL']
    },
    demo: {
      url: 'https://localize-production.herokuapp.com/',
      text: 'localize demo'
    },
    code: {
      url: 'https://github.com/hjmccain/maplyful',
      text: 'localize code'
    },
    role: 'LOCALIZE was a collaborative project with Megan Smith. My focus was on React & Redux, with special attention given to map & search functionality, as well as the ability to filter the results on the map and pin locations to the map.',
    whatILearned: ''
  }
}
