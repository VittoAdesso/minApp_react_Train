import React, {useState} from 'react';

const WeatherForm = ({ onChangeCity }) => {

    const [city, setCity] = useState('');

    const onChange = (e) => {
        const value = e.target.value;
        if(value !== ''){
            setCity(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onChangeCity(city);
    }; 
    
    return (
        <div>
           <form onSubmit={handleSubmit}>
                <input type="text" onChange={onChange}/>
           </form> 
        </div>
    );
}

export default WeatherForm;
