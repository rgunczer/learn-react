import { useState } from 'react'

import 'primeicons/primeicons.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
// import 'primereact/resources/themes/md-light-indigo/theme.css';
import 'primereact/resources/themes/md-dark-indigo/theme.css';
// import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';

import { Button } from 'primereact/button';


const primeReactConfig = {
  ripple: true,
};



function App() {

  return (
    <PrimeReactProvider value={primeReactConfig}>
      <div className="card flex justify-content-center">
        <Button label="Test" icon="pi pi-check" badge="12" />
      </div>
    </PrimeReactProvider>
  )
}

export default App
