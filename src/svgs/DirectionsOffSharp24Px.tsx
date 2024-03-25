import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDirectionsOffSharp24Px = (
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
    <path d="m13 7.5 3.5 3.5-1.33 1.34 3.45 3.45L22.41 12 12.01 1.58l-3.8 3.8L13 10.17zM1.39 4.22l3.99 3.99L1.59 12l10.42 10.4 3.79-3.79 3.99 3.99 1.41-1.41L2.81 2.81zm8.6 8.6V15h-2v-4.18z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDirectionsOffSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
