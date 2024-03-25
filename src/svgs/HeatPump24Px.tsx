import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHeatPump24Px = (
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
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6.25 4.08c.82.12 1.57.44 2.2.91l-2.2 2.2zm-1.5 0v3.11l-2.2-2.2c.63-.47 1.38-.79 2.2-.91M7.99 9.05l2.2 2.2H7.08c.12-.82.44-1.57.91-2.2m-.91 3.7h3.11l-2.2 2.2c-.47-.63-.79-1.38-.91-2.2m4.17 4.17c-.82-.12-1.57-.44-2.2-.91l2.2-2.2zM12 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m.75 3.92v-3.11l2.2 2.2c-.63.47-1.38.79-2.2.91m3.26-1.97-2.2-2.2h3.11c-.12.82-.44 1.57-.91 2.2m-2.2-3.7 2.2-2.2c.47.64.79 1.39.91 2.2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHeatPump24Px);
const Memo = memo(ForwardRef);
export default Memo;
