

class Counter extends component {
  // constructor(){
  //   this.state ={
  //     count:0
  //   }
  // }

  // increment = ()=> {
  //   this.state(prevState =>{
  //     return {count: prevState + 1}
  //   })
  // }
 const {count, increment} = this.props;
  render(
    <Button onClick={increment()} text ={count}/>
  )
}
export default HOC(Counter)

class Counter2 extends component {
  // constructor(){
  //   this.state ={
  //     count:0
  //   }
  // }

  // increment = ()=> {
  //   this.state(prevState =>{
  //     return {count: prevState + 1}
  //   })
  // }
  const {count, increment} = this.props;
  render(
    <Button onClick={increment()} text ={count}/>
  )
}
export default HOC(Counter2)

const HOC = (Component) => {

class NewComponent extends React.Component{
  constructor(){
    this.state ={
      count:0
    }
  }

  incrementCount = ()=> {
    this.state(prevState =>{
      return {count: prevState + 1}
    })
  }

  render(){
    return (
      <Component
        count={this.state.count}
        incermentCount={this.incrementCount}/>
    )
  }
}
return NewComponent
}

