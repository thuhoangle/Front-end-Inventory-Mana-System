import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard, Inventory, Order, Product, Supplier, Login, SignUp } from "./pages/index.js";
import PageLayout from "./PageLayout.jsx";
import Export from "./pages/Export.jsx";
import ExportHistory from "./pages/ExportHistory.jsx";



function App() {
  return (
      <PageLayout>
          <Routes>
              <Route path={'/'} element={ <Dashboard /> } />
              {/*<Route path='/auth' element={<AuthPage/>} />*/}
              <Route path='/inventory' element={<Inventory/>} />
              <Route path='/supplier' element={<Supplier/>} />
              <Route path='/product' element={<Product/>} />
              <Route path='/order' element={<Order/>} />
              <Route path='/export' element={<Export/>} />
              <Route path='/export-history' element={<ExportHistory/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<SignUp/>} />
          </Routes>
      </PageLayout>

    )
}

export default App
