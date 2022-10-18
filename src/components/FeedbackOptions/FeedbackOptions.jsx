import React from "react"
import css from "./FeedbackOptions.module.css"
import PropTypes from 'prop-types'; 

 const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
    <ul className={css.btnContainer}>
     {options.map(option => (
      <li key = {option} className={css.btnList}>
        <button type="button" className={css.btnFeedback} onClick={() => onLeaveFeedback(option)}>{option}</button>
      </li>
     ))}   
    {/* <button type="button" className={css.btnFeedback} onClick={this.goodFeedback}>Good</button>
    <button type="button" className={css.btnFeedback} onClick={this.neutralFeedback}>Neutral</button>   
    <button type="button" className={css.btnFeedback} onClick={this.badFeedback}>Bad</button> */}
  </ul>
  )
}

export default FeedbackOptions


FeedbackOptions.propTypes ={
    options: PropTypes.arrayOf(PropTypes.shape).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
