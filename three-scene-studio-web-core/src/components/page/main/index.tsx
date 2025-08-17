import SectionScrollProvider from '../../commons/SectionScrollProvider'
import AboutSection from './AboutSection'
import LandingSection from './LandingSection'

function MainPage() {
  return (
    <SectionScrollProvider>
      <LandingSection />
      <AboutSection />
    </SectionScrollProvider>
  )
}

export default MainPage
