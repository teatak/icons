import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDeviceUnknownSharp24Px = (
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
    <path d="M19 1H5v22h14zm-2 18H7V5h10zM12 6.72c-1.96 0-3.5 1.52-3.5 3.47h1.75c0-.93.82-1.75 1.75-1.75s1.75.82 1.75 1.75c0 1.75-2.63 1.57-2.63 4.45h1.76c0-1.96 2.62-2.19 2.62-4.45 0-1.96-1.54-3.47-3.5-3.47M11 16h2v2h-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDeviceUnknownSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
