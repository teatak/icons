import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNearbyOffTwoTone24Px = (
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
    <path d="M21.41 13.42 18.83 16l-1.81-1.81L19.2 12 12 4.8 9.81 6.99 8 5.17l2.58-2.58c.78-.78 2.05-.78 2.83 0l8 8c.79.78.79 2.04 0 2.83m-.22 7.77-1.41 1.41L16 18.83l-2.58 2.58c-.78.78-2.05.78-2.83 0l-8-8c-.78-.78-.78-2.05 0-2.83L5.17 8 1.39 4.22 2.8 2.81zm-7-4.17-1.39-1.39-.8.8L7.58 12l.8-.8-1.4-1.39L4.8 12l7.2 7.2zM16.42 12 12 7.58l-.8.8 4.42 4.42z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNearbyOffTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
