import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAirlinesOutlined24Px = (
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
    <path d="M17.34 18H5.8l8.25-12h5.54zM13 4 2 20h17l3-16zm1.5 5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5" />
  </svg>
);
const ForwardRef = forwardRef(SvgAirlinesOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
