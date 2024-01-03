import {List} from "../../DummyData";
import Item from  "../Item/Item.jsx"
import "./Items.css"
const Items = () => {
     console.log(List)
return (
    <div className="Items">
        <div className="items-wrap">
        {List.map(I => <Item key = {I.id} item = {I}/> )}

            {/* {Data.map((item, index)  => (
            <div className="item">
                <div className="item-top">
                    <img src= "" alt="" />
                   
                </div>
                <div className="item-mid"></div>
                <div className="item-bottom"></div>
            </div>
            ))
               
}
             */}
        </div>
    </div>
)
}

export default Items;