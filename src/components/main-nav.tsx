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
            <NavigationMenuList className='gap-[1rem]'>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <svg width="34" height="50" viewBox="0 0 34 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="31.6863" height="46.3684" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 32.8434 1.84082)" fill="#1FCFB0"/>
<rect width="31.6863" height="16.2105" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 32.8434 8.73535)" fill="#3E79D3"/>
<rect width="31.6863" height="7.8421" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 32.8435 1.05176)" fill="#4A40CE"/>
<path d="M10.2553 9.26162L9.75853 10.709L7.77161 9.26162L10.2553 9.26162Z" fill="#FFFEF5"/>
<path d="M23.5004 1.49996L25.0004 3.5L27.6148 2.04874L23.5004 1.49996Z" fill="#FFFEF5"/>
<path d="M11.1346 24.4044L9.54997 22.4708L7.00047 24.4048L11.1346 24.4044Z" fill="#FFFEF5"/>
<rect x="-0.5" y="0.5" width="31" height="47" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 32.0004 0.999023)" stroke="#FFFEF5"/>
<rect x="-0.5" y="0.5" width="31" height="7" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 32.0004 1)" stroke="#FFFEF5"/>
<path d="M32.5004 9.5L1.50037 9.5L1.50036 24.5006L32.5004 24.5006L32.5004 9.5Z" stroke="#FFFEF5"/>
<path d="M32.9219 48.5251C19.3271 49.2094 18.2029 31.6577 16.5559 24.9472C14.8311 17.9199 14.0199 8.23586 1.13103 8.9472" stroke="#FFFEF5" stroke-width="2"/>
<path d="M1.20957 24.9459C6.67362 24.9459 11.6357 23.3459 16.8436 13.0512C23.3534 0.182815 30.2553 1.9985 32.3207 1.84059" stroke="#FFFEF5"/>
<rect width="1.4096" height="1.4096" transform="matrix(-0.704785 0.709421 0.704785 0.709421 31.9778 7.26172)" fill="#FFFEF5"/>
<path d="M31.9934 9L30.9999 10L32 11L32.9869 10L31.9934 9Z" fill="#FFFEF5"/>
<rect width="1.4096" height="1.4096" transform="matrix(-0.704785 0.709421 0.704785 0.709421 2.04614 46.999)" fill="#FFFEF5"/>
<rect width="1.4096" height="1.4096" transform="matrix(-0.704785 0.709421 0.704785 0.709421 1.9939 1)" fill="#FFFEF5"/>
<rect width="1.4096" height="1.4096" transform="matrix(-0.704785 0.709421 0.704785 0.709421 31.9546 1.05176)" fill="#FFFEF5"/>
<path d="M32.0001 46.4987L31 47.5L31.9923 49.0003L32.9858 48.0003L32.0001 46.4987Z" fill="#FFFEF5"/>
<rect x="2" y="25" width="4" height="1" fill="#1FCFB0"/>
<rect width="2.1144" height="2.1144" transform="matrix(-0.704785 0.709421 0.704785 0.709421 2 23)" fill="#FFFEF5"/>
<path d="M1.99574 7.00455L2 11L3 10L2.99977 8.00023L1.99574 7.00455Z" fill="#FFFEF5"/>
<path d="M32 23.0001L30.5 24.5L32 26.0001L32.9805 24.5001L32 23.0001Z" fill="#FFFEF5"/>
<path d="M13 9.5L11.5 11L9 9.5H13Z" fill="#FFFEF5"/>
<path d="M22 48L23.875 46L27 48H22Z" fill="#FFFEF5"/>
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
                    <Link href="/blog" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Blog
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}