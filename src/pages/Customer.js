import React from 'react';
import CustomerServices from '../services/CustomerServices';

class ProductComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            customers:[]
        }
    }

    componentDidMount(){
        CustomerServices.getProducts().then((data) => {
            this.setState({ customers: data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Lista de Clientes</h1>
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
                            this.state.customers.map(
                                customer => 
                                <tr key = {customer.id}>
                                     <td> {customer.id}</td>   
                                     <td> {customer.proc_nombre}</td>   
                                     <td> {customer.proc_codigo}</td>   
                                     <td> {customer.nit_prov}</td>
                                     <td> {customer.iva_compra}</td>
                                     <td> {customer.precio_compra}</td>
                                     <td> {customer.precio_venta}</td> 
                                     <td> {customer.proc_estado}</td>     
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