import PropTypes from 'prop-types';

export const LineBreak = ({ size = "0" }) => (
  <span style={{ margin: `${size} 0` }}></span>
);

LineBreak.propTypes = {
  size: PropTypes.string,
};
