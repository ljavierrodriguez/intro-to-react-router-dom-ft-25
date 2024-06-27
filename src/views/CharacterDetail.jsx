import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CharacterDetail = () => {

    const [character, setCharacter] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getCharacterById(`https://rickandmortyapi.com/api/character/${params.id}`)
    }, [params.id])

    const getCharacterById = (url, options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }) => {
        fetch(url, options)
            .then((response) => response.json())
            .then((responseJson) => setCharacter(responseJson))
            .catch((error) => console.log(error))
    }

    return (
        <>
            <div>Character Detail</div>
            {
                !!character ?
                    (
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={character?.image} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{character?.name}</h5>
                                        <p className="card-text">{character?.species}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )
            }
            <button className="btn btn-warning btn-sm" onClick={() => navigate(-1)}>Regresar</button>
        </>

    )
}

export default CharacterDetail