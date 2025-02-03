'use client';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu"

import Image from "next/image";
  
import Link from "next/link";

export default function MainNav() {
    return(
        <NavigationMenu orientation='vertical'>
            <NavigationMenuList className='gap-6 mb-[.6rem]'>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <svg width="34" height="50" viewBox="0 0 212 446" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M211.759 23.5905C203.949 16.0345 188.329 0.770039 188.329 0.160156H24.317L0.886719 23.5905V421.906L24.317 445.336H188.329L211.759 421.906V23.5905Z" fill="#4A40CE"/>
<rect x="121.836" y="228.934" width="72.2526" height="51.8066" transform="rotate(51.098 121.836 228.934)" fill="#A39CF6"/>
<rect x="102.885" y="420.555" width="95.5707" height="46.5677" transform="rotate(-135 102.885 420.555)" fill="#A39CF6"/>
<rect x="111.035" y="207.078" width="50.0025" height="61.0821" transform="rotate(-135 111.035 207.078)" fill="#A39CF6"/>
<path d="M24.295 36.1063L36.1474 24.2539H176.861L188.714 36.1063V211.696L164.863 235.127L188.293 258.557V268.075L164.863 286.782L94.5722 258.557L188.293 352.278V410.613L176.782 422.569H36.059L24.2904 410.613L24.2812 363.679L36.0259 351.989L129.667 387.42L24.2812 282.034V258.557L47.7116 235.127L24.2812 211.696V129.48L35.7861 117.975L118.002 200.191V106.181L106.352 94.5311H71.1419L24.295 47.6842V36.1063Z" fill="#EEEDFF"/>

                            </svg>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className='opacity-60'>
                    <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className='opacity-60'>
                    <Link href="/work" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Work
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}