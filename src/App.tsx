import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import Rating, {RatingValueType} from './components/Rating/Rating';
import UncontrolledRating from './components/Rating/UncontrolledRating';
import {Accordion} from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(false)
  return (
    <div className="App">
<Accordion titleValue={"Menu"}
           collapsed={accordionCollapsed}
           onChange={ () => {setAccordionCollapsed(!accordionCollapsed)} } />
{/*<Accordion titleValue={"Users"}
                     collapsed={accordionCollapsed}
                     onChange={ () => {setAccordionCollapsed(!accordionCollapsed)} }  />*/}

        {/*<UncontrolledAccordion titleValue={"Menu"} collapsed={true}/>*/}
        <UncontrolledAccordion titleValue={"Users"} />
        <Rating value={ratingValue} onClick={setRatingValue} />
    {/*<UncontrolledRating />*/}
        <UncontrolledOnOff onChange={setOn}/>
    </div>
  );
}



export default App;
