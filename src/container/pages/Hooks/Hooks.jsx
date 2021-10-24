import React, { useState, useEffect } from "react";

// class Hooks extends Component {
//     state = {
//         count: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     componentDidMount() {
//         document.title = `Title Change : ${this.state.count}`
//     }

//     componentDidUpdate() {
//         document.title = `Title Change : ${this.state.count}`
//     }

//     componentWillUnmount() {
//         document.title = "React App"
//     }

//     render() {
//         return(
//             <div>
//                 <p>Nilai saya adalah: {this.state.count}</p>
//                 <button onClick={this.onUpdate}>Update Nilai</button>
//             </div>
//         )
//     }
// }

const Hooks = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Title Change : ${count}`;
        return () => {
            document.title = "React App";
        }
    })

    return(
        <div>
            <p>Nilai saya adalah: {count}</p>
            <button onClick={() => setCount(count + 1)}>Update Nilai</button>
        </div>
    )
}

export default Hooks;