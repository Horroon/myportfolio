import { ColumnFace } from '../interfaces';

//movies
import Dangal from '../../../assets/movies/dangal.webp';
import Idiot from '../../../assets/movies/idiot.webp';
import richardparker from '../../../assets/movies/richardparker.webp';
import Titanic from '../../../assets/movies/titanic.webp';
//end movies

export const Movies: Array<ColumnFace> = [
    {
        title: "3 Idiots", img: Idiot, desc: `
    <h6>
     Director: Rajkumar Hirani
    </h6>
    <h6>
    Type: Comedy/Drama
    </h6>
    <p>
    In college, Farhan and Raju form a great bond with Rancho due to his refreshing outlook. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive.
    </P>
`, releaseYr: "December 23, 2009"
    }, {
        title: "Dangal", img: Dangal, desc: `
        <h6>
        Director: Nitesh Tiwari
        </h6>
        <h6>
        Type: Sport/Drama
        </h6>
        <p>
        Mahavir Singh Phogat, a former wrestler, decides to fulfil his dream of winning a gold medal for his country by training his daughters for the Commonwealth Games despite the existing social stigmas.
        </P>
    `, releaseYr: "December 21, 2016"
    }, {
        title: "Richard Parker", img: richardparker, desc: `
             <h6>
             Director: Ang Lee
             </h6>
             <h6>
             Type: Adventure/Drama
             </h6>
             <p>
             Pi Patel finds a way to survive in a lifeboat that is adrift in the middle of nowhere. His fight against the odds is heightened by the company of a hyena and a male Bengal tiger.
             </P>
         `, releaseYr: "November 30, 2012"
    }, {
        title: "Titanic", img: Titanic, desc: `
                  <h6>
                  Director: James Cameron
                  </h6>
                  <h6>
                  Type: Romance/Drama
                  </h6>
                  <p>
                  Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.
                   </P>
              `, releaseYr: "November 18, 1997"
    },]
