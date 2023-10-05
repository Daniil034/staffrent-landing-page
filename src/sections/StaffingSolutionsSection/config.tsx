import {SolutionItemProps} from "./SolutionItem/SolutionItem";
import cleanerImage from 'shared/images/cleanerImage.png'
import manWithRopeImage from 'shared/images/manWithRopeImage.png'
import carsImage from 'shared/images/carsImage.png'

export const SOLUTION_LIST: SolutionItemProps[] = [
    {
        title: 'Kuidas outstaffing teie jaoks midagi muudab?',
        body: <p>
            Outstaffing võimaldab teil lahendada mitmeid töötajatega seotud probleeme nii väikestes kui ka suurtes
            ettevõtetes üle Hollandi. "Alates 2006. aastast on personaliteenus muutunud populaarseks kodumaiste
            tööandjate seas. Meie 10 tegevuse jooksul on enam kui 1000 meie klienti kasutanud personaliteenust ja sellel
            on mitu põhjust:
            <ul>
                <li>Välisriikide kodanike registreerimine vastavalt ELi õigusaktidele.</li>
                <li>Kaitse reguleerivate asutuste kontrollimise ajal.</li>
                <li>Maksumaksed G-konto kaudu ja väiksemad personalikulud.</li>
                <li>Puuduvad kohustused seoses töösuhetega töötajatega.</li>
                <li>Pakutakse eluaset, transporti ja tööriideid.</li>
            </ul>
        </p>,
        backgroundImgSrc: cleanerImage
    },
    {
        title: 'OTSE PALGATUD TÖÖTAJAD',
        body: <p>
            Oleme värbamisprotsessi suhtes väga tähelepanelikud, sest koostööga peavad rahule jääma nii töötaja kui ka
            tööandja. Seetõttu hoolitseme teile uute talentide leidmise ja pakkumise eest. Tööjõurent toob järjepidevuse
            ka teie tegevusse. Näiteks saate koos meiega luua oma ettevõtte vajadustele vastava talendipagasi. Nii saate
            kiiresti veenduda, et teil on õiget tüüpi talente.
            <ul>
                <li>lühikesed liinid ja selged kokkulepped;</li>
                <li>Sa saad inimesi, kellele saad toetuda/keda usaldada;</li>
                <li>Saate inimesi, kes on 100% pühendunud;</li>
                <li>Saate alalise rühma inimesi, kes on valmis teie heaks lühemat aega töötama.</li>
            </ul>
            Vastuvõetud töid kontrollivad meie ettevõtte juhid. Juht viibib töökohal iga päev, kontrollides tehtud tööd
            ja lahendades probleeme. Nii et te ei pea muretsema töö, paberimajanduse jms pärast.
        </p>,
        backgroundImgSrc: carsImage
    }
]
