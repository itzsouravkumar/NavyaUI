import { LucideIcon } from 'lucide-react';
interface ThreeDExpandableButtonProps {
    icon?: LucideIcon;
    text?: string;
    onClick?: () => void;
    className?: string;
    buttonColor?: string;
    shadowColor?: string;
}
export declare const ThreeDExpandableButton: ({ icon: Icon, text, onClick, className, buttonColor, shadowColor, }: ThreeDExpandableButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
