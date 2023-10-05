import {VacancyItemProps} from "./VacancyItem/VacancyItem";
import locksmithImg from 'shared/images/locksmithImage.png'
import technicianImg from 'shared/images/technicianImage.png'
import solarTechnicianImg from 'shared/images/solarTechnicianImage.png'

export const VACANCY_LIST: VacancyItemProps[] = [
    {
        title: 'A Paigaldaja - Tootmislao püstitaja',
        imageSrc: locksmithImg,
        imagePosition: 'right',
        imageMarginRight: -6,
        imageMarginLeft: -6,
        bulletPoints: [
            {
                bulletPointTitle: 'Kohustused:',
                bulletPointBody: <>
                    - <span>Metallkonstruktsioonide</span> valmistamise ja paigaldamise lukksepatööde teostamine;<br/>
                    - <span>Töö</span> tegemine käsitööriistadega;<br/>
                    - <span>materjali</span> ettevalmistamine (metalli lõikamine ja puhastamine);<br/>
                    - <span>metalltoodete</span> (leht, toru, traat) kokkupanek;<br/>
                    - <span>metallkonstruktsioonide</span> kokkupanek;<br/>
                    - <span>Keevitustööd</span>.
                </>
            },
            {
                bulletPointTitle: 'Nõuded:',
                bulletPointBody: <>
                    - <span>Vähemalt</span> 3-aastane kogemus lukksepatöös;<br/>
                    - <span>jooniste</span> lugemine;<br/>
                    - <span>Oskused</span> ja kogemused elektritööriistadega;<br/>
                    - <span>keskharidusega</span> tehniline haridus - soovitav;<br/>
                    - <span>Kogemus</span> tootmiskeskkonnas - soovitav;<br/>
                    - <span>Ausus</span>, distsipliin, töökus.
                </>
            },
            {
                bulletPointTitle: 'Tingimused:',
                bulletPointBody: <>
                    - <span>ametlik</span> registreerimine;<br/>
                    - <span>Olemas</span> on tööriided ja käsitööriistad;<br/>
                    - <span>Igapäevane</span> töögraafik (5/2);<br/>
                    - <span>stabiilne</span> palk ja ettemaksete võimalus;<br/>
                    - <span>Head</span> töötingimused ja kuraatori pidev toetus;<br/>
                    - <span>Pakutakse</span> majutust ja transporti;<br/>
                    - <span>Abi</span> kõigi dokumentide ettevalmistamisel.
                </>
            }
        ]
    },
    {
        title: 'Ökonik/Hüdraulika spetsialist',
        imageSrc: technicianImg,
        imagePosition: 'left',
        imageMarginLeft: -7,
        imageMarginRight: -6,
        bulletPoints: [
            {
                bulletPointTitle: 'Töö kirjeldus:',
                bulletPointBody: <>
                    - <span>hüdraulikaseadmete</span> ja -seadmete remont ja hooldus<br/>
                    - <span>Hüdraulilise</span> torustiku paigaldus<br/>
                    - <span>Hüdraulikavoolikute</span> valmistamine<br/>
                    - <span>hüdrosilindrite</span> remont<br/>
                    - <span>hüdrauliliste</span> lahenduste loomine ja rakendamine
                </>
            },
            {
                bulletPointTitle: 'Ootused kandidaadile:',
                bulletPointBody: <>
                    - <span>eelnev</span> kokkupuude tehniliste hooldus- ja remonditöödega<br/>
                    - <span>vähemalt</span> B-kategooria juhiluba<br/>
                    - <span>täpsus</span> ja kohusetunne<br/>
                    - <span>tahe</span> õppida ja ennast täiendada<br/>
                    - <span>Inglise</span> keele oskus<br/>
                    - <span>kasulikud</span> on teadmised ja oskused hüdraulika, mehaanika ja elektri valdkonnas
                </>
            },
            {
                bulletPointTitle: 'Tingimused:',
                bulletPointBody: <>
                    - <span>ametlik</span> registreerimine;<br/>
                    - <span>Olemas</span> on tööriided ja käsitööriistad;<br/>
                    - <span>Igapäevane</span> töögraafik (5/2);<br/>
                    - <span>stabiilne</span> palk ja ettemaksete võimalus;<br/>
                    - <span>Head</span> töötingimused ja kuraatori pidev toetus;<br/>
                    - <span>Pakutakse</span> majutust ja transporti;<br/>
                    - <span>Abi</span> kõigi dokumentide koostamisel.
                </>
            }
        ]
    },
    {
        title: 'Päikesepaneelide tehnik',
        imageSrc: solarTechnicianImg,
        imageMarginRight: -8,
        imageMarginLeft: -6,
        imagePosition: 'right',
        bulletPoints: [
            {
                bulletPointTitle: '',
                bulletPointBody: `
                    Inspekteerimistehnik vastutab installitud projektide kõigi vajalike kontrollide ajastamise, läbiviimise ja salvestamise eest. Te kõnnite koos määratud inspektoritega läbi, tagades, et päikesesüsteem on õigesti paigaldatud ja kooskõlas kõigi eeskirjadega! See ametikoht nõuab heakskiidu saamiseks ka väikeste remonditööde tegemist!
                `
            },
            {
                bulletPointTitle: 'Töö kirjeldus:',
                bulletPointBody: <>
                    - Teostage plaanipäraselt päikese-, elektri- või ehitusülevaatusi<br/>
                    - Koordineerida kontrolle klientide ja jurisdiktsioonidega<br/>
                    - Korrastatud ja tõhusa kalendri pidamine<br/>
                    - Looge positiivne ja püsiv kliendikogemus, arutades projekti ajakavasid pärast ülevaatuse
                    allkirjastamist, täpsustades ja edastades muresid sisemiselt<br/>
                    - Kasutage tarkvarasüsteeme projektipõhiste tulemuste ja ülesannete salvestamiseks, haldamiseks ja
                    värskendamiseks<br/>
                    - Potentsiaalselt on vaja täita väiksemaid ülesandeid, nagu kanali värvimine, NEC kleebiste /
                    plakatite rakendamine jne,
                    etc.
                </>
            },
            {
                bulletPointTitle: 'Ootused kandidaadile:',
                bulletPointBody: <>
                    - Eelistatud on päikesepaigaldis või päikeseelektri kogemus<br/>
                    - Isik, kellel on kehtiv juhiluba ja kes peab puhast sõiduarvestust<br/>
                    - Järgige ettevõtte ohutuseeskirju ja -protseduure<br/>
                    - Peab omama suurepäraseid organiseerimis- ja ajajuhtimisoskusi<br/>
                    - Tugev suhtlemisoskus, et pakkuda erakordset klienditeenindust ning suhelda klientide ja
                    inspektoritega professionaalselt ja viisakalt<br/>
                    - Peab olema mugav töötada kõrgustes<br/>
                    - Elektrikogemus (3+ aastat)
                </>
            }
        ]
    }
]
