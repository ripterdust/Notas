import { Component } from 'react';
import Axios from 'axios';

class Note extends Component {


    render(){
        Axios({
            method: 'get',
            url: 'localhost:8080/api/'
        })
        return <div>hola</div>
    }
}

export default Note;