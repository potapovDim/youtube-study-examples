import { toArray, getRandomArrayItem } from 'sat-utils';
import type { TresultBasedOnArgument, TobjectFromStringArray } from 'promod-system';
import {
  IWaitOpts,
  ButtonAction,
  ButtonGetRes,
  ButtonIsDispRes,
  InputAction,
  InputGetRes,
  InputIsDispRes,
  InputSendKeys,
} from '../../../lib';

import { MainPage } from './page';

const page = new MainPage();

/** ====================== action ================== */

type TheaderAction = {
  register?: ButtonAction;
  login?: ButtonAction;
};
type TheaderActionResult = void;
async function onMainPagePerformOnMainHeader<Tentry extends TheaderAction>(data: Tentry): Promise<TheaderActionResult> {
  return await page.action({ header: data });
}

type TloginAction = {
  username?: InputAction;
  password?: InputAction;
  login?: ButtonAction;
};
type TloginActionResult = void;
async function onMainPagePerformOnLoginForm<Tentry extends TloginAction>(data: Tentry): Promise<TloginActionResult> {
  return await page.action({ login: data });
}

/** ====================== action ================== */

/** ====================== get ================== */

type TheaderGet = {
  register?: ButtonAction;
  login?: ButtonAction;
};
type TheaderGetResult = {
  register?: ButtonGetRes;
  login?: ButtonGetRes;
};
async function onMainPageGetDataFromMainHeader<Tentry extends TheaderGet>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TheaderGetResult>> {
  const { header } = await page.get({ header: data });
  return header;
}

type TloginGet = {
  username?: InputAction;
  password?: InputAction;
  login?: ButtonAction;
};
type TloginGetResult = {
  username?: InputGetRes;
  password?: InputGetRes;
  login?: ButtonGetRes;
};
async function onMainPageGetDataFromLoginForm<Tentry extends TloginGet>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TloginGetResult>> {
  const { login } = await page.get({ login: data });
  return login;
}

/** ====================== get ================== */

/** ====================== isDisplayed ================== */

type TheaderIsDisplayed = {
  register?: ButtonAction;
  login?: ButtonAction;
};
type TheaderIsDisplayedResult = {
  register?: ButtonIsDispRes;
  login?: ButtonIsDispRes;
};
async function onMainPageGetVisibilityOfMainHeader<Tentry extends TheaderIsDisplayed>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TheaderIsDisplayedResult>> {
  const { header } = await page.isDisplayed({ header: data });
  return header;
}

type TloginIsDisplayed = {
  username?: InputAction;
  password?: InputAction;
  login?: ButtonAction;
};
type TloginIsDisplayedResult = {
  username?: InputIsDispRes;
  password?: InputIsDispRes;
  login?: ButtonIsDispRes;
};
async function onMainPageGetVisibilityOfLoginForm<Tentry extends TloginIsDisplayed>(
  data: Tentry,
): Promise<TresultBasedOnArgument<Tentry, TloginIsDisplayedResult>> {
  const { login } = await page.isDisplayed({ login: data });
  return login;
}

/** ====================== isDisplayed ================== */

/** ====================== sendKeys ================== */

type TloginSendKeys = {
  username?: InputSendKeys;
  password?: InputSendKeys;
};
type TloginSendKeysResult = void;
async function onMainPageSetValuesToLoginForm<Tentry extends TloginSendKeys>(
  data: Tentry,
): Promise<TloginSendKeysResult> {
  return await page.sendKeys({ login: data });
}

/** ====================== sendKeys ================== */

/** ====================== waitForVisibilityState ================== */

type TheaderWaitForVisibilityState = {
  register?: ButtonIsDispRes;
  login?: ButtonIsDispRes;
};
type TheaderWaitForVisibilityStateResult = boolean;
async function onMainPageWaitForVisibilityStateMainHeader<Tentry extends TheaderWaitForVisibilityState>(
  data: Tentry,
  opts?: IWaitOpts,
): Promise<TheaderWaitForVisibilityStateResult> {
  return await page.waitForVisibilityState({ header: data }, opts);
}

type TloginWaitForVisibilityState = {
  username?: InputIsDispRes;
  password?: InputIsDispRes;
  login?: ButtonIsDispRes;
};
type TloginWaitForVisibilityStateResult = boolean;
async function onMainPageWaitForVisibilityStateLoginForm<Tentry extends TloginWaitForVisibilityState>(
  data: Tentry,
  opts?: IWaitOpts,
): Promise<TloginWaitForVisibilityStateResult> {
  return await page.waitForVisibilityState({ login: data }, opts);
}

/** ====================== waitForVisibilityState ================== */

/** ====================== waitForContentState ================== */

type TheaderWaitForContentState = {
  register?: ButtonGetRes;
  login?: ButtonGetRes;
};
type TheaderWaitForContentStateResult = boolean;
async function onMainPageWaitForContentStateMainHeader<Tentry extends TheaderWaitForContentState>(
  data: Tentry,
  opts?: IWaitOpts,
): Promise<TheaderWaitForContentStateResult> {
  return await page.waitForContentState({ header: data }, opts);
}

type TloginWaitForContentState = {
  username?: InputGetRes;
  password?: InputGetRes;
  login?: ButtonGetRes;
};
type TloginWaitForContentStateResult = boolean;
async function onMainPageWaitForContentStateLoginForm<Tentry extends TloginWaitForContentState>(
  data: Tentry,
  opts?: IWaitOpts,
): Promise<TloginWaitForContentStateResult> {
  return await page.waitForContentState({ login: data }, opts);
}

/** ====================== waitForContentState ================== */

export {
  onMainPagePerformOnMainHeader,
  onMainPagePerformOnLoginForm,
  onMainPageGetDataFromMainHeader,
  onMainPageGetDataFromLoginForm,
  onMainPageGetVisibilityOfMainHeader,
  onMainPageGetVisibilityOfLoginForm,
  onMainPageSetValuesToLoginForm,
  onMainPageWaitForVisibilityStateMainHeader,
  onMainPageWaitForVisibilityStateLoginForm,
  onMainPageWaitForContentStateMainHeader,
  onMainPageWaitForContentStateLoginForm,
};
