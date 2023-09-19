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
        title: 'Welding job',
        money: '28',
        description: {
            position: 'MIG-MAG-TIG-MMA-Gaz-Plazma welding',
            country: 'Netherlands',
            text: <>
                <p>MIG (Metal Inert Gas) - using inert gas. MIG machines are perfect for welding aluminum, copper, titanium products, nickel and various alloys - From 2 mm. and higher </p>
                <p>MAG (Metal Active Gas) - using nitrogen, carbon dioxide and other gases that bind oxygen. The type of welding is used for workpieces made of low-alloy, non-alloy and corrosion-resistant steels - From 1 mm and above</p>
                <p>TIG welding (TIG) - instead of a wire or a consumable electrode, a refractory tungsten electrode with a high melting point is used. The process takes place in a protective gas environment - argon. By itself, the electrode for argon arc welding cannot be melted. Therefore, filler material from the same metal as the workpiece can be used for the weld. In some cases, the seam is formed as a result of edge melting - From 0.5 mm and above</p>
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
        title: 'CNC 2D & 3D FLAT LASER cutting servises',
        money: '34',
        description: {
            position: 'cnc operators',
            country: 'NL',
            text: <>
                <p>3D laser cutting services provide unlimited potential for metal fabrication. With precision and speed, 3D lasers can cut a wide variety of features in tubes, channels, angles and beams. You benefit from the combination of the latest laser tube cutting machines, technology and skilled craftsmanship for a streamlined process that lowers costs, speeds up cycle times and expands design capabilities. </p>
                <p>STAFFRENT as a leading provider of tube laser cutting specialists in Baltic region and throughout the Eastern Europe, we’re able to handle your complete range of needs. Whether you’re developing a prototype or require high-volume production, our experienced team will work with you to provide the most cost-effective and efficient 3D laser cutting services. Our specialists successfully produced precision-cut parts, components, weldments and assemblies for industries such as automotive, agriculture, energy, heavy equipment, hardware, fabrication and many others.</p>
            </> ,
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
        title: 'CNC bending and forming',
        money: '36',
        description: {
            position: 'Bending and forming specialists',
            country: 'NL',
            text: <>
                <p>At STAFFRENT, we take pride in our ability to meet our customers’ needs across a wide range of outstaffing services in Metal and Steel sectors. That’s why we offer metal bending and metal forming specialists that are strongly experienced in use of CNC hydraulic press brakes, comprehensive tooling and full CAD/CAM capabilities in the Your facility where STAFFRENT specialists able to make complex machining, welding, laser cutting and more works.</p>
                <p>Our CNC bending and forming specialists can accommodate everything from the simplest to the most complex bends on your fabrication project.</p>
                <p>STAFFRENT can provide metal bending specialists for a wide range of industries, including automotive, recreational vehicles and more. Regardless of your industry, we’ll always meet your expectations regarding quality, service and on-time specialist delivery — that’s been the core of our operating philosophy since we first opened for business in 2013.</p>
            </> ,
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
        title: 'Assembly of steel structures',
        money: '30',
        description: {
            position: 'Erectors and Assemblers',
            country: 'NL',
            text: <p>STAFFRENT steel structure erection team is made up of highly qualified technicians, trainded by the company itself, who have the maximum experiencia and expertise in this type of activity. Our professionals are qualified to undertake any steel structure assembly job with the highest degree of satisfaction. Specialist possess with VCA, IPAF, VVL, SCC certificates. At each stage of the assembly process we control the strict compliance of each established safety measure, as well as the use of each of the individual and collective protection equipment, according to current regulations.</p> ,
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
        title: 'Carpentry and masonry works',
        money: '28',
        description: {
            position: 'Carpenters & Bricklayers',
            country: 'NL',
            text: <>
                <p>STAFFRENT have over 100 experienced specialists in the construction industry, including assebly works of prefabricated houses. Our team is dedicated to providing quality work and customer service, as well as organizational skills that allow us to perform all tasks efficiently while maintaining high standards of professionalism.</p>
                <p>The carpenter and masonry specialists are involved for the installation, repair, maintenance and replacement of woodwork in a variety of building types. Specialists have strong attention to detail with excellent customer service skills as well as proficiency with hand tools and other materials used in construction work. </p>
                <p>STAFFRENT carpenter and masonry specialists: </p>
                <ul>
                    <li>Perform all carpentry and masonry work in accordance with client standards.</li>
                    <li>Provide quality workmanship on projects, including installing woodwork, installing doors, building walls, painting interior windows.</li>
                    <li>Adhere to safety rules and regulations when performing job duties.</li>
                    <li>Able to work in all weather conditions -. Possess medical insurance.</li>
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
        title: 'Warehouse workers',
        money: '22',
        description: {

            position: 'In and Outside',
            country: 'NL',
            text: <>
                <p>Cargo processing, order picking, stickering, marking, packaging, all these works require certain knowledge and skills. If these works are performed by unskilled warehouse personnel, then this will certainly affect the speed of the sale of goods and the volume of your sales. This is all the more relevant if you are selling perishable goods or the product is being sold as part of a promotion. In any case, you should be interested in the fact that the work in your company is performed by qualified warehouse personnel.</p>
                <p>If you become a client of the STAFFRENT company, you will not have to overcome such difficulties. We employ only highly qualified specialists. The warehouse staff of our company is able to assist in carrying out warehouse work of any level of complexity, including the packaging of goods, their packaging and preparation for sale.</p>
                <p>We offer:</p>
                <ul>
                    <li>Packers</li>
                    <li>Drivers of forklifts and other lifting machines</li>
                    <li>Quality control specialists</li>
                    <li>Movers</li>
                    <li>Sticker and Markers</li>
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
