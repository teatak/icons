import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const Svg30FpsSelectOutlined24Px = (
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
    <path d="M4 4v2h5v2H5v2h4v2H4v2h5c1.1 0 2-.9 2-2v-1.5c0-.83-.17-1.5-1-1.5.83 0 1-.67 1-1.5V6c0-1.1-.9-2-2-2zm14 0c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2h-3v6h3zM5 22H3v-5h2zm4 0H7v-5h2zm4 0h-2v-5h2zm8 0h-6v-5h6z" />
  </svg>
);
const ForwardRef = forwardRef(Svg30FpsSelectOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
