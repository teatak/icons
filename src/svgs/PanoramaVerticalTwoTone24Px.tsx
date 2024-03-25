import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPanoramaVerticalTwoTone24Px = (
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
      d="M6.54 4c.77 2.6 1.16 5.28 1.16 8s-.39 5.4-1.16 8h10.91c-.77-2.6-1.16-5.28-1.16-8s.39-5.4 1.16-8z"
      opacity={0.3}
    />
    <path d="M19.94 21.12c-1.1-2.94-1.64-6.03-1.64-9.12s.55-6.18 1.64-9.12a1 1 0 0 0 .06-.31c0-.34-.23-.57-.63-.57H4.63c-.4 0-.63.23-.63.57 0 .1.02.2.06.31C5.16 5.82 5.71 8.91 5.71 12s-.55 6.18-1.64 9.12c-.05.11-.07.22-.07.31 0 .33.23.57.63.57h14.75c.39 0 .63-.24.63-.57-.01-.1-.03-.2-.07-.31M17.45 20H6.54c.77-2.6 1.16-5.28 1.16-8s-.39-5.4-1.16-8h10.91c-.77 2.6-1.16 5.28-1.16 8s.39 5.4 1.16 8" />
  </svg>
);
const ForwardRef = forwardRef(SvgPanoramaVerticalTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
