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