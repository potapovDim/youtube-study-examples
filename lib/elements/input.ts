import { PromodElementType } from 'promod/built/interface';

import { Element } from '../base/element';
import { browser } from '../_engine';

export type InputAction = 'click' | 'focus' | null;
export type InputGetRes = string;
export type InputSendKeys = string;
export type InputIsDispRes = boolean;

class Input extends Element {
  constructor(root: string | PromodElementType, id: string) {
    super(root, id);
  }

  async get() {
    await this.waitForRootVisible();

    return await browser.executeScript((element) => element.value, this.root.getEngineElement());
  }

  async sendKeys(value) {
    await this.waitForRootVisible();
    await this.root.sendKeys(value);
  }
}

export { Input };
