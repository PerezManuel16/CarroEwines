import { addDoc, collection, getFirestore, writeBatch, doc } from "@firebase/firestore";
import { useContext, useState} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";
import Swal from "sweetalert2"

export const Cart = () => {
    const {addProduct, disminuir, vaciarCarrito,  precioTotal, }= useContext(CartContext)
    
    const [values, setValues] = useState ({
        name:"",
        phone:"",
        email:"",
    });
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if (values.name.length < 3){
            alert("Nombre invalido")
            return
        }
        if(values.phone.length < 6){
            alert ("Teléfono invalido")
            return
        }
        if(values.email.length < 5)
        alert("email invalido")
        return
    }
    const checkOut = () => {
        const order = {
            buyer: values,
            items: {addProduct},
            total: precioTotal()
        };
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");        
        addDoc(ordersCollection, order).then(({ id }) => {
            Swal.fire({
                icon: 'success',
                title: 'Orden registrada!',
                text: `Guarde su id de Compra: ${id}`,
                willClose: () => {
                    vaciarCarrito()
                }
            })
        });
        const batch = writeBatch(db);
        addProduct.forEach((prod) => {
            const itemsRef= doc(db, "items" , prod.item.id);
            batch.update(itemsRef, {stock: prod.item.stock - prod.quantity});
        });
        batch.commit();
    };

    return(
        <div>
                {
                    addProduct.length === 0 ?
                        <>
                        <h2 className="sinProductos">No hay productos Agregados</h2>
                        <Link to="/Destacados" className= "btn btn-secondary">Ir a comprar</Link>
                        </>
                        :
                        <>
                        <h1 className="finalizarCompra">Resumen de compra</h1>
                        <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Tipo de vino</th>
                                            <th scope="col">Tipo de uva</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Precio por producto</th>
                                        </tr>
                                    </thead>
                                    {addProduct.map((prod) => (
                                        <tbody  key={prod.item.id}>
                                            <tr>
                                                <th scope="row">{prod.item.vino}</th>
                                                <td>{prod.item.categoria}</td>
                                                <td>{prod.item.uva}</td>
                                                <td>{prod.quantity}</td>
                                                <td>${prod.quantity * prod.item.precio}</td>
                                                <td><button className="btn btn-secondary" onClick={() => disminuir(prod.item.id)}> eliminar </button></td>
                                            </tr>
                                        </tbody>
                                    ))}
                                </table>
                        <p className="precioTotal">Precio Total: ${precioTotal()}</p>
                    <hr />
                    <div>
                        <form onSubmit={handleSubmit} className="formulario">
                            <h2>Formulario para finalizar Compra</h2>
                            <div className="mb-3">
                                <label className="form-label">Nombre Completo </label><br />
                                <input type="text" name="name"  value={values.name} onChange={handleInputChange}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Telefono</label><br />
                                <input type="text" name="phone" value={values.phone} onChange={handleInputChange}/>
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Email</label> <br />
                                <input type="email" name="email"  value={values.email} onChange={handleInputChange}/>
                            </div>
                            <button className="btn btn-secondary" onClick={vaciarCarrito}>vaciar Carrito </button>
                            <button className="btn btn-secondary" onClick={checkOut} >Finalizar Compra </button> 
                            <hr />
                        </form>
                    </div>
                    </>
                } 
        </div>
    )
}

