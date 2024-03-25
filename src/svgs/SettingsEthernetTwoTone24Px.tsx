import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSettingsEthernetTwoTone24Px = (
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
    <path d="M7.77 6.76 6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12zM7 13h2v-2H7zm10-2h-2v2h2zm-6 2h2v-2h-2zm6.77-7.52-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSettingsEthernetTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
