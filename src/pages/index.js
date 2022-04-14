import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import LogoClouds from "../components/logoClouds";
import Services from "../components/services";
import Works from "../components/works";
import About from "../components/about";
import Hero from "../components/hero";

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero />
    <Works />
    <Services />
    <LogoClouds />
    <About />
  </Layout>
);

export default IndexPage;
