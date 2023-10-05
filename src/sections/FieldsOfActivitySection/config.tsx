import {ActivityBlockProps} from "./ActivityBlock/ActivityBlock";
import welderImg from 'shared/images/welderImage.png';
import laserImg from 'shared/images/laserImage.png';
import bendedMetalImg from 'shared/images/bendedMetalImage.png';
import constructorImg from 'shared/images/constructorImage.png';
import carpenterImg from 'shared/images/carpenterImage.png';
import warehouseWorkerImg from 'shared/images/warehouseWorkerImage.png';
import welding1Img from 'shared/images/welding/welding1.png';
import welding2Img from 'shared/images/welding/welding2.png';
import welding3Img from 'shared/images/welding/welding3.png';
import cnc2d1Img from 'shared/images/cnc2d/cnc2d1.png';
import cnc2d2Img from 'shared/images/cnc2d/cnc2d2.png';
import cnc2d3Img from 'shared/images/cnc2d/cnc2d3.png';
import cncBending1 from 'shared/images/cncBending/cncBending1.png';
import cncBending2 from 'shared/images/cncBending/cncBending2.png';
import cncBending3 from 'shared/images/cncBending/cncBending3.png';
import assembly1 from 'shared/images/assembly/assembly1.png';
import assembly2 from 'shared/images/assembly/assembly2.png';
import assembly3 from 'shared/images/assembly/assembly3.png';
import carpentry1 from 'shared/images/carpentry/carpentry1.png';
import carpentry2 from 'shared/images/carpentry/carpentry2.png';
import carpentry3 from 'shared/images/carpentry/carpentry3.png';
import warehouse1 from 'shared/images/warehouse/warehouse1.png';
import warehouse2 from 'shared/images/warehouse/warehouse2.png';
import warehouse3 from 'shared/images/warehouse/warehouse3.png';
import {ActivityDescription} from "../../pages/ActivityPage/ActivityPage";

type ActivityList = (Omit<ActivityBlockProps, 'index'> & {
    description: ActivityDescription
})[]

