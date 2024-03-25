import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgKeyboardCapslockSharp24Px = (
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
    <path d="M12 8.41 16.59 13 18 11.59l-6-6-6 6L7.41 13zM6 18h12v-2H6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgKeyboardCapslockSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
