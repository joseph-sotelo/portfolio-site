'use client';

import { Menu } from 'semantic-ui-react';

export default function MainNav() {
    return(
        <Menu>
            <Menu.Item href="/">
                Work
            </Menu.Item>
            <Menu.Item href="/about">
                About Me
            </Menu.Item>
            <Menu.Item href="/resume">
                Resume  
            </Menu.Item>
        </Menu>
    )
}