"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LangSwitcher = () => {
  const pathname = usePathname();
  const [selectedLang, setSelectedLang] = useState("");
  const handleSelection = (e) => {
   const newPath=pathname.replace(selectedLang,e.target.value)
    setSelectedLang(e.target.value);
    window.location.replace(newPath)
  };
  useEffect(() => {
    setSelectedLang(pathname.includes("bn") ? "bn" : "en");
  }, [pathname]); 
  return (
    <select
      value={selectedLang}
      onChange={handleSelection}
      className="bg-white border-none rounded py-1 pr-8 pl-2"
    >
      <option value="en">English</option>
      <option value="bn">Bangla</option>
    </select>
  );
};

export default LangSwitcher;
