import { ScrollProvider } from '../../../hooks/scrolling'
import ScrollIndicator from '../../commons/ScrollIndicator'
import TitleIcon from '../../commons/TitleIcon'
import AboutSection from './AboutSection'
import FinalSection from './FinalSection'
import HowToUse from './HowToUse'
import LandingSection from './LandingSection'

function MainPage() {
  return (
    <ScrollProvider
      overlayChildren={
        <>
          <TitleIcon />
          <ScrollIndicator />
        </>
      }
    >
      <LandingSection />
      <AboutSection />
      <HowToUse />
      <FinalSection />
    </ScrollProvider>
  )
}

export default MainPage
