import React, { Component } from 'react';
import './ProductList.css';
import { Button } from 'react-bootstrap';

export default class ProductList extends Component {

  sortOut = (prod) =>{
       if(prod.categories.indexOf(this.props.filterOrder) >= 0){
           return true;
       }
           return false;
   }
   render() {

//name
//description
       
       return (
           <div >
              {this.props.list.filter(this.sortOut).map(product =>{
                   return (

                       <div className="row" key={product.id}>

                           <div className="col-12 rubrik"><h3>{product.manufacturer} {product.name}</h3></div>
                           <div className="col-3"><img src={product.imageUrl} /></div>
                           <div className="col-9"><h3>{product.name}</h3>
                           <h4>{product.consumerPrice} kr</h4>
                           <p>{product.description}</p>
                           
                            <Button bsStyle="danger">Köp</Button>
                           </div>

                           
                       </div>
                   );

               })}
           </div>
       )
   }
}