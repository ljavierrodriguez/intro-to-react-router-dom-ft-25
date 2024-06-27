import React from 'react'
import { Link } from 'react-router-dom'

const CharacterInfo = ({id, name, image, species }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{species}</p>
                        <p className="card-text"><Link to={`/characters/${id}/details`}><small className="text-body-secondary">Ver mas</small></Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterInfo