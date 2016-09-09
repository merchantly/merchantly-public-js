import React, { Component, PropTypes } from 'react';
import { CartCoupon } from './CartCoupon';
import CartList from './CartList';
import FormAuthenticity from '../common/FormAuthenticity';
import HumanizedMoneyWithCurrency from '../common/Money/HumanizedMoneyWithCurrency';

class Cart extends Component {
  renderErrors() {
    const {
      errors,
    } = this.props.cart;

    return (
      <span className="help-block">
        {Object.keys(errors).map((key) => (
          errors[key].map((err, idx) => (
            <div key={`cart-error-${key}-${idx}`}>
              {err}
            </div>
          ))
        ))}
      </span>
    );
  }
  render() {
    const {
      availablePackages,
      cart,
      formAuthenticity,
      t,
    } = this.props;

    return (
      <section className="b-cart">
        <div className="b-cart__content">
          <h1 className="b-cart__title" title={t('vendor.cart.title')}>
            {t('vendor.cart.title')}
          </h1>
          {cart.items.length === 0
            ? (
              <div className="b-text b-text_center">
                <p>
                  {t('vendor.cart.empty')}
                </p>
              </div>
            )
            : (
            <form
              acceptCharset="UTF-8"
              action={cart.default_url}
              className="simple_form edit_cart"
              id="edit_cart"
              method="post"
              noValidate
            >
              <FormAuthenticity {...formAuthenticity} />
              {Object.keys(cart.errors).length > 0 && this.renderErrors()}
              <CartList
                availablePackages={availablePackages}
                items={cart.items}
                packageItem={cart.package_item}
                t={t}
              />
              <div className="b-cart__total-sum">
                {t('vendor.cart.overall')}
                {' '}
                <span>
                  <HumanizedMoneyWithCurrency money={cart.total_price} />
                </span>
              </div>
              <div className="b-cart__action">
                <div className="b-cart__action__container">
                  <div className="b-cart__action__col-clear">
                    <a
                      className="b-cart__action__clear b-btn b-btn_trans"
                      data-confirm={t('vendor.alerts.confirm')}
                      data-method="delete"
                      href={cart.default_url}
                    >
                      {t('vendor.cart.clear')}
                    </a>
                  </div>
                  <div className="b-cart__action__col-right">
                    <CartCoupon code={cart.coupon_code} t={t} />
                    <div className="b-cart__action__col-submit">
                      <input
                        className="b-cart__action__submit b-btn"
                        data-cart-submit
                        name="commit"
                        type="submit"
                        value={t('vendor.order.submit')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )
        }
      </div>
      </section>
    );
  }
}

Cart.propTypes = {
  availablePackages: PropTypes.array.isRequired,
  cart: PropTypes.object.isRequired,
  formAuthenticity: PropTypes.object,
  t: PropTypes.func.isRequired,
};

export default Cart;
