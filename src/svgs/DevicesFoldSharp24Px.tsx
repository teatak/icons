import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDevicesFoldSharp24Px = (
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
    <path d="M17 3V-.03l-7 3V21h12V3zm3 16h-5.33L17 18V5h3zM2 3h2v2H2zM2 19h2v2H2zM2 15h2v2H2zM2 11h2v2H2zM2 7h2v2H2zM6 3h2v2H6zM6 19h2v2H6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDevicesFoldSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
