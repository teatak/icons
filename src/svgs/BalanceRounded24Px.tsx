import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBalanceRounded24Px = (
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
    <path d="M13 19V7.83c.85-.3 1.53-.98 1.83-1.83H18l-2.78 6.49c-.17.39-.23.84-.11 1.25.39 1.3 1.76 2.26 3.39 2.26s3.01-.96 3.39-2.26c.12-.41.06-.86-.11-1.25L19 6h1c.55 0 1-.45 1-1s-.45-1-1-1h-5.17c-.41-1.17-1.52-2-2.83-2s-2.42.83-2.83 2H4c-.55 0-1 .45-1 1s.45 1 1 1h1l-2.78 6.49c-.17.39-.23.84-.11 1.25C2.49 15.04 3.87 16 5.5 16s3.01-.96 3.39-2.26c.12-.41.06-.86-.11-1.25L6 6h3.17c.3.85.98 1.53 1.83 1.83V19m0 0H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-8m7.37-6h-3.74l1.87-4.36zm-13 0H3.63L5.5 8.64zM12 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" />
  </svg>
);
const ForwardRef = forwardRef(SvgBalanceRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
