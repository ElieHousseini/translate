import React from 'react'
import UserCreate from './UserCreate'
import { LanguageStore } from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'
import LanguageSelector from './LanguageSelector'

/*
? In this App, we will upderstand how to use {Context} feauture
? Steps for: Context Type
* Target: sending Data to a component without that component being a direct component    
* Create languageContext and send the data using: React.createContext('english')
* receive the data in the component using static contextType = LanguageContext;
* => console.log(this.context);
*/

class App extends React.Component {

    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />
                    <ColorContext.Provider value='primary' >
                        <UserCreate />
                    </ ColorContext.Provider>
                </LanguageStore>
            </div>
        )
    }
}

export default App