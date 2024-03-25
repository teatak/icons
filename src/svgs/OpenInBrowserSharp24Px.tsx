import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgOpenInBrowserSharp24Px = (
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
    <path d="M3 4v16h6v-2H5V8h14v10h-4v2h6V4zm9 6-4 4h3v6h2v-6h3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgOpenInBrowserSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
