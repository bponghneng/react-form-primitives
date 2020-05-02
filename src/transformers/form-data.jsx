function formDataTransformer(properties, id = null) {
  const formData = Object.keys(properties).reduce((accumulator, property) => {
    return Object.assign(accumulator, {
      [property]: properties[property].value
    });
  }, {});
  if (id) {
    return { id, attributes: formData };
  }
  return formData;
}

export default formDataTransformer;
