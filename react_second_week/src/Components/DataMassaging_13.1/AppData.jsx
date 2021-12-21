import React from 'react';
import {DATA} from './Data.jsx';
import Names from './Names.jsx';
import OldPeople from './OldPeople.jsx';

class AppData extends React.Component {
    state = {
        namesArray: [], 
        oldPeopleArray: []
    }
    componentDidMount() {
        this.setState({
            namesArray: DATA.map(el => el.name),
            oldPeopleArray: DATA.filter(el => el.birthday.split('-')[2] < 1990)
        })
    }
    
    // getOldPeople = (arr) => {
    //     return arr.filter((el) => {
    //         return el.birthday.split('-')[2] < 1990;
    //     }).map(el => console.log(el))
    // }
    render() {
        
        return (
            <div>
                <Names names={this.state.namesArray} />
                <OldPeople peoples={this.state.oldPeopleArray} />
            </div>
        )
    }  
}
export default AppData;