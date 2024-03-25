import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgIntegrationInstructionsRounded24Px = (
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
    <circle cx={12} cy={3.5} r={0.75} fill="none" />
    <circle cx={12} cy={3.5} r={0.75} fill="none" />
    <circle cx={12} cy={3.5} r={0.75} fill="none" />
    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.01 2.01 0 0 0-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8.7 11.88c-.39.39-1.03.39-1.42 0l-2.17-2.17a.996.996 0 0 1 0-1.41l2.17-2.17c.39-.39 1.03-.39 1.42 0s.39 1.02 0 1.41L8.83 12l1.46 1.46c.39.39.4 1.03.01 1.42M12 4.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75m1.7 10.63a.996.996 0 0 1 0-1.41L15.17 12l-1.47-1.47a.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0l2.17 2.17c.39.39.39 1.02 0 1.41l-2.17 2.17c-.39.4-1.03.4-1.42.01" />
  </svg>
);
const ForwardRef = forwardRef(SvgIntegrationInstructionsRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
