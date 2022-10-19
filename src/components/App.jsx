import React from 'react'
import Statistics from "./Statistics";
import Notification from './Notification';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import css from "./FeedbackOptions/FeedbackOptions.module.css"

class App extends React.Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
    }


  onLeaveFeedback = rating => {
    this.setState(prevState => ({[rating]: prevState[rating] + 1}));
  }

  // goodFeedback = () => {
  //  this.setState(prevState => ({ 
  //  good: prevState.good + 1,
  // }));  
  // }

  // neutralFeedback = () => {
  //  this.setState(prevState => ({
  //  neutral: prevState.neutral +1,
  //  }));
  // }

  // badFeedback = () => {
  //  this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //  }));
  // }


  countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
   const { good } = this.state;
   const totalFeedback = this.countTotalFeedback()
   return (Math.round(good/totalFeedback*100))
  }

  render() {
  const total = this.countTotalFeedback()   
  const positive = this.countPositiveFeedbackPercentage()
      return (
      <div className={css.container}>
        <Section title="Please leave feedback">
         <FeedbackOptions
         options={Object.keys(this.state)}
         onLeaveFeedback={this.onLeaveFeedback}/>
        </Section> 
         
        {total === 0 ?

         (<Notification message="There is no feedback"/> )

        :
        
         (<>
            <Section title="Statistics">
              <Statistics 
              good={this.state.good} 
              neutral={this.state.neutral} 
              bad={this.state.bad} 
              total={total} 
              positivePercentage={positive}/>
            </Section>
          </>)
       
        }
         
         
                 
      </div>
      )
  }
}

export default App