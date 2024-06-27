import React, { useEffect, useState } from 'react'
import CharacterInfo from '../components/CharacterInfo'
import { Link, useSearchParams } from 'react-router-dom'

const Home = () => {

    const [characters, setCharacters] = useState(null)
    const [page, setPage] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        getCharacters(`https://rickandmortyapi.com/api/character?page=${page}`)
    }, [page])

    useEffect(() => {
        if (searchParams.get('page') !== null) setPage(parseInt(searchParams.get('page')))
    }, [searchParams])


    const getCharacters = (url, options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }) => {
        fetch(url, options)
            .then((response) => response.json())
            .then((responseJson) => setCharacters(responseJson))
            .catch((error) => console.log(error))
    }



    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item"><Link class="page-link" to="/?page=1">1</Link></li>
                            <li class="page-item"><Link class="page-link" to="/?page=2">2</Link></li>
                            <li class="page-item"><Link class="page-link" to="/?page=3">3</Link></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="row">
                {
                    !!characters &&
                    characters?.results.length > 0 &&
                    characters.results.map((character) => {
                        return (
                            <div className="col-md-4" key={character.id}>
                                <CharacterInfo {...character} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home