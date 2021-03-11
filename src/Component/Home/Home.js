import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';

import Team from '../Team/Team';



const Home = () => {
    const [teams, setTeams]= useState([]);
    
    useEffect(()=>{

       fetch(' https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328')
       .then(res=> res.json())
       .then(data=>setTeams(data.teams.slice(0,15)))
       
    },[])
    return (
       
    <div class="home">
     
      <Header></Header>
   
       <div class="row">
       {
       teams.map(tm=><Team team={tm}></Team>)
     }
       </div>
       </div>
    );
};

export default Home;