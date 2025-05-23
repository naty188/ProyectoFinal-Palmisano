import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import '../Cart/Cart.css';


const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div>
      <h4>{item.nombre}</h4>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: ${item.precio}</p>
      <button className="btn-eliminar" onClick={() => eliminarProducto(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;

