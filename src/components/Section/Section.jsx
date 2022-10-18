import React from "react";
import css from "./Section.module.css"
import PropTypes from 'prop-types'; 

const Section = ({title, children}) => {
    return(
    <>
    <h2 className={css.title}>{title}</h2 >
    {children}
    </>)
}
    
export default Section

Section.propTypes = {
    tittle: PropTypes.string,
}