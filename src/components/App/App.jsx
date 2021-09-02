import React,{useState} from 'react';
import Header from '../../Header/Header';
import ResultContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');
const App = () => {
    const [headerText,setHeaderText]=useState('Name It!');
    const[headerExpanded,setHeaderExpanded]=useState(true);
    const[suggestedNames,setSuggestedNames]=useState([]);
    const  handleInputChange = (inputText) => {
       setHeaderExpanded(!inputText);
       setSuggestedNames(inputText ? name(inputText):[]);
    }

    return(
        <div>
            <Header  headTitle={headerText} headerExpanded={headerExpanded}/>
            <SearchBox onInputChange={handleInputChange} />
            <ResultContainer suggestedNames={suggestedNames} />
        </div>
    );
}

export default App