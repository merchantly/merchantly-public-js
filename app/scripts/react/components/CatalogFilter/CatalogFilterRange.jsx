import React, { Component } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { Range } from 'rc-slider';

class CatalogFilterRange extends Component {
  constructor(props) {
    super(props);

    this.handleSlide = this.handleSlide.bind(this);
    this.handleChange = this.handleChange.bind(this); 
}

  state = {
    from: this.props.valueFrom || this.props.from,
    to: this.props.valueTo || this.props.to
  }
  handleSlide([from, to]) {
    this.setState({
      from: parseInt(from),
      to: parseInt(to),
    });
  }
  handleChange() {
    this.props.handleOptionChange(this);
  }
  renderHiddenRange() {
    const { filterName, paramName, from: pFrom, to: pTo } = this.props;
    const { from: sFrom, to: sTo } = this.state;
    const parName = filterName ? `${filterName}[${paramName}]` : paramName;

    if (sFrom !== pFrom || sTo !== pTo) {
      return (
        <span>
          <input
            name={parName + '[from]'}
            type="hidden"
            value={sFrom}
          />
          <input
            name={parName + '[to]'}
            type="hidden"
            value={sTo}
          />
        </span>
      );
    }
  }
  render() {
    const {
      from: initFrom,
      to: initTo,
      step,
      title,
      units,
    } = this.props;
    const {
      from,
      to,
     } = this.state;

    return (
      <li className="b-full-filter__item b-full-filter__item_price">
        <div className="b-full-filter__item__title">
          {title}
        </div>
        <div className="b-full-filter__widget">
          <div className="b-full-filter__slider">
            <div className="b-full-filter__slider__value" ref="rangeValue">
              {numeral(from).format('0,0[.]00')}
              <span className="slider-divider"> – </span>
              {numeral(to).format('0,0[.]00')} <span dangerouslySetInnerHTML={{__html: units}} />
            </div>
            <div className="b-full-filter__slider__embed">
              <Range
                min={initFrom}
                max={initTo}
                defaultValue={[initFrom, initTo]}
                onChange={this.handleSlide}
                onAfterChange={this.handleChange} 
              />
            </div>
          </div>
        </div>
        {this.renderHiddenRange()}
      </li>
    );
  }
}

CatalogFilterRange.propTypes = {
  filterName: PropTypes.string,
  from: PropTypes.number.isRequired,
  paramName: PropTypes.string.isRequired,
  step: PropTypes.number,
  stepRules: PropTypes.array,
  t: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.number.isRequired,
  units: PropTypes.string,
  valueFrom: PropTypes.number,
  valueTo: PropTypes.number,
  handleOptionChange: PropTypes.func.isRequired,
};

CatalogFilterRange.defaultProps = {
  step: 1,
  stepRules: [],
};

export default CatalogFilterRange;
