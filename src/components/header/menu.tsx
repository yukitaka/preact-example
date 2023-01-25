import { h } from "preact"
import { styled, setup } from "goober"
import { RiHome6Fill } from "react-icons/ri"

setup(h)

const MenuContainer = styled("ul")`
  position: absolute;
  top: 0;
  display: flex;
  list-style: none;
`

const MenuItem = styled("li")`
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  a {
    color: white;
  }
`

export default function Menu() {
    return (
        <MenuContainer>
            <MenuItem>
                <a href="/">
                    <RiHome6Fill size={22} />
                </a>
            </MenuItem>
            <MenuItem>ABOUT</MenuItem>
            <MenuItem>SKILLS</MenuItem>
            <MenuItem>CONTACT</MenuItem>
        </MenuContainer>
    )
}
