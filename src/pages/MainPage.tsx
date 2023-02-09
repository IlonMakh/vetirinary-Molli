import { AboutSection } from "../components/AboutSection";
import { ContactsSection } from "../components/ContactsSection";
import { StartScreen } from "../components/StartScreen";
import { WorkTimeSection } from "../components/WorkTimeSection";

export const MainPage = () => {
  return (
    <>
      <StartScreen />
      <WorkTimeSection />
      <AboutSection />
      <ContactsSection />
    </>
  );
};
