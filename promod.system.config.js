// @ts-check
const baseElementsActionsDescription = {
  Input: {
    action: {
      entryType: 'Action',
    },
    get: {
      entryType: 'Action',
      resultType: 'GetRes',
    },
    isDisplayed: {
      entryType: 'Action',
      resultType: 'IsDispRes',
    },
    sendKeys: {
      entryType: 'SendKeys',
    },
    waitForVisibilityState: {
      entryType: 'IsDispRes',
    },
    waitForContentState: {
      entryType: 'GetRes',
    },
    _where: {
      resultType: 'GetRes',
    },
    _visible: {
      resultType: 'IsDispRes',
    },
  },
  Button: {
    action: {
      entryType: 'Action',
    },
    get: {
      entryType: 'Action',
      resultType: 'GetRes',
    },
    isDisplayed: {
      entryType: 'Action',
      resultType: 'IsDispRes',
    },
    waitForVisibilityState: {
      entryType: 'IsDispRes',
    },
    waitForContentState: {
      entryType: 'GetRes',
    },
    _where: {
      resultType: 'GetRes',
    },
    _visible: {
      resultType: 'IsDispRes',
    },
  },
};

const collectionActionTypes = {
  action: 'CollectionActionType',
  check: 'CollectionWaitingType',
};

const baseCollectionActionsDescription = {
  waitForContentState: {
    entryType: {
      where: { action: '_where', actionType: 'resultType' },
      visible: { action: '_visible', actionType: 'resultType' },
      action: { action: 'get', actionType: 'entryType' },
      compare: { action: 'get', actionType: 'resultType' },
      generic: 'CollectionWaitingType',
    },
  },
  waitForVisibilityState: {
    entryType: {
      where: { action: '_where', actionType: 'resultType' },
      visible: { action: '_visible', actionType: 'resultType' },
      action: { action: 'isDisplayed', actionType: 'entryType' },
      compare: { action: 'isDisplayed', actionType: 'resultType' },
      generic: 'CollectionWaitingType',
    },
  },
  get: {
    entryType: {
      where: { action: '_where', actionType: 'resultType' },
      visible: { action: '_visible', actionType: 'resultType' },
      action: { action: 'get', actionType: 'entryType' },
      generic: 'CollectionActionType',
    },
    resultType: {
      action: { action: 'get', actionType: 'resultType' },
      endType: '[]',
    },
  },
  isDisplayed: {
    entryType: {
      where: { action: '_where', actionType: 'resultType' },
      visible: { action: '_visible', actionType: 'resultType' },
      action: { action: 'isDisplayed', actionType: 'entryType' },
      generic: 'CollectionActionType',
    },
    resultType: {
      action: { action: 'isDisplayed', actionType: 'resultType' },
      endType: '[]',
    },
  },
  sendKeys: {
    entryType: {
      where: { action: '_where', actionType: 'resultType' },
      visible: { action: '_visible', actionType: 'resultType' },
      action: { action: 'sendKeys', actionType: 'entryType' },
      generic: 'CollectionActionType',
    },
  },
  action: {
    entryType: {
      where: { action: '_where', actionType: 'resultType' },
      visible: { action: '_visible', actionType: 'resultType' },
      action: { action: 'action', actionType: 'entryType' },
      generic: 'CollectionActionType',
    },
  },
  _where: {
    entryType: {
      where: { action: '_where', actionType: 'resultType' },
      visible: { action: '_visible', actionType: 'resultType' },
      action: { action: 'get', actionType: 'entryType' },
      generic: 'CollectionActionType',
    },
    resultType: {
      where: { action: '_where', actionType: 'resultType' },
      visible: { action: '_visible', actionType: 'resultType' },
      action: { action: 'get', actionType: 'entryType' },
      generic: 'CollectionActionType',
    },
  },
  _visible: {
    entryType: {
      where: { action: '_where', actionType: 'resultType' },
      visible: { action: '_visible', actionType: 'resultType' },
      action: { action: 'isDisplayed', actionType: 'entryType' },
      generic: 'CollectionActionType',
    },
    resultType: {
      where: { action: '_where', actionType: 'resultType' },
      visible: { action: '_visible', actionType: 'resultType' },
      action: { action: 'isDisplayed', actionType: 'entryType' },
      generic: 'CollectionActionType',
    },
  },
};

const resultActionsMap = {
  action: 'void',
  get: 'resultType',
  isDisplayed: 'resultType',
  sendKeys: 'void',
  waitForVisibilityState: 'void',
  waitForContentState: 'void',
};

const actionWithWaitOpts = ['waitForVisibilityState', 'waitForContentState'];

const prettyMethodName = {
  isDisplayed: 'get Visibility of',
  get: 'get data from',
  sendKeys: 'set Values to',
  action: 'perform on',
};

const collectionRandomDataDescription = {
  _where: {
    action: '_where',
    actionType: 'resultType',
  },
  _visible: {
    action: '_visible',
    actionType: 'resultType',
  },
  _whereNot: {
    action: '_where',
    actionType: 'resultType',
  },
};

const promod = {
  actionsDeclaration: 'declaration',
};

const collectionDescription = {
  action: '_action',
  where: '_where',
  whereNot: '_whereNot',
  visible: '_visible',
  index: '_indexes',
  length: 'length',
};

const elementAction = {
  isEnabled: 'isEnabled',
  isDisplayed: 'isDisplayed',
  isPresent: 'isPresent',
  getText: 'getText',
  getAttribute: 'getAttribute',
  count: 'count',
  get: 'get',
};

const baseLibraryDescription = {
  entityId: 'id',
  rootLocatorId: 'root',
  pageId: 'Page',
  fragmentId: 'Fragment',
  collectionId: 'Collection',
  collectionItemId: 'CollectionChild',
  collectionRootElementsId: 'roots',
  waitOptionsId: 'IWaitOpts',
  getDataMethod: 'get',
  waitVisibilityState: 'waitForVisibilityState',
  getVisibilityMethod: 'isDisplayed',
  getBaseElementFromCollectionByIndex: 'get',
};

module.exports = {
  pathToBase: 'lib',
  promod,
  collectionDescription,
  prettyMethodName,
  elementAction,
  baseLibraryDescription,
  collectionRandomDataDescription,
  resultActionsMap,
  actionWithWaitOpts,
  baseElementsActionsDescription,
  baseCollectionActionsDescription,
  collectionActionTypes,
};
