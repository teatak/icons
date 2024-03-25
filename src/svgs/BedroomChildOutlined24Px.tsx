import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBedroomChildOutlined24Px = (
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
    <path d="M20 4v16H4V4zm0-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-3.5 8.67V9c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2v1.67c-.88.35-1.5 1.2-1.5 2.2V17h1.5v-1.5h9V17H18v-4.13c0-1-.62-1.85-1.5-2.2M15 8.5v2H9v-2zm-7.5 4.37c0-.48.39-.87.87-.87h7.27c.48 0 .87.39.87.87V14h-9v-1.13z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBedroomChildOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
