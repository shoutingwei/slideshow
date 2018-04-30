import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./Slide.css";


class Slide extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return <div className="slide-container">
					<img className="slide-image" src={this.props.imgUrl}/>
					<div className="slide-words">
						<header><h1>{this.props.title}</h1></header>
						<section>
							<p>{this.props.description}</p>
						</section>
					</div>
				</div>; 
	}
}



export default Slide;