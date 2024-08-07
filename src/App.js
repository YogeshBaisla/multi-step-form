import React, { useState } from 'react';
import './App.css';
import { FormComponentPage1 } from './Components/FormComponents/FormComponentPage1';
import { FormComponentPage2 } from './Components/FormComponents/FormComponentPage2';
import { NavigateLeft } from './Components/Navigation/Navigation';
import { NavigateRight } from './Components/Navigation/NavigateRight';

function App() {
  const [currentVisible, setCurrentVisible] = useState("form1");

  const handleNavigateLeft = () => {
    console.log("clicked left")
    if (currentVisible === "form2") {
      setCurrentVisible("form1");
    }
  };

  const handleNavigateRight = () => {
    console.log("clicked Right")
    if (currentVisible === "form1") {
      setCurrentVisible("form2");
    }
  };

  return (
    <div>
      {console.log(currentVisible)}
      {currentVisible === "form1" && <FormComponentPage1 id="form1" />}
      {currentVisible === "form2" && <FormComponentPage2 id="form2" />}
      <div>
        <NavigateLeft onClick={handleNavigateLeft} />
        <NavigateRight onClick={handleNavigateRight} />
      </div>
    </div>
  );
}

export default App;
