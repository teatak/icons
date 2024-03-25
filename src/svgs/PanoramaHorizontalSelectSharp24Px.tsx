import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPanoramaHorizontalSelectSharp24Px = (
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
    <path d="M12 5.5c-5.25 0-9.01-1.54-10-1.92V20.4c2.16-.76 5.21-1.9 10-1.9 4.78 0 7.91 1.17 10 1.9V3.6c-2.09.73-5.23 1.9-10 1.9" />
  </svg>
);
const ForwardRef = forwardRef(SvgPanoramaHorizontalSelectSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
