import React from 'react';
import {Button, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'
import ProductServices from '../services/ProductServices';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

class ProductComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            products:[],
            modalInsertar: false,
            productt: {
                id: null,
                proc_nombre: null,
                proc_codigo: null,
                nit_prov: null,
                iva_compra: null,
                precio_compra: null,
                precio_venta: null,
                proc_estado: null
            }
        };

        this.save = this.save.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentDidMount(){
      ProductServices.getProducts().then((data) => {
            this.setState({ products: data})
        });
    }

    save(){
        ProductServices.save(this.state.productt).then(data => {
            this.setState({ modalInsertar: false });
            ProductServices.getProducts().then((data) => {
                this.setState({ products: data})
            });
        })
    }

    update(){
        ProductServices.update(this.state.productt, this.state.productt.id).then(data => {
            this.setState({ modalActualizar: false });
            ProductServices.getProducts().then((data) => {
                this.setState({ products: data})
            });
        })
    }

    delete(id){
        if(window.confirm("¿Realmente desea eliminar el registro?")) {
            ProductServices.delete(id).then(data => {
                ProductServices.getProducts().then((data) => {
                    this.setState({ products: data})
                });
            })
        }
    }

    mostrarModalInsertar = () => {
        this.setState({
            modalInsertar: true,
            productt: {
                id: null,
                proc_nombre: null,
                proc_codigo: null,
                nit_prov: null,
                iva_compra: null,
                precio_compra: null,
                precio_venta: null,
                proc_estado: null
            }
        });
    };

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };

    mostrarModalActualizar = (product) => {
        this.setState({
          modalActualizar: true,
          productt: {
            id: product.id,
            proc_nombre: product.proc_nombre,
            proc_codigo: product.proc_codigo,
            nit_prov: product.nit_prov,
            iva_compra: product.iva_compra,
            precio_compra: product.precio_compra,
            precio_venta: product.precio_venta,
            proc_estado: product.proc_estado
          }
        });
    };

    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };

    render (){
        return (
            <div>
                <h1 className = "text-center"> Lista de Productos</h1>
                <div style={{margin: '20px'}}>
                    <button style={{border: '0',background: 'none'}} onClick={()=>this.mostrarModalInsertar()}>Producto Nuevo <FaIcons.FaUserPlus /></button>
                </div>
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
                            <td colSpan="2"> Acciones</td>
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
                                     <td><button style={{border: '0'}} onClick={()=>this.mostrarModalActualizar(product)}><FaIcons.FaEdit /></button></td> 
                                     <td><button style={{border: '0'}} onClick={()=>this.delete(product.id)}><AiIcons.AiFillDelete /></button></td>     
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
                                <input value={this.state.productt.proc_nombre} className="form-control" id="proc_nombre" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let productt = Object.assign({}, prevState.productt);
                                productt.proc_nombre = val;

                                return { productt };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    C&oacute;digo: 
                                </label>
                                <input value={this.state.productt.proc_codigo} className="form-control" id="proc_codigo" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let productt = Object.assign({}, prevState.productt);
                                productt.proc_codigo = val;

                                return { productt };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Nit proveedor: 
                                </label>
                                <input value={this.state.productt.nit_prov} className="form-control" id="nit_prov" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let productt = Object.assign({}, prevState.productt);
                                productt.nit_prov = val;

                                return { productt };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Iva compra: 
                                </label>
                                <input value={this.state.productt.iva_compra} className="form-control" id="iva_compra" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let productt = Object.assign({}, prevState.productt);
                                productt.iva_compra = val;

                                return { productt };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Precio compra: 
                                </label>
                                <input value={this.state.productt.precio_compra} className="form-control" id="precio_compra" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let productt = Object.assign({}, prevState.productt);
                                productt.precio_compra = val;

                                return { productt };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Precio venta: 
                                </label>
                                <input value={this.state.productt.precio_venta} className="form-control" id="precio_venta" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let productt = Object.assign({}, prevState.productt);
                                productt.precio_venta = val;

                                return { productt };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Estado: 
                                </label>
                                <input value={this.state.productt.proc_estado} className="form-control" id="proc_estado" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let productt = Object.assign({}, prevState.productt);
                                productt.proc_estado = val;

                                return { productt };
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
                        <div><h3>Actualizar un Producto</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <form id="user-form">
                            <FormGroup>
                                <input type="hidden" value={this.state.productt.id} className="form-control" id="id" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let productt = Object.assign({}, prevState.productt);
                                productt.id = val;

                                return { productt };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Nombre: 
                                </label>
                                <input value={this.state.productt.proc_nombre} className="form-control" id="proc_nombre" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let productt = Object.assign({}, prevState.productt);
                                productt.proc_nombre = val;

                                return { productt };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    C&oacute;digo: 
                                </label>
                                <input value={this.state.productt.proc_codigo} className="form-control" id="proc_codigo" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let productt = Object.assign({}, prevState.productt);
                                productt.proc_codigo = val;

                                return { productt };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Nit proveedor: 
                                </label>
                                <input value={this.state.productt.nit_prov} className="form-control" id="nit_prov" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let productt = Object.assign({}, prevState.productt);
                                productt.nit_prov = val;

                                return { productt };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Iva compra: 
                                </label>
                                <input value={this.state.productt.iva_compra} className="form-control" id="iva_compra" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let productt = Object.assign({}, prevState.productt);
                                productt.iva_compra = val;

                                return { productt };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Precio compra: 
                                </label>
                                <input value={this.state.productt.precio_compra} className="form-control" id="precio_compra" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let productt = Object.assign({}, prevState.productt);
                                productt.precio_compra = val;

                                return { productt };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Precio venta: 
                                </label>
                                <input value={this.state.productt.precio_venta} className="form-control" id="precio_venta" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let productt = Object.assign({}, prevState.productt);
                                productt.precio_venta = val;

                                return { productt };
                                })}
                                } />
                            </FormGroup>
                            <FormGroup>
                                <label>
                                    Estado: 
                                </label>
                                <input value={this.state.productt.proc_estado} className="form-control" id="proc_estado" onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                let productt = Object.assign({}, prevState.productt);
                                productt.proc_estado = val;

                                return { productt };
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

export default ProductComponent