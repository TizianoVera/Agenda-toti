import React, { Component } from 'react'


class Navbar extends Component {

    state = {
        busqueda: '',
        contactos: this.props.contactos
    }

    onSubmit = (e) => {
        console.log(this.state.busqueda)
        this.props.searchContacto(this.state.busqueda)
        e.preventDefault();
    }

    onChange = async (e) => {
        e.persist();
        console.log(e.target.name, e.target.value)
        await this.setState({
            busqueda: e.target.value,
            [e.target.name]: e.target.value
        })
        this.props.searchContacto(this.state.busqueda)
        
    }

    render() {
        return <div>
            <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-1 h1" style={style}><img src="https://img.icons8.com/fluency/50/000000/assassins-creed-logo.png"/>Agenda</span>
            
            <form className="form-inline" onSubmit={this.onSubmit}>
            <input className="form-control mr-sm" 
            type="search" 
            placeholder="Pesquizar"
            name="busqueda"
            onChange={this.onChange} 
            aria-label="Search"/>
            </form>

            </nav>
        </div>
    }
}

const style ={
    marginLeft:"5rem",
    textTransform:"uppercase"
}


export default Navbar;