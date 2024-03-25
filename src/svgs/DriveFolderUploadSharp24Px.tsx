import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDriveFolderUploadSharp24Px = (
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
    <path d="M22 6H12l-2-2H2v16h20zm-9 7v4h-2v-4H8l4.01-4L16 13z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDriveFolderUploadSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
