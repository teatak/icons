import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgForkRightTwoTone24Px = (
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
    <path d="M14.59 15.59 16 17l4-4-4-4-1.41 1.41L16.17 12c-1.51-.33-3.73.08-5.17 1.36V6.83l1.59 1.59L14 7l-4-4-4 4 1.41 1.41L9 6.83V21h2v-4c.73-2.58 3.07-3.47 5.17-3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgForkRightTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
