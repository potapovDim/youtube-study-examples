import { seleniumWD, playwrightWD } from 'promod';

const engine = process.env.ENGINE === 'sw' ? seleniumWD : playwrightWD;

const { getDriver, $, $$, browser } = engine;

export { getDriver, $, $$, browser };
