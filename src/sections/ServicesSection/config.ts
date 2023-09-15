import {ServiceBlockProps} from "./ServiceBlock/ServiceBlock";
import foldersImage from 'shared/images/foldersImage.png'
import houseImage from 'shared/images/houseImage.png'
import helmetImage from 'shared/images/helmetImage.png'


export const SERVICE_LIST: ServiceBlockProps[] = [
    {
        imgSrc: foldersImage,
        imgAlt: 'Folders image',
        title: 'Cost-effectiveness',
        description: 'Save time and money. You don’t have to spend time recruiting new employees and worry about the costs arising from employees on sick leave, taxes, accommodation, transport and other related contributions.\n' +
            'Staff outsourcing enables the hiring of the necessary staff for temporary or permanent work, transferring the business process to our service.\n' +
            'Let you focus on the core aspects of your business, we\'ll do the rest for you.'
    },
    {
        imgSrc: houseImage,
        imgAlt: 'Image of a house and a car',
        title: 'Transport and accommodation',
        description: 'We arrange suitable accommodation and transport. All our houses meet the required standards, which allows people to enjoy life outside of work processes in peace and comfort, allowing to increase the efficiency of involvement in work, and therefore increase the bottom line. Staff can use our transport service free of charge, ables them to be on time at working place.'
    },
    {
        imgSrc: helmetImage,
        imgAlt: 'Image of a worker',
        title: 'Certification',
        description: 'We have all the necessary certificates, and we work in accordance with laws and regulations of The Netherlands. For staff accommodation, we have obtained the NEN4400-1 certificate.Safety first! According to the general norms, employees undergo a labor safety courses and obtain with VCA, DPI, IPAF, 017 SCC or 018 SCC, VVL and other required certificates'
    }
]
