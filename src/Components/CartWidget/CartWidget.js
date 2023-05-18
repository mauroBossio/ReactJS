import cart from '../CartWidget/assets/carrito.png'
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
            
            <div className="blockCart">
                <Link to="./cart" className='link'>
                 <img src={cart} alt="carrito-de-compras" className="cart"/> 0
                </Link>
            </div>
    )
}

export default CartWidget;