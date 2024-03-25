import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAppRegistration24Px = (
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
    <path d="M10 4h4v4h-4zM4 16h4v4H4zM4 10h4v4H4zM4 4h4v4H4zM14 12.42V10h-4v4h2.42zM20.88 11.29l-1.17-1.17a.41.41 0 0 0-.58 0l-.88.88L20 12.75l.88-.88a.41.41 0 0 0 0-.58M11 18.25V20h1.75l6.67-6.67-1.75-1.75zM16 4h4v4h-4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAppRegistration24Px);
const Memo = memo(ForwardRef);
export default Memo;
