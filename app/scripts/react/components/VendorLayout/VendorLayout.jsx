import React, { Component, PropTypes } from 'react';
import PublishShopButton from 'rc/common/PublishShopButton';
import TopBanner from 'rc/TopBanner';
import NavBar from 'rc/NavBar/NavBar';
import MenuTop from 'rc/MenuTop';
import LayoutMessages from 'rc/common/LayoutMessages';
import Footer from './Footer';
import MenuBottom from 'rc/MenuBottom';
import { UserbarContainer } from 'rc/Userbar';
import W1Widget from 'rc/common/W1Widget';
import ScrollToTop from 'rc/ScrollToTop';
import * as schemas from 'r/schemas';

class VendorLayout extends Component {
  render() {
    const {
      children,
      flash,
      i18n,
      menuBottomProps,
      menuTopProps,
      navBarProps,
      publishShopPath,
      scrollToTopProps,
      showInstagramContainer,
      showMenuTop,
      showTopBanner,
      t,
      topBannerProps,
      userbarProps,
      vendor,
      w1ptEnabled,
    } = this.props;

    return (
      <div>
        <div className="b-page__content">
          {!vendor.is_published && (
            <div className="b-publish-shop-button">
              <PublishShopButton
                className="b-btn"
                publishShopPath={publishShopPath}
                t={t}
              />
            </div>
          )}
          {showTopBanner && <TopBanner {...topBannerProps} />}
          <div className="b-page__content__inner b-page__content__inner_navbar">
            <NavBar {...navBarProps} t={t} />
            {showMenuTop && <MenuTop {...menuTopProps} />}
          </div>
          <LayoutMessages flash={flash} />
          <div className="b-page__content__inner b-page__content__inner_content">
            {children}
          </div>
          <Footer
            customAfterContentHtml={vendor.custom_after_content_html}
            i18n={i18n}
            menuBottomProps={menuBottomProps}
            showInstagramContainer={showInstagramContainer}
          />
          <UserbarContainer {...userbarProps} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: vendor.custom_append_html }} />
        <W1Widget w1ptEnabled={w1ptEnabled} />
        <ScrollToTop {...scrollToTopProps} />
      </div>
    );
  }
}

VendorLayout.propTypes = {
  children: PropTypes.element,
  flash: LayoutMessages.propTypes.flash,
  i18n: PropTypes.object,
  menuBottomProps: PropTypes.shape(...MenuBottom.wrapped.propTypes).isRequired,
  menuTopProps: PropTypes.shape(...MenuTop.wrapped.propTypes),
  navBarProps: PropTypes.shape(...NavBar.propTypes).isRequired,
  publishShopPath: PropTypes.string.isRequired,
  scrollToTopProps: PropTypes.shape(...ScrollToTop.propTypes),
  showInstagramContainer: PropTypes.bool,
  showMenuTop: PropTypes.bool,
  showTopBanner: PropTypes.bool,
  t: PropTypes.func,
  topBannerProps: PropTypes.shape(...TopBanner.propTypes),
  userbarProps: PropTypes.shape(...UserbarContainer.wrapped.propTypes).isRequired,
  vendor: schemas.vendor.isRequired,
  w1ptEnabled: PropTypes.string,
};

VendorLayout.defaultProps = {
  showInstagramContainer: false,
  showMenuTop: false,
  showTopBanner: false,
};

export default VendorLayout;
