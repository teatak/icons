import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLaptopSharp24Px = (
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
    <path d="m20 18 2-2V4H2v12l2 2H0v2h24v-2zM4 6h16v10H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLaptopSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
