import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const Svg4GMobiledataRounded24Px = (
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
    <path d="M8 7c-.55 0-1 .45-1 1v4H5V8c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h3v2c0 .55.45 1 1 1s1-.45 1-1v-2h1c.55 0 1-.45 1-1s-.45-1-1-1H9V8c0-.55-.45-1-1-1m9 5c0 .55.45 1 1 1h1v2h-5V9h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1" />
  </svg>
);
const ForwardRef = forwardRef(Svg4GMobiledataRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
