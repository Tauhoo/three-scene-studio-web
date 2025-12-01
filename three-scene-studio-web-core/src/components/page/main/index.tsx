import { ScrollProvider } from '../../../hooks/scrolling'
import { ThreeSceneStudioProvider } from '../../../hooks/threeSceneStudio'
import Background from '../../commons/Background'
import Background3DScene from '../../commons/Background3DScene'
import ScrollIndicator from '../../commons/ScrollIndicator'
import TitleIcon from '../../commons/TitleIcon'
import AboutSection from './AboutSection'
import FinalSection from './FinalSection'
import HowToUse from './HowToUse'
import LandingSection from './LandingSection'

function MainPage() {
  return (
    <ThreeSceneStudioProvider url='/scene.tss'>
      <ScrollProvider
        overlayChildren={
          <>
            <TitleIcon />
            <ScrollIndicator />
            <Background3DScene />
            <Background />
          </>
        }
      >
        <LandingSection />
        <AboutSection />
        <HowToUse />
        <FinalSection />
      </ScrollProvider>
    </ThreeSceneStudioProvider>
  )
}

export default MainPage
