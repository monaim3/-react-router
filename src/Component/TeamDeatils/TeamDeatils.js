import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TeamDeatils.css'
import img1 from '../../img/flag (1) 1.png';
import img2 from '../../img/football (1) 1.png';
import img3 from '../../img/found 1.png';
import img4 from '../../img/male-gender-sign 1.png';
import male from '../../img/male.png';
import  famale  from "../../img/female.png";
import facebook from '../../img/Facebook.png'
import twitter from "../../img/Twitter.png";
import youtube from "../../img/YouTube.png";

const TeamDeatils = () => {
    const {idTeam}= useParams()
    const [teams, setTeamDeatils] =useState({})
    useEffect(()=>{

        const  url=(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`);
         
         fetch(url)
        .then(res=> res.json())
        .then(data=> setTeamDeatils(data.teams[0]))
        
    },[idTeam])
    console.log(teams)
    const {strFacebook,strTwitter,strYoutube,strCountry,strGender,intFormedYear,strSport,strLeague,strStadiumDescription,strTeamBanner}=teams;
    return (
        <div className="cardwrapper">
               <div className="header">
                    <img src={strTeamBanner} alt=""/>
               </div>
             <div className="cart">
             <div className="TeamDeatils">
              <h1>{strLeague}</h1>
            
            <h5><img src={img3} /> Founded: {intFormedYear}</h5>
            <h5><img src={img1}/>Country: {strCountry}</h5>
            <h5><img src= {img2}/>Sport Type :{strSport}</h5>
            <h5><img src= {img4}/>Gender :{strGender}</h5>

              </div>
               
               <div className="dynamicimg">
                   {
                       strGender==='Male'? <img src={male}/>:<img src={famale}/>
                   }

             </div>
             
             </div>
    
         <div className="description">
         {
                  strStadiumDescription
                }
               </div>
        <div className="social">
         <a href={`https://${strFacebook}`}><img src={facebook} target="_blank" alt=""/></a>
         <a href={`https://${strTwitter}`}><img src={twitter} target="_blank" alt=""/></a>
         <a href={`https://${strYoutube}`}><img src={youtube} target="_blank" alt=""/></a>
        </div>
        </div>
        
    );
};

export default TeamDeatils;