import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPhoneAndroidSharp24Px = (
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
    <path d="M19 1H5v22h14zm-5 20h-4v-1h4zm3-3H7V4h10z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPhoneAndroidSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
