import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBallotTwoTone24Px = (
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
      d="M7 14h3v3H7zm0-7h3v3H7zM5 19h14V5H5zm8-11.5h5v2h-5zm0 7h5v2h-5zM6 6h5v5H6zm0 7h5v5H6z"
      opacity={0.3}
    />
    <path d="M13 7.5h5v2h-5zm0 7h5v2h-5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM11 6H6v5h5zm-1 4H7V7h3zm1 3H6v5h5zm-1 4H7v-3h3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBallotTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
