import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSwitchVideoOutlined24Px = (
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
    <path d="M8 13h4v2l3-3-3-3v2H8V9l-3 3 3 3zm10-3.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13zM16 17H4V7h12z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSwitchVideoOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
