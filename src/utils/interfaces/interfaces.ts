
export interface iPublicaciones
{
    publicaciones: Array<iPublicacion>
    codigo:number,
    codigoSeleccionado:number
}

export interface iPublicacion
{
    codigo:number,
    autor:string,
    titulo:string,
    descripcion:string,
    archivo:string,
    extension:string,
    fecha:string,
    comentarios: Array<iComentario>,
}


export interface iComentario
{
    codigo:string,
    autor:string,
    comentario:string,
    fecha:string
}

export interface iFormPublicacion
{
    autor:string,
    titulo:string,
    descripcion:string,
    archivo:string,
    archivoBase64:string,
    extension:string
}
export interface iFormComentario
{
    autor:string,
    descripcion:string,
}