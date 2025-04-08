import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Menu } from "lucide-react"
import Logo from "./Logo"
import MobileMenu from "./MobileMenu"
import { navMenu } from "@/constants"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const Header = () => {
  return (
    <header className="border h-16 grid grid-cols-1 items-center md:h-20 lg:h-24">
      <div className="container flex justify-between">
        <Logo variant="icon"/>

        <NavigationMenu className="max-lg:hidden mx-auto">
          <NavigationMenuList>
            {navMenu.map(({ href, label, submenu }, index) => (
              <NavigationMenuItem key={index}>
                {submenu ? (
                  <>
                    <NavigationMenuTrigger>
                      {label}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <ul className="grid grid-cols-2 gap-2 p-2 w-[640px]">
                        {submenu.map(({ href, icon, label, desc }, index) => (
                          <li key={index}>
                            <NavigationMenuLink asChild>
                              <a href={href} className="flex gap-3 select-none p-2 rounded-sm transition-color hover:bg-foreground/5">
                                <div className="w-10 h-10 bg-foreground/10 rounded-sm shadow-sm border-t border-foreground/5 flex-shrink-0 grid place-items-center">
                                  {icon}
                                </div>

                                <div>
                                  <div>
                                    {label}
                                  </div>
                                  <p>
                                    {desc}
                                  </p>
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ):(
                  <NavigationMenuLink 
                    href={href} 
                    className={navigationMenuTriggerStyle()}
                  >
                    {label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
            >
              <Menu />
            </Button>
          </PopoverTrigger>

          <PopoverContent 
            align="end"
            className="bg-background/50 backdrop-blur-3xl border-foreground/5 border-x-0 border-b-0 rounded-lg overflow-hidden"   
          >
            <MobileMenu navMenu={navMenu} />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}

export default Header