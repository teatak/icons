import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSyncDisabledRounded24Px = (
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
    <path fill="none" d="M0 0h24v24H0zm0 0h24v24H0z" />
    <path d="M10 5.74v-.19c0-.68-.71-1.11-1.32-.82-.19.09-.36.2-.54.3L9.6 6.49c.24-.18.4-.45.4-.75M20 12c0-2.21-.91-4.2-2.36-5.64l1.51-1.51a.5.5 0 0 0-.36-.85H14v4.79c0 .45.54.67.85.35l1.39-1.39C17.32 8.85 18 10.34 18 12c0 .85-.18 1.66-.5 2.39l1.48 1.48A7.9 7.9 0 0 0 20 12M3.57 4.7a.996.996 0 0 0 0 1.41l1.65 1.65A8 8 0 0 0 4 12c0 2.21.91 4.2 2.36 5.64l-1.51 1.51a.5.5 0 0 0 .36.85H9.5c.28 0 .5-.22.5-.5v-4.29c0-.45-.54-.67-.85-.35l-1.39 1.39C6.68 15.15 6 13.66 6 12c0-1 .26-1.93.69-2.76l8.07 8.07c-.01.02-.01.02-.01.04-.43.12-.75.48-.75.91v.18c0 .68.71 1.11 1.32.82.31-.14.61-.31.9-.49l1.87 1.87a.996.996 0 1 0 1.41-1.41L4.98 4.7a.996.996 0 0 0-1.41 0" />
  </svg>
);
const ForwardRef = forwardRef(SvgSyncDisabledRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
