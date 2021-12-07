import React from 'react'

const Card = (props) => {
    const {data} = props
    const {gender,name,origin,species,status,img_url,hair} = data;

    return (
        <div className="card">
            <div className="character">
            <img className="character-image" src={img_url} alt={name}/>
            <h1 className="character-title">{name}</h1>
            <div className="information">
                <div className="indiviual-info">
                    <small className="type">Gender</small>
                    <small className="data">{gender}</small>
                </div>
                <div className="indiviual-info">
                    <small className="type">Origin</small>
                    <small className="data">{origin}</small>
                </div>
                <div className="indiviual-info">
                    <small className="type">Species</small>
                    <small className="data">{species}</small>
                </div>
                <div className="indiviual-info">
                    <small className="type">Hair</small>
                    <small className="data">{hair}</small>
                </div>
                <div className="indiviual-info">
                    <small className="type">Status</small>
                    <small className="data">{status}</small>
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default Card
