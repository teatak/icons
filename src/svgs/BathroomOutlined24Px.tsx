import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBathroomOutlined24Px = (
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
    <path d="M8 14c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m4 1c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m3 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m-3-7.5c-1.76 0-3.22 1.31-3.46 3h6.93a3.52 3.52 0 0 0-3.47-3M12 6c2.76 0 5 2.24 5 5v1H7v-1c0-2.76 2.24-5 5-5M9 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m3 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m3 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m5-14H4v16h16zm0-2c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBathroomOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
