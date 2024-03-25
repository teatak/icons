import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBlurLinearTwoTone24Px = (
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
    <path d="M17 16.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5" />
    <circle cx={9} cy={12} r={1} />
    <circle cx={13} cy={8} r={1} />
    <circle cx={13} cy={16} r={1} />
    <path d="M17 12.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5" />
    <circle cx={13} cy={12} r={1} />
    <path d="M3 3h18v2H3z" />
    <circle cx={5} cy={8} r={1.5} />
    <circle cx={5} cy={12} r={1.5} />
    <circle cx={5} cy={16} r={1.5} />
    <path d="M17 8.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5" />
    <circle cx={9} cy={16} r={1} />
    <circle cx={9} cy={8} r={1} />
    <path d="M3 19h18v2H3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBlurLinearTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
