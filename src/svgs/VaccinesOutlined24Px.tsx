import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVaccinesOutlined24Px = (
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
    <path d="M11 5.5H8V4h.5c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1H6v1.5H3c-.55 0-1 .45-1 1s.45 1 1 1V15c0 1.1.9 2 2 2h1v4l2 1.5V17h1c1.1 0 2-.9 2-2V7.5c.55 0 1-.45 1-1s-.45-1-1-1M9 9H7.25c-.41 0-.75.34-.75.75s.34.75.75.75H9V12H7.25c-.41 0-.75.34-.75.75s.34.75.75.75H9V15H5V7.5h4zm10.5 1.5V10c.55 0 1-.45 1-1s-.45-1-1-1h-5c-.55 0-1 .45-1 1s.45 1 1 1v.5c0 .5-1.5 1.16-1.5 3V20c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-6.5c0-1.84-1.5-2.5-1.5-3m-3 0V10h1v.5c0 1.6 1.5 2 1.5 3v.5h-4v-.5c0-1 1.5-1.4 1.5-3m2.5 5V17h-4v-1.5zM15 20v-1.5h4V20z" />
  </svg>
);
const ForwardRef = forwardRef(SvgVaccinesOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
