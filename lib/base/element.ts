import { PromodElementType } from 'promod/built/interface';
import { compareToPattern } from 'sat-utils';
import { BaseLayer } from './base';

import { browser } from '../_engine';

class Element extends BaseLayer {
  constructor(root: string | PromodElementType, id: string) {
    super(root, id);
  }

  async action(action: null | 'click' | 'focus') {
    if (!action) {
      action = 'click';
    }
    await this.waitForRootVisible();

    await this[action]();
  }

  async isSameVisibility(data) {
    return compareToPattern(await this.isDisplayed(), data).result;
  }

  async isSameContent(data) {
    return compareToPattern(await this.get(), data).result;
  }

  async get() {
    await this.waitForRootVisible();

    return await browser.executeScript((element) => element.innerText, this.root.getEngineElement());
  }

  async isDisplayed() {
    console.log(this.root.selector);
    return this.root.isDisplayed();
  }

  private async click() {
    await this.root.click();
  }

  private async focus() {
    await this.root.click();
  }
}

export { Element };
