import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgElectricCarOutlined24Px = (
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
    <path d="M18.92 2.01C18.72 1.42 18.16 1 17.5 1h-11c-.66 0-1.21.42-1.42 1.01L3 8v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8zM6.85 3h10.29l1.08 3.11H5.77zM19 13H5V8h14z" />
    <circle cx={7.5} cy={10.5} r={1.5} />
    <circle cx={16.5} cy={10.5} r={1.5} />
    <path d="M7 20h4v-2l6 3h-4v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgElectricCarOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
