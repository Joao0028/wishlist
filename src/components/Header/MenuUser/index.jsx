import styles from "./MenuUser.module.scss";
import * as React from 'react';
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import { FaUserCircle } from "react-icons/fa";
import { GoTriangleUp } from "react-icons/go";

export default function MenuUser() {
  const [abreMenuHover, setAbreMenuHover] = React.useState(false);

  const handleMouseEnter = () => {
    setAbreMenuHover(true);
  };

  const handleMouseLeave = () => {
    setAbreMenuHover(false);
  };

  return (
    <Dropdown open={abreMenuHover} >
      <MenuButton
        slots={{ root: IconButton }}
        sx={{
          border: "none",
          height: 75,
          width: 55,
          '&:focus, &:active, &:hover': {
            backgroundColor: 'transparent',
          },
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span onClick={() => setAbreMenuHover(!abreMenuHover)} className={`flex flex-col items-center gap-1 ${abreMenuHover? "mt-[45px]" : ""}`}><FaUserCircle className={`icone text-cor-branco`} /> <GoTriangleUp className={`text-[40px] text-white shadow-lg ${abreMenuHover? "": "hidden"}`}/></span>
      </MenuButton>
      <Menu placement="bottom-end" sx={{ border: "none", marginTop: 10 }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <nav id={styles.MenuUser}>
                <a className="subtitulo" href="#SemRedirecionamento"><h2>Entrar</h2></a>
                <a className="subtitulo" href="#SemRedirecionamento"><h2>Minha conta</h2></a>
                <a className="subtitulo" href="#SemRedirecionamento"><h2>Endereços</h2></a>
                <a className="subtitulo" href="#SemRedirecionamento"><h2>Minhas notificações</h2></a> 
            </nav>
      </Menu>
    </Dropdown>
  );
}
