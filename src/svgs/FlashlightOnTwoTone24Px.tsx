import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFlashlightOnTwoTone24Px = (
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
      d="m8 7.39 2 3V20h4v-9.6l2-3.01V7H8zm4 5.11c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M8 4h8v1H8z"
      opacity={0.3}
    />
    <path d="M6 2v6l2 3v11h8V11l2-3V2zm10 5.39-2 3.01V20h-4v-9.61l-2-3V7h8zM16 5H8V4h8z" />
    <circle cx={12} cy={14} r={1.5} />
  </svg>
);
const ForwardRef = forwardRef(SvgFlashlightOnTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
