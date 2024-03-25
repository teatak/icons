import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNavigationOutlined24Px = (
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
    <path d="m12 7.27 4.28 10.43-3.47-1.53-.81-.36-.81.36-3.47 1.53zM12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNavigationOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
