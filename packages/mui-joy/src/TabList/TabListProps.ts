import * as React from 'react';
import { OverridableStringUnion, OverrideProps } from '@mui/types';
import { ColorPaletteProp, SxProps, VariantProp, ApplyColorInversion } from '../styles/types';
import { SlotProps, CreateSlotsAndSlotProps } from '../utils/types';

export type TabListSlot = 'root';

export interface TabListSlots {
  /**
   * The component that renders the root.
   * @default 'div'
   */
  root: React.ElementType;
}

export type TabListSlotsAndSlotProps = CreateSlotsAndSlotProps<
  TabListSlots,
  {
    root: SlotProps<'div', {}, TabListOwnerState>;
  }
>;

export interface TabListPropsColorOverrides {}
export interface TabListPropsVariantOverrides {}
export interface TabListPropsSizeOverrides {}

export interface TabListTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'neutral'
     */
    color?: OverridableStringUnion<ColorPaletteProp, TabListPropsColorOverrides>;
    /**
     * Used to render icon or text elements inside the TabList if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: React.ReactNode;
    /**
     * The size of the component.
     */
    size?: OverridableStringUnion<'sm' | 'md' | 'lg', TabListPropsSizeOverrides>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps;
    /**
     * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
     * @default 'soft'
     */
    variant?: OverridableStringUnion<VariantProp, TabListPropsVariantOverrides>;
  } & TabListSlotsAndSlotProps;
  defaultComponent: D;
}

export type TabListProps<
  D extends React.ElementType = TabListTypeMap['defaultComponent'],
  P = { component?: React.ElementType },
> = OverrideProps<TabListTypeMap<P, D>, D>;

export interface TabListOwnerState extends ApplyColorInversion<TabListProps> {
  /**
   * If `true`, the Tabs' direction is "rtl".
   */
  isRtl: boolean;
  /**
   * The orientation of the Tabs.
   */
  orientation: 'horizontal' | 'vertical';
}
