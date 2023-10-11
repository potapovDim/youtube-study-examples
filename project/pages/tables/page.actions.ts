import { toArray, getRandomArrayItem } from 'sat-utils';
import type { TresultBasedOnArgument, TobjectFromStringArray } from 'promod-system';
import {
  IWaitOpts,
  CollectionActionType,
  CollectionWaitingType,
  ButtonAction,
  ButtonGetRes,
  ButtonIsDispRes,
} from '../../../lib';

import { TablePage } from './page';

const page = new TablePage();

type TonTablesPageGetRandomDataAndFieldValuesFromMachinesListEntryFields =
  | 'manufacturer'
  | 'workVolume'
  | 'length'
  | 'width'
  | 'weight'
  | 'power'
  | 'price';
type TonTablesPageGetRandomDataAndFieldValuesFromMachinesListEntry = Omit<
  CollectionActionType<
    {
      manufacturer?: ButtonGetRes;
      workVolume?: ButtonGetRes;
      length?: ButtonGetRes;
      width?: ButtonGetRes;
      weight?: ButtonGetRes;
      power?: ButtonGetRes;
      price?: ButtonGetRes;
    },
    {
      manufacturer?: ButtonIsDispRes;
      workVolume?: ButtonIsDispRes;
      length?: ButtonIsDispRes;
      width?: ButtonIsDispRes;
      weight?: ButtonIsDispRes;
      power?: ButtonIsDispRes;
      price?: ButtonIsDispRes;
    }
  >,
  '_action'
>;

async function onTablesPageGetRandomFieldValueFromMachinesList(
  _field: TonTablesPageGetRandomDataAndFieldValuesFromMachinesListEntryFields,
  descriptions: TonTablesPageGetRandomDataAndFieldValuesFromMachinesListEntry = {},
): Promise<string> {
  const result = await page.get({ machinesList: { ...descriptions, _action: { [_field]: null } } });

  const flatResult = result.machinesList;

  return getRandomArrayItem(flatResult.map((item) => item[_field]));
}

async function onTablesPageGetSeveralRandomFieldValuesFromMachinesList(
  _field: TonTablesPageGetRandomDataAndFieldValuesFromMachinesListEntryFields = 'manufacturer',
  quantity: number = 2,
  descriptions: TonTablesPageGetRandomDataAndFieldValuesFromMachinesListEntry = {},
): Promise<string[]> {
  const result = await page.get({ machinesList: { ...descriptions, _action: { [_field]: null } } });

  const flatResult = result.machinesList;

  return getRandomArrayItem(
    flatResult.map((item) => item[_field]),
    quantity,
  );
}

async function onTablesPageGetRandomDataFromMachinesList<
  T extends ReadonlyArray<TonTablesPageGetRandomDataAndFieldValuesFromMachinesListEntryFields>,
>(
  _fields: T,
  descriptions: TonTablesPageGetRandomDataAndFieldValuesFromMachinesListEntry = {},
): Promise<TobjectFromStringArray<T>> {
  const result = await page.get({
    machinesList: {
      ...descriptions,
      _action: _fields.reduce((act, k) => {
        act[k] = null;

        return act;
      }, {}),
    },
  });

  const flatResult = result.machinesList;
  return getRandomArrayItem(
    flatResult.map((item) =>
      _fields.reduce((requredData, k) => {
        requredData[k] = item[k];

        return requredData;
      }, {} as TobjectFromStringArray<T>),
    ),
  );
}

/** ====================== action ================== */

type TheaderAction = {
  analytics?: ButtonAction;
  combines?: ButtonAction;
  adminPanel?: ButtonAction;
  logOut?: ButtonAction;
};
type TheaderActionResult = void;
async function onTablesPagePerformOnTablesHeader<Tentry extends TheaderAction>(
  data: Tentry,
): Promise<TheaderActionResult> {
  return await page.action({ header: data });
}

