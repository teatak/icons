import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const Svg30FpsSelectRounded24Px = (
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
    <path d="M4 5c0 .55.45 1 1 1h4v2H6c-.55 0-1 .45-1 1s.45 1 1 1h3v2H5c-.55 0-1 .45-1 1s.45 1 1 1h4c1.1 0 2-.9 2-2v-1.5c0-.83-.17-1.5-1-1.5.83 0 1-.67 1-1.5V6c0-1.1-.9-2-2-2H5c-.55 0-1 .45-1 1m14-1c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2h-3v6h3zM4 22c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1m4 0c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1m4 0c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1m8 0h-4c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1" />
  </svg>
);
const ForwardRef = forwardRef(Svg30FpsSelectRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
