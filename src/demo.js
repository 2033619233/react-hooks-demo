import React, { Component } from 'react'
import ReactDOM from 'react-dom'


// export default class Demo extends Component {
//     state = {
//         count: 0
//     }
//     myRef = React.createRef()

//     add = () => {
//         // const {count} = this.state
//         this.setState({ count: this.state.count + 1 })
//     }

//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState({ count: this.state.count + 1 })
//         }, 1000)
//     }

//     unmount = () => {
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }
//     componentWillUnmount(){
//        clearInterval(this.timer)
//     }
//     showRef = () => {
//         console.log(this.myRef.current.value)
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef}></input>
//                 <p>{this.state.count}</p>
//                 <button onClick={this.add}>按钮</button>
//                 <button onClick={this.unmount}>卸载</button>
//                 <button onClick={this.showRef}>展示ref</button>
//             </div>
//         )
//     }
// }

export default function Demo() {
    const [count, setCount] = React.useState(0)
    React.useEffect(() =>{
        let timer = setInterval(() => {
            setCount(count => count+1)
        },1000)
        return () => {
            clearInterval(timer)
        }
    },[])
    const myRef = React.useRef()

    function add() {
        // setCount(count => count+1)
        setCount(count + 1)
    }
    function unMount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    function showRef () {
        console.log(myRef.current.value);
    }
    return (
        <div>
            <input type="text" ref={myRef}></input>
            <p>{count}</p>
            <button onClick={add}>加一</button>
            <button onClick={unMount}>卸载</button>
            <button onClick={showRef}>显示ref</button>
        </div>
    )
}
