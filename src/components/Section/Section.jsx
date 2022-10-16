import React from "react";
import css from "./Section.module.css"
import PropTypes from 'prop-types'; 

const Section = ({title}) => {
    return <h2 className={css.title}>{title}</h2 >
}
    
export default Section