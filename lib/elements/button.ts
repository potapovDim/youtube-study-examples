import { PromodElementType } from 'promod/built/interface';

import { Element } from '../base/element';

export type ButtonAction = 'click' | 'focus' | null;
export type ButtonGetRes = string;
export type ButtonIsDispRes = boolean;
export type ButtonContent = string | ((str: string) => boolean);

class Button extends Element {
  constructor(root: string | PromodElementType, id: string) {
    super(root, id);
  }

  async sendKeys(value) {
    throw new Error(
      `${this.id} with selector ${this.root.selector} was created as Button element, Button does not have send keys`,
    );
  }
}

export { Button };
