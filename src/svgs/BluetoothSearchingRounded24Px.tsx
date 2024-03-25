import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBluetoothSearchingRounded24Px = (
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
    <path d="m15.98 10.28-1.38 1.38c-.2.2-.2.51 0 .71l1.38 1.38c.28.28.75.15.85-.23.11-.5.17-1 .17-1.52a6 6 0 0 0-.18-1.48.5.5 0 0 0-.84-.24m4.12-2.5a.863.863 0 0 0-1.4-.24c-.26.26-.31.64-.17.98.46 1.07.72 2.24.72 3.47 0 1.24-.26 2.42-.73 3.49a.84.84 0 0 0 .16.94.84.84 0 0 0 1.35-.23c.63-1.3.98-2.76.98-4.3a10 10 0 0 0-.91-4.11M11.41 12 15 8.42c.39-.39.39-1.02 0-1.42l-4.29-4.29c-.63-.63-1.71-.19-1.71.7v6.18L5.11 5.7A.996.996 0 1 0 3.7 7.11L8.59 12 3.7 16.89a.996.996 0 1 0 1.41 1.41L9 14.41v6.18c0 .89 1.08 1.34 1.71.71L15 17c.39-.39.39-1.02 0-1.42zM11 5.83l1.88 1.88L11 9.59zm0 12.34v-3.76l1.88 1.88z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBluetoothSearchingRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
