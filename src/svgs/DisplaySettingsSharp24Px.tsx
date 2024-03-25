import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDisplaySettingsSharp24Px = (
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
    <path d="M22 3H2v16h6v2h8v-2h6zm-2 14H4V5h16z" />
    <path d="M6 8.25h8v1.5H6zM16.5 9.75H18v-1.5h-1.5V7H15v4h1.5zM10 12.25h8v1.5h-8zM7.5 15H9v-4H7.5v1.25H6v1.5h1.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDisplaySettingsSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
