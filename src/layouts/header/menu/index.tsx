'use client';

import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Icon } from '@iconify/react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';

import LocaleToggler from '@/components/locale-toggler';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { LINKS } from '@/config/constants';
import { cn } from '@/utils/cn';

export const Menu = () => {
  const { user, logout } = useAuth0();
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  return (
    <NavigationMenu className="flex min-w-full justify-between">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to={LINKS.HOME}>
            <img
              src="/assets/brand/recy-logo.png"
              width={64}
              height={64}
              alt="Recy Logo"
              className="mr-4"
            />
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link className={`${navigationMenuTriggerStyle()}`} to={LINKS.APP}>
            Dashboard
            <Icon
              icon="material-symbols-light:team-dashboard-outline"
              width="16"
              height="16"
              className="ml-1"
            />
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link className={navigationMenuTriggerStyle()} to={LINKS.SUBMIT_FORM}>
            Submit Form <Icon icon="ph:recycle" width="16" height="16" className="ml-1" />
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link className={navigationMenuTriggerStyle()} to={LINKS.ADMIN_PANEL}>
            Admin
            <Icon icon="ic:sharp-admin-panel-settings" width="16" height="16" className="ml-1" />
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link className={navigationMenuTriggerStyle()} to={LINKS.KYC}>
            KYC
            <Icon icon="ic:sharp-admin-panel-settings" width="16" height="16" className="ml-1" />
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn('hover:cursor-pointer', navigationMenuTriggerStyle())}
            onClick={() => open()}
          >
            {isConnected && address ? (
              <>{`${address.slice(0, 4)}...${address.slice(-4)}`}</>
            ) : (
              <>
                Connect Wallet
                <Icon icon="ph:wallet-thin" width="16" height="16" className="ml-1" />
              </>
            )}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Suspense>
            <LocaleToggler />
          </Suspense>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="px-4">
              <Avatar>
                <AvatarImage src={user?.picture ?? ''} alt="User profile" />
                <AvatarFallback className="text-xs">{user?.name}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Button asChild variant="link">
                  <Link to={LINKS.PROFILE}>Your Profile</Link>
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  className="color-secondary color w-full text-center"
                  variant="link"
                  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                >
                  Sign out
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
