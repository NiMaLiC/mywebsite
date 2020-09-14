import React from 'react';
import ProductTableHeader from './ProductTableHeader';
import ProductRow from './ProductRow';



class ProductTable  extends React.Component{


    constructor(props){
        super(props);
        this.sortByKeyAndOrder = this.sortByKeyAndOrder.bind(this);
        this.state = {sort:{
            column : 'price',
            direction: 'asc'
        }};
    }


    


    sortByKeyAndOrder(objectA, objectB) {
        let isDesc = this.state.sort.direction === 'desc' ? 1 : -1;
        let [a, b] = [objectA[this.state.sort.column], objectB[this.state.sort.column]];
        if (this.state.sort.column === 'price') {
          [a, b] = [a, b].map((value) => parseFloat(value.replace(/[^\d\.]/g, ''), 10));
        }
        if (a > b) {
          return 1 * isDesc;
        }
        if (a < b) {
          return -1 * isDesc;
        }
        return 0;
      }


    sortProducts(){
        let productAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
        return productAsArray.sort(this.sortByKeyAndOrder)
    }


    render(){
        var rows = [];
        this.sortProducts().forEach((product) => {
            if(product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)){
                return ;
            }
            rows.push(
                <ProductRow product = {product} key = {product.id} onDestroy={this.handleDestroy}/>
            )
        });
        return(
            <div>  
                    <table>
                        <thead>
                            <tr>
                            <ProductTableHeader currentSort = {this.state.sort} column="name"  />
                            <ProductTableHeader currentSort = {this.state.sort} column="price"  />
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>    
            </div>
        );
    }
}

export default ProductTable;
