import React,{ useContext }  from 'react'
import CovidBlockContext from '../../contexts/CovidBlockContext'

const CreerQRLieu = () =>{
    const {creerQRCodeLieu,getAllQRLieu,modifierListeQRCodeLieu} = useContext(CovidBlockContext)
    const handlerSubmit = (e) => {
        e.preventDefault()
        const qrcode = {
            nom : e.target.nom.value,
            description : e.target.description.value
        }
        creerQRCodeLieu(qrcode)
        .then(getAllQRLieu().then(liste => {
            modifierListeQRCodeLieu(liste)
        }))
        e.target.nom.value = ""
        e.target.description.value = ""
        
    }
        return(
           
                    <div className="card-body">
                        <h5 className="title mb-4 mt-1">Création d'un nouveau QR Code</h5>
                        <form onSubmit={handlerSubmit}>
                            <div className="form-group">
                                <label>Nom du QR Code</label>
                                <input type="text" name="nom" className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" name="description" className="form-control" required/>
                            </div>
                            <button type="submit" className="btn btn-primary ">Créer</button>
                        </form>
                    </div>
        )
    
    
}
export default CreerQRLieu