class LandingPage {
  init() {
    this._findElements();
    this._addEventListeners();
  }

  _findElements() {
    this.$window = $(window);
    this.$landingPage = $('.landing-page');
  }

  _setBackgroundPosition(position) {
    this.$landingPage.css({ 'background-position': position });
  }

  _shiftBackground(event) {
    this.$windowWidth = this.$window.width();
    this.clientX = event.pageX;
    let position = 'center';

    if (this.clientX < this.$windowWidth * 0.33) position = 'left';
    else if (this.clientX > this.$windowWidth * 0.66) position = 'right';

    this._setBackgroundPosition(position);
  }

  _addEventListeners() {
    this.$landingPage.on('mousemove', (event) => this._shiftBackground.call(this, event));
    this.$landingPage.on('mouseleave', () => this._setBackgroundPosition('center'));
  }
}

export default LandingPage;
