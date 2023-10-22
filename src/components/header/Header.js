class Header {
  init() {
    this._findElements();
    this._toggleMobileMenu();
  }

  _findElements() {
    this.$burger = $('.header__burger');
    this.$header = $('.header');
    this.$headerButton = $('.header__button-container button');
    this.$burgerContainer = this.$header.find('.header__burger-container');
    this.$burger = this.$header.find('.header__burger');
    this.$mobileMenu = this.$header.find('.header__mobile-menu');
    this.$html = $('html');
  }

  _toggleMobileMenu() {
    const htmlClass = this.$html.attr('class');
    const handleBurgerContainerToggleMobileMenu = () => {
      const isButtonDisables = this.$headerButton.prop('disabled');

      this.$mobileMenu.toggleClass('header__mobile-menu_visible');
      this.$burger.toggleClass('header__burger_transformed');
      this.$html.toggleClass(`${htmlClass}_non-scrollable`);
      this.$headerButton.attr('disabled', !isButtonDisables);
    };

    this.$burgerContainer.on('click', handleBurgerContainerToggleMobileMenu);
  }
}

export default Header;