type TmachinesListAction = CollectionActionType<
  {
    manufacturer?: ButtonGetRes;
    workVolume?: ButtonGetRes;
    length?: ButtonGetRes;
    width?: ButtonGetRes;
    weight?: ButtonGetRes;
    power?: ButtonGetRes;
    price?: ButtonGetRes;
  },
  {
    manufacturer?: ButtonIsDispRes;
    workVolume?: ButtonIsDispRes;
    length?: ButtonIsDispRes;
    width?: ButtonIsDispRes;
    weight?: ButtonIsDispRes;
    power?: ButtonIsDispRes;
    price?: ButtonIsDispRes;
  },
  {
    manufacturer?: ButtonAction;
    workVolume?: ButtonAction;
    length?: ButtonAction;
    width?: ButtonAction;
    weight?: ButtonAction;
    power?: ButtonAction;
    price?: ButtonAction;
  }
>;
type TmachinesListActionResult = void;
async function onTablesPagePerformOnMachinesList<Tentry extends TmachinesListAction>(
  data: Tentry,
): Promise<TmachinesListActionResult> {
  return await page.action({ machinesList: data });
}

/** ====================== action ================== */

/** ====================== get ================== */

type TheaderGet = {
  analytics?: ButtonAction;
  combines?: ButtonAction;
  adminPanel?: ButtonAction;
  logOut?: ButtonAction;
};
type TheaderGetResult = {
  analytics?: ButtonGetRes;
  combines?: ButtonGetRes;
  adminPanel?: ButtonGetRes;
  logOut?: ButtonGetRes;
};
async function onTablesPageGetDataFromTablesHeader<Tentry extends TheaderGet>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TheaderGetResult>> {
  const { header } = await page.get({ header: data });
  return header;
}

type TmachinesListGet = CollectionActionType<
  {
    manufacturer?: ButtonGetRes;
    workVolume?: ButtonGetRes;
    length?: ButtonGetRes;
    width?: ButtonGetRes;
    weight?: ButtonGetRes;
    power?: ButtonGetRes;
    price?: ButtonGetRes;
  },
  {
    manufacturer?: ButtonIsDispRes;
    workVolume?: ButtonIsDispRes;
    length?: ButtonIsDispRes;
    width?: ButtonIsDispRes;
    weight?: ButtonIsDispRes;
    power?: ButtonIsDispRes;
    price?: ButtonIsDispRes;
  },
  {
    manufacturer?: ButtonAction;
    workVolume?: ButtonAction;
    length?: ButtonAction;
    width?: ButtonAction;
    weight?: ButtonAction;
    power?: ButtonAction;
    price?: ButtonAction;
  }
>;
type TmachinesListGetResult = {
  manufacturer?: ButtonGetRes;
  workVolume?: ButtonGetRes;
  length?: ButtonGetRes;
  width?: ButtonGetRes;
  weight?: ButtonGetRes;
  power?: ButtonGetRes;
  price?: ButtonGetRes;
}[];
async function onTablesPageGetDataFromMachinesList<Tentry extends TmachinesListGet>(
  data: Tentry,
): Promise<TmachinesListGetResult> {
  const { machinesList } = await page.get({ machinesList: data });
  return machinesList;
}

/** ====================== get ================== */

/** ====================== isDisplayed ================== */

type TheaderIsDisplayed = {
  analytics?: ButtonAction;
  combines?: ButtonAction;
  adminPanel?: ButtonAction;
  logOut?: ButtonAction;
};
type TheaderIsDisplayedResult = {
  analytics?: ButtonIsDispRes;
  combines?: ButtonIsDispRes;
  adminPanel?: ButtonIsDispRes;
  logOut?: ButtonIsDispRes;
};
async function onTablesPageGetVisibilityOfTablesHeader<Tentry extends TheaderIsDisplayed>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TheaderIsDisplayedResult>> {
  const { header } = await page.isDisplayed({ header: data });
  return header;
}

