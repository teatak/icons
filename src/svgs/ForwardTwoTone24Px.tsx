import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgForwardTwoTone24Px = (
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
    <path d="M14 14v1.17L17.17 12 14 8.83V10H6v4z" opacity={0.3} />
    <path d="m20 12-8-8v4H4v8h8v4zM6 14v-4h8V8.83L17.17 12 14 15.17V14z" />
  </svg>
);
const ForwardRef = forwardRef(SvgForwardTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
