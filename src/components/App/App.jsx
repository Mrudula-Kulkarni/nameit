import React from 'react';
import Header from '../../Header/Header';
import ResultContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');
class App extends React.Component {
    
    state = {
        headerText:"Name It!",
        headerExpanded:true,
        suggestedNames:[],
    };
    
    handleInputChange = (inputText) => {
        name(inputText);
        this.setState({
            headerExpanded:!inputText,
            suggestedNames: inputText? name(inputText):[],
        })
    }
    render() {
        return(
            <div>
                <Header  headTitle={this.state.headerText} headerExpanded={this.state.headerExpanded}/>
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}

export default App