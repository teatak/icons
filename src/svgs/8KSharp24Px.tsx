import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const Svg8KSharp24Px = (
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
    <path d="M8 12.5h1.5V14H8zM8 10h1.5v1.5H8zm13-7H3v18h18zm-10 7v4c0 .55-.45 1-1 1H7.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H10c.55 0 1 .45 1 1m7 5h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z" />
  </svg>
);
const ForwardRef = forwardRef(Svg8KSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
