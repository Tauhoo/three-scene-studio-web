import SectionScrollProvider from '../../commons/SectionScrollProvider'
import TitleIcon from '../../commons/TitleIcon'
import AboutSection from './AboutSection'
import LandingSection from './LandingSection'

function MainPage() {
  return (
    <SectionScrollProvider>
      <TitleIcon />
      <LandingSection />
      <AboutSection />
    </SectionScrollProvider>
  )
}

export default MainPage
