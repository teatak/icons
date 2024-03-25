import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWaterDamageOutlined24Px = (
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
    <path d="M12 3 2 12h3v8h14v-8h3zM7 18v-7.81l5-4.5 5 4.5V18zm7-4c0 1.1-.9 2-2 2s-2-.9-2-2 2-4 2-4 2 2.9 2 4" />
  </svg>
);
const ForwardRef = forwardRef(SvgWaterDamageOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
