import PropTypes from 'prop-types';

export const LineBreak = ({ size }) => (
  <div style={{ margin: `${size} 0` }} />
);

LineBreak.propTypes = {
  size: PropTypes.string,
};

LineBreak.defaultProps = {
  size: '',
};