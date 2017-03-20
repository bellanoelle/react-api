import React, { Component } from 'react';
import axios from 'axios';
import ProductList from './ProductList';

class GetApi extends Component {


constructor(props) {
       super(props);
       this.state={
           products:[]
       };
   }    
componentDidMount = () =>{
       this.serverRequest =
           axios.get(this.props.source)
               .then(res => {
                   this.setState({
                       products: res.data.products
                   })
               })
         }

   render(){
    console.log(this.state.products);
       return(
           <ProductList list={this.state.products} filterOrder={this.props.filterOrder}/>

           );
       }

   }  
export default GetApi;