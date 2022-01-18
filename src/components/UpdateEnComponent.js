import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Update() {


    return (
        
        <div className="container">
            <div className="row row-content">
                <div className="col">
                    <h3 className="text-center mt-3 mb-3">Updating your Computer</h3>
                </div>
            </div>
            <div className="row row-content">
                <div className="col">
                    <h5 className="mb-3">To update your computer(if there are available updates),
                        Click on the lower right hand corner.</h5>
                </div>
                <img className="img-fluid mb-3" src="/imgEnglish/chromebookdeskUpdate.png" alt="Desktop Picture" />
            </div>
            <div className="row row-content">
                <div className="col">
                    <h5 className="mb-3">Click on the the gear indicated below, this will open your settings.</h5>
                </div>
                <img className="img-fluid mb-3" src="/imgEnglish/ConfigChrome.png" alt="Configuration Settings" />
            </div>
            <div className="row row-content">
                <div className="col">
                    <h5 className="mb-3">In settings, perform a search where it says 'Search Settings'.
                        Search 'Updates',  and click on
                        'Search Updates'.
                    </h5>
                </div>
                <img className="img-fluid mb-3" src="/imgEnglish/actualizacion.png" alt="Searching for Updates" />
            </div>
            <div className="row row-content">
                <div className="col">
                    <h5 className="mb-3">Click on 'Search Updates'. It will spend a few seconds searching. If there are updates available click on 'update and install'.</h5>
                </div>
                <img className="img-fluid mb-3" src="/imgEnglish/BuscarActualizaciones.png" alt="Searching for Updates" />
            </div>
            <div className="row row-content">
                <div className="col">
                    <h5 className="mb-3">It's important to regularly update your computer. The updates are designed to make the device more secure, fix bugs within the system, and help overall system performance.</h5>
                </div>
            </div>
        </div>
        
    );
}

export default Update