import "./Home.css"
import React, { useState, useEffect } from 'react'
import axios from "axios";
import Card from "../Card/Card"
function Home() {

    const [res, setRes] = useState(0);
    async function fun() {
        var data = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_KEY}`)
       setRes(data.data.results);
        return data;
    }
    useEffect(() => {
        fun();
    }, [])

    return (
        <>
            <div className="main" >

                <h1 className="head" >Trending movies</h1>
                <div className="card-div" >
                    {res && res.map((item) => {
                        return <Card
                            name={item.original_title || item.original_name}
                            img={item.poster_path}
                            rating={item.vote_average}
                            id={item.id}
                            url="home"
                        ></Card>

                    })

                    }
                </div>
            </div>
        </>
    );

}
export default Home;