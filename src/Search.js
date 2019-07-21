import React, {Component} from 'react';

export class Search extends Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <input onChange={this.props.onChange} type="text" placeholder="Enter a location..."/>
                </form>
            </div>
        )
    }
}