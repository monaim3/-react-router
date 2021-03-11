import React from 'react';
import '../../../node_modules/react-bootstrap';
import '../Team/Team.css';
import  '../../img/banner.jpg';
import { Link } from 'react-router-dom';




const Team = (props) => {
    const {strTeam,strSport,strTeamBadge,idTeam}=props.team;
    
    return (
       
       <div class="Cart">
           
           
          <div className="teamInformation">
          <div class="container">
           <div class='row'>
            <div class="col-lg-4">
                <div className="cart-wrapper text-center">
                <img class='w-75 d-block img-style' src={strTeamBadge} alt=""/>
                <h3>{strTeam}</h3>
                  <h6>Sports type:{strSport}</h6>
                 
                  <p> <Link to={`/Team/${idTeam}`}><button>Explore</button></Link> </p>
            
                </div>
              
            </div>
            
        </div>
           </div>
          </div>
       </div>
    );
};

export default Team;