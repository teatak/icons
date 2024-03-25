import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLooks4Sharp24Px = (
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
    <path fill="none" d="M.04 0h24v24h-24z" />
    <path d="M21.04 3h-18v18h18zm-6 14h-2v-4h-4V7h2v4h2V7h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLooks4Sharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
