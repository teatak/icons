import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTrackChangesRounded24Px = (
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
    <path d="M18.32 5.68c-.36.36-.39.92-.07 1.32 1.45 1.82 2.21 4.31 1.53 6.92-.79 3.05-3.18 5.33-6.21 5.94C8.47 20.87 4 16.93 4 12c0-4.08 3.05-7.44 7-7.93v2.02a6 6 0 0 0-4.93 6.83c.39 2.61 2.56 4.71 5.18 5.03a6 6 0 0 0 5.72-9.31c-.34-.5-1.07-.53-1.5-.11l-.01.01c-.34.34-.37.87-.11 1.27.6.92.84 2.1.49 3.32a3.99 3.99 0 0 1-2.94 2.77A4 4 0 0 1 8 12c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2.71c0-.39-.32-.71-.71-.71-5.36-.2-9.98 4.06-10.27 9.4-.36 6.55 5.41 11.82 12.01 10.4 3.88-.83 6.88-3.8 7.75-7.67.71-3.16-.2-6.16-1.97-8.37a1 1 0 0 0-1.49-.08" />
  </svg>
);
const ForwardRef = forwardRef(SvgTrackChangesRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
