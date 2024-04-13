
import React,{ useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
        {/* Do not remove the main div */}
        <form onSubmit={handleFormSubmit}>
        <label>
          Enter your name:
          <br/>
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
          />
        </label>
      </form>
      <p>{name && `Hello, ${name}!`}</p>
    </div>
  )
}

export default App
