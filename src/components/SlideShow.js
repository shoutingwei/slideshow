import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./SlideShow.css";
import Slide from "./Slide.js";

class SlideShow extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			photos: [{
				url: "http://waltdisney.org/sites/default/files/WDFM_9OM_WebAssets_V1_Logo.png",
				code: "001",
				des: "Walt Disney’s Nine Old Men: Masters of Animation",
				title: "upcoming Exhibition"
			}
			,{
				url: "http://waltdisney.org/sites/default/files/keane-carousel.jpg",
				code: "002",
				des: "Make Believe: The World of Glen Keane",
				title: "current Exhibition"
			}
			]
		}
	}

	componentDidMount(){
		setInterval(()=>{
			let photos = this.state.photos;
			let newLast = photos.shift();
			photos.push(newLast);
			this.setState({
				photos: photos
			});
		},2000);
	}

	render(){
		let slides = this.state.photos.map((photo) =>{
			return <Slide imgUrl={photo.url} key={photo.code} code={photo.code} description={photo.des} title={photo.title}/>
		});
		return <div className="container"><div className="slide-show-container">{slides}</div></div>; 
	}
}

export default SlideShow;