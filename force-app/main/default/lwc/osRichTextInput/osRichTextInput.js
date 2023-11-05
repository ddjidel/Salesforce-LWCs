/**
 * Custom Rich Text LWC to be integrated to OmniScript
 *
 * @author  Dalil Djidel (dalil.djidel@salesforce.com)
 * @version 1.0
 *
 * History
 * -------
 * v1.0 - 11-18-2022 - Initial Version
 * 
 * Instructions:
 * 
 * - Drag a Custom Lightning Web Component input element in a step
 * - Give the field a meaningful nam
 * - Choose "osRichTextInput" for the Lightning Web Component Name
 * - In the "CUSTOM LIGHTNING WEB COMPONENT PROPERTIES", add a property with Name field-name and Value the name of the field
 * 
 * License
 * -------
 * Creative Commons Zero v1.0 Universal
 * 
 */

import { LightningElement, api } from 'lwc';
import { OmniscriptBaseMixin } from 'omnistudio/omniscriptBaseMixin';

export default class OsRichTextInput extends OmniscriptBaseMixin(LightningElement) {
    @api fieldName;

    handleChange() {
      const jsonData = {
        [this.fieldName]: this.template.querySelector('lightning-input-rich-text').value
      }

      this.omniApplyCallResp(jsonData);
    }
}