export const ACTIVITY_LIST: ActivityList = [
    {
        imgSrc: welderImg,
        imgAlt: 'Picture of a welder',
        title: 'Keevitustööd',
        money: '16',
        description: {
            position: 'MIG-MAG-TIG-MMA-Gaz-Plazma welding',
            country: 'Netherlands',
            text: <>
                <p>MIG (Metal Inert Gas) - kasutades inertset gaasi. MIG-masinad sobivad ideaalselt alumiiniumi, vase,
                    titaantoodete, nikli ja erinevate sulamite keevitamiseks - alates 2 mm. ja rohkem</p>
                <p>MAG (Metal Active Gas) - kasutades lämmastikku, süsinikdioksiidi ja muid hapnikku siduvaid gaase.
                    Keevituse tüüpi kasutatakse madala legeeritud, legeerimata ja korrosioonikindlast terasest
                    töödeldavate detailide jaoks - alates 1 mm ja rohkemTIG-keevitus (TIG) - traadi või tarbitava
                    elektroodi asemel kasutatakse kõrge sulamistemperatuuriga tulekindlat volframelektroodi. Protsess
                    toimub kaitsvas gaasikeskkonnas - argoonis</p>
                <p>Argoonkaarkeevituse elektroodi ei saa iseenesest sulatada. Seetõttu võib keevitamiseks kasutada
                    toorikuga samast metallist täitematerjali. Mõnel juhul moodustub õmblus serva sulamise tulemusena -
                    alates 0, 5 mm ja rohkem</p>
            </>,
            images: [
                welding1Img,
                welding2Img,
                welding3Img
            ],
            contactDetails: {
                location: 'Tallinn, Estonia'
            }
        }
    },
    {
        imgSrc: laserImg,
        imgAlt: 'Cutting laser picture',
        title: 'CNC 2D ja 3D LAMELASERLÕIKAMISE TEENUSED',
        money: '15',
        description: {
            position: 'cnc operators',
            country: 'NL',
            text: <>
                <p>3D laserlõikamisteenused pakuvad piiramatut potentsiaali metalli valmistamiseks. Täpsuse ja kiirusega
                    suudavad 3D-laserid lõigata torudes, kanalites, nurkades ja talades mitmesuguseid funktsioone. Saate
                    kasu uusimate lasertorude lõikamismasinate, tehnoloogia ja oskusliku meisterlikkuse kombinatsioonist
                    sujuva protsessi jaoks, mis vähendab kulusid, kiirendab tsükliaegu ja laiendab disainivõimalusi.</p>
                <p>STAFFRENT kui juhtiv torude laserlõikamise spetsialistide pakkuja Balti regioonis ja kogu
                    Ida-Euroopas suudame toime tulla kõigi teie vajadustega. Olenemata sellest, kas töötate välja
                    prototüüpi või vajate suuremahulist tootmist, teeb meie kogenud meeskond teiega koostööd, et pakkuda
                    kõige kulutõhusamaid ja tõhusamaid 3D-laserlõikamisteenuseid. Meie spetsialistid tootsid edukalt
                    täppislõigatud osi, komponente, keevisõmblusi ja komplekte sellistele tööstusharudele nagu
                    autotööstus, põllumajandus, energeetika, rasketehnika, riistvara, tootmine ja paljud teised</p>
            </>,
            images: [
                cnc2d1Img,
                cnc2d2Img,
                cnc2d3Img
            ],
            contactDetails: {
                location: 'Netherlands'
            }
        }
    },
    {
        imgSrc: bendedMetalImg,
        imgAlt: "Picture of bended metal",
        title: 'CNC painutamine ja vormimine',
        money: '16',
        description: {
            position: 'Bending and forming specialists',
            country: 'NL',
            text: <>
                <p>STAFFRENTis oleme uhked oma võime üle rahuldada oma klientide vajadusi mitmesuguste metalli- ja
                    terasesektori personaliteenuste osas. Sellepärast pakume metalli painutus- ja vormimisspetsialiste,
                    kellel on suured kogemused CNC hüdrauliliste presspidurite kasutamisel, terviklikke tööriistu ja
                    täielikke CAD/CAM-i võimalusi teie rajatises, kus STAFFRENT spetsialistid suudavad teha keerukaid
                    töötlus-, keevitus-, laserlõikamis- ja muid töid.Meie CNC painutus- ja vormimisspetsialistid
                    mahutavad teie valmistamisprojektis kõike alates kõige lihtsamatest kuni kõige keerukamate
                    painutusteni.</p>
                <p>STAFFRENT võib pakkuda metalli painutamise spetsialiste paljudele tööstusharudele, sealhulgas
                    autotööstusele, vabaajasõidukitele ja muule.</p>
                <p>Sõltumata teie tööstusharust vastame alati teie ootustele kvaliteedi, teeninduse ja õigeaegse
                    spetsialistide kohaletoimetamise osas - see on olnud meie tegevusfilosoofia tuum alates sellest, kui
                    me 2013. aastal esimest korda äritegevuseks avasime.</p>
            </>,
            images: [
                cncBending1,
                cncBending2,
                cncBending3
            ],
            contactDetails: {
                location: 'Tallinn, Estonia'
            }
        }
    },
    {
        imgSrc: constructorImg,
        imgAlt: "Picture of a constructor worker",
        title: 'Teraskonstruktsioonide kokkupanek',
        money: '15',
        description: {
            position: 'Erectors and Assemblers',
            country: 'NL',
            text: <p>STAFFRENT teraskonstruktsioonide püstitamise meeskond koosneb kõrgelt kvalifitseeritud tehnikutest,
                keda koolitab ettevõte ise ja kellel on seda tüüpi tegevuses maksimaalne kogemus ja asjatundlikkus. Meie
                spetsialistid on kvalifitseeritud tegema mis tahes teraskonstruktsioonide montaažitööd suurima
                rahulolugaSpetsialistil on VCA, IPAF, VVL, SCC sertifikaadid.
                Montaažiprotsessi igas etapis kontrollime iga kehtestatud ohutusmeetme ranget järgimist, samuti iga
                individuaalse ja kollektiivse kaitsevahendi kasutamist vastavalt kehtivatele eeskirjadele.</p>,
            images: [
                assembly1,
                assembly2,
                assembly3
            ],
            contactDetails: {
                location: 'Tallinn, Estonia'
            }
        }
    },
    {
        imgSrc: carpenterImg,
        imgAlt: "Picture of carpenters",
        title: 'Puusepa- ja müüritööd',
        money: '13',
        description: {
            position: 'Carpenters & Bricklayers',
            country: 'NL',
            text: <>
                <p>STAFFRENTil on üle 100 kogenud ehitusvaldkonna spetsialisti, sealhulgas elementmajade ehitustööd.
                    Meie meeskond on pühendunud kvaliteetse töö ja klienditeeninduse pakkumisele, samuti
                    organisatsioonilistele oskustele, mis võimaldavad meil kõiki ülesandeid tõhusalt täita, säilitades
                    samal ajal kõrged professionaalsuse standardid.</p>
                <p>Puusepa- ja müüritise spetsialistid on kaasatud mitmesuguste hoonetüüpide puidutööde paigaldamisele,
                    remondile, hooldusele ja asendamisele. Spetsialistidel on suur tähelepanu detailidele, millel on
                    suurepärased klienditeenindusoskused ning käsitööriistade ja muude ehitustöödel kasutatavate
                    materjalide tundmine</p>
                <p>STAFFRENT puusepa- ja müüritööde spetsialistid:</p>
                <ul>
                    <li>Tehke kõik puusepa- ja müüritööd vastavalt kliendi standarditele.</li>
                    <li>Pakkuge kvaliteetset tööd projektides, sealhulgas puidutööde paigaldamine, uste paigaldamine,
                        seinte ehitamine, siseakende värvimine.
                    </li>
                    <li>Järgige tööülesannete täitmisel ohutuseeskirju ja -eeskirju.</li>
                    <li>Oskab töötada kõikidel ilmastikutingimustel.</li>
                    <li>Omada tervisekindlustust.</li>
                </ul>
            </>,
            images: [
                carpentry1,
                carpentry2,
                carpentry3
            ],
            contactDetails: {
                location: 'Netherlands'
            }
        }
    },
    {
        imgSrc: warehouseWorkerImg,
        imgAlt: "Picture of a warehouse worker",
        title: 'Laotöötajad',
        money: '11,5',
        description: {

            position: '',
            country: 'NL',
            text: <>
                <p>Lasti töötlemine, tellimuste komplekteerimine, kleebimine, märgistamine, pakendamine, kõik need tööd
                    nõuavad teatud teadmisi ja oskusi. Kui neid töid teostavad kvalifitseerimata laotöötajad, mõjutab
                    see kindlasti kaupade müügi kiirust ja müügimahtu.

                    See on veelgi asjakohasem, kui müüte kiiresti riknevaid kaupu või kui toodet müüakse kampaania
                    osana. Igal juhul peaksite olema huvitatud asjaolust, et teie ettevõttes teeb tööd kvalifitseeritud
                    laopersonal.</p>
                <p>On

                    Kui saate ettevõtte STAFFRENT kliendiks, ei pea te selliseid raskusi ületama. Meil töötavad ainult
                    kõrgelt kvalifitseeritud spetsialistid. Meie ettevõtte laotöötajad on võimelised abistama igasuguse
                    keerukusega laotööde teostamisel, sealhulgas kaupade pakendamisel, pakendamisel ja müügiks
                    ettevalmistamisel. </p>
                <p>Pakume:</p>
                <ul>
                    <li>Packers</li>
                    <li>Kahveltõstukite ja muude tõsteseadmete juhid</li>
                    <li>Kvaliteedikontrolli spetsialistid</li>
                    <li>Liikunud</li>
                    <li>Kleebis ja markerid</li>
                </ul>
            </>,
            images: [
                warehouse1,
                warehouse2,
                warehouse3
            ],
            contactDetails: {
                location: 'Netherlands'
            }
        }
    }
]
