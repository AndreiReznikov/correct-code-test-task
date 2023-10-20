import mars from '~videos/mars.mp4';

class LandingPage {
  init() {
    this._findElements();
    this._setVideo();
    this._addEventListeners();
  }

  _findElements() {
    this.$window = $(window);
    this.$landingPageBackground = $('.landing-page__background');
    this.$video = $('video');
  }

  _setBackgroundPosition(position) {
    this.$landingPageBackground.css({ 'background-position': position });
  }

  _shiftBackground(event) {
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

  _addEventListeners() {
    this.$landingPageBackground.on('mousemove', (event) => this._shiftBackground.call(this, event));
    this.$landingPageBackground.on('mouseleave', () => this._setBackgroundPosition('center'));
  }
}

export default LandingPage;
