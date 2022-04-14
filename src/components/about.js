import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const About = () => {
  const data = useStaticQuery(graphql`
    {
      workstation: file(relativePath: { eq: "workstation-image.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 384
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  const metrics = [
    { count: "15", label: "YEARS OF EXPERIENCE" },
    { count: "250+", label: "MOBILE APPS SHIPPED" },
    { count: "18", label: "DESIGN AWARDS" },
  ];
  return (
    <div id="#about">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-12 items-center lg:py-28 md:pt-12 md:pb-28 pt-10 pb-20">
          <div className="lg:col-span-5 flex flex-row items-center gap-8">
            <div className="flex flex-col xl:pr-8">
              <h2 className="md:text-display-lg text-display-md font-semibold md:pb-6 pb-4">
                A bit about me
              </h2>
              <p className="text-body-md font-normal text-neutral-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer. Nunc odio in et, lectus
                sit lorem id integer.
                <br></br>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus.
                <br></br>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 lg:grid lg:grid-cols-7 flex md:flex-row flex-col items-center md:gap-8 gap-12">
            <div className="lg:col-span-4 flex">
              <GatsbyImage
                image={getImage(data.workstation)}
                alt="Workstation"
              />
            </div>
            <div className="lg:col-span-3 flex md:self-auto self-stretch grow flex-col xl:gap-16 lg:gap-8 gap-12 xl:pl-8">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col self-stretch gap-2 pb-4 border-b border-solid border-neutral-400">
                  <p className="md:text-display-lg text-display-md font-semibold">
                    {item.count}
                  </p>
                  <p className="text-body-sm font-semibold tracking-2 text-neutral-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
