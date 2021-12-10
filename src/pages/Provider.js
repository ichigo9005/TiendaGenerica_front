import React from 'react';
import {Button, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'
import ProviderServices from '../services/ProviderServices';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

class ProviderComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            providers:[],
            modalInsertar: false,
            providerr: {
                id: null,
                prov_nombre: null,
                prov_nit: null,
                prov_ciudad: null,
                prov_direccion: null,
                prov_telefono: null,
                prov_estado: null
            }
        };

        this.save = this.save.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentDidMount(){
        ProviderServices.getProviders().then((data) => {
            this.setState({ providers: data})
        });
    }

    save(){
        ProviderServices.save(this.state.providerr).then(data => {
            this.setState({ modalInsertar: false });
            ProviderServices.getProviders().then((data) => {
                this.setState({ providers: data})
            });
        })
    }

    update(){
        ProviderServices.update(this.state.providerr, this.state.providerr.id).then(data => {
            this.setState({ modalActualizar: false });
            ProviderServices.getProviders().then((data) => {
                this.setState({ providers: data})
            });
        })
    }

    delete(id){
        if(window.confirm("¿Realmente desea eliminar el registro?")) {
            ProviderServices.delete(id).then(data => {
                ProviderServices.getProviders().then((data) => {
                    this.setState({ providers: data})
                });
            })
        }
    }

    mostrarModalInsertar = () => {
        this.setState({
            modalInsertar: true,
            providerr: {
                id: null,
                prov_nombre: null,
                prov_nit: null,
                prov_ciudad: null,
                prov_direccion: null,
                prov_telefono: null,
                prov_estado: null
            }
        });
    };

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };

    mostrarModalActualizar = (provider) => {
        this.setState({
          modalActualizar: true,
          providerr: {
            id: provider.id,
            prov_nombre: provider.prov_nombre,
            prov_nit: provider.prov_nit,
            prov_ciudad: provider.prov_ciudad,
            prov_direccion: provider.prov_direccion,
            prov_telefono: provider.prov_telefono,
            prov_estado: provider.prov_estado
        }
        });
    };

    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };

    render (){
        return (
            <div>
                <h1 className = "text-center"> Lista de Proveedores</h1>
                <div style={{margin: '20px'}}>
                    <button style={{border: '0',background: 'none'}} onClick={()=>this.mostrarModalInsertar()}>Proveedor Nuevo <FaIcons.FaUserPlus /></button>
                </div>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Id</td>
                            <td> Nombre</td>
                            <td> Nit</td>
                            <td> Ciudad</td>
                            <td> Direccion</td>
                            <td> Telefono</td>
                            <td> Estado</td>
                            <td colSpan="2"> Acciones</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.providers.map(
                                provider => 
                                <tr key = {provider.id}>
                                     <td> {provider.id}</td>   
                                     <td> {provider.prov_nombre}</td>   
                                     <td> {provider.prov_nit}</td>   
                                     <td> {provider.prov_ciudad}</td>
                                     <td> {provider.prov_direccion}</td>
                                     <td> {provider.prov_telefono}</td>
                                     <td> {provider.prov_estado}</td>
                                     <td><button style={{border: '0'}} onClick={()=>this.mostrarModalActualizar(provider)}><FaIcons.FaEdit /></button></td> 
                                     <td><button style={{border: '0'}} onClick={()=>this.delete(provider.id)}><AiIcons.AiFillDelete /></button></td>         
                                </tr>
                            )
                        }

                    </tbody>
                </table>
                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Insertar Producto</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <form id="user-form">
                            <FormGroup>
                                <label>
                                    Nombre: 
                                </label>
                                <input value={this.state.providerr.prov_nombre} className="form-control" id="prov_nombre" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let providerr = Object.assign({}, prevState.providerr);
                                providerr.prov_nombre = val;

                                return { providerr };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Nit: 
                                </label>
                                <input value={this.state.providerr.prov_nit} className="form-control" id="prov_nit" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let providerr = Object.assign({}, prevState.providerr);
                                providerr.prov_nit = val;

                                return { providerr };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Ciudad: 
                                </label>
                                <input value={this.state.providerr.prov_ciudad} className="form-control" id="prov_ciudad" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let providerr = Object.assign({}, prevState.providerr);
                                providerr.prov_ciudad = val;

                                return { providerr };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Direccion: 
                                </label>
                                <input value={this.state.providerr.prov_direccion} className="form-control" id="prov_direccion" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let providerr = Object.assign({}, prevState.providerr);
                                providerr.prov_direccion = val;

                                return { providerr };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Telefono: 
                                </label>
                                <input value={this.state.providerr.prov_telefono} className="form-control" id="prov_telefono" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let providerr = Object.assign({}, prevState.providerr);
                                providerr.prov_telefono = val;

                                return { providerr };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Estado: 
                                </label>
                                <input value={this.state.providerr.prov_estado} className="form-control" id="prov_estado" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let providerr = Object.assign({}, prevState.providerr);
                                providerr.prov_estado = val;

                                return { providerr };
                                })}
                                } />
                            </FormGroup>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                        color="primary"
                        type="submit"
                        onClick={() => this.save()}
                        >
                            Insertar
                        </Button>
                        <Button
                        className="btn btn-danger"
                        onClick={() => this.cerrarModalInsertar()}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalActualizar}>
                    <ModalHeader>
                        <div><h3>Actualizar Producto</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <form id="user-form">
                            <FormGroup>
                                <label>
                                    Nombre: 
                                </label>
                                <input value={this.state.providerr.prov_nombre} className="form-control" id="prov_nombre" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let providerr = Object.assign({}, prevState.providerr);
                                providerr.prov_nombre = val;

                                return { providerr };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Nit: 
                                </label>
                                <input value={this.state.providerr.prov_nit} className="form-control" id="prov_nit" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let providerr = Object.assign({}, prevState.providerr);
                                providerr.prov_nit = val;

                                return { providerr };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Ciudad: 
                                </label>
                                <input value={this.state.providerr.prov_ciudad} className="form-control" id="prov_ciudad" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let providerr = Object.assign({}, prevState.providerr);
                                providerr.prov_ciudad = val;

                                return { providerr };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Direccion: 
                                </label>
                                <input value={this.state.providerr.prov_direccion} className="form-control" id="prov_direccion" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let providerr = Object.assign({}, prevState.providerr);
                                providerr.prov_direccion = val;

                                return { providerr };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Telefono: 
                                </label>
                                <input value={this.state.providerr.prov_telefono} className="form-control" id="prov_telefono" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let providerr = Object.assign({}, prevState.providerr);
                                providerr.prov_telefono = val;

                                return { providerr };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Estado: 
                                </label>
                                <input value={this.state.providerr.prov_estado} className="form-control" id="prov_estado" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let providerr = Object.assign({}, prevState.providerr);
                                providerr.prov_estado = val;

                                return { providerr };
                                })}
                                } />
                            </FormGroup>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                        color="primary"
                        type="submit"
                        onClick={() => this.update()}
                        >
                            Actualizar
                        </Button>
                        <Button
                        className="btn btn-danger"
                        onClick={() => this.cerrarModalActualizar()}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>

            </div>

        )
    }
}

export default ProviderComponent