type TmachinesListIsDisplayed = CollectionActionType<
  {
    manufacturer?: ButtonGetRes;
    workVolume?: ButtonGetRes;
    length?: ButtonGetRes;
    width?: ButtonGetRes;
    weight?: ButtonGetRes;
    power?: ButtonGetRes;
    price?: ButtonGetRes;
  },
  {
    manufacturer?: ButtonIsDispRes;
    workVolume?: ButtonIsDispRes;
    length?: ButtonIsDispRes;
    width?: ButtonIsDispRes;
    weight?: ButtonIsDispRes;
    power?: ButtonIsDispRes;
    price?: ButtonIsDispRes;
  },
  {
    manufacturer?: ButtonAction;
    workVolume?: ButtonAction;
    length?: ButtonAction;
    width?: ButtonAction;
    weight?: ButtonAction;
    power?: ButtonAction;
    price?: ButtonAction;
  }
>;
type TmachinesListIsDisplayedResult = {
  manufacturer?: ButtonIsDispRes;
  workVolume?: ButtonIsDispRes;
  length?: ButtonIsDispRes;
  width?: ButtonIsDispRes;
  weight?: ButtonIsDispRes;
  power?: ButtonIsDispRes;
  price?: ButtonIsDispRes;
}[];
async function onTablesPageGetVisibilityOfMachinesList<Tentry extends TmachinesListIsDisplayed>(
  data: Tentry,
): Promise<TmachinesListIsDisplayedResult> {
  const { machinesList } = await page.isDisplayed({ machinesList: data });
  return machinesList;
}

/** ====================== isDisplayed ================== */

/** ====================== sendKeys ================== */

/** ====================== sendKeys ================== */

/** ====================== waitForVisibilityState ================== */

type TheaderWaitForVisibilityState = {
  analytics?: ButtonIsDispRes;
  combines?: ButtonIsDispRes;
  adminPanel?: ButtonIsDispRes;
  logOut?: ButtonIsDispRes;
};
type TheaderWaitForVisibilityStateResult = boolean;
async function onTablesPageWaitForVisibilityStateTablesHeader<Tentry extends TheaderWaitForVisibilityState>(
  data: Tentry,
  opts?: IWaitOpts,
): Promise<TheaderWaitForVisibilityStateResult> {
  return await page.waitForVisibilityState({ header: data }, opts);
}

type TmachinesListWaitForVisibilityState = CollectionWaitingType<
  {
    manufacturer?: ButtonGetRes;
    workVolume?: ButtonGetRes;
    length?: ButtonGetRes;
    width?: ButtonGetRes;
    weight?: ButtonGetRes;
    power?: ButtonGetRes;
    price?: ButtonGetRes;
  },
  {
    manufacturer?: ButtonIsDispRes;
    workVolume?: ButtonIsDispRes;
    length?: ButtonIsDispRes;
    width?: ButtonIsDispRes;
    weight?: ButtonIsDispRes;
    power?: ButtonIsDispRes;
    price?: ButtonIsDispRes;
  },
  {
    manufacturer?: ButtonAction;
    workVolume?: ButtonAction;
    length?: ButtonAction;
    width?: ButtonAction;
    weight?: ButtonAction;
    power?: ButtonAction;
    price?: ButtonAction;
  },
  {
    manufacturer?: ButtonIsDispRes;
    workVolume?: ButtonIsDispRes;
    length?: ButtonIsDispRes;
    width?: ButtonIsDispRes;
    weight?: ButtonIsDispRes;
    power?: ButtonIsDispRes;
    price?: ButtonIsDispRes;
  }
>;
type TmachinesListWaitForVisibilityStateResult = boolean;
async function onTablesPageWaitForVisibilityStateMachinesList<Tentry extends TmachinesListWaitForVisibilityState>(
  data: Tentry,
  opts?: IWaitOpts,
): Promise<TmachinesListWaitForVisibilityStateResult> {
  return await page.waitForVisibilityState({ machinesList: data }, opts);
}

/** ====================== waitForVisibilityState ================== */

/** ====================== waitForContentState ================== */

type TheaderWaitForContentState = {
  analytics?: ButtonGetRes;
  combines?: ButtonGetRes;
  adminPanel?: ButtonGetRes;
  logOut?: ButtonGetRes;
};
type TheaderWaitForContentStateResult = boolean;
async function onTablesPageWaitForContentStateTablesHeader<Tentry extends TheaderWaitForContentState>(
  data: Tentry,
  opts?: IWaitOpts,
): Promise<TheaderWaitForContentStateResult> {
  return await page.waitForContentState({ header: data }, opts);
}

