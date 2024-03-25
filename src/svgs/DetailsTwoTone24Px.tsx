import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDetailsTwoTone24Px = (
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
    <path d="M13 8.92 18.6 19H13zm-2 0V19H5.4z" opacity={0.3} />
    <path d="M12 3 2 21h20zm1 5.92L18.6 19H13zm-2 0V19H5.4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDetailsTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
