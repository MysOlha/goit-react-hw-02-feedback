import React from "react"
import css from "./Statistics.module.css"
import PropTypes from 'prop-types'; 

const Statistics = ({good, bad, neutral, total, positivePercentage}) => {
  return  (<ul>
        <li className={css.statsCount}>Good: {good}</li>
        <li className={css.statsCount}>Neutral: {neutral}</li>
        <li className={css.statsCount}>Bad: {bad}</li>
        <li className={css.statsCount}>Total: {total}</li>
        <li className={css.statsCount}>Positive feedback: {total === 0 ? 0 : positivePercentage} % </li> 
    </ul>)
}


export default Statistics

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired, 
    neutral: PropTypes.number.isRequired, 
    total: PropTypes.number.isRequired, 
    positivePercentage: PropTypes.number.isRequired,
}