import type { config as v86Config } from 'components/apps/V86/config';

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

type V86Image = {
  async?: boolean;
  size?: number;
  url: string;
  use_parts?: boolean;
};

type V86Config = typeof v86Config & {
  boot_order: number;
  cdrom?: V86Image;
  fda?: V86Image;
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
