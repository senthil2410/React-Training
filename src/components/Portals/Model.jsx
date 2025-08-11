import React from "react";
import * as styles from "./Model.module.css";
import { createPortal } from "react-dom";

const Model=({isOpen,onClose,children})=>
{
      if(!isOpen)
      {
        return null;
      }
      console.log(styles);

      return createPortal(
        <div className={styles["model-drop"]} onClick={onClose}>
            <div className={styles["model-box"]} onClick={(e)=>e.stopPropagation()}>
                <button onClick={onClose}>X</button>
                {children}
            </div>
        </div>,
        document.body
      )
}

export default Model;