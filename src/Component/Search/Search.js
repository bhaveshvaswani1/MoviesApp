
import { useState, useEffect } from 'react'
import Card from "../Card/Card"
import axios from "axios"
import "./Search.css"
function Search() {
    const [value, setValue] = useState("spiderman");
    const [data, setData] = useState([]);
    async function submit(e) {
        setValue(e.target.value)
    }
    useEffect(async () => {
        const type = 0;
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${value}&page=${1}&include_adult=false`
        );
        setData(data.results);
    }, [value])
    return (
        <>
            <h1 className="head" >Search Any Movie</h1>
            <div className="search" >
                <input onChange={submit} placeholder="type here" ></input>
                <button>Search</button>
            </div>

            <div className="main" >
                <div className="card-div" >

                    {
                        data.map((item) => {
                            if (item.poster_path)
                                return <Card
                                    name={item.original_title || item.original_name}
                                    img={item.poster_path}
                                    rating={item.vote_average}
                                    id={item.id}
                                ></Card>
                        })
                    }
                </div>
            </div>

        </>
    );
}
export default Search;