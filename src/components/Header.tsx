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

const Header = () => {
  return (
    <header className="border h-16 grid grid-cols-1 items-center md:h-20 lg:h-24">
      <div className="container flex justify-between">
        <Logo variant="icon"/>

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

          <PopoverContent>
            <MobileMenu navMenu={navMenu} />
          </PopoverContent>
        </Popover>

      </div>
    </header>
  )
}

export default Header