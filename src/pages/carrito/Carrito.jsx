import {useSelector} from "react-redux";
// import './Carrito.css'


const Carrito = () => {

    const productos = useSelector(state => state.carrito.productos)


    return (<main className={'container'}>
        <h1>TU CARRITO</h1>
        {!productos.length > 0 ? <p>Aun no tenes productos en tu carrito</p> :
            productos.length === 1 && productos[0].cantidad === 1 ? <p>TOTAL (1 producto) $ {new Intl.NumberFormat().format(productos[0].precio)}
                </p> :
                <p>TOTAL ({productos
                    && productos.map(e => e.cantidad).reduce((a, b) => a + b)
                } productos)
                    $ { new Intl.NumberFormat().format(productos.map(e => e.precio * e.cantidad).reduce((a, b) => a + b))}
                </p>}

        {
            productos.map(elem => {
                return <div className={"carrito"}>
                    <div className={"imagen"}>
                        <img src={elem.imagen} width={80} alt=""/>
                    </div>
                    <div className={"infocarro"}>
                        {elem.nombre}
                        cantidad: {elem.cantidad}
                        $ {new Intl.NumberFormat().format(elem.precio * elem.cantidad)}
                    </div>
                </div>
            })
        }

        {productos && productos.length > 0 && <div>
            <h2>RESUMEN DEL PEDIDO
            </h2>
            {productos.length === 1 && productos[0].cantidad === 1 ? <div>
                {<p>1 producto $ {new Intl.NumberFormat().format(productos[0].precio)} </p>}
            </div> :
            <div>
                {productos
                    && productos.map(e => e.cantidad).reduce((a, b) => a + b)
                } productos
                $ {new Intl.NumberFormat().format(productos.map(e => e.precio * e.cantidad).reduce((a, b) => a + b))}
            </div>
            }

            <button>IR A PAGAR --->>></button>
        </div>}


    </main>)
}

export default Carrito