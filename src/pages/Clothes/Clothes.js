import React from 'react';
import GetApi from '../../components/GetApi';

const Clothes = () => {
   return (
       <div>
       <div className="col-5"></div>
       <div className="col-3"><h2>Kläder</h2></div>
       <div className="col-4"></div>
           <GetApi source="../products.json" filterOrder="kläder"/>
       </div>
   );
};

export default Clothes;
