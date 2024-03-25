import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSettingsVoiceRounded24Px = (
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
    <path d="M8 24c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1M9 10V4c0-1.66 1.34-3 3-3s3 1.34 3 3v6c0 1.66-1.34 3-3 3s-3-1.34-3-3m8.91 0c.61 0 1.09.54 1 1.14-.49 3-2.89 5.34-5.91 5.78V19c0 .55-.45 1-1 1s-1-.45-1-1v-2.08c-3.02-.44-5.42-2.78-5.91-5.78-.1-.6.39-1.14 1-1.14.49 0 .9.36.98.85C7.48 13.21 9.53 15 12 15s4.52-1.79 4.93-4.15c.08-.49.49-.85.98-.85" />
  </svg>
);
const ForwardRef = forwardRef(SvgSettingsVoiceRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
