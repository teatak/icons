import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVaccinesSharp24Px = (
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
    <path d="M12 5.5H8V4h1.5V2h-5v2H6v1.5H2v2h1V17h3v4l2 1.5V17h3V7.5h1zM9 9H6.5v1.5H9V12H6.5v1.5H9V15H5V7.5h4zm10.5 1.5V10h1V8h-7l-.01 2h1.01v.5c0 .5-1.5 1.16-1.5 3V22h8v-8.5c0-1.84-1.5-2.5-1.5-3m-3 0V10h1v.5c0 1.6 1.5 2 1.5 3v.5h-4v-.5c0-1 1.5-1.4 1.5-3M15 20v-1.5h4V20z" />
  </svg>
);
const ForwardRef = forwardRef(SvgVaccinesSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
