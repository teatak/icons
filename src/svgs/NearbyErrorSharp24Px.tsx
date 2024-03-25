import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNearbyErrorSharp24Px = (
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
    <path d="M12 7.58 16.42 12 12 16.42 7.58 12zm0 11.62L4.8 12 12 4.8l6 6V7.17l-5.99-5.99L1.18 12.01l10.83 10.83L18 16.83V13.2zm8 .8h2v2h-2zm2-10h-2v8h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNearbyErrorSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
