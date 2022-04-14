import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

const WorkItem = ({ image, title, description }) => {
  return (
    <div className="flex basis-1/2 flex-col lg:odd:pl-10 lg:odd:pr-14 lg:even:pr-10 lg:even:pl-14 md:odd:pr-4 md:even:pl-4 px-0 md:even:mt-20 md:odd:pb-20 md:even:pb-0 pb-12">
      <div>
        <GatsbyImage image={image} alt={title} />
      </div>
      <div className="flex flex-col self-stretch pt-6">
        <h3 className="lg:text-display-xs text-body-xl font-semibold pb-2">
          {title}
        </h3>
        <p className="lg:text-body-md text-body-sm font-normal text-neutral-700">
          {description}
        </p>
      </div>
    </div>
  );
};

WorkItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default WorkItem;
