import React from 'react';
import { Svg } from 'react-native-svg';
import { View, TextProps } from 'react-native';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
type IPrimitiveIcon = {
    height?: number | string;
    width?: number | string;
    fill?: string;
    color?: string;
    size?: number | string;
    stroke?: string;
    as?: React.ElementType;
    className?: string;
    classNameColor?: string;
};
/** Components */
declare const Accordion: React.ForwardRefExoticComponent<Omit<Omit<import("react-native").ViewProps & {
    context?: any;
} & React.RefAttributes<typeof View> & import("@gluestack-ui/accordion/lib/types").IAccordionProps, "ref"> & React.RefAttributes<import("react-native").ViewProps & {
    context?: any;
} & React.RefAttributes<typeof View>>, "ref"> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    variant: {
        filled: string;
        unfilled: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
} | ({
    variant: {
        filled: string;
        unfilled: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
} & {
    variant: {
        filled: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        unfilled: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
    size: {
        sm: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        md: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
        lg: import("tailwind-merge").ClassNameValue | {
            base?: import("tailwind-merge").ClassNameValue;
        };
    };
}), undefined, "w-full", import("tailwind-variants/dist/config").TVConfig<{
    variant: {
        filled: string;
        unfilled: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    variant: {
        filled: string;
        unfilled: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}>, {
    variant: {
        filled: string;
        unfilled: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<{
    variant: {
        filled: string;
        unfilled: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "w-full", import("tailwind-variants/dist/config").TVConfig<{
    variant: {
        filled: string;
        unfilled: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    variant: {
        filled: string;
        unfilled: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}>, unknown, unknown, undefined>>> & React.RefAttributes<import("react-native").ViewProps & {
    context?: any;
} & React.RefAttributes<typeof View>>>;
declare const AccordionItem: React.ForwardRefExoticComponent<Omit<import("react-native").ViewProps & import("@gluestack-ui/accordion/lib/types").IAccordionItemProps & React.RefAttributes<import("react-native").ViewProps>, "ref"> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<({} | {} | {}) & {
    variant: {
        filled: string;
        unfilled: string;
    };
}, undefined, undefined, import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, undefined, import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>> & React.RefAttributes<import("react-native").ViewProps>>;
declare const AccordionContent: React.ForwardRefExoticComponent<Omit<import("react-native").ViewProps & React.RefAttributes<import("react-native").ViewProps>, "ref"> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "px-5 mt-2 pb-5", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "px-5 mt-2 pb-5", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>> & React.RefAttributes<import("react-native").ViewProps>>;
declare const AccordionContentText: React.ForwardRefExoticComponent<Omit<TextProps & React.RefAttributes<TextProps>, "ref"> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<({} | {} | {}) & {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "text-typography-700 font-normal", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "text-typography-700 font-normal", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>> & React.RefAttributes<TextProps>>;
declare const AccordionIcon: React.ForwardRefExoticComponent<VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<({} | {} | {}) & {
    size: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, undefined, "text-typography-900 fill-none", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "text-typography-900 fill-none", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>> & Omit<Omit<IPrimitiveIcon & React.RefAttributes<Svg>, "ref"> & React.RefAttributes<IPrimitiveIcon & React.RefAttributes<Svg>>, "ref"> & {
    as?: React.ElementType;
} & React.RefAttributes<IPrimitiveIcon & React.RefAttributes<Svg>>>;
declare const AccordionHeader: React.ForwardRefExoticComponent<Omit<TextProps & React.RefAttributes<TextProps>, "ref"> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "mx-0 my-0", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "mx-0 my-0", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>> & React.RefAttributes<TextProps>>;
declare const AccordionTrigger: React.ForwardRefExoticComponent<Omit<Omit<Omit<import("react-native").PressableProps & React.RefAttributes<View>, "children"> & import("@gluestack-ui/accordion/lib/types").IAccordionTriggerProps, "ref"> & React.RefAttributes<import("react-native").PressableProps & React.RefAttributes<View>>, "ref"> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<{} | {} | {}, undefined, "w-full py-5 px-5 flex-row justify-between items-center web:outline-none focus:outline-none data-[disabled=true]:opacity-40 data-[disabled=true]:cursor-not-allowed data-[focus-visible=true]:bg-background-50", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "w-full py-5 px-5 flex-row justify-between items-center web:outline-none focus:outline-none data-[disabled=true]:opacity-40 data-[disabled=true]:cursor-not-allowed data-[focus-visible=true]:bg-background-50", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>> & React.RefAttributes<import("react-native").PressableProps & React.RefAttributes<View>>>;
declare const AccordionTitleText: React.ForwardRefExoticComponent<Omit<TextProps & React.RefAttributes<TextProps>, "ref"> & VariantProps<import("@gluestack-ui/nativewind-utils/types").TVReturnType<({} | {} | {}) & {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "text-typography-900 font-bold flex-1 text-left", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, {} | {}, undefined, import("@gluestack-ui/nativewind-utils/types").TVReturnType<unknown, undefined, "text-typography-900 font-bold flex-1 text-left", import("tailwind-variants/dist/config").TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>> & React.RefAttributes<TextProps>>;
export { Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionTitleText, AccordionContentText, AccordionIcon, AccordionContent, };
