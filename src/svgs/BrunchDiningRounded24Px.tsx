import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBrunchDiningRounded24Px = (
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
    <path d="M18 8h2V4h-2zm-3 14H3c-.55 0-1-.45-1-1v-1h14v1c0 .55-.45 1-1 1m3-6.11-.4-.42a5.8 5.8 0 0 1-1.6-4V3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v8.51c0 1.46-.54 2.87-1.53 3.94l-.47.52V20h1c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1zM7 16v-1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h4c.55 0 1 .45 1 1v1H2v-1c0-.55.45-1 1-1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBrunchDiningRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
