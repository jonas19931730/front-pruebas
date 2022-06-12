

interface json{
    ID_INTEGRACION:string
    PLANTA:string,
    PRIORIDAD:string,
    TIPO_INTEGRACION:string,
    TIPO_ACCION:string,
    SOCIEDAD:string,
    DETALLE:detalle[]
}
// esta interface obtiene las claves y los valores
interface detalle{
    idposicion:string,
    jsonrestante:string // el json serializado en string
}