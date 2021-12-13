import React from 'react';

const Card = (props) => {
    return (
        <div style={{width: '400px', minHeight: '300px', padding: '15px 10px', backgroundColor: 'gray', marginBottom: '10px'}}>
           <img src={props.imageUrl} alt="" style={{width: '100%', height: '50%', display: 'inlineBlock'}}/>
           <h2>{props.name}</h2>
           <p>{props.article}</p>
           <a href="/." style={{width: '30px', height: '20px', fontSize: '19px', color: 'orange'}}>SHARE</a>
           <a href="/." style={{width: '30px', height: '20px', fontSize: '19px', color: 'orange', marginLeft: '30px'}}>EXPLORE</a>

        </div>
    )
}

export default Card;