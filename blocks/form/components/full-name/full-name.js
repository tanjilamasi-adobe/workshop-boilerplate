/**
 * Custom full-name component
 * Based on: Text Input
 */

/**
 * Decorates a custom form field component
 * @param {HTMLElement} fieldDiv - The DOM element containing the field wrapper. Refer to the documentation for its structure for each component.
 * @param {Object} fieldJson - The form json object for the component.
 * @param {HTMLElement} parentElement - The parent container element of the field.
 * @param {string} formId - The unique identifier of the form.
 */
export default async function decorate(fieldDiv, fieldJson, parentElement, formId) {
  console.log('⚙️ Decorating full-name component:', fieldDiv, fieldJson, parentElement, formId);
  
 fieldDiv.classList.add('full-name');
  
  return fieldDiv;
}
