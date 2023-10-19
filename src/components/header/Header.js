class Header {
  init() {
    this._findElements();
    this._toggleMobileMenu();
  }

  _findElements() {
    this.$burger = $('.header__burger');
  }

  _toggleMobileMenu() {
    this.$burger.on('click', () => this.$burger.toggleClass('header__burger_transformed'));
  }
}

export default Header;
