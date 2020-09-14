import React from 'react';



class ProductForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            category: '',
            price: null,
            };
    }

    changeHandler = (event)=>{
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    mySubmitHandler= (event)=>{
        event.preventDefault();
        let price = this.state.price;
        if(!Number(price)){
        alert("Price must be a number");
    }}


    render(){
        return(
           <form onSubmit={this.mySubmitHandler}>
               <h3>Enter a new product</h3>
              <p>
                  <label>
                  Name <br ></br>
                   <input type = 'text' name = "name" required
                   onChange = {this.changeHandler}></input>
                  </label>
              </p>

              <p>
                  <label>
                  Category <br ></br>
                <input type = 'test' name = "category" required
                 onChange = {this.changeHandler}></input>
                  </label>
              </p>

              <p>
                  <label>
                  Price <br ></br>
                <input type = 'test' name = "price" required 
                onChange = {this.changeHandler}></input>
                  </label>
              </p>


              <p>
                  <label>
                <input type = 'checkbox' name = "inStock" ></input><br ></br>
                In Stock 
                  </label>
              </p>
              <input type = "submit" value= 'save'></input>
               
             
           </form>
        );
    }
}

export default ProductForm;