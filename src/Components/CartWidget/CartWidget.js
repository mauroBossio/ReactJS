import cart from '../CartWidget/assets/carrito.png'

const CartWidget = () => {
    return (
            <div className="blockCart">
            <img src={cart} alt="carrito-de-compras" className="cart"/>
            0
            </div>
    )
}

export default CartWidget;