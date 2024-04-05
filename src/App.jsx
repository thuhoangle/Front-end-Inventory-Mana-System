import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Dashboard, Inventory, Order, Product, Supplier, OrderForm } from "./pages/index.js";
import {SideBar, Header} from "./components/index.js";
import { Layout  } from "antd";
const {  Sider, Content } = Layout;

function App() {
  return (
      <Router>
      <Layout hasSider>
          <Sider className={'sticky overflow-auto  h-screen left-0 top-0 bottom-0'}>
            <SideBar/>
              </Sider>
                <Layout>
                    <Header/>
                    <Layout>
                        <Content>
                    <Routes>
                        <Route exact path="/" element={<Dashboard/>}/>
                        <Route path="/inventory" element={<Inventory/>}/>
                        <Route path="/order" element={<Order/>}/>
                        <Route path="/product" element={<Product/>}/>
                        <Route path="/supplier" element={<Supplier/>}/>
                        <Route path="/order-form" component={<OrderForm/>} />
                    </Routes>
                        </Content>
                    </Layout>
                </Layout>
      </Layout>
      </Router>
    )
}

export default App
