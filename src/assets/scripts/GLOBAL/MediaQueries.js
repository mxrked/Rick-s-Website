const MOBILE_PORTRAIT_MQ = window.matchMedia("(max-width: 768px)");
const MOBILE_LANDSCAPE_MQ = window.matchMedia(
  "(min-device-width: 411px) and (max-device-width: 823px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)"
);

const SMALL_TABLET_PORTRAIT_MQ = window.matchMedia(
  "(min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1)"
);
const SMALL_TABLET_LANDSCAPE_MQ = window.matchMedia(
  "(min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1)"
);

const LARGE_TABLET_PORTRAIT_MQ = window.matchMedia(
  "(min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
);
const LARGE_TABLET_LANDSCAPE_MQ = window.matchMedia(
  "(min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)"
);

export {
  MOBILE_PORTRAIT_MQ,
  MOBILE_LANDSCAPE_MQ,
  SMALL_TABLET_PORTRAIT_MQ,
  SMALL_TABLET_LANDSCAPE_MQ,
  LARGE_TABLET_PORTRAIT_MQ,
  LARGE_TABLET_LANDSCAPE_MQ,
};
