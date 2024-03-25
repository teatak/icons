import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUploadOutlined24Px = (
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
    <path d="M9 16h6v-6h4l-7-7-7 7h4zm3-10.17L14.17 8H13v6h-2V8H9.83zM5 18h14v2H5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgUploadOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
