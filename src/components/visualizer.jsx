import React, { Component } from 'react';
import './visualizer.css';
import {mergesort} from '../algorithms/mergesort.js';
import {selectionsort} from '../algorithms/selectionsort.js';

class Visualizer extends Component {
    constructor(){
        super();
        this.state ={
            array:[]
        };
    }
    
    componentDidMount(){
        this.resetArray(100);
         document.getElementById("myrange").value = 100;
    }
    getRandomInt=(min,max)=>{
        return  Math.floor(Math.random() * (max- min) + min);
     }
    resetArray=(size)=>{
        const array =[];
      
        for(let i=0;i<size;i++)
        {array.push(this.getRandomInt(5,500));
        
        }

       
        this.setState({array});
    }
    getWidth(size){
        return (1140/size)-2;
    }
    handleChange=()=>{
      
          this.resetArray(document.getElementById("myrange").value);
    }

    selectionSort(){
        
        selectionsort(this.state.array);
    }
    mergeSort() {
       mergesort(this.state.array);
        
      }
     
      


  



    render() { 
        const {array} = this.state;
        return (
            <> 
            <nav className="navbar navbar-expand-lg bg-secondary  " >
                <span className="navbar-brand h1 m-3">
                    ARRAY VISUALIZER
                </span>
            <button onClick={this.handleChange} className="btn btn-primary btn-lg"> Shuffle</button>           <div className="slidecontainer">
              <input type="range" min="10" max="300" defaultValue="3" className="slider" id="myrange"
              onChange={this.handleChange}/>
                
            </div> 
               
               
            <button onClick={()=>this.mergeSort()} className="btn btn-primary btn-lg"> Merge Sort</button>
            
            <button onClick={()=>this.selectionSort()} className="btn btn-primary btn-lg"> Selection Sort</button>  
            
            </nav>
            <div className="fixed">
             {array.map((val,idx)=>(
                 <div className="array-bar" style={{
                     height: `${val}px`,
                     width : `${this.getWidth(document.getElementById("myrange").value)}px`
                 }}key={idx}></div>
             ))}
             </div>
             
           </>
         );
    }

}
 
export default Visualizer;
