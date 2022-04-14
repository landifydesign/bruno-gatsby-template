import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const LogoClouds = () => {
  const data = useStaticQuery(graphql`
    {
      clients: allFile(
        filter: { relativeDirectory: { eq: "client-logos" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            id
            name
            publicURL
          }
        }
      }
    }
  `);
  return (
    <div>
      <div className="container mx-auto">
        <div className="md:py-12 py-8">
          <div className="flex justify-center relative pb-1">
            <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0 bg-logo-clouds-line"></span>
            <div className="bg-white px-6 py-3 relative">
              <p className="text-body-sm font-semibold tracking-2 text-neutral-500">
                CRAFTED DESIGNS FOR
              </p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center gap-8 py-6">
            {data.clients.edges.map(({ node }) => (
              <img src={node.publicURL} alt={node.name} key={node.id} />
            ))}
          </div>
          <div className="flex justify-center relative pb-1">
            <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0 bg-logo-clouds-line"></span>
            <div className="bg-white px-6 py-3 relative">
              <p className="text-body-sm font-semibold tracking-2 text-neutral-500">
                MORE THAN 150+ BRANDS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoClouds;
