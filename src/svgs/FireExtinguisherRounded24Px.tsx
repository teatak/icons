import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFireExtinguisherRounded24Px = (
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
    <path d="M7 19h10v1c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2zm0-1h10v-5H7zM17 4.23v3.54c0 .63-.58 1.11-1.21.98l-1.94-.41c0 .02 0 .01-.01.03A5.07 5.07 0 0 1 16.9 12H7.1c.34-1.66 1.52-3.02 3.07-3.64-.33-.26-.6-.58-.8-.95L5.49 6.6A.61.61 0 0 1 5 6c0-.29.2-.54.49-.6l3.88-.81C9.87 3.65 10.86 3 12 3c.7 0 1.34.25 1.85.66l1.94-.41c.63-.13 1.21.35 1.21.98M13 6c-.03-.59-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1" />
  </svg>
);
const ForwardRef = forwardRef(SvgFireExtinguisherRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
