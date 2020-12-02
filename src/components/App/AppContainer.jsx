import React from 'react'
import { ProviderWrapper as QRProvider} from '../../contexts/QRContext'
import App from './App'

const AppContainer = () => {
    return(
        <QRProvider>
            <App/>
        </QRProvider>
    )
}
export default AppContainer
