import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVideogameAssetOff24Px = (
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
    <path d="M21.19 21.19 2.81 2.81 1.39 4.22 3.3 6.13C2.54 6.41 2 7.15 2 8v8c0 1.1.9 2 2 2h11.17l4.61 4.61zM9 13v2H7v-2H5v-2h2V9.83L10.17 13zm11.7 4.87c.76-.28 1.3-1.02 1.3-1.87V8c0-1.1-.9-2-2-2H8.83zM17.5 9c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
  </svg>
);
const ForwardRef = forwardRef(SvgVideogameAssetOff24Px);
const Memo = memo(ForwardRef);
export default Memo;
