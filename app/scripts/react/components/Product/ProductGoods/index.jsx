import React, { PropTypes } from 'react';
import { PHOTO_CHANGE } from '../../../constants/globalEventKeys';
import { goodOrderTitle } from '../../../helpers/product';
import ProductAddToCartButton from '../ProductAddToCartButton';

// TODO: i18n
const ADD_TO_CART_BUTTON = 'В корзину';

export default class ProductGoods {
  static propTypes = {
    onProductChange: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
  }
  renderOption(good, product) {
    return (
      <option
        disabled={!good.is_ordering}
        key={good.global_id}
        value={good.global_id}
      >
        {goodOrderTitle(product, good)}
      </option>
    );
  }
  renderSelect(product) {
    let selectedValue;

    for (let i = 0; i < product.goods.length; i++) {
      const good = product.goods[i];

      if (good.is_ordering) {
        selectedValue = good.global_id;
        break;
      }
    }

    return (
      <select
        defaultValue={selectedValue}
        name="cart_item[good_id]"
        onChange={this.handleSelectChange.bind(this)}
      >
        {product.goods.map((good) => this.renderOption(good, product))}
      </select>
    );
  }
  handleSelectChange(e) {
    const value = e.target.value;
    const { onProductChange, product: { goods } } = this.props;

    for (let i = 0; i < goods.length; i++) {
      const good = goods[i];

      if (good.global_id === value) {
        $(document).trigger(PHOTO_CHANGE, good.image_url);
        onProductChange('article', good.article);
        break;
      }
    };
  }
  render() {
    const { product } = this.props;

    return (
      <div className="b-item-full__form__row b-item-full__form__row_fixed">
        <div className="b-item-full__form__option">
          {this.renderSelect(product)}
        </div>
        <div className="b-item-full__form__submit">
          <ProductAddToCartButton text={ADD_TO_CART_BUTTON} />
        </div>
      </div>
    );
  }
}