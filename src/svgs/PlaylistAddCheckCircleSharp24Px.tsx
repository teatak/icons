import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPlaylistAddCheckCircleSharp24Px = (
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
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7 7h7v2H7zm0 3h7v2H7zm3 5H7v-2h3zm4.05 3.36-2.83-2.83 1.41-1.41 1.41 1.41L17.59 12 19 13.41z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPlaylistAddCheckCircleSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
