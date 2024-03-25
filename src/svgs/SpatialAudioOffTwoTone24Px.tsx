import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpatialAudioOffTwoTone24Px = (
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
    <path
      d="M15.48 17.34C14.29 16.73 12.37 16 10 16s-4.29.73-5.48 1.34c-.32.16-.52.5-.52.88V19h12v-.78c0-.38-.2-.72-.52-.88"
      opacity={0.3}
    />
    <circle cx={10} cy={9} r={2} opacity={0.3} />
    <path d="M10 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66M16 19H4v-.78c0-.38.2-.72.52-.88C5.71 16.73 7.63 16 10 16s4.29.73 5.48 1.34c.32.16.52.5.52.88zM20.36 1l-1.41 1.41a7.007 7.007 0 0 1 0 9.9l1.41 1.41a8.98 8.98 0 0 0 0-12.72" />
    <path d="M17.54 10.9a5.003 5.003 0 0 0 0-7.07l-1.41 1.41a3 3 0 0 1 0 4.24z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSpatialAudioOffTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
