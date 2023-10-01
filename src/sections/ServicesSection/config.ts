import {ServiceBlockProps} from "./ServiceBlock/ServiceBlock";
import foldersImage from 'shared/images/foldersImage.png'
import houseImage from 'shared/images/houseImage.png'
import helmetImage from 'shared/images/helmetImage.png'
import {folders_description, folders_title} from "../../content/en/MainPage/ServicesSectionContent/services/FoldersContent";
import {house_description, house_title} from "../../content/en/MainPage/ServicesSectionContent/services/HouseContent";
import {helmet_description, helmet_title} from "../../content/en/MainPage/ServicesSectionContent/services/HelmetContent";


export const SERVICE_LIST: ServiceBlockProps[] = [
    {
        imgSrc: foldersImage,
        imgAlt: 'Folders image',
        title: folders_title,
        description: folders_description
    },
    {
        imgSrc: houseImage,
        imgAlt: 'Image of a house and a car',
        title: house_title,
        description: house_description
    },
    {
        imgSrc: helmetImage,
        imgAlt: 'Image of a worker',
        title: helmet_title,
        description: helmet_description
    }
]
