import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLocalLaundryServiceRounded24Px = (
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
    <path d="M9.64 16.36c1.3 1.3 3.42 1.3 4.72 0s1.3-3.42 0-4.72zM18 2.01 6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99M11 5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M8 5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m4 14c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5" />
  </svg>
);
const ForwardRef = forwardRef(SvgLocalLaundryServiceRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
