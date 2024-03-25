import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSettingsRemoteRounded24Px = (
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
    <path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1m-3 5.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M7.82 6.82c.35.35.9.38 1.3.1C9.93 6.34 10.93 6 12 6s2.07.34 2.88.91c.4.28.95.26 1.3-.09.43-.43.39-1.15-.09-1.5A6.96 6.96 0 0 0 12 4c-1.53 0-2.94.49-4.09 1.32-.49.35-.52 1.07-.09 1.5" />
    <path d="M12 0C9.36 0 6.94.93 5.05 2.47c-.46.38-.5 1.07-.08 1.49.36.36.93.39 1.32.07A9.03 9.03 0 0 1 12 2c2.17 0 4.16.77 5.7 2.04.39.32.96.29 1.32-.07.42-.42.38-1.11-.08-1.49C17.06.93 14.64 0 12 0" />
  </svg>
);
const ForwardRef = forwardRef(SvgSettingsRemoteRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
