import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAccessibilityNewRounded24Px = (
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
    <path d="M20.75 6.99c-.14-.55-.69-.87-1.24-.75-2.38.53-5.03.76-7.51.76s-5.13-.23-7.51-.76c-.55-.12-1.1.2-1.24.75-.14.56.2 1.13.75 1.26 1.61.36 3.35.61 5 .75v12c0 .55.45 1 1 1s1-.45 1-1v-5h2v5c0 .55.45 1 1 1s1-.45 1-1V9c1.65-.14 3.39-.39 4.99-.75.56-.13.9-.7.76-1.26M12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2" />
  </svg>
);
const ForwardRef = forwardRef(SvgAccessibilityNewRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
