import './Item.css'
const Item = ({item}) => {
    return (
        <div className="item">
            <img src= {item.pic} alt="" />
            <div className="item-data">
                <div className="desc">{item.desc}</div>
                
            </div>
        </div>
    
    )
}
export default Item;