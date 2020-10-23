import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Main from '../components/Works/Main';

const WorksPage = (props) => (
  <Layout>
    <Seo pageTitle="事業紹介" location={props.location} />
    <Main />
  </Layout>
);

export default WorksPage;
