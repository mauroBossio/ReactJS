import cart from '../CartWidget/assets/carrito.png'
import { NavLink, Link } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState} from 'react';


const CartWidget = () => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const dataBase = getFirestore(); 
                const cartCollectionRef = collection(dataBase, 'carts');
                const cartSnapshot = await getDocs(cartCollectionRef);
                const cartsData = cartSnapshot.docs.map((doc) => doc.data());
                const currentCartItems = cartsData.flatMap((cart) => cart.items);
                setCartItems(currentCartItems);
            } catch (error) {
                console.error('Error al obtener los productos del carrito:', error);
            }
        };

        fetchCartItems();
    }, []);
    return (
            <div className="blockCart">
                <NavLink to="./cart" className='link'>
                    <img src={cart} alt="carrito-de-compras" className="cart" /> {cartItems.length}
                </NavLink>
            </div>
    )
}

export default CartWidget;