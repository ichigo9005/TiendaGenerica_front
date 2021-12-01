import React from 'react';
import ProductServices from '../services/ProductServices';

class ProductComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
      ProductServices.getProducts().then((data) => {
            this.setState({ users: data})
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
                            <td> Correo</td>
                            <td> Login</td>
                            <td> Pass</td>
                            <td> Estado</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.id}>
                                     <td> {user.id}</td>   
                                     <td> {user.proc_nombre}</td>   
                                     <td> {user.usua_correo}</td>   
                                     <td> {user.usua_login}</td>
                                     <td> {user.usua_pass}</td>
                                     <td> {user.usua_estado}</td>    
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