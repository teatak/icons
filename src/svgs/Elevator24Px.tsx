import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgElevator24Px = (
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
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M8.5 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m2.5 8h-1v4H7v-4H6v-2.5c0-1.1.9-2 2-2h1c1.1 0 2 .9 2 2zm4.5 3L13 13h5zM13 11l2.5-4 2.5 4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgElevator24Px);
const Memo = memo(ForwardRef);
export default Memo;
