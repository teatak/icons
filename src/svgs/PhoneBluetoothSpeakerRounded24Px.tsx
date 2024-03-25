import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPhoneBluetoothSpeakerRounded24Px = (
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
    <path d="m19.23 15.26-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98m-2.44-9.25-2.45 2.45c-.2.2-.2.52 0 .71.2.2.52.2.71 0L17 7.23v3.15a.51.51 0 0 0 .5.51c.13 0 .26-.05.36-.15l2.18-2.18c.2-.2.2-.52 0-.71l-1.83-1.83 1.83-1.83c.09-.09.15-.22.15-.36s-.05-.26-.15-.36l-2.18-2.18a.51.51 0 0 0-.55-.11c-.19.08-.31.26-.31.46v3.15l-1.95-1.95c-.2-.2-.52-.2-.71 0-.2.2-.2.52 0 .71zm1.22-3.15.96.96-.96.96zm0 4.37.96.96-.96.96z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPhoneBluetoothSpeakerRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
