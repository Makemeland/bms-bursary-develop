/**
 * Media Query Config
 */
export const MQ_SM = 600;
export const MQ_MD = 960;
export const MQ_LG = 1280;
export const MQ_XL = 1920;

/**
 * Styled Component Media Query Helpers
 */
export default {
  sm: (styles, mqWidth = MQ_SM) =>
    `@media only screen and (max-width: ${mqWidth}px) { ${styles} }`,
  md: (styles, mqWidth = MQ_MD) =>
    `@media only screen and (max-width: ${mqWidth}px) { ${styles} }`,
  lg: (styles, mqWidth = MQ_LG) =>
    `@media only screen and (max-width: ${mqWidth}px) { ${styles} }`,
  xl: (styles, mqWidth = MQ_XL) =>
    `@media only screen and (max-width: ${mqWidth}px) { ${styles} }`
};