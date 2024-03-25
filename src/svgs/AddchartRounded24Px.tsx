import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAddchartRounded24Px = (
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
    <path d="M11 10c0-.55.45-1 1-1s1 .45 1 1v7h-2zm9 3c-.55 0-1 .45-1 1v5H5V5h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5c0-.55-.45-1-1-1m1-8h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1m-5 8c-.55 0-1 .45-1 1v3h2v-3c0-.55-.45-1-1-1m-9-1v5h2v-5c0-.55-.45-1-1-1s-1 .45-1 1" />
  </svg>
);
const ForwardRef = forwardRef(SvgAddchartRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
