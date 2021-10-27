import React, { Component } from 'react'
import '../App.css'
import { Button } from 'react-bootstrap';
export default class ContactoForm extends Component {
    
    state = {
        nombre: '',
        numero: '',
        email: ''
    }
    
    onSubmit = (e) => {
        this.props.addContacto(this.state.nombre, this.state.numero, this.state.email);
        e.preventDefault();
    }

    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    render() {
        return (
            <div className="container">
                
                <h1 className="display-5">Contatos</h1>
                <br/>

                <form className="form-inline" onSubmit={this.onSubmit}>
                <div className="cajaForm">
                <div className="form-group mx-sm-3 mb-2">
                    <label>Nome e Sobrenome: </label>
                    <input type="text" 
                    className="form-control" 
                    name="nombre"
                    id="Nombre" 
                    onChange={this.onChange}
                    value={this.state.nombre}/>
                </div>

                <div className="form-group mx-sm-3 mb-2">
                    <label>Telefone: </label>
                    <input type="text" 
                    className="form-control" 
                    name="numero"
                    id="Numero"
                    onChange={this.onChange}
                    value={this.state.numero}/>
                </div>

                <div className="form-group mx-sm-3 mb-2">
                    <label>Correio:</label>
                    <input type="text" 
                    className="form-control" 
                    name="email"
                    id="exampleInputEmail1" 
                    onChange={this.onChange}
                    value={this.state.email}/>
                </div>
                </div>
                <Button type="submit" className="botonGuarda" variant="outline-dark">Guardar Contacto</Button>
                </form>

            </div>
        )
    }
}
