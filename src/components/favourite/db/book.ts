import { ColumnFace } from '../interfaces'


import LMB from '../../../assets/books/LMB.webp'
import tariq from '../../../assets/books/tariqbz.webp'
import quaid from '../../../assets/books/quaid.webp'
import quran from '../../../assets/books/quran.webp'

export const Books: Array<ColumnFace> = [
    {
        title: "Only Quran", img: quran,
        desc: `
    <h6>
     Auther: Martin Lings
    </h6>
    <h6>
    Genre: Biography
    </h6>
    <p>
    Martin Lings’ biography of Muhammad is an internationally acclaimed, comprehensive, and authoritative account of the life of the prophet. Based on the sira, the eighth- and ninth-century Arabic biographies that recount numerous events in the prophet’s life, it contains original English translations of many important passages that reveal the words of men and women who heard Muhammad speak and witnessed the events of his life</P>
`, releaseYr: "October 6, 2006"
    },
    {
        title: "Muhammad's Life", img: LMB,
        desc: `
    <h6>
     Auther: Martin Lings
    </h6>
    <h6>
    Genre: Biography
    </h6>
    <p>
    Martin Lings’ biography of Muhammad is an internationally acclaimed, comprehensive, and authoritative account of the life of the prophet. Based on the sira, the eighth- and ninth-century Arabic biographies that recount numerous events in the prophet’s life, it contains original English translations of many important passages that reveal the words of men and women who heard Muhammad speak and witnessed the events of his life</P>
`, releaseYr: "October 6, 2006"
    }

    , {
        title: "Tariq Bin Zayad", img: tariq,

        desc: `
    <h6>
     Auther: G. Allana
    </h6>
    <h6>
    Genre: Biography
    </h6>
    <p>
    It was intense, very detailed and I needed time to digest each chapter. I read this book because Fatima Jinnah in her book "My Brother" mentions G. Allana as a good friend who was helping with her book.
    </P>
`, releaseYr: "1967"
    },
    {
        title: "Quaid e Azam", img: quaid,
        desc: `
    <h6>
     Auther: G. Allana
    </h6>
    <h6>
    Genre: Biography
    </h6>
    <p>
    It was intense, very detailed and I needed time to digest each chapter. I read this book because Fatima Jinnah in her book "My Brother" mentions G. Allana as a good friend who was helping with her book.
    </P>
`, releaseYr: "1967"
    }

]