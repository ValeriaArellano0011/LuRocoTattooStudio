import {useSelector} from "react-redux";
import { AiOutlineArrowRight } from 'react-icons/ai'
import './Carrito.css'


const Carrito = () => {

    const productos = useSelector(state => state.carrito.productos)

                // productos.length === 1 && productos[0].cantidad === 1 ? <p className="total">TOTAL (1 producto) = $ {new Intl.NumberFormat().format(productos[0].precio)}
                //     </p> :
                //     <p className="total">TOTAL ({productos
                //         && productos.map(e => e.cantidad).reduce((a, b) => a + b)
                //     } productos) =
                //         $ { new Intl.NumberFormat().format(productos.map(e => e.precio * e.cantidad).reduce((a, b) => a + b))}
                //     </p>}
                
    return (
        <main className={'container'}>
            <h1 className="carrito_h1">TU CARRITO</h1>
            {!productos.length > 0 ? <p className="carrito_p">Aun no tenes productos en tu carrito</p> : null}

            {
                productos.map(elem => {
                    return <div className={"carrito_producto"}>
                            <img src={elem.imagen} width={80} alt="producto_carrito" className="producto_imagen"/>
                            <div className="producto_nombre">
                                {elem.nombre}
                            </div>
                            <div className={"infocarro"}>
                                {/* Cantidad: {elem.cantidad} = */}
                                $ {new Intl.NumberFormat().format(elem.precio * elem.cantidad)}
                            </div>
                    </div>
                })
            }
            {productos && productos.length > 0 && <div className="resumen_container">
                <h2 className="resumen_h2">RESUMEN DE COMPRA</h2>
                {productos.length === 1 && productos[0].cantidad === 1 ? <div className="resumen_p">
                    {<p>1 producto $ {new Intl.NumberFormat().format(productos[0].precio)} </p>}
                </div> :
                <div className="resumen_p">
                    {productos
                        && productos.map(e => e.cantidad).reduce((a, b) => a + b)
                    } productos
                    $ {new Intl.NumberFormat().format(productos.map(e => e.precio * e.cantidad).reduce((a, b) => a + b))}
                </div>
                }

                <button className="carrito_btn">FINALIZAR COMPRA <AiOutlineArrowRight/></button>
            </div>}
        </main>
    )
}

export default Carrito