import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import Card from './Card';
import './Home.css'

const limit = 47;

class Home extends Component {

    state ={
        data:[],
        isLoading:true
    }
    
    componentDidMount(){
        this.getSpaceCharacters();
    }

    

    getSpaceCharacters = async()=>{
        const url = `https://finalspaceapi.com/api/v0/character?limit=${limit}`
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({data,isLoading:false})
    }

    renderLoadingView = () => (
        <div className="products-details-loader-container">
          <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
        </div>
      )

    renderDataView=()=>{
        const {data} = this.state;
        return(
            data.map((each)=>{
               return <Card key={each.id} data={each}/>
            })
        )
    }


    render() {
        const {isLoading} = this.state
        return (
            <div className="main-container">
                <h1 className="title">Final Space</h1>
                 <div className="container">
                    <div className="space-container">
                        {
                            isLoading?(this.renderLoadingView()):(this.renderDataView())
                        }
                    </div>
                </div>
            </div>  
        )
    }
}

export default Home
