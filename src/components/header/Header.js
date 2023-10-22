class Header {
  init() {
    this._findElements();
    this._toggleMobileMenu();
  }

  _findElements() {
    this.$burger = $('.header__burger');
    this.$header = $('.header');
  }

  _toggleMobileMenu() {
    const $burgerContainer = this.$header.find('.header__burger-container');
    const $burger = this.$header.find('.header__burger');
    const $mobileMenu = this.$header.find('.header__mobile-menu');
    const $html = $('html');
    const htmlClass = $html.attr('class');
    const handleBurgerContainerToggleMobileMenu = () => {
      $mobileMenu.toggleClass('header__mobile-menu_visible');
      $burger.toggleClass('header__burger_transformed');
      $html.toggleClass(`${htmlClass}_non-scrollable`);
    };

    $burgerContainer.on('click', handleBurgerContainerToggleMobileMenu);
  }
}

export default Header;
