import {Data} from "../../DummyData";

const Items = () => {
    const render = Data;
return (
    <div className="Items">
        <div className="items-wrap">
            {render.map((item, index)  => (
            <div className="item">
                <div className="item-top">
                    <img src= "" alt="" />
                </div>
                <div className="item-mid"></div>
                <div className="item-bottom"></div>
            </div>
            ))
               
}
            
        </div>
    </div>
)
}

export default Items;