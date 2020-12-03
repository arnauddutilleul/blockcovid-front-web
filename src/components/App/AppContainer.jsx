import React from 'react'
import { ProviderWrapper as QRProvider} from '../../contexts/CovidBlockContext'
import App from './App'

const AppContainer = () => {
    return(
        <QRProvider>
            <App/>
        </QRProvider>
    )
}
export default AppContainer
