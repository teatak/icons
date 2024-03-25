import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTranscribeTwoTone24Px = (
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
    <circle cx={9} cy={9} r={2} opacity={0.3} />
    <path
      d="M14.48 17.34C13.29 16.73 11.37 16 9 16s-4.29.73-5.48 1.34c-.32.16-.52.5-.52.88V19h12v-.78c0-.38-.2-.72-.52-.88"
      opacity={0.3}
    />
    <path d="M17.93 2c-3.9 3.89-3.91 9.95 0 14l1.63-1.63c-2.77-3.02-2.77-7.56 0-10.74zM9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M15.39 15.56C13.71 14.7 11.53 14 9 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66M15 19H3v-.78c0-.38.2-.72.52-.88C4.71 16.73 6.63 16 9 16s4.29.73 5.48 1.34c.32.16.52.5.52.88z" />
    <path d="m22.92 7.06-1.68-1.69c-2.02 2.02-2.02 5.07 0 7.27l1.68-1.69a3.32 3.32 0 0 1 0-3.89" />
  </svg>
);
const ForwardRef = forwardRef(SvgTranscribeTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
