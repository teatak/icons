import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const Svg3KPlus24Px = (
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
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9.5 14c0 .55-.45 1-1 1H5v-1.5h3v-1H6v-1h2v-1H5V9h3.5c.55 0 1 .45 1 1zm6.5 1h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3zm4-2.5h-1.5V14h-1v-1.5H16v-1h1.5V10h1v1.5H20z" />
  </svg>
);
const ForwardRef = forwardRef(Svg3KPlus24Px);
const Memo = memo(ForwardRef);
export default Memo;
