import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgExtensionTwoTone24Px = (
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
      d="M19 13h-2V7h-6V5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2H4l.01 2.12C5.76 9.8 7 11.51 7 13.5s-1.25 3.7-3 4.38V20h2.12c.68-1.75 2.39-3 4.38-3s3.7 1.25 4.38 3H17v-6h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5"
      opacity={0.3}
    />
    <path d="M19 11V7c0-1.1-.9-2-2-2h-4a2.5 2.5 0 0 0-5 0H4c-1.1 0-1.99.9-1.99 2v3.8h.29c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-.3c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7v.3H17c1.1 0 2-.9 2-2v-4a2.5 2.5 0 0 0 0-5m0 3h-2v6h-2.12a4.71 4.71 0 0 0-4.38-3 4.71 4.71 0 0 0-4.38 3H4v-2.12c1.75-.68 3-2.39 3-4.38S5.76 9.8 4.01 9.12L4 7h6V5c0-.28.22-.5.5-.5s.5.22.5.5v2h6v6h2c.28 0 .5.22.5.5s-.22.5-.5.5" />
  </svg>
);
const ForwardRef = forwardRef(SvgExtensionTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
