import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Game() {

    // functonalities related to hero
    const [heroHealth, setHeroHealth] = useState();
    
    const fetchHeroHealth = async() => {
        await axios.get("http://localhost:8080/hero-health")
            .then((response) => {
                console.log(response);
                setHeroHealth(response.data);
            });
    }

    // functionalities related to villain
    const [villainHealth, setVillainHealth] = useState();

    const fetchVillainHealth = async() => {
        await axios.get("http://localhost:8080/villain-health")
            .then((response) => {
                setVillainHealth(response.data);
            })
    }

    // using the functionalities of hero and villain
    useEffect(() => {
        fetchHeroHealth();
        fetchVillainHealth();
    }, [])

    // const fetchHeroHealth = () => {
    //     axios.get("http://localhost:8080/hero-health")
    //             .then(response => {
    //                 console.log(response.data);
    //                 setHeroHealth(response.data);
    //             })
    // }

    // useEffect(() => {
    //     // fetchHeroHealth()
    //     axios.get("http://localhost:8080/hero-health")
    //             .then((response) => {
    //                 console.log("hello");
    //                 console.log(response.data);
    //                 // setHeroHealth(response.data);
    //             })
    // },[])

  return (
    <div>
        <div data-testid="heroHealth"> {heroHealth} </div>
        <button>Click To Attack The Villain</button>
        <div data-testid="villainHealth"> {villainHealth} </div>
        <button>Click To Attack The Hero</button>
        <button>Turn On Villain's Armour</button>
    </div>
  )
}

export default Game;