import './Item.css'
const Item = ({item}) => {
    return (
        <div className="item">
            <img src= {item.pic} alt="" />
            <div className="item-data">
                <div className="desc"></div>
                <div className="profile"></div>
                
            </div>
        </div>
    //     <div className = "item">
    //   <div className="item-wrapper">
    //     <div className="wrap item-top">
    //       <div className="item-Name">
    //         <div className="spans">
    //           <img src={item.pic} alt="" />
    //           <span className = "span-name">{item.seller}</span>
    //         <span className = "span-time"> {item.date} </span>
    //         </div>
    //         <div className="dots">
    //           <div className="Dots first-dot"></div>
    //           <div className="Dots second-dot"></div>
    //           <div className="Dots third-dot"></div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="wrap item-center">
    //       <div className="itemed-txt">
    //         {item.desc}
    //       </div>
    //       <img src= {item.profile} alt="the itemed-pics" className = "itemed-image"/>
    //     </div>
    //     <div className="wrap item-bottom">
    //       <div className="LH">
    //         <div className="like">
    //         {/* <img  src={Like} onClick = {likeHandler} alt = "like" /> */}
    //       </div>
    //       <div className="heart">
    //       {/* <img  src={Heart}onClick = {likeHandler}  alt = "heart" /> */}
    //       </div>
    //       {/* <span>{state} people liked it!</span> */}
    //       </div>
    //       {/* <span className="comments">{item.comment} people comments</span> */}
    //     </div>
        
        
    //   </div>
    // </div>
    )
}
export default Item;