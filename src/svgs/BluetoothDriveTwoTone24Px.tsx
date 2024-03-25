import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBluetoothDriveTwoTone24Px = (
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
      d="M4 17h14v-5H4zm11.5-4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5m-9 0c.83 0 1.5.67 1.5 1.5S7.33 16 6.5 16 5 15.33 5 14.5 5.67 13 6.5 13"
      opacity={0.3}
    />
    <path d="M18 17H4v-5h13c-1.1 0-2-.9-2-2H4.81l1.04-3H15V5H5.5c-.66 0-1.21.42-1.42 1.01L2 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8h-2z" />
    <circle cx={6.5} cy={14.5} r={1.5} />
    <circle cx={15.5} cy={14.5} r={1.5} />
    <path d="M22 3.85 19.15 1h-.5v3.79l-2.3-2.29-.7.7L18.44 6l-2.79 2.79.7.71 2.3-2.3V11h.5L22 8.14 19.85 6zm-2.35-.94.94.94-.94.94zm.94 5.23-.94.94V7.2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBluetoothDriveTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
