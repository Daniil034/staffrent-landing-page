import {ActivityBlockProps} from "./ActivityBlock/ActivityBlock";
import welderImg from 'shared/images/welderImage.png';
import laserImg from 'shared/images/laserImage.png';
import bendedMetalImg from 'shared/images/bendedMetalImage.png';
import constructorImg from 'shared/images/constructorImage.png';
import carpenterImg from 'shared/images/carpenterImage.png';
import warehouseWorkerImg from 'shared/images/warehouseWorkerImage.png';

export const ACTIVITY_LIST: ActivityBlockProps[] = [
    {
        imgSrc: welderImg,
        imgAlt: 'Picture of a welder',
        title: 'Welding job',
        money: '28',
        infoHref: '/'
    },
    {
        imgSrc: laserImg,
        imgAlt: 'Cutting laser picture',
        title: 'CNC 2D & 3D FLAT LASER cutting servises',
        money: '34',
        infoHref: '/'
    },
    {
        imgSrc: bendedMetalImg,
        imgAlt: "Picture of bended metal",
        title: 'CNC bending and forming',
        money: '36',
        infoHref: '/'
    },
    {
        imgSrc: constructorImg,
        imgAlt: "Picture of a constructor worker",
        title: 'Assembly of steel structures',
        money: '30',
        infoHref: '/'
    },
    {
        imgSrc: carpenterImg,
        imgAlt: "Picture of carpenters",
        title: 'Carpentry and masonry works',
        money: '28',
        infoHref: '/'
    },
    {
        imgSrc: warehouseWorkerImg,
        imgAlt: "Picture of a warehouse worker",
        title: 'Warehouse workers',
        money: '22',
        infoHref: '/'
    }
]
