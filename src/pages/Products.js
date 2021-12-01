import React from 'react';
import ProductServices from '../services/ProductServices';

class ProductComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
    }

    componentDidMount(){
      ProductServices.getProducts().then((data) => {
            this.setState({ products: data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Lista de Productos</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Id</td>
                            <td> Nombre</td>
                            <td> Codigo</td>
                            <td> Nit proveedor</td>
                            <td> Iva compra</td>
                            <td> Precio compra</td>
                            <td> Precio venta</td>
                            <td> Estado</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.products.map(
                                product => 
                                <tr key = {product.id}>
                                     <td> {product.id}</td>   
                                     <td> {product.proc_nombre}</td>   
                                     <td> {product.proc_codigo}</td>   
                                     <td> {product.nit_prov}</td>
                                     <td> {product.iva_compra}</td>
                                     <td> {product.precio_compra}</td>
                                     <td> {product.precio_venta}</td> 
                                     <td> {product.proc_estado}</td>     
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default ProductComponent