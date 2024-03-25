import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFoodBankTwoTone24Px = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="tui-icon"
    ref={ref}
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="m12 5.5 6 4.5v9H6v-9zm-.5 4v3H11v-3h-1v3h-.5v-3h-1v3c0 .83.67 1.5 1.5 1.5v4h1v-4c.83 0 1.5-.67 1.5-1.5v-3zm1.5 2v3h1V18h1V9.5c-1.1 0-2 .9-2 2"
      opacity={0.3}
    />
    <path d="m12 5.5 6 4.5v9H6v-9zM12 3 4 9v12h16V9zm-.5 6.5v3H11v-3h-1v3h-.5v-3h-1v3c0 .83.67 1.5 1.5 1.5v4h1v-4c.83 0 1.5-.67 1.5-1.5v-3zm1.5 2v3h1V18h1V9.5c-1.1 0-2 .9-2 2" />
  </svg>
);
const ForwardRef = forwardRef(SvgFoodBankTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
