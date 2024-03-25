import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAddIcCallTwoTone24Px = (
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
      d="M19 17.41c-.88-.07-1.75-.22-2.6-.45l-1.2 1.2c1.21.41 2.48.67 3.8.76zM6.54 4.95h-1.5c.09 1.32.34 2.58.75 3.79l1.2-1.21c-.24-.83-.39-1.7-.45-2.58"
      opacity={0.3}
    />
    <path d="M20 20.95c.55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1 11.4 11.4 0 0 1-.57-3.57c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17m-3.6-3.99c.85.24 1.72.39 2.6.45v1.5c-1.32-.09-2.6-.35-3.8-.76zM5.03 4.95h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79m10.97 6h2v-3h3v-2h-3v-3h-2v3h-3v2h3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAddIcCallTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
