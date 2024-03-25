import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCurtainsOutlined24Px = (
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
    <path d="M20 19V3H4v16H2v2h20v-2zm-2-8.14c-2.05-.58-3.64-2.93-3.94-5.86H18zM15.81 12c-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7 2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7M9.94 5c-.3 2.93-1.89 5.27-3.94 5.86V5zM6 13.14c2.05.58 3.64 2.93 3.94 5.86H6zM14.06 19c.3-2.93 1.89-5.27 3.94-5.86V19z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCurtainsOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
