import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPhotoSizeSelectSmallSharp24Px = (
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
    <path d="M23 15h-2v2h2zm0 4h-2v2h2zm0-8h-2v2h2zm-8-8h-2v2h2zm8 4h-2v2h2zM1 21h10v-6H1zM3 7H1v2h2zm12 12h-2v2h2zm4-16h-2v2h2zm4 0h-2v2h2zm-4 16h-2v2h2zM3 11H1v2h2zm8-8H9v2h2zM7 3H5v2h2zM3 3H1v2h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPhotoSizeSelectSmallSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
