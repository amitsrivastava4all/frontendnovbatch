import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
export class Slider extends React.Component{
    constructor(props){
        super(props);
    }
    createSlider(){
        return this.props.data.map((element,index)=>{
            return (
                <Carousel.Item key={index} >
                <img
                  className="d-block w-100"
                  src={element.url}
                  alt={element.name}
                />
                <Carousel.Caption>
                  <h3>{element.name}</h3>
                  <p>{element.price}</p>
                </Carousel.Caption>
              </Carousel.Item>
             
            )
        })
    }
    render(){
            return (
                <Carousel>
 
 {this.createSlider()}
</Carousel>
            );
    }

}