import React from "react";
import { AgregarPublicacion } from "../../components";

export const AddPublicacion:React.FC = () => {
    return (
              <div className="principal_content">
                <AgregarPublicacion agregar={true} />
              </div>
         
    );
  }
  