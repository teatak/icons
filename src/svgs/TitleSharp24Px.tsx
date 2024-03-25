import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTitleSharp24Px = (
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
    <path d="M5 4v3h5.5v12h3V7H19V4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTitleSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
