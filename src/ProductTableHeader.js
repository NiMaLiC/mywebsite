import React from 'react';
import './ProductTableHeader.css';


class ProductTableHeader extends React.Component{


    render(){
        let currentSort = this.props.currentSort.column === this.props.column ? this.props.currentSort.direction :false ;
        
        return(
            <th>
                {this.props.column}
                <button className ={currentSort === 'asc' ? "productTableHeader-current" : ''}>&#x25B2;</button>
                <button className ={currentSort === 'desc' ? "productTableHeader-current" : ''}>&#x25B2;</button>
            </th>
        );
    }
}

export default ProductTableHeader;