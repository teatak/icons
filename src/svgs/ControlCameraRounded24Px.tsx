import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgControlCameraRounded24Px = (
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
    <path d="M4.65 9.35 2.7 11.3a.996.996 0 0 0 0 1.41l1.95 1.95c.49.49 1.28.49 1.77 0 .48-.49.48-1.27 0-1.76l-.88-.9.88-.89c.48-.49.48-1.27 0-1.76s-1.28-.49-1.77 0m12.93 0c-.48.49-.48 1.27 0 1.76l.88.89-.88.89c-.48.49-.48 1.27 0 1.76.49.49 1.28.49 1.77 0l1.95-1.95a.996.996 0 0 0 0-1.41l-1.95-1.95c-.49-.48-1.29-.48-1.77.01M12 18.46l-.89-.88c-.49-.48-1.27-.48-1.76 0a1.25 1.25 0 0 0 0 1.77l1.95 1.95c.39.39 1.02.39 1.41 0l1.95-1.95c.49-.49.49-1.28 0-1.77-.49-.48-1.27-.48-1.76 0zM9.35 6.42c.49.48 1.27.48 1.76 0l.89-.88.89.88c.49.48 1.27.48 1.76 0 .49-.49.49-1.28 0-1.77L12.7 2.7a.996.996 0 0 0-1.41 0L9.35 4.65a1.25 1.25 0 0 0 0 1.77" />
    <circle cx={12} cy={12} r={3} />
  </svg>
);
const ForwardRef = forwardRef(SvgControlCameraRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
