import { CFormCheck } from '@coreui/react'
import { HashRouter} from 'react-router-dom'
import { CSpinner } from '@coreui/react'

function App () {
  return (
      <div className="pt-3 text-center">
        <CSpinner color="primary" variant="grow" />
      </div>
    // <HashRouter>
    //   <div className="pt-3 text-center">
    //     <CSpinner color="primary" variant="grow" />
    //   </div>
    // <div className="App">
    //    <CFormCheck id="flexCheckDefault" label="Default checkbox" />
    //    <CFormCheck id="flexCheckChecked" label="Checked checkbox" defaultChecked />
    //   test
    // </div>
    // </HashRouter>
  );
}

export default App;
