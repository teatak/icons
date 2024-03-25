import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTableRowsTwoTone24Px = (
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
    <path d="M19 5v3H5V5zm0 5v4H5v-4zM5 19v-3h14v3z" opacity={0.3} />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v3H5V5zm0 5v4H5v-4zM5 19v-3h14v3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTableRowsTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
