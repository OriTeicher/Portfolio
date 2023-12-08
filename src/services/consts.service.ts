import { Song } from '../components/Hobbies'
const GITHUB_URL = 'https://github.com/OriTeicher'
const LINKEDIN_URL = 'https://www.linkedin.com/in/oriteicher'
const GMAIL_ADRESS = 'https://github.com/OriTeicher/'
const SONGS_DATA: { guitar: Song[]; piano: Song[] } = {
     guitar: [
          { title: 'Tears In Heaven', artist: 'Eric Clapton', link: 'https://www.youtube.com/watch?v=3U4yDkvRjvs&ab_channel=TomKovats' },
          { title: 'Every Breath You Take', artist: 'The Police', link: 'https://www.youtube.com/watch?v=_YrDIC5tZcA&ab_channel=GuitarZero2HeroExpress' },
          { title: "You've Got a Friend In Me", artist: 'Randy Newman', link: 'https://www.youtube.com/watch?v=aWhXUMbmHCA&ab_channel=AcousticTrench' },
          { title: 'Slow Dancing In a Burning Room', artist: 'John Mayer', link: 'https://www.youtube.com/watch?v=bwKXx0Ub10k&t=204s&ab_channel=SunghaJung' }
     ],
     piano: [
          { title: 'The 30th', artist: 'The Theorist', link: 'https://www.youtube.com/watch?v=w_Vgj8ndPtw&ab_channel=TheTheorist' },
          { title: 'Nuvole Bianche', artist: 'Ludovico Einaudi', link: 'https://www.youtube.com/watch?v=VUCI-1vIbUo&ab_channel=LudovicoEinaudiVEVO' },
          { title: 'River Flows In You', artist: 'Yiruma', link: 'https://www.youtube.com/watch?v=7maJOI3QMu0&ab_channel=YirumaVEVO' },
          { title: 'Merry Go Round of Life', artist: 'Joe Hisaishi', link: 'https://www.youtube.com/watch?v=UFsREhllq0c&ab_channel=PaRaD1SE' }
     ]
}
export const constsService = {
     GITHUB_URL,
     LINKEDIN_URL,
     GMAIL_ADRESS,
     SONGS_DATA
}
