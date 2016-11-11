import React, { Component, PropTypes } from 'react';
import WelcomeContainer from './index';
import CatalogFilterContainer from 'rc/CatalogFilter';
import * as schemas from 'r/schemas';

class WelcomeWidget extends Component {
  componentWillMount() {
    
  }
  render() {
    const {
      catalogFilterProps,
      i18n,
      isFilterDirty,
      products,
      showCartButton,
      showCatalogFilter,
      showPaginationOnWelcome,
      showQuantity,
      showWelcomeSlider,
      vendor,
    } = this.props;

    return (
      <WelcomeContainer
        catalogFilterProps={catalogFilterProps}
        i18n={i18n}
        isFilterDirty={isFilterDirty}
        products={products}
        showCartButton={showCartButton}
        showCatalogFilter={showCatalogFilter}
        showPaginationOnWelcome={showPaginationOnWelcome}
        showQuantity={showQuantity}
        showWelcomeSlider={showWelcomeSlider}
        vendor={vendor}
      />
    );
  }
}

WelcomeWidget.propTypes = {
  catalogFilterProps: PropTypes.shape(...CatalogFilterContainer.propTypes),
  i18n: PropTypes.object,
  isFilterDirty: PropTypes.bool.isRequired,
  products: schemas.productList.isRequired,
  showCartButton: PropTypes.bool.isRequired,
  showCatalogFilter: PropTypes.bool.isRequired,
  showPaginationOnWelcome: PropTypes.bool.isRequired,
  showQuantity: PropTypes.bool.isRequired,
  showWelcomeSlider: PropTypes.bool.isRequired,
  vendor: schemas.vendor.isRequired,
};

export default WelcomeWidget;
