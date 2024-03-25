import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEditRoadOutlined24Px = (
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
    <path d="M18 4h-2v7.9l2-2zM4 4h2v16H4zM10 4h2v4h-2zM10 10h2v4h-2zM10 16h2v4h-2zM22.56 12.59l-1.15-1.15a1.49 1.49 0 0 0-2.12 0L14 16.73V20h3.27l5.29-5.29c.59-.59.59-1.54 0-2.12m-5.98 5.86h-1.03v-1.03L19 13.97 20.03 15z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEditRoadOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
