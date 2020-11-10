import { Component, useEffect } from 'react';

const url = 'localhost:8080';

const getNotes = async (apiLink) => {
    const response = await fetch(apiLink);
    console.log(response.statusText);
}


class Note extends Component {
    
   
    render(){
    return <div>{ url }</div>
    }
}

export default Note;