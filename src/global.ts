import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--paragraph-03: 'Circular Std';

/* font sizes */
--paragraph-03-size: 14px;
--paragraph-04-size: 12px;
--headline-05-size: 16px;
--headline-04-size: 18px;
--headline-01-size: 36px;
--headline-02-size: 24px;

/* Colors */
--colors-white-100: #fff;
--color-gray-100: #7f7f7f;
--colors-black-100: #040415;
--color-gray-200: rgba(4, 4, 21, 0.4);
--colors-orange-100: #f15223;
--color-tomato-100: rgba(241, 82, 35, 0.2);
--color-tomato-200: rgba(241, 82, 35, 0.1);
--colors-light-purple-100: #8a24ff;
--colors-green-100: #65cf58;
--color-darkgray-100: rgba(159, 159, 159, 0.2);
--colors-gray-40: rgba(159, 159, 159, 0.4);
--color-silver: #bfbfbf;

/* Gaps */
--gap-13xl: 32px;
--gap-5xl: 24px;
--gap-xs: 12px;
--gap-7xs: 6px;
--gap-8xs: 5px;
--gap-9xs: 4px;
--gap-lgi: 19px;
--gap-xl: 20px;
--gap-base: 16px;
--gap-3xl: 22px;
--gap-11xs: 2px;
--gap-mini: 15px;

/* Paddings */
--padding-5xl: 24px;
--padding-base: 16px;
--padding-6xs: 7px;
--padding-5xs: 8px;
--padding-9xl: 28px;
--padding-3xs: 10px;
--padding-mini: 15px;
--padding-4xl: 23px;
--padding-3xl: 22px;
--padding-14xl: 33px;
--padding-9xs: 4px;
--padding-4xs: 9px;
--padding-mid: 17px;
--padding-sm: 14px;
--padding-11xs: 2px;
--padding-xs: 12px;
--padding-7xs: 6px;
--padding-10xs: 3px;
--padding-37xl: 56px;
--padding-118xl: 137px;
--padding-27xl: 46px;

/* Border radiuses */
--br-11xs: 2px;
--br-5xl: 24px;
--br-10xs-5: 2.5px;
--br-base: 16px;
--br-3xs: 10px;
--br-12xs: 1px;
--br-17xl: 36px;
--br-12xs-5: 0.5px;

}
`;
}
