import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDriveFileRenameOutlineOutlined24Px = (
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
    <path d="m15 16-4 4h10v-4zM12.06 7.19 3 16.25V20h3.75l9.06-9.06zM5.92 18H5v-.92l7.06-7.06.92.92zM18.71 8.04a.996.996 0 0 0 0-1.41l-2.34-2.34a1.001 1.001 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDriveFileRenameOutlineOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
