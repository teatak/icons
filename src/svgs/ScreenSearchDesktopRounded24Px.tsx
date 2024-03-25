import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgScreenSearchDesktopRounded24Px = (
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
    <path d="M22 19H2c-.55 0-1 .45-1 1s.45 1 1 1h20c.55 0 1-.45 1-1s-.45-1-1-1M4 18h16c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2m4.59-9.95a3.497 3.497 0 0 1 5.38-.52c1.18 1.18 1.34 3 .47 4.36L16 13.44c.29.29.29.77 0 1.06s-.77.29-1.06 0l-1.55-1.55c-1.57 1-3.76.64-4.87-1.11-.73-1.14-.69-2.67.07-3.79" />
    <circle cx={11.5} cy={10} r={2} />
  </svg>
);
const ForwardRef = forwardRef(SvgScreenSearchDesktopRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
