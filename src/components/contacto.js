import React, { Component } from 'react'
import ContactoNoFoto from './Img/ContactoNoFoto3.jpg';
import '../components/contatoCard.css';
import { Button } from 'react-bootstrap';

export default class contacto extends Component {

    state = {
        nombre: this.props.contacto.nombre,
        numero: this.props.contacto.numero,
        email: this.props.contacto.email,
        disabled: true
    }

    handleGameClik() {
    this.setState( {disabled: !this.state.disabled} )
  } 

  EstiloEditanto() {
    return {  
        color: this.state.disabled ? 'black' : '#c2c2c2',
        fontSize: this.state.disabled ? '0.9rem' : '1rem',
    }
}

    onSubmit = (e) => {
        e.preventDefault();
    }
    
  
    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    
    render() {       
        const {contacto} = this.props;
        
        return (
            <div className="container TarjetaContacto" >

                <div>
                    <img src={ContactoNoFoto} className="card-img-top" alt="ImagemContacto"/>
                    <div className="card-body">

                        <form onSubmit={this.onSubmit}>
                            <h6>Nome e Sobrenome:</h6>
                            <div>
                            <input className="inputCard" type="text"
                            id="nombre" 
                            onChange={this.onChange} 
                            name ="nombre" 
                            value={this.state.nombre}
                            disabled = {(this.state.disabled) ? "disabled" : ""}/>
                            </div>

                            <h6>Telefone</h6>
                            <div >
                            <input className="inputCard" type="text" 
                            onChange={this.onChange} 
                            name ="numero" 
                            value={this.state.numero}
                            disabled={(this.state.disabled) ? "disabled" : ""}/>
                            </div>

                            <h6>Email</h6>
                            <div>
                            <input className="inputCard" type="text" 
                            onChange={this.onChange} 
                            name ="email" 
                            value={this.state.email}
                            disabled = {(this.state.disabled) ? "disabled" : ""}/>
                            </div>
                           
                            <Button className='buttonCard' type="submit" variant="outline-dark"
                                onClick = {this.handleGameClik.bind(this)}>
                                Editar | Atualizar
                            </Button>
                         
                            <Button className='buttonCard' variant="dark"
                                onClick = {this.props.deleteContacto.bind(this, contacto.id)}>
                                Eliminar
                            </Button>
            
                        </form>
                        
                    </div>
                </div>
            </div>
        )
    }
}




