import React, { Component } from 'react'

export default class Componentupdate extends Component 
{
    state={count:0}
    shouldComponentUpdate(nxtprp,nxtst)
    {
        return nxtst.count!==this.state.count
    }
    componentDidUpdate(prstate,nxtstate)
    {
        console.log(prstate.count,this.state.count)
    }
    
  render() {
    return (
      <div>Componentupdate
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}
