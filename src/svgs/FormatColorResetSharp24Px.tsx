import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFormatColorResetSharp24Px = (
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
    <path d="M18 14c0-3.98-6-10.8-6-10.8s-1.18 1.35-2.5 3.19l8.44 8.44c.03-.27.06-.55.06-.83M5.41 5.14 4 6.55l3.32 3.32C6.55 11.33 6 12.79 6 14c0 3.31 2.69 6 6 6 1.52 0 2.9-.57 3.95-1.5l2.63 2.63L20 19.72z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFormatColorResetSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
