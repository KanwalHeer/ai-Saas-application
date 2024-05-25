'use client'
import { Button } from "./ui/button";
import { Menu,  } from "lucide-react";
import { useState,useEffect } from "react";

import {Sheet ,SheetContent,SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";
function MobileSidebar() {

    const [isMounted ,setMounted] =useState(false)

    useEffect(()=>{
    setMounted(true)
    },[])
    if (!isMounted) {
        return null
    }
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button variant={"ghost"} size={"icon"} className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'} className="p-0">
          <Sidebar/>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileSidebar;
