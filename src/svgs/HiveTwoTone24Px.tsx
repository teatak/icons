import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHiveTwoTone24Px = (
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
    <path
      d="M5.92 7 4.79 9l1.13 2h2.14l1.13-2-1.13-2zM10.94 16 9.8 18.02 10.92 20h2.16l1.12-1.98L13.06 16zM13.06 14l1.13-2-1.13-2h-2.12l-1.13 2 1.13 2zM5.92 13l-1.13 2 1.13 2h2.14l1.13-2-1.13-2zM15.94 7l-1.13 2 1.13 2h2.14l1.13-2-1.13-2zM10.92 4 9.8 5.98 10.94 8h2.12l1.14-2.02L13.08 4zM15.94 13l-1.13 2 1.13 2h2.14l1.13-2-1.13-2z"
      opacity={0.3}
    />
    <path d="m21.5 9-2.25-4h-3.31l-1.69-3h-4.5L8.06 5H4.75L2.5 9l1.69 3-1.69 3 2.25 4h3.31l1.69 3h4.5l1.69-3h3.31l2.25-4-1.69-3zM8.06 17H5.92L4.8 15l1.12-2h2.14l1.12 2zm0-6H5.92L4.79 9l1.12-2h2.14l1.12 2zm5.02 9h-2.16L9.8 18.02 10.94 16h2.12l1.13 2.02zm-3.27-8 1.12-2h2.12l1.12 2-1.12 2h-2.12zm3.25-4h-2.12L9.8 5.98 10.92 4h2.16l1.12 1.98zm5.02 9h-2.14l-1.12-2 1.12-2h2.14l1.12 2zm0-6h-2.14l-1.12-2 1.12-2h2.14l1.12 2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHiveTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
