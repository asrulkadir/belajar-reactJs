import React, {Component} from "react";
import Counter from "./Counter";

class CardProduct extends Component {
    render() {
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" width="200px" alt="Ayam" />
                </div>
                <p className="product-title">Daging Ayam Goreng Dada</p>
                <p className="product-price">Rp. 15.000,00</p>
                <Counter />
            </div>
        )
    }
}

export default CardProduct;