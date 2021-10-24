import React, {Component, Fragment} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import CardProduct from "./CardProduct/CardProduct";
import { GlobalConsumer } from "../../../context/context";
// import {connect} from "react-redux";

class Product extends Component {
    // state = {
    //     order: 0
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {
        return(
            <Fragment>
                <p>Counter</p>
                <hr/>
                <div className="header">
                    <div className="logo">
                        <p>Logo Ayam</p>
                    </div>
                    <div className="troley">
                        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>
                <CardProduct />
            </Fragment>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Product);
export default GlobalConsumer(Product);