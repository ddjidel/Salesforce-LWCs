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
 * License
 * -------
 * Creative Commons Zero v1.0 Universal
 * 
 */

import { LightningElement } from 'lwc';
import { OmniscriptBaseMixin } from 'omnistudio/omniscriptBaseMixin';

export default class OsRichTextInput extends OmniscriptBaseMixin(LightningElement) {
    richText = '';

    handleChange() {
      let data = {
        richtext: {
            content:this.template.querySelector('lightning-input-rich-text').value
        }    
      }

      this.omniApplyCallResp(data);
    }
}