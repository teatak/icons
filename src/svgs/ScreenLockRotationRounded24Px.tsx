import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgScreenLockRotationRounded24Px = (
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
    <path d="m20.41 11.36-.35-.35a.996.996 0 1 0-1.41 1.41l.35.35-4.24 4.24-7.78-7.78 4.24-4.24.35.35a.996.996 0 1 0 1.41-1.41l-.35-.36c-.79-.79-2.03-.79-2.82 0L5.57 7.82c-.78.78-.78 2.05 0 2.83l7.78 7.78c.79.79 2.03.79 2.82 0l4.24-4.24c.79-.78.79-2.05 0-2.83M10.85 17.85a.5.5 0 0 0-.85.36v1.53c-3.17-.82-5.59-3.54-5.95-6.86a.995.995 0 0 0-.99-.88c-.6 0-1.07.53-1 1.12C2.62 18.11 6.87 22 12 22c.59 0 1.17-.06 1.73-.16.4-.07.55-.56.27-.85z" />
    <path d="M16 9h4c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1v-.89c0-1-.68-1.92-1.66-2.08A2 2 0 0 0 16 3v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m1-6c0-.55.45-1 1-1s1 .45 1 1v1h-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgScreenLockRotationRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
