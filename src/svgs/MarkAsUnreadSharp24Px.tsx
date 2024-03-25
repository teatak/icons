import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMarkAsUnreadSharp24Px = (
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
    <path d="M16.23 7h4.12L10.5 2 2 6.21V17h2V7.4L10.5 4z" />
    <path d="M5 8v13h17V8zm15 4-6.5 3.33L7 12v-2l6.5 3.33L20 10z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMarkAsUnreadSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
