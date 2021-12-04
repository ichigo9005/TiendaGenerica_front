import React from 'react';
import CustomerServices from '../services/CustomerServices';

class CustomerComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            customers:[]
        }
    }

    componentDidMount(){
        CustomerServices.getCustomers().then((data) => {
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
                            <td> Cedula</td>
                            <td> Direccion</td>
                            <td> Correo</td>
                            <td> Telefono</td>
                            <td> Estado</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.customers.map(
                                customer => 
                                <tr key = {customer.id}>
                                     <td> {customer.id}</td>   
                                     <td> {customer.cli_nombre}</td>   
                                     <td> {customer.cli_cedula}</td>   
                                     <td> {customer.cli_direccion}</td>
                                     <td> {customer.cli_email}</td>
                                     <td> {customer.cli_telefono}</td>
                                     <td> {customer.cli_estado}</td>    
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default CustomerComponent