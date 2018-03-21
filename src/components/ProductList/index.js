import React, { Component } from 'react';
import { Col, Button } from "react-bootstrap";



class ProductList extends Component {

  render() {
    const {name, rut} = this.props
  
    return (
          <Col xs={12} md={3}>
              <p>Name:{name}</p>
              <p>Rut:{rut}</p>
              <p>
                <Button bsStyle="default">Agregar</Button>
              </p>
          </Col>
    )
  }
}


export default ProductList;