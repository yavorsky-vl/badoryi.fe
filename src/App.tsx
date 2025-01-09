import { HashRouter,Routes,Route} from 'react-router-dom'
import DefaultLayout from './components/DefaultLayout'

const App = () => {
  return (
    <HashRouter>
         <Routes>
         <Route path="*"  element={<DefaultLayout />} />

        </Routes>
    </HashRouter>
 
      // <div className="pt-3 text-center">
      //   <CSpinner color="primary" variant="grow" />
      // </div>
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
