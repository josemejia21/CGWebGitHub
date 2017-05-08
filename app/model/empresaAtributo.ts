export class EmpresaAtributo{
	constructor(
        public EMPRESA_ATRIBUTO_ID : number,
        public EMPRESA_ID : number,
        public CONTACTO_MEDIO_ID : number,
        public VALOR : string,
        public UBIGEO_ID : string,
        public DEFECTO:string,
        public ACTIVO:string,
        public USUARIO_CREACION:string,
        public FECHA_CREACION : Date,
        public USUARIO_MODIFICACION : string,
        public FECHA_MODIFICACION : Date
		)
	{
	}
}