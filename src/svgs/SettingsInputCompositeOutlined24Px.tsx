import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSettingsInputCompositeOutlined24Px = (
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
    <path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v10c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16V6H5zM4 17c-.55 0-1-.45-1-1v-2h2v2c0 .55-.45 1-1 1m-1-5V8h2v4zM13 2c0-.55-.45-1-1-1s-1 .45-1 1v4H9v10c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82V6h-2zm-1 15c-.55 0-1-.45-1-1v-2h2v2c0 .55-.45 1-1 1m-1-5V8h2v4zm10-6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v10c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82V6zm-1 11c-.55 0-1-.45-1-1v-2h2v2c0 .55-.45 1-1 1m-1-5V8h2v4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSettingsInputCompositeOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
