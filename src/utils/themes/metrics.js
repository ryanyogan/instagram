const makeCircle = size => ({
  height: size,
  width: size,
  borderRadius: size / 2,
});

const makeHitSlop = size => ({
  left: size,
  top: size,
  right: size,
  bottom: size,
});

export { makeCircle, makeHitSlop };
