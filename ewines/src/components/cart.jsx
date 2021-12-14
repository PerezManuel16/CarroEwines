import { addDoc, collection, getFirestore } from "@firebase/firestore";
import { useContext, useState} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./contexts/cartContext";
import Swal from "sweetalert2"





export const Cart = () => {
    const {addProduct, disminuir, vaciarCarrito,  precioTotal,}= useContext(CartContext)
    
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
        
        })
    }
    
    

    return(
        <div>
                {
                    addProduct.length === 0 ?
                        <>
                        <h2>No hay productos Agregados</h2>
                        <Link to="/Destacados" className= "btn btn-secondary">Ir a comprar</Link>
                        </>
                        :
                        <>
                        <h1>Resumen de compra</h1>
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
                        <p>Precio Total: ${precioTotal()}</p>
                    <hr />

                    <div>
                        <form onSubmit={handleSubmit}>
                            <h2>Formulario para finalizar Compra</h2>
                            <input type="text" name="name" placeholder="Nombre" value={values.name} onChange={handleInputChange}/>
                            <input type="text" name="phone" placeholder="Teléfono" value={values.phone} onChange={handleInputChange}/>
                            <input type="email" name="email" placeholder="email" value={values.email} onChange={handleInputChange}/>
                        </form>
                    </div>
                    <button className="btn btn-secondary" onClick={vaciarCarrito}>vaciar Carrito </button>
                    <button className="btn btn-secondary" onClick={checkOut} >Finalizar Compra </button>
                    </>
                } 
        </div>
    )
            }

