
export const convertObjectToUppercase = data => {
  const converted = {}

  Object.keys(data).forEach(key => converted[key] = data[key].toUpperCase());

  return converted;
}
