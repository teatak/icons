import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSettingsInputComponentSharp24Px = (
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
    <path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5zm4 16.82h2V23h2v-4.18h2V14H9zm-8 0h2V23h2v-4.18h2V14H1zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2zm4 16.82h2V23h2v-4.18h2V14h-6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSettingsInputComponentSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
