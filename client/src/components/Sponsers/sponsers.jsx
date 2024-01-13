import "./sponsers.css"
import Nike from "../../assets/icons/Nike.jpg"

const Sponsers = () => {
    return (
        <div className ="sponsers">
        <div className ="container">
            <div className ="wrapper flexitem">
                <div className ="item">
                    <a href="#">
                        <img src="./assets/img/brands/asus.png" alt=""/>
                    </a>
                </div>

                <div className ="item">
                    <a href="#">
                        <img src="./assets/img/brands/zara.png" alt=""/>
                    </a>
                </div>

                <div className ="item">
                    <a href="#">
                        <img src="./assets/img/brands/samsung.png" alt=""/>
                    </a>
                </div>

                <div className ="item">
                    <a href="#">
                        <img src="./assets/img/brands/oppo.png" alt=""/>
                    </a>
                </div>

                <div className ="item">
                    <a href="#">
                        <img src="./assets/img/brands/hurley.png" alt=""/>
                    </a>
                </div>

                <div className ="item">
                    <a href="#">
                        <img src="./assets/img/brands/dng.png" alt=""/>
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Sponsers;