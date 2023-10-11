import { PromodElementType } from 'promod/built/interface';

import { waitForCondition } from 'sat-utils';

import { $ } from '../_engine';

class BaseLayer {
  root: PromodElementType;
  id: string;

  constructor(root: string | PromodElementType, id: string) {
    this.root = typeof root === 'string' ? $(root) : root;
    this.id = id;
  }

  async waitForRootExist() {
    await waitForCondition(() => this.root.isPresent(), {
      timeout: 5_000,
      message: () => `${this.id} with selector ${this.root.selector} does not exist`,
    });
  }

  async waitForRootVisible() {
    await waitForCondition(
      async () => {
        return this.root.isDisplayed();
      },
      {
        timeout: 5_000,
        message: () => `${this.id} with selector ${this.root.selector} does not visible`,
      },
    );
  }
}

export { BaseLayer };
