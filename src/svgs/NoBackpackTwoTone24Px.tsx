import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNoBackpackTwoTone24Px = (
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
      d="M18 15.17V8c0-1.1-.9-2-2-2H8.83l6 6h1.67v1.67zM17.17 20l-6-6H7.5v-2h1.67L6 8.83V20z"
      opacity={0.3}
    />
    <path d="M6.98 4.15c.01 0 .01-.01.02-.01V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86v9.17l-2-2V8c0-1.1-.9-2-2-2H8.83zM14.83 12l1.67 1.67V12zm4.95 10.61-.85-.85c-.28.15-.59.24-.93.24H6c-1.1 0-2-.9-2-2V8c0-.36.06-.69.15-1.02L1.39 4.22 2.8 2.81l18.38 18.38zM17.17 20l-6-6H7.5v-2h1.67L6 8.83V20z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNoBackpackTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
