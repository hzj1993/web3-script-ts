import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from "./router";
import { Layout, Menu } from '@arco-design/web-react';

const { Sider, Header, Content } = Layout;

function App() {
  return (
    <Layout className="App">
      <Header>脚本v1.0</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>
          <RouterProvider router={router} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
