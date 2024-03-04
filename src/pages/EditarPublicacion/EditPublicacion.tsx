import React from "react";
import { AgregarPublicacion } from "../../components";

export const EditPublicacion:React.FC = () => {
    return (
             <div className="principal_content">
                <AgregarPublicacion agregar={false} />
             </div>
    );
  }
  