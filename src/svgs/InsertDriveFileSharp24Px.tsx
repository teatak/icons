import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgInsertDriveFileSharp24Px = (
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
    <path d="M4.01 2 4 22h16V8l-6-6zM13 9V3.5L18.5 9z" />
  </svg>
);
const ForwardRef = forwardRef(SvgInsertDriveFileSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
