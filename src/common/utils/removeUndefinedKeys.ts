/**
 * remove keys of undefined (only top level keys)
 * @param object
 */
export const removeUndefinedKeys = (passedObj: Record<string, unknown>) => {
  const tmp = { ...passedObj };
  Object.keys(tmp).forEach((key) =>
    tmp[key] === undefined ? delete tmp[key] : {}
  );
  return tmp;
};
