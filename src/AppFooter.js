import React from 'react';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';

const AppFooter = () => {

    return (
        <div className="layout-footer">
            <div >
                <span className="app-name">Administración Personal</span>
            </div>
            <span className="copyright">&#169; Ing. Noe Emanuel Lopez Velazquez</span>
        </div>
    );
}

export default AppFooter;
