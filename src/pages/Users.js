import React from 'react';
import UserService from '../services/UserServices';

class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((data) => {
            this.setState({ users: data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Lista de Usuarios</h1>
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
                                     <td> {user.usua_nombre}</td>   
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

export default UserComponent