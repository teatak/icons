import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUnarchiveTwoTone24Px = (
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
    <path d="M5 19h14V8H5zm7-9 4 4h-2.55v3h-2.91v-3H8z" opacity={0.3} />
    <path d="m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27M6.24 5h11.52l.83 1H5.42zM19 19H5V8h14zm-8.45-2h2.9v-3H16l-4-4-4 4h2.55z" />
  </svg>
);
const ForwardRef = forwardRef(SvgUnarchiveTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
