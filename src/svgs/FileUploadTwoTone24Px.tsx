import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFileUploadTwoTone24Px = (
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
    <path d="M9.83 8H11v6h2V8h1.17L12 5.83z" opacity={0.3} />
    <path d="M5 18h14v2H5zM5 10h4v6h6v-6h4l-7-7zm8-2v6h-2V8H9.83L12 5.83 14.17 8z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFileUploadTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
