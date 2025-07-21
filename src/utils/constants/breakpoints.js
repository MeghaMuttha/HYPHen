export const breakpoints = {
  mobile: {
    min: 0,
    max: 768
  },
  tablet: {
    min: 769,
    max: 1024
  },
  desktop: {
    min: 1025,
    max: 9999
  }
};

export const mediaQueries = {
  mobile: `(max-width: ${breakpoints.mobile.max}px)`,
  tablet: `(min-width: ${breakpoints.tablet.min}px) and (max-width: ${breakpoints.tablet.max}px)`,
  desktop: `(min-width: ${breakpoints.desktop.min}px)`
};