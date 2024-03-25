import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDeblurOutlined24Px = (
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
    <circle cx={6} cy={14} r={1} />
    <circle cx={6} cy={18} r={1} />
    <circle cx={6} cy={10} r={1} />
    <circle cx={3} cy={10} r={0.5} />
    <circle cx={6} cy={6} r={1} />
    <circle cx={3} cy={14} r={0.5} />
    <circle cx={10} cy={21} r={0.5} />
    <circle cx={10} cy={3} r={0.5} />
    <circle cx={10} cy={6} r={1} />
    <circle cx={10} cy={14} r={1.5} />
    <circle cx={10} cy={10} r={1.5} />
    <circle cx={10} cy={18} r={1} />
    <path d="M12 3v2c3.86 0 7 3.14 7 7s-3.14 7-7 7v2c4.96 0 9-4.04 9-9s-4.04-9-9-9" />
  </svg>
);
const ForwardRef = forwardRef(SvgDeblurOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
