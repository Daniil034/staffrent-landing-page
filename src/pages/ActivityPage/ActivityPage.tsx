import {ComponentProps, ReactNode, useState} from "react";
import {useParams} from "react-router-dom";
import {Title} from "../../shared/ui/Title/Title";
import {ACTIVITY_LIST} from "../../sections/FieldsOfActivitySection/config";
import {Container} from "../../shared/ui/Container/Container";
import Slider, {CustomArrowProps} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ReactComponent as Arrow} from "shared/icons/carouselArrow.svg";
import styles from "./ActivityPage.module.scss";
import classNames from "classnames";
import {Modal} from "./Modal/Modal";

export type ActivityDescription = {
    country: string,
    position: string,
    text: ReactNode,
    images: string[],
    contactDetails: {
        location: string,
    }
};

function NextArrow(props: CustomArrowProps) {
    const {className, style, onClick} = props;
    return (
        <Arrow className={classNames(className, styles.nextArrow, styles.arrow)} style={style} onClick={onClick}/>
    );
}

function PrevArrow(props: CustomArrowProps) {
    const {className, style, onClick} = props;
    return (
        <Arrow className={classNames(className, styles.arrow, styles.prevArrow)} style={style} onClick={onClick}/>
    );
}

export function ActivityPage() {
    const {id} = useParams();
    const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);

    if (!id) {
        throw new Error("No such id");
    }
    const {title, description, money} = ACTIVITY_LIST[+id];

    const settings: ComponentProps<typeof Slider> = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: "ondemand",
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    };

    const handleImageClick = (index: number) => setModalImageIndex(index);

    const handleCloseModal = () => setModalImageIndex(null);

    return (
        <main>
            <Container>
                <Title align="left">{title}</Title>
                {/*<p className={styles.position}>{description.position}</p>*/}
                <table className={styles.table}>
                    <tr>
                        <td>1 hr</td>
                        <td>€{money}</td>
                        <td>{description.country}</td>
                    </tr>
                </table>
                <p className={styles.descriptionTitle}>Teenuse kirjeldus</p>
                <div className={styles.description}>{description.text}</div>
                <div className={styles.carousel}>
                    <Slider {...settings}>
                        {description.images.map((imageSrc, index) => <img onClick={() => handleImageClick(index)}
                                                                          src={imageSrc}/>)}
                    </Slider>
                </div>
                <p className={styles.contactDetails}>
                    <span>Contact Details</span> <br/>
                    <a href="mailto:artur@staffrent.ee">artur@staffrent.ee</a> <br/>
                    Netherlands
                </p>
                {modalImageIndex !== null && (
                    <Modal onClose={handleCloseModal}>
                        <img className={styles.modalImage} src={description.images[modalImageIndex!]}/>
                    </Modal>
                )}
            </Container>
        </main>
    );
}
