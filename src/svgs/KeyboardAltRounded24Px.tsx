import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgKeyboardAltRounded24Px = (
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
    <path d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M7 12v2H5v-2zm-2-2V8h2v2zm6 2v2H9v-2zm-2-2V8h2v2zm7 6.5c0 .28-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7c.28 0 .5.22.5.5M15 12v2h-2v-2zm-2-2V8h2v2zm4 4v-2h2v2zm2-4h-2V8h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgKeyboardAltRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
