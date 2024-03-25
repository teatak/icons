import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStream24Px = (
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
    <circle cx={20} cy={12} r={2} />
    <circle cx={4} cy={12} r={2} />
    <circle cx={12} cy={20} r={2} />
    <path d="M10.05 8.59 6.03 4.55h-.01l-.31-.32-1.42 1.41 4.02 4.05.01-.01.31.32zm3.893.027 4.405-4.392L19.76 5.64l-4.405 4.393zM10.01 15.36l-1.42-1.41-4.03 4.01-.32.33 1.41 1.41 4.03-4.02zm9.75 2.94-3.99-4.01-.36-.35L14 15.35l3.99 4.01.35.35z" />
    <circle cx={12} cy={4} r={2} />
  </svg>
);
const ForwardRef = forwardRef(SvgStream24Px);
const Memo = memo(ForwardRef);
export default Memo;
