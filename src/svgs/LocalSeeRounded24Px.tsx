import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLocalSeeRounded24Px = (
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
    <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5c1.23 0 2.25-.9 2.46-2.07-1-1.01-1.83-1.98-2.48-2.93A2.51 2.51 0 0 0 9.5 14" />
    <path d="M18.65 17.08a1 1 0 0 1-1.3 0c-1.26-1.08-.7-.61-1.3-1.14-.83 1.74-2.73 2.87-4.85 2.5a4.51 4.51 0 0 1-3.63-3.63 4.49 4.49 0 0 1 3.31-5.14C10.3 8.45 10 7.28 10 6.15c0-.75.1-1.47.28-2.15h-.4c-.56 0-1.1.24-1.48.65L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6.03c-1.41 1.49-2.65 2.51-3.35 3.11" />
    <path d="M17.34 14.42c.37.33.95.33 1.33 0C22.22 11.25 24 8.5 24 6.15 24 2.42 21.15 0 18 0s-6 2.42-6 6.15c0 2.35 1.78 5.1 5.34 8.27m-.07-9.17L18 3l.73 2.25H21l-1.85 1.47.7 2.28L18 7.59 16.15 9l.7-2.28L15 5.25z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLocalSeeRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
