import getconnection from "../db/database.js"
const getCategorias = async (req, res)=>{ 

    try {
         const connection = await getconnection ();
   const result = await connection.query("select categoriaID, categoriaNombre, Descripcion, Imagen FROM categorias")
   res.json(result);
    } catch (error) {
        console.error("error");
    }
   
}

export const methodHTTP ={
    getCategorias 
}