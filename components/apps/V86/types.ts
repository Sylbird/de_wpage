import type { config } from 'components/apps/V86/config';
import type { V86ImageConfig } from 'components/apps/V86/image';

export type EventCallback = (data: number[]) => void;

type EventListener = (event: string, callback: EventCallback) => void;

export type V86Starter = {
  add_listener: EventListener;
  destroy: () => void;
  lock_mouse: () => void;
  remove_listener: EventListener;
};

export type V86 = {
  emulator: V86Starter | null;
  lockMouse: () => void;
};

type V86Config = V86ImageConfig &
  typeof config & {
    boot_order: number;
    memory_size: number;
    screen_container: HTMLDivElement | null;
    vga_memory_size: number;
  };

interface V86Constructor {
  new (config: V86Config): V86Starter;
}

declare global {
  interface Window {
    V86Starter: V86Constructor;
  }
  interface Navigator {
    deviceMemory: number;
  }
}
