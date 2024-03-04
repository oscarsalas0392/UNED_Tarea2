import { AnyNaptrRecord } from 'dns';
import { useEffect, useMemo, useState } from 'react';
import { iFormComentario, iFormPublicacion } from '../interfaces';

export const useForm = ( initialForm: iFormPublicacion | iFormComentario , formValidations:any= {}) => {
  
    const [ formState, setFormState ] = useState<iFormPublicacion| iFormComentario>( initialForm );
    const [ formValidation, setFormValidation ] = useState<any>({});

    
    const isFormValid:boolean = useMemo( () => {

        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null ) return false;
        }

        return true;
    }, [ formValidation ])

    useEffect(()=>{
        console.log("initialForm",initialForm)
    },[]);


    const onInputChange = async( event:any): Promise<void> => {
        const { name, value } = event.target;

        if(name === "archivo")
        {
            const archivoBase64:any =  await convertBase64(event.target.files[0]);

            if(archivoBase64 as string)
            {
                const extension:string = value.split('.')[1];
                setFormState({
                    ...formState,
                    ["archivoBase64"]:archivoBase64,
                    ["extension"]:extension
                });
            }
   
            return;
        }
        
        setFormState({
            ...formState,
            [ name ]: value
        });

      
    }

    const onResetForm = (initialForm: iFormPublicacion ): void => {
        setFormState( initialForm );
    }

    const createValidators = (): void => {
        
        const formCheckedValues:any = {};
        
        for (const formField of Object.keys( formValidations )) {

    
            const [ fn, errorMessage ] = formValidations[formField];

           // formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation( formCheckedValues );
    }

    const convertBase64 = (file:any) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
      
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
      
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid,
 
    }
}