/** Checks if `window` is undefined or not. If it is, then the code most likely running on the server. */
export const hasWindow = !(typeof window === 'undefined');

/** Trick for checking if we are viewing the code on a touch device. */
export const isTouchDevice = hasWindow && 'ontouchstart' in window;
