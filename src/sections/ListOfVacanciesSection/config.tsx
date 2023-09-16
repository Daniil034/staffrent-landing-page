import {VacancyItemProps} from "./VacancyItem/VacancyItem";
import locksmithImg from 'shared/images/locksmithImage.png'
import technicianImg from 'shared/images/technicianImage.png'
import solarTechnicianImg from 'shared/images/solarTechnicianImage.png'

export const VACANCY_LIST: VacancyItemProps[] = [
    {
        title: 'Fitter - Erector For Production Warehouse',
        imageSrc: locksmithImg,
        imagePosition: 'right',
        imageMarginRight: -6,
        imageMarginLeft: -6,
        bulletPoints: [
            {
                bulletPointTitle: 'Responsibilities:',
                bulletPointBody: <>
                    - Performing locksmith work on the manufacture and installation of metal structures;<br/>
                    - Performing work with hand tools;<br/>
                    - Material preparation (cutting and cleaning of metal);<br/>
                    - Assembly of metal products (sheet, pipe, wire);<br/>
                    - Assembly of metal structures;<br/>
                    - Welding works.
                </>
            },
            {
                bulletPointTitle: 'Requirements:',
                bulletPointBody: <>
                    - At least 3 years experience in locksmithing;<br/>
                    - Reading blueprints;<br/>
                    - Skills and experience with power tools;<br/>
                    - Secondary specialized technical education - desirable;<br/>
                    - Experience in a manufacturing environment - desirable;<br/>
                    - Integrity, discipline, diligence.
                </>
            },
            {
                bulletPointTitle: 'Conditions:',
                bulletPointBody: <>
                    - Official registration;<br/>
                    - Work clothes and hand tools are provided;<br/>
                    - Daily work schedule (5/2);<br/>
                    - Stable salary and the possibility of advances;<br/>
                    - Good working conditions and constant support of the curator;<br/>
                    - Housing and transport provided;<br/>
                    - Assistance with the preparation of all documents.
                </>
            }
        ]
    },
    {
        title: 'Technician / Hydraulics specialist',
        imageSrc: technicianImg,
        imagePosition: 'left',
        imageMarginLeft: -7,
        imageMarginRight: -6,
        bulletPoints: [
            {
                bulletPointTitle: 'Job description:',
                bulletPointBody: <>
                    - repair and maintenance of hydraulic equipment and units<br/>
                    - hydraulic piping installation<br/>
                    - making hydraulic hoses<br/>
                    - repair of hydraulic cylinders<br/>
                    - creation and implementation of hydraulic solutions
                </>
            },
            {
                bulletPointTitle: 'Expectations for the candidate:',
                bulletPointBody: <>
                    - previous contact with technical maintenance and repair work<br/>
                    - at least category B driver's license<br/>
                    - accuracy and sense of duty<br/>
                    - the will to learn and improve oneself<br/>
                    - English language skills<br/>
                    - knowledge and skills in hydraulics, mechanics and electricity will be useful
                </>
            },
            {
                bulletPointTitle: 'Conditions:',
                bulletPointBody: <>
                    - Official registration;<br/>
                    - Work clothes and hand tools are provided;<br/>
                    - Daily work schedule (5/2);<br/>
                    - Stable salary and the possibility of advances;<br/>
                    - Good working conditions and constant support of the curator;<br/>
                    - Housing and transport provided;<br/>
                    - Assistance with the preparation of all documents.
                </>
            }
        ]
    },
    {
        title: 'Solar panels technician',
        imageSrc: solarTechnicianImg,
        imageMarginRight: -8,
        imageMarginLeft: -6,
        imagePosition: 'right',
        bulletPoints: [
            {
                bulletPointTitle: '',
                bulletPointBody: `
                    The Inspection Technician is responsible for scheduling, performing and recording all required inspections for installed projects. You will be walking through with the assigned inspectors ensuring that the solar system is installed properly and in compliance with all regulations! This position will also require you to make any minor repairs in order to attain approval!
                `
            },
            {
                bulletPointTitle: 'Job description:',
                bulletPointBody: <>
                    - Perform solar, electrical, or building inspections as scheduled<br/>
                    - Coordinate inspections with customers and jurisdictions<br/>
                    - Maintain an organized and efficient calendar<br/>
                    - Build a positive and lasting customer experience, discussing project timelines post inspection
                    signoff, detailing and communicating concerns internally<br/>
                    - Use software systems to record, maintain and update project specific deliverables and tasks<br/>
                    - Potentially need to complete minor tasks such as painting conduit, applying NEC stickers/placards,
                    etc.
                </>
            },
            {
                bulletPointTitle: 'Expectations for the candidate:',
                bulletPointBody: <>
                    - Solar installation or Solar electrical experience is preferred<br/>
                    - An individual who possess a valid driver’s license and maintain a clean driving record<br/>
                    - Adhere to company safety policies and procedures<br/>
                    - Must have excellent organizational and time-management skills<br/>
                    - Strong communication skills in order to offer exceptional customer service and interact with
                    customers and inspectors in a professional and courteous manner<br/>
                    - Must be comfortable working at heights<br/>
                    - Electrical experience (3+ year)
                </>
            }
        ]
    }
]
