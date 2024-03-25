import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const Svg2KPlus24Px = (
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
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9.5 8.5c0 .55-.45 1-1 1h-2v1h3V15H5v-2.5c0-.55.45-1 1-1h2v-1H5V9h3.5c.55 0 1 .45 1 1zm4.75 3.5-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3L16 15zM20 12.5h-1.5V14h-1v-1.5H16v-1h1.5V10h1v1.5H20z" />
  </svg>
);
const ForwardRef = forwardRef(Svg2KPlus24Px);
const Memo = memo(ForwardRef);
export default Memo;
