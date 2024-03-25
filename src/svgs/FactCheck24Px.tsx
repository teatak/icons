import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFactCheck24Px = (
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
      fillRule="evenodd"
      d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M10 17H5v-2h5zm0-4H5v-2h5zm0-4H5V7h5zm4.82 6L12 12.16l1.41-1.41 1.41 1.42L17.99 9l1.42 1.42z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFactCheck24Px);
const Memo = memo(ForwardRef);
export default Memo;
