import React from 'react'
import css from "./Feedback/Feedback.module.css"
import Statistics from "./Statistics/Statistics";
import Notification from './Notification/Notification';
import Section from './Section/Section';

class App extends React.Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
    }

  goodFeedback = () => {
   this.setState(prevState => ({ 
   good: prevState.good + 1,
  }));  
  }

  neutralFeedback = () => {
   this.setState(prevState => ({
   neutral: prevState.neutral +1,
   }));
  }

  badFeedback = () => {
   this.setState(prevState => ({
      bad: prevState.bad + 1,
   }));
  }


  countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
   const { good, neutral, bad } = this.state;
   return (Math.round(good/(good+neutral+bad)*100))
  }

  render() {
  const total = this.countTotalFeedback()   
  const positive = this.countPositiveFeedbackPercentage()
      return (
      <div className={css.container}>
        <Section title="Please leave feedback"/>
          <div className={css.btnContainer}>
            <button type="button" className={css.btnFeedback} onClick={this.goodFeedback}>Good</button>
            <button type="button" className={css.btnFeedback} onClick={this.neutralFeedback}>Neutral</button>   
            <button type="button" className={css.btnFeedback} onClick={this.badFeedback}>Bad</button>
          </div>
         
        {total === 0 ?

         <Notification message="There is no feedback"/> 

        :
        
         <>
            <Section title="Statistics"/>
            <Statistics 
            good={this.state.good} 
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={total} 
            positivePercentage={positive}/>
       
          </>
       
        }
         
         
                 
      </div>
      )
  }
}

export default App