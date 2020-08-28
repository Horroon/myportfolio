import { ColumnFace } from '../interfaces'

//games
import CMNDO from '../../../assets/games/commando2.webp';
import NFS from '../../../assets/games/NFS.webp';
import IGI from '../../../assets/games/IGI.webp';
import AOE from '../../../assets/games/AOE.webp'
//games end

export const Games: Array<ColumnFace> = [
    {
        title: "IGI", img: IGI, desc: `
        <h6>Developer: Innerloop Studios</h6>
        <h6>Designer: Gavin Skinner</h6>
        <h6>Publishers: Eidos Interactive, Square Enix Europe</h6>
        <h6>Platform: Microsoft Windows</h6>
    <p>
    Project I.G.I. is a tactical first-person shooter video game developed by Innerloop Studios and released in December 2000 by Eidos Interactive</P>
`, releaseYr: "December 8, 2000"
    },
    {
        title: "IGI2", img: IGI, desc: `
        <h6>Developer: Innerloop Studios</h6>
        <h6>Designer: Gavin Skinner</h6>
        <h6>Publishers: Eidos Interactive, Square Enix Europe</h6>
        <h6>Platform: Microsoft Windows</h6>
    <p>
    Project I.G.I. is a tactical first-person shooter video game developed by Innerloop Studios and released in December 2000 by Eidos Interactive</P>
`, releaseYr: "December 8, 2000"
    },
    {
        title: "Commando 2", img: CMNDO, desc: `
        <h6>Genre: Real-time tactics</h6>
        <h6>Series: Commandos</h6>
        <h6>Developer: Pyro Studios</h6>
        <h6>Designer: Gonzalo Suárez Girard</h6>
        <h6>Platforms: Microsoft Windows, PlayStation 2, Xbox, Macintosh operating systems</h6>
<p>
Commandos 2: Men of Courage is a real-time tactics video game, developed by Pyro Studios, published by Eidos Interactive, and released on September 20, 2001.
</P>
`, releaseYr: "1967"
    }, {
        title: "Need for speed", img: NFS, desc: `
        <h6>Publishers: Electronic Arts, Nexon, EA Mobile, NEXON Korea, MORE</h6>
        <h6>Developers: Electronic Arts, Criterion Software, EA Gothenburg, MORE</h6>
        <h6>Designers: Andy Tudor, Riley Cooper</h6>
<p>Need for Speed is a racing video game franchise published by Electronic Arts and currently developed by Criterion Games, the developers of Burnout. The series centers around illicit street racing and in general tasks players to complete various types of races while evading the local law enforcement in police pursuits.</P>
`, releaseYr: "August 31, 1994"
    }, {
        title: "Age Of Empire", img: AOE, desc: `
        <h6>Genre: Real-time strategy</h6>
        <h6>Developers: Ensemble Studios, Relic Entertainment, MORE</h6>
        <h6>Designers: Ensemble Studios, Bruce Shelley, Rick Goodman</h6>
    <p>Age of Empires is a series of historical real-time strategy video games, originally developed by Ensemble Studios and published by Xbox Game Studios. The first game of the series was Age of Empires, released in 1997. Seven other games and three spin-offs have been released. </P>
`, releaseYr: "1967"
    },]