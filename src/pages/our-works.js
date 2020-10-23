import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Main from '../components/Works/Main';
import Table from '../components/Works/Table';
import Contact from '../components/Index/Contact';

const WorksPage = (props) => (
  <Layout>
    <Seo pageTitle="事業紹介" location={props.location} />
    <Main />
    <Table />
    <Contact />
  </Layout>
);

export default WorksPage;
