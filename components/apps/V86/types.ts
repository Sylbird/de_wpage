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

type V86Config = typeof v86Config & {
  boot_order: number;
  cdrom?: {
    url?: string;
  };
  fda?: {
    url?: string;
  };
  memory_size: number;
  screen_container: HTMLDivElement | null;
  vga_memory_size: number;
};

interface V86Constructor {
  new (config: V86Config): V86Starter;
}

export type WindowWithV86Starter = Window &
  typeof globalThis & { V86Starter: V86Constructor };

export type NavigatorWithMemory = Navigator & {
  deviceMemory: number;
};
