import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextRotationDownSharp24Px = (
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
    <path fill="none" d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" />
    <path d="m6 20 3-3H7V4H5v13H3zm6.2-11.5v5l-2.2.9v2.1l11-4.75v-1.5L10 5.5v2.1zm6.82 2.5L14 12.87V9.13z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTextRotationDownSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
