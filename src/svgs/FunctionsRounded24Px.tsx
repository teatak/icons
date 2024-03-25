import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFunctionsRounded24Px = (
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
    <path d="M16.5 4H7.56C6.7 4 6 4.7 6 5.56c0 .28.12.55.32.74L12.5 12l-6.18 5.7c-.2.19-.32.46-.32.74C6 19.3 6.7 20 7.56 20h8.94c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H11l3.59-3.59c.78-.78.78-2.05 0-2.83L11 7h5.5c.83 0 1.5-.67 1.5-1.5S17.33 4 16.5 4" />
  </svg>
);
const ForwardRef = forwardRef(SvgFunctionsRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