type TmachinesListWaitForContentState = CollectionWaitingType<
  {
    manufacturer?: ButtonGetRes;
    workVolume?: ButtonGetRes;
    length?: ButtonGetRes;
    width?: ButtonGetRes;
    weight?: ButtonGetRes;
    power?: ButtonGetRes;
    price?: ButtonGetRes;
  },
  {
    manufacturer?: ButtonIsDispRes;
    workVolume?: ButtonIsDispRes;
    length?: ButtonIsDispRes;
    width?: ButtonIsDispRes;
    weight?: ButtonIsDispRes;
    power?: ButtonIsDispRes;
    price?: ButtonIsDispRes;
  },
  {
    manufacturer?: ButtonAction;
    workVolume?: ButtonAction;
    length?: ButtonAction;
    width?: ButtonAction;
    weight?: ButtonAction;
    power?: ButtonAction;
    price?: ButtonAction;
  },
  {
    manufacturer?: ButtonGetRes;
    workVolume?: ButtonGetRes;
    length?: ButtonGetRes;
    width?: ButtonGetRes;
    weight?: ButtonGetRes;
    power?: ButtonGetRes;
    price?: ButtonGetRes;
  }
>;
type TmachinesListWaitForContentStateResult = boolean;
async function onTablesPageWaitForContentStateMachinesList<Tentry extends TmachinesListWaitForContentState>(
  data: Tentry,
  opts?: IWaitOpts,
): Promise<TmachinesListWaitForContentStateResult> {
  return await page.waitForContentState({ machinesList: data }, opts);
}

/** ====================== waitForContentState ================== */

type TonTablesPageGetCollectionFromMachinesListEntry = Omit<
  CollectionActionType<
    {
      manufacturer?: ButtonGetRes;
      workVolume?: ButtonGetRes;
      length?: ButtonGetRes;
      width?: ButtonGetRes;
      weight?: ButtonGetRes;
      power?: ButtonGetRes;
      price?: ButtonGetRes;
    },
    {
      manufacturer?: ButtonIsDispRes;
      workVolume?: ButtonIsDispRes;
      length?: ButtonIsDispRes;
      width?: ButtonIsDispRes;
      weight?: ButtonIsDispRes;
      power?: ButtonIsDispRes;
      price?: ButtonIsDispRes;
    }
  >,
  '_action'
>;
type TonTablesPageGetCollectionFromMachinesList = {
  manufacturer?: ButtonGetRes;
  workVolume?: ButtonGetRes;
  length?: ButtonGetRes;
  width?: ButtonGetRes;
  weight?: ButtonGetRes;
  power?: ButtonGetRes;
  price?: ButtonGetRes;
};
async function onTablesPageGetCollectionFromMachinesList({
  ...descriptions
}: TonTablesPageGetCollectionFromMachinesListEntry = {}): Promise<TonTablesPageGetCollectionFromMachinesList[]> {
  const result = await page.get({ machinesList: { ...descriptions, _action: null } });

  return result.machinesList;
}

export {
  onTablesPageGetRandomFieldValueFromMachinesList,
  onTablesPageGetSeveralRandomFieldValuesFromMachinesList,
  onTablesPageGetRandomDataFromMachinesList,
  onTablesPagePerformOnTablesHeader,
  onTablesPagePerformOnMachinesList,
  onTablesPageGetDataFromTablesHeader,
  onTablesPageGetDataFromMachinesList,
  onTablesPageGetVisibilityOfTablesHeader,
  onTablesPageGetVisibilityOfMachinesList,
  onTablesPageWaitForVisibilityStateTablesHeader,
  onTablesPageWaitForVisibilityStateMachinesList,
  onTablesPageWaitForContentStateTablesHeader,
  onTablesPageWaitForContentStateMachinesList,
  onTablesPageGetCollectionFromMachinesList,
};
