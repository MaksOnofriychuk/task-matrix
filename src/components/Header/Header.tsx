import * as React from "react";
import "./header.scss";

const Header: React.FC = () => {
  return (
    <header className="matrix__header">
      <div className="header__wrap">
        <div className="header__name">
          <span>Test-Work:</span>
          <span>Matrix-Builder</span>
        </div>
        <div className="header__surname">O.Maxim</div>
      </div>
    </header>
  );
};

export default Header;
