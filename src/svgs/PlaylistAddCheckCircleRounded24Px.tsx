import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPlaylistAddCheckCircleRounded24Px = (
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
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7 8c0-.55.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1m0 3c0-.55.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1m3 3c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1h1c.55 0 1 .45 1 1m8.29.12-3.54 3.54a.996.996 0 0 1-1.41 0l-1.41-1.41a.996.996 0 1 1 1.41-1.41l.71.71 2.83-2.83a.996.996 0 0 1 1.41 0c.39.38.39 1.01 0 1.4" />
  </svg>
);
const ForwardRef = forwardRef(SvgPlaylistAddCheckCircleRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
