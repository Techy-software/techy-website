export const objectToFormData = (
  obj,
  form = new FormData(),
  parentKey = ""
) => {
  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) continue;

    const value = obj[key];
    const formKey = parentKey ? `${parentKey}.${key}` : key;

    if (value instanceof File) {
      form.append(formKey, value); // Handle file
    } else if (typeof value === "object" && value !== null) {
      objectToFormData(value, form, formKey); // Recurse nested objects
    } else {
      form.append(formKey, value);
    }
  }
  return form;
};
