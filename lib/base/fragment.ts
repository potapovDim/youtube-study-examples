import { BaseLayer } from './base';
import { Collection } from './collection';

class Fragment extends BaseLayer {
  constructor(root, id) {
    super(root, id);
  }

  init(root, id, ChildType, ...rest) {
    if (ChildType === Collection) {
      return new ChildType(typeof root === 'string' ? this.root.$$(root) : root, id, ...rest);
    } else {
      return new ChildType(typeof root === 'string' ? this.root.$(root) : root, id);
    }
  }

  async isSameVisibility(objData) {
    const keys = Object.keys(objData);

    for (const key of keys) {
      const res = await this[key].isSameVisibility(objData[key]);
      if (!res) {
        return false;
      }
    }

    return true;
  }

  async isSameContent(objData) {
    const keys = Object.keys(objData);

    for (const key of keys) {
      const res = await this[key].isSameContent(objData[key]);
      if (!res) {
        return false;
      }
    }

    return true;
  }

  async sendKeys(objData) {
    await this.waitForRootExist();
    const keys = Object.keys(objData); // [масив ключів аргумента, який ми очікуємо як обʼєкт]

    for (const key of keys) {
      await this[key].sendKeys(objData[key]);
    }
  }

  async get(objData) {
    await this.waitForRootExist();

    const keys = Object.keys(objData); // [масив ключів аргумента, який ми очікуємо як обʼєкт]
    const result = {};

    for (const key of keys) {
      result[key] = await this[key].get(objData[key]);
    }

    return result;
  }

  async isDisplayed(objData) {
    const keys = Object.keys(objData); // [масив ключів аргумента, який ми очікуємо як обʼєкт]
    const result = {};

    for (const key of keys) {
      result[key] = await this[key].isDisplayed(objData[key]);
    }

    return result;
  }

  async action(objData) {
    await this.waitForRootExist();
    const keys = Object.keys(objData); // [масив ключів аргумента, який ми очікуємо як обʼєкт]

    for (const key of keys) {
      await this[key].action(objData[key]);
    }
  }
}

export { Fragment };
