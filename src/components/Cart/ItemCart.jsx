import { Link } from "react-router-dom";
import convertPrice from "../convertPrice";
import "./cart.css"

function ItemCart({data, i, numCart, setIndex, del_itemCart}) {
    return (
        <div className="itemCart flex items-center">
            <input className="checkCol" type="checkbox" value={i} />
            <Link 
                to="/detail" 
                onClick={() => setIndex(i)}
                className="allCol flex items-center">
                <div className="cartThumbnail w-[80px] mr-3">
                    <img src={data[i].images[0].small_url} alt="" />
                </div>
                <span className="cartTitle">{data[i].name}</span>
            </Link>

            <span className="priceCol cartPrice font-semibold">
                {convertPrice(data[i].current_seller.price)}
                <span className="font-semibold underline">đ</span>
            </span>
            <span className="quantityCol cartQuantity">{numCart}</span>
            <span className="allPriceCol allPrice font-semibold text-red-500">
                {convertPrice(data[i].current_seller.price * numCart)}
                <span className="font-semibold underline">đ</span>
            </span>
            <div
                className="delCol hover:cursor-pointer"
                onClick={del_itemCart}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/>
                </svg>
            </div>
        </div>
    )
}
export default ItemCart;