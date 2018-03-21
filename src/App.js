import React, { Component } from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import User from './components/User';
import ProductList from './components/ProductList';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }


  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  state = { data: [] }

  _handleResults = (data) => {
    this.setState({ data })
  }

  _renderResults () {
    const { data } = this.state
    console.log(data)
    return data.map(product => {
      return (
        <ProductList 
          key={product.rut}
          name={product.name} 
          rut={product.rut}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <User onResults={this._handleResults} />
       
        
      <Form inline>
      <FormGroup controlId="formInlineName">
      <ControlLabel>Rut usuario</ControlLabel>{' '}
      <FormControl type="number" placeholder="12-345678-9" />
      </FormGroup>{' '}
      <FormGroup controlId="formInlineEmail">
      <ControlLabel>Clave</ControlLabel>{' '}
      <FormControl type="password" placeholder="" />
      </FormGroup>{' '}
      <Button type="submit">Ingresar</Button>
      </Form>;
      </div>
    );
  }
}

export default App;
