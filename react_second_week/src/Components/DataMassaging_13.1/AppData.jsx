import {DATA} from './Data.jsx'

function AppData() {
    const namesArray = (arr) => {
       return arr.map((el, index) => {return (
        <div key={index}>{el.name}</div>
       )})
    }
    const getOldPeople = (arr) => {
        return arr.filter((el) => {
            return el.birthday.split('-')[2] < 1990;
        }).map(el => console.log(el))
    }
    
    return (
        <div>
            <div>{namesArray(DATA)}</div>
            <div>{getOldPeople(DATA)}</div>
        </div>
    )
}
export default AppData;