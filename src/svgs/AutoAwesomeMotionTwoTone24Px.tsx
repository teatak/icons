import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAutoAwesomeMotionTwoTone24Px = (
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
    <path d="M12 12h8v8h-8z" opacity={0.3} />
    <path d="M14 2H4c-1.1 0-2 .9-2 2v10h2V4h10zM20 10h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2m0 10h-8v-8h8z" />
    <path d="M18 6H8c-1.1 0-2 .9-2 2v10h2V8h10z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAutoAwesomeMotionTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
