import React from 'react'
import ValueMateHero from './components/ValueMateHero'
import WorkflowSection from './components/WorkflowSquareTabs'
import WorkflowStepTwo from './components/WorkflowStepTwo'
import WorkflowStepThreeFour from './components/WorkflowStepThreeFour'
import ChatAssistantSection from './components/ChatAssistantSection'
import ChatWithRegulations from './components/ChatWithRegulations'
import FAQSection from './components/FAQSection'
import CTAWithFooter from './components/CTAWithFooter'

const App = () => {
  return (
    <div>
      <ValueMateHero />
      <WorkflowSection />
      <WorkflowStepTwo />
      <WorkflowStepThreeFour />
      <ChatAssistantSection />
      <ChatWithRegulations />
      <FAQSection />
      <CTAWithFooter />
    </div>
  )
}

export default App