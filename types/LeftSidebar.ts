// import { Url } from "url";

type LeftSidebar = {
    dashboard: string;
    navigation: string;
    userManagement: string;
    settings: string;
    image: HTMLImageElement;

}

type OjbMenuList = {
    title: string;
    href: string;
    icon: JSX.Element;
    onClick: () => void;
}[]

type LeftSidebarWithoutImage = Omit<LeftSidebar, 'image'>;

type Url = any;

type MenuList = {
    name: string | React.JSX.Element;
    icon?: HTMLImageElement;
    path?: string | Url;
}[]