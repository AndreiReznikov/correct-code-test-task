import AirDatepicker from '~libs/air-datepicker';
import mars from '~videos/mars.mp4';

class LandingPage {
  init() {
    this._findElements();
    this._setVideo();
    this._startInitialAnimation();
    this._openPopup();
    this._closePopup();
    this._initializeDateDropdown();
    this._preventDefault();
    this._addEventListeners();
  }

  _findElements() {
    this.$window = $(window);
    this.$landingPageBackground = $('.landing-page__background');
    this.$landingPageScreen = $('.landing-page__screen');
    this.$landingPageTitle = $('.landing-page__title');
    this.$landingPageScrim = $('.landing-page__scrim');
    this.$headerButton = $('.header__button-container button');
    this.$popupButton = $('.popup button');
    this.$popupCloseButton = $('.popup__close-button');
    this.$popup = $('.popup');
    this.$video = $('video');
  }

  _startInitialAnimation() {
    setTimeout(() => this._setBackgroundPosition('center'));
    const start = performance.now();
    const animate = (timestamp) => {
      const elapsed = timestamp - start;
      if (elapsed >= 3000) {
        this.$landingPageBackground.text('Марс');
        this.$landingPageScrim.text('Марс');
        return;
      }
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }

  _setBackgroundPosition(position) {
    this.$landingPageBackground.css({ 'background-position': position });
  }

  _shiftBackground(event) {
    this.$landingPageBackground.css({
      '-webkit-transition': '0.6s',
      '-o-transition': '0.6s',
      transition: '0.6s',
    });

    this.$windowWidth = this.$window.width();
    this.clientX = event.pageX;
    let position = 'center';

    if (this.clientX < this.$windowWidth * 0.33) position = 'left';
    else if (this.clientX > this.$windowWidth * 0.66) position = 'right';

    this._setBackgroundPosition(position);
  }

  _setVideo() {
    this.$video.attr('src', mars);
  }

  _openPopup() {
    this.$headerButton.on('click', () => this.$popup.css({
      display: '-webkit-box',
      // eslint-disable-next-line no-dupe-keys
      display: '-ms-flexbox',
      // eslint-disable-next-line no-dupe-keys
      display: 'flex',
    }));
  }

  _closePopup() {
    this.$popupCloseButton.on('click', () => this.$popup.css({ display: 'none' }));
  }

  _initializeDateDropdown() {
    this.dateDropdown = new AirDatepicker('.js-date-dropdown');

    this.dateDropdown.initializePlugin({
      clearButton: true,
      keyboardNav: true,
      navTitles: { days: 'MM <i>yyyy</i>' },
      prevHtml: '<div class="datepicker--arrow-prev"></div>',
      nextHtml: '<div class="datepicker--arrow-next"></div>',
    });

    this.dateDropdown.setDatesDefault();
    this.dateDropdown.openDatepickerMultiple();
    this.dateDropdown.addApplyButton();
    this.dateDropdown.checkEmptyValue();
  }

  _preventDefault() {
    this.$popupButton.on('click', (event) => event.preventDefault());
  }

  _addEventListeners() {
    this.$landingPageBackground.on('mousemove', (event) => this._shiftBackground.call(this, event));
    this.$landingPageBackground.on('mouseleave', () => this._setBackgroundPosition('center'));
  }
}

export default LandingPage;
