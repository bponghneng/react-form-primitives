const themeSettingsTransformer = jsonData => {
  const { data, included } = jsonData;
  const { attributes, id } = data;
  return {
    options: {
      removeExcerptFrom: included.reduce((carry, include) => {
        if (include.type === "post-type-option") {
          const {
            id,
            attributes: { label }
          } = include;
          return [...carry, { id, label }];
        }
      }, [])
    },
    settings: { attributes, id }
  };
};

export default themeSettingsTransformer;
