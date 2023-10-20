import '~components/header';
import '~templates/fonts.scss';

import LandingPage from './LandingPage';
import './landing-page.scss';

const initializeLandingPage = () => {
  const landingPage = new LandingPage();
  landingPage.init();
};

document.addEventListener('DOMContentLoaded', initializeLandingPage);